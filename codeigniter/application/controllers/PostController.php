<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
class PostController extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('Post_model');
	}
	public function create_post(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$post_data['urlImages'] = json_encode($post_data['urlImages']);

			$result = $this->Post_model->insert_new_post($post_data);
	
			if($result == true){
				echo json_encode([
					'message' => 'Đăng bài thành công'
				]);
			}else{
				echo json_encode([
					'message' => 'Đăng bài thất bại'
				]);
			}
		}

	}
}
