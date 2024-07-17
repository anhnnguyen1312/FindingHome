<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recommend_model extends CI_Model {
	public function __construct(){
		parent::__construct();
	}

	public function add_user_action($data){
		$userId = $data['userId'];
		$postId = $data['postId'];

		$dataDB = ([
			'userId' => $data['userId'],
			'postId' => $data['postId'],
			'countAction' => 1,
		]);

		$check = $this->check_user_action($userId, $postId);
		if($check){
			$this->db->set('countAction', 'countAction +1', false);
			$this->db->where('userId', $userId);
			$this->db->where('postId', $postId);
			$this->db->update("userAction");
		}else{
			$query = $this->db->insert('userAction', $dataDB);
			return $query;
		}


	}

	public function check_user_action($userId, $postId){
		$query = $this->db->get_where('userAction', ['userId' => $userId, 'postId' => $postId]);
		return $query->num_rows() > 0;
	}
}
