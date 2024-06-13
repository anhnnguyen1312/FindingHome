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
	public function list_all_post(){
		$jwt = new JWT();
		$list_post_data = $this->Post_model->get_all_post();
		//print_r($list_post_data);
		if($list_post_data){
			foreach ($list_post_data as $data){
				$list_post=([
					'id' => $data->id,
					'username' => $data->name,
					'phone' => $this->encryption->decrypt($data->phone),
					'address' => $this->encryption->decrypt($data->address),
					// 'typeRoom' => $data->typeRoom,
					'price' => $data->price,
					'title' => $data->title,
					'area' => $data->area,
					'zalo' => $this->encryption->decrypt($data->zalo),
					// 'furniture' => $data->furniture,
					'description' => $data->description,
					// 'otherFee' => $data->otherFee,
					// 'rule' => $data->rule,
					'nearby' => $data->nearby,
					'urlImages' => json_decode($this->encryption->decrypt($data->urlImages)),
					// 'dateCreateAt' => $data->dateCreateAt,
					// 'dateExpired' => $data->dateExpired,
					'check' => $data->check,
					'status' => $data->status

				]);
				
				$token[] = $jwt->encode($list_post, '$/0ne_punch_m4n/$', 'HS256');
			}
			echo json_encode(['token' => $token ]);
		}else{
			echo json_encode([
				'message' => 'Không lấy được danh sách bài đăng'
			]);
		}
	}
}
