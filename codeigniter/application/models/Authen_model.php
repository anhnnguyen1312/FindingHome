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
	public function get_regester_user($id){
		$query = $this->db->get_where('users', ['id' => $id]);
		return $query->row();
	}
}
