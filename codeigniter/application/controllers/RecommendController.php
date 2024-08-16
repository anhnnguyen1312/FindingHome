<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
class RecommendController extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Recommend_model');
	}

	public function user_action(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$result = $this->Recommend_model->add_user_action($post_data);
			if($result){
				echo json_encode([
					'success' => ' thêm user action thành công'
				]);
			}
		}
	}
}
