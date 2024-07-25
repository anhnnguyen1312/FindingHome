<?php
defined('BASEPATH') or exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;

class AuthenController extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Authen_model');
		$this->load->model('Post_model');
		date_default_timezone_set('Asia/Ho_Chi_Minh');
	}
	public function register()
	{
		$jwt = new JWT();
		$post_data = json_decode($this->input->raw_input_stream, true);
		if (!empty($post_data)) {
			$resultID = $this->Authen_model->insert_resigter_users($post_data);
			if ($resultID) {
				$data = $this->Authen_model->get_detail_user($resultID);
				$userData = ([
					'userId' => $data->id,
					'name' => $data->name,
					'email' => $data->email,
					'phone' => $this->encryption->decrypt($data->phone),
					'password' => $this->encryption->decrypt($data->password),
					'role' => $data->role,
					'avatar' => $this->encryption->decrypt($data->avatar),
				]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode([
					'token' => $token,
					'message' => 'Đăng ký thành công'
				]);
			} else {
				echo json_encode([
					'message' => 'Tài khoản đã tồn tại. Vui lòng thử lại'
				]);
			}
		}
	}

	public function login()
	{
		$jwt = new JWT();
		$post_data = json_decode($this->input->raw_input_stream, true);
		if (!empty($post_data)) {
			$result = $this->Authen_model->check_login($post_data);
			if ($result) {
					$userData = ([
						'userId' => $result->id,
						'name' => $result->name,
						'email' => $result->email,
						'phone' => $this->encryption->decrypt($result->phone),
						'role' => $result->role,
						'password' => $this->encryption->decrypt($result->password),
						'avatar' => !empty($result->avatar) ? $this->encryption->decrypt($result->avatar) : ""
					]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode([
					'token' => $token,
					'message' => 'Đăng nhập thành công'
				]);
			} else {
				echo json_encode([
					'message' => 'Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại'
				]);
			}
		}
	}

	public function check_email_user()
	{
		$post_data = json_decode($this->input->raw_input_stream, true);
		$data = $this->Authen_model->get_user_by_email($post_data);
		if ($data) {

			$email_to = $data->email;
			$user_name = $data->name;
			$user_id = $data->id;
			$token = bin2hex(random_bytes(16));
			$expired_at = date('Y-m-d H:i:s', strtotime('+ 5 minutes'));

			$dataToken = ([
				'userId' => $user_id,
				'token' => $token,
				'create_at' => date('Y-m-d H:i:s'),
				'expires_at' => $expired_at
			]);

			$result = $this->Authen_model->add_token_user($user_id, $dataToken);
			if ($result) {
				$this->send_email_reset_password($email_to, $user_name, $expired_at, $token);
			} else {
				echo json_encode([
					'fail' => 'Hệ thống bị lỗi trong quá kiểm tra. Vui lòng thử lại sau'
				]);
			}

		} else {
			echo json_encode([
				'fail' => 'Không tìm thấy email. Vui lòng kiểm tra lại'
			]);
		}
	}

	public function reset_password(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		$result = $this->Authen_model->reset_user_password($post_data);
		if($result){
			echo json_encode([
				'success' => 'Mật khẩu của bạn đã được thay đổi thành công'
			]);
		}else{
			echo json_encode([
				'fail' => 'Phiên làm việc đã kết thúc. Vui lòng xác nhận mail lại'
			]);
		}
	}

	public function send_email_reset_password($email_to, $user_name, $expires_at, $token)
	{
		$this->email->from('tnp08032000@gmail.com', 'FindingHouse Admin');
		$this->email->to($email_to);
		$this->email->subject('THÔNG BÁO TỪ HỆ THỐNG');
		$this->email->message('
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Email Notification</title>
		</head>
		<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; margin: 0;">
			<div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
				<h2 style="color: #333; text-align: center;">RESET MẬT KHẨU FindingHOUSE</h2>
				<p style="font-size: 16px; line-height: 1.6; margin: 0;">Xin chào'.' '. htmlspecialchars($user_name) .',</p>
				<p style="font-size: 16px; line-height: 1.6; margin: 0;">Bạn vui lòng <a href="http://localhost:3000/reset-password?token=' . urlencode($token) . '">click vào liên kết</a> để thiết lập mật khẩu mới cho tài khoản của mình.</p>
				<p style="font-size: 16px; line-height: 1.6; margin: 0;">Liên kết sẽ hết hiệu lực vào lúc '. htmlspecialchars($expires_at) .'.</p>
				<hr style="border: 0; border-top: 1px solid #ddd;">
				<p style="font-size: 14px; color: #cc0000; text-align: center;">Email được gửi tự động, vui lòng không phản hồi.</p>
			</div>
		</body>
		</html>
		');
				

		if ($this->email->send(true)) {
			echo json_encode([
				'success' => 'Hệ thống đã gửi tin nhắn đến email của bạn. Vui lòng kiểm tra hộp thư đến hoặc spam'
			]);
		} else {
			echo json_encode([
				'fail' => 'Hệ thống đang gặp lỗi khi gửi mail. Quý khách vui lòng thử lại sau'
			]);
		}
	}

	public function handle_profile()
	{
		$jwt = new JWT();
		$post_data = json_decode($this->input->raw_input_stream, true);
		if (!empty($post_data)) {
			$result = $this->Authen_model->update_user_profile($post_data);
			if ($result) {
				$data = $this->Authen_model->get_detail_user($post_data['userId']);
					$userData = ([
						'userId' => $data->id,
						'name' => $data->name,
						'email' => $data->email,
						'phone' => $this->encryption->decrypt($data->phone),
						'role' => $data->role,
						'password' => $this->encryption->decrypt($data->password),
						'avatar' => !empty($data->avatar) ? $this->encryption->decrypt($data->avatar) : ""
					]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode([
					'token' => $token,
					'message' => 'Chỉnh sửa tiểu sử thành công'
				]);
			} else {
				echo json_encode([
					'message' => 'Chỉnh sửa tiểu sử thất bại'
				]);
			}
		}
	}
	public function user_profile($userId){
		$jwt = new JWT();
		if($userId){
			$result = $this->Authen_model->get_detail_user($userId);
			$all_post = $this->Post_model->get_post_by_userId($userId);
			$sum_liked = $this->Post_model->sum_liked_by_userId($userId);
			if($result){
				$userData = ([
					'name' => $result->name,
					'email' => $result->email,
					'phone' => $this->encryption->decrypt($result->phone),
					'avatar' => !empty($result->avatar) ? $this->encryption->decrypt($result->avatar) : "",
					'numberPost' => $all_post ? count($all_post) : 0,
					'sumLiked' => $sum_liked ? $sum_liked :0
				]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode([
					'token' => $token,
				]);
			}
			
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình lấy thông tin của user. Vui lòng quay lại sau'
			]);
		}
	}

	public function list_user(){
		$jwt = new JWT();
		$list_user = $this->Authen_model->get_list_user();
		if($list_user){
			foreach($list_user as $user){
				$userId = $user->id;
				$all_post = $this->Post_model->get_post_by_userId($userId);
				$sum_liked = $this->Post_model->sum_liked_by_userId($userId);
				$userData = ([
					'id' => $user->id,
					'name' => $user->name,
					'userRole' =>$user->role,
					'email' => $user->email,
					'phone' => $this->encryption->decrypt($user->phone),
					'avatar' => !empty($user->avatar) ? $this->encryption->decrypt($user->avatar) : "",
					'numberPost' => $all_post ? count($all_post) : 0,
					'sumLiked' => $sum_liked ? $sum_liked :0
				]);
				$token[] = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
			}
			echo json_encode(['token' => $token ]);
		}else{
			echo json_encode([
				'fail' => 'Hệ thống gặp lỗi trong quá trình lấy danh sách của user. Vui lòng quay lại sau'
			]);

		}
		
	}

	public function delete_user(){
		$post_data = json_decode($this->input->raw_input_stream, true);
		if($post_data){
			if(is_array($post_data) && count($post_data)){
				$success = [];
				for($i = 0; $i < count($post_data); $i++){
					$result_array = $this->Authen_model->delete_user($post_data[$i]);
					if($result_array){
						$success[] = $post_data[$i];
					}
				}
				if(count($success) > 0){
					echo json_encode([
						'success' => 'Xóa nhiều tài khoản thành công'
					]);
				}else{
					echo json_encode([
						'fail' => 'Hệ thống gặp lỗi trong quá trình xóa nhiều tài khoản. Vui lòng quay lại sau'
					]);
				}
			}else{
				$result = $this->Authen_model->delete_user($post_data);
				if($result){
					echo json_encode([
						'success' => 'Xóa tài khoản thành công'
					]);
				}else{
					echo json_encode([
						'fail' => 'Hệ thống gặp lỗi trong quá trình xóa tài khoản. Vui lòng quay lại sau'
					]);
				}
			}
		}else{
			echo json_encode([
				'fail' => 'Xóa tài khoản thất bại'
			]);
		}
	}
}
