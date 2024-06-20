<?php
defined('BASEPATH') or exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;

class AuthenController extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Authen_model');
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
				if (!empty($result->avatar)) {
					$userData = ([
						'userId' => $result->id,
						'name' => $result->name,
						'email' => $result->email,
						'phone' => $this->encryption->decrypt($result->phone),
						'role' => $result->role,
						'password' => $this->encryption->decrypt($result->password),
						'avatar' => $this->encryption->decrypt($result->avatar)
					]);
				} else {
					$userData = ([
						'userId' => $result->id,
						'name' => $result->name,
						'email' => $result->email,
						'phone' => $this->encryption->decrypt($result->phone),
						'role' => $result->role,
						'password' => $this->encryption->decrypt($result->password),
						'avatar' => ''
					]);
				}

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
				if (!empty($data->avatar)) {
					$userData = ([
						'userId' => $data->id,
						'name' => $data->name,
						'email' => $data->email,
						'phone' => $this->encryption->decrypt($data->phone),
						'role' => $data->role,
						'password' => $this->encryption->decrypt($data->password),
						'avatar' => $this->encryption->decrypt($data->avatar)
					]);
				} else {
					$userData = ([
						'userId' => $data->id,
						'name' => $data->name,
						'email' => $data->email,
						'phone' => $this->encryption->decrypt($data->phone),
						'role' => $data->role,
						'password' => $this->encryption->decrypt($data->password),
						'avatar' => ''
					]);
				}
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

}
