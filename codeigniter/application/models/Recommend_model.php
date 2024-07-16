<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recommend_model extends CI_Model {
	public function __construct(){
		parent::__construct();
	}

	public function add_user_action($data){

		$dataDB = ([
			'userId' => $data['userId'],
			'postId' => $data['postId'],
			'eventType' => $data['eventType'],
			'createAt' => time(),
		]);

		$query = $this->db->insert('userAction', $dataDB);
		return $query;
	}
}
