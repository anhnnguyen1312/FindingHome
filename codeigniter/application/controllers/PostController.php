<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
class PostController extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('Post_model');
		$this->load->model('Notification_model');
		$this->load->model('Authen_model');
	}

	public function create_post(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$post_data['urlImages'] = json_encode($post_data['urlImages']);
			
			$userId = $post_data['userId'];
			$userRole = $post_data['check'];
			$user_data = $this->Authen_model->get_detail_user($userId);
			if($user_data){
				$post_data['userName'] = $user_data->name;
			}

			$postId = $this->Post_model->handle_post($post_data);
			
			if($userRole == "0"){
				$notifcation_result = $this->Notification_model->user_update_notification_post($post_data, $postId);
			}elseif($userRole == "1"){
				$notifcation_result = true;
			}
	
			if($postId && $notifcation_result){
				echo json_encode([
					'success' => 'Đăng bài thành công'
				]);
			}else{
				echo json_encode([
					'fail' => 'Hệ thống đang gặp lỗi trong quá trình bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
		}

	}
	
	
	public function update_post(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		$userRole = $post_data['check'];
		$id = $post_data["id"];
		if($post_data){
			$post_data['urlImages'] = json_encode($post_data['urlImages']);

			$userId = $post_data['userId'];
			$user_data = $this->Authen_model->get_detail_user($userId);
			if($user_data){
				$post_data['userName'] = $user_data->name;
			}

			if($userRole == "0"){
				$notifcation_result = $this->Notification_model->user_update_notification_post($post_data, $id);
			}elseif($userRole == "1"){
				$notifcation_result = true;
			}

			$result = $this->Post_model->handle_post($post_data, $id);
	
			if($result && $notifcation_result){
				echo json_encode([
					'success' => 'Bài đăng đã được cập nhật thành công'
				]);
			}else{
				echo json_encode([
					'fail' => 'Hệ thống đang gặp lỗi trong quá trình cập nhật bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
		}

	}

	public function list_homepage_post(){
		$jwt = new JWT();
		$list_post_data = $this->Post_model->get_homepage_post();
		if($list_post_data){
			foreach ($list_post_data as $data){
				$list_post=([
					'id' => $data->id,
					'userId' => $data->userId,
					'username' => $data->name,
					'phone' => $this->encryption->decrypt($data->phone),
					//'address' => $this->encryption->decrypt($data->address),
					'address' => $data->address,
					'typeRoom' => $data->typeRoom,
					'price' => $data->price,
					'title' => $data->title,
					'area' => $data->area,
					'zalo' => $this->encryption->decrypt($data->zalo),
					'furniture' => $data->furniture,
					'description' => $data->description,
					'otherFee' => $data->otherFee,
					'rule' => $data->rule,
					'nearby' => $data->nearby,
					'lat' => $data->lat,
					'lng' => $data->lng,
					'urlImages' => json_decode($this->encryption->decrypt($data->urlImages)),
					'dateCreateAt' => $data->dateCreateAt,
					'dateExpired' => $data->dateExpired,
					'check' => $data->check,
					'status' => $data->status

				]);
				
				$token[] = $jwt->encode($list_post, '$/0ne_punch_m4n/$', 'HS256');
			}
			echo json_encode(['token' => $token ]);
		}else{
			echo json_encode([
				'fail' => 'Hệ thống đang gặp lỗi trong quá trình lấy bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}

	public function list_all_post(){
		$jwt = new JWT();
		$list_post_data = $this->Post_model->get_all_post();
		if($list_post_data){
			foreach ($list_post_data as $data){
				$count_like = $this->Post_model->get_count_like_post_by_postId($data->id);
				$likes = $count_like ? $count_like->likes : 0;
				$list_post=([
					'id' => $data->id,
					'likes' => $likes,
					'userId' => $data->userId,
					'userRole' => $data->role,
					'username' => $data->name,
					'phone' => $this->encryption->decrypt($data->phone),
					//'address' => $this->encryption->decrypt($data->address),
					'address' => $data->address,
					'typeRoom' => $data->typeRoom,
					'price' => $data->price,
					'title' => $data->title,
					'area' => $data->area,
					'zalo' => $this->encryption->decrypt($data->zalo),
					'furniture' => $data->furniture,
					'description' => $data->description,
					'otherFee' => $data->otherFee,
					'rule' => $data->rule,
					'nearby' => $data->nearby,
					'lat' => $data->lat,
					'lng' => $data->lng,
					'urlImages' => json_decode($this->encryption->decrypt($data->urlImages)),
					'dateCreateAt' => $data->dateCreateAt,
					'dateExpired' => $data->dateExpired,
					'check' => $data->check,
					'status' => $data->status
				]);
				
				$token[] = $jwt->encode($list_post, '$/0ne_punch_m4n/$', 'HS256');
			}
			echo json_encode(['token' => $token ]);
		}else{
			echo json_encode([
				'fail' => 'Hệ thống đang gặp lỗi trong quá trình lấy bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}

	public function post_detail($id){
		$jwt = new JWT();
		if(!empty($id)){
			$data = $this->Post_model->get_post_detail($id);
			if($data){
				$count_like = $this->Post_model->get_count_like_post_by_postId($data->id);
				$likes = $count_like ? $count_like->likes : 0;
				$post_detail = [
					'id' => $data->id,
					'likes' => $likes,
					'userId' => $data->userId,
					'username' => $data->name,
					'phone' => $this->encryption->decrypt($data->phone),
					//'address' => $this->encryption->decrypt($data->address),
					'address' => $data->address,
					'typeRoom' => $data->typeRoom,
					'price' => $data->price,
					'title' => $data->title,
					'area' => $data->area,
					'zalo' => $this->encryption->decrypt($data->zalo),
					'furniture' => $data->furniture,
					'description' => $data->description,
					'otherFee' => $data->otherFee,
					'rule' => $data->rule,
					'nearby' => $data->nearby,
					'lat' => $data->lat,
					'lng' => $data->lng,
					'urlImages' => json_decode($this->encryption->decrypt($data->urlImages)),
					'dateCreateAt' => $data->dateCreateAt,
					'dateExpired' => $data->dateExpired,
					'check' => $data->check,
					'status' => $data->status,
					'avatar' => !empty($data->avatar) ? $this->encryption->decrypt($data->avatar) : "",
				];				
				$token = $jwt->encode($post_detail, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode(['token' => $token ]);
			}else{
				echo json_encode([
					'success' => 'Hệ thống gặp lỗi trong quá trình lấy thông tin chi tiết của bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình lấy thông tin chi tiết của bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}

	public function handle_user_post(){		
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$postId = $post_data['postId'];

			$check_result = $this->Post_model->update_check_post($post_data, $postId);
			$notifcation_result = $this->Notification_model->admin_update_notification_post($post_data, $postId);

			if($check_result && $notifcation_result){
				echo json_encode([
					'success' => 'Update trạng thái bài viết thành công'
				]);
			}else{
				echo json_encode([
					'fail' => 'Hệ thống gặp lỗi trong quá trình Update trạng thái bài viết. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình Update trạng thái bài viết. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}

	public function handle_like_post(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$result = $this->Post_model->handle_like_post($post_data);
			if($result == 1){
				echo json_encode([
					'isLike' => $result
				]);
			}elseif($result == 2){
				echo json_encode([
					'isUnLike' => $result
				]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình cập nhật like bài viết. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}
	public function check_like_post(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			$userId = $post_data["userId"];
			$postId = $post_data["postId"];
			$result = $this->Post_model->check_like_post($userId, $postId);
			if($result){
				echo json_encode([
					'isLike' => $result
				]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình kiểm tra like bài viết. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}
	public function list_liked_post($userId){
		$jwt = new JWT();
		$list_liked_post = $this->Post_model->get_liked_post_by_userId($userId);
		if($list_liked_post){
			foreach($list_liked_post as $data){
				$list_post=([
					'id' => $data->id,
					'userId' => $data->userId,
					'username' => $data->name,
					'phone' => $this->encryption->decrypt($data->phone),
					//'address' => $this->encryption->decrypt($data->address),
					'address' => $data->address,
					'typeRoom' => $data->typeRoom,
					'price' => $data->price,
					'title' => $data->title,
					'area' => $data->area,
					'zalo' => $this->encryption->decrypt($data->zalo),
					'furniture' => $data->furniture,
					'description' => $data->description,
					'otherFee' => $data->otherFee,
					'rule' => $data->rule,
					'nearby' => $data->nearby,
					'lat' => $data->lat,
					'lng' => $data->lng,
					'urlImages' => json_decode($this->encryption->decrypt($data->urlImages)),
					'dateCreateAt' => $data->dateCreateAt,
					'dateExpired' => $data->dateExpired,
					'check' => $data->check,
					'status' => $data->status
				]);
				
				$token[] = $jwt->encode($list_post, '$/0ne_punch_m4n/$', 'HS256');
			}
			echo json_encode(['token' => $token ]);

		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình truy xuất bài viết đã thích. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}
	public function post_delete($id){
		if($id){
			$result = $this->Post_model->post_delete($id);
			if($this->input->raw_input_stream){
				$post_data = json_decode($this->input->raw_input_stream, true);
				$postId = $post_data['postId'];
				$this->Notification_model->admin_update_notification_post($post_data, $postId);
			}
			if($result){
				echo json_encode([
					'success' => 'Xóa bài đăng thành công'
				]);
			}else{
				echo json_encode([
					'fail' => 'Hệ thống gặp lỗi trong quá trình xóa bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình xóa bài đăng. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}
}
