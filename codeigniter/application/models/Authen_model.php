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
	public function update_user_profile($data){
		$dataDB['email'] = $data['email'];
		$dataDB['phone'] = $this->encryption->encrypt($data['phone']);
		$dataDB['name'] = $data['name'];
		$id = $data['userId'];

		$this->db->where('id', $id);
		$query = $this->db->update('users', $dataDB);
		return $query;
	}
}
