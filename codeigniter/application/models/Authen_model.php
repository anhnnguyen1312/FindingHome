<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authen_model extends CI_Model {
	public function __construct(){
		parent::__construct();
	}

	public function insert_resigter_users($data){
		$dataDB['name'] = $data['name'];
		$dataDB['email'] = $data['email'];
		$dataDB['password'] = $this->encryption->encrypt($data['password']);
		$dataDB['phone'] = $this->encryption->encrypt($data['phone']);
		$dataDB['role'] = 0;

		$check = $this->db->get_where('users', ['email' => $dataDB['email']])->row();
		if(empty($check)){
			$this->db->insert('users', $dataDB);
			$id = $this->db->insert_id();
			return $id;
		}else{
			return false;
		}
	}

	public function get_detail_user($id){
		$query = $this->db->get_where('users', ['id' => $id]);
		return $query->row();
	}
	
	public function check_login($data){
		$email = $data['email'];
		$password = $data['password'];
		$check = $this->db->get_where('users', ['email' => $email])->row();
		if(!empty($check)){
			$hash_password = $check->password;
			$decryption_password = $this->encryption->decrypt($hash_password);
			if($password == $decryption_password){
				$query = $this->db->get_where('users', ['email' => $email])->row();
				return $query;
			}else{
				return false;
			}
		}else{
			return false;
		}

	}

	public function get_user_by_email($data){
		$email = $data['email'];
		$query = $this->db->get_where('users', ['email' => $email ]);
		return $query->row();
	}
	public function add_token_user($userId, $data){
		if(!empty($userId)){
			$check_UserId = $this->db->get_where('userToken',['userId'=> $userId])->row();
			if(!empty($check_UserId)){
				$this->db->where('userId', $userId);
				$query = $this->db->update('userToken', $data);
				return $query;
			}else{
				$query = $this->db->insert('userToken', $data);
				return $query;
			}
		}else{
			return false;
		}
	}

	public function reset_user_password($data){
		$token = $data['token'];
		$result  = $this->check_user_token($token);
		if($result){
			$dataDB['password'] = $this->encryption->encrypt($data['newPassword']);
			$userId = $result->userId;

			$this->db->where('id', $userId);
			$query = $this->db->update('users', $dataDB);
			return $query;
		}else{
			return false;
		}
		
	}

	public function check_user_token($token){
		$this->db->where('token', $token);
		$this->db->where('expires_at >', date('Y-m-d H:i:s'));
		$query = $this->db->get('userToken');
		return $query->row();
	}

	public function update_user_profile($data){
		$dataDB['email'] = $data['email'];
		
		$dataDB['phone'] = $this->encryption->encrypt($data['phone']);

		if(!empty($data['avatar'])){
			$dataDB['avatar'] = $this->encryption->encrypt($data['avatar']);
		}else{
			$dataDB['avatar'] = null;
		}

		if(!empty(($data['newPs']))){
			$dataDB['password'] =  $this->encryption->encrypt($data['newPs']);
		}

		$dataDB['name'] = $data['name'];
		$id = $data['userId'];

		$this->db->where('id', $id);
		$query = $this->db->update('users', $dataDB);
		return $query;
	}
	
	public function get_list_user(){
		$query = $this->db->get("users");
		return $query->result();
	}

	public function delete_user($userId){
		$this->db->trans_start();

			$Posts = $this->db->get_where('posts', ['userId' => $userId])->result();
			foreach($Posts as $Post){
				$postId = $Post->id;
				$this->db->where('postId', $postId);
				$this->db->delete('statusPost');
			}

			$this->db->where('id', $userId);
			$this->db->delete('users');

			$tables = ['userToken', 'posts','userNotifications', 'adminNotifications', 'userAction'];
			$this->db->where('userId', $userId);
			$this->db->delete($tables);

		$this->db->trans_complete();

		if($this->db->trans_status() === false){
			return false;
		}else{
			return true;
		}
	}

}
