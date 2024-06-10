<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
class AuthenController extends CI_Controller {

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
	public function __construct(){
		parent::__construct();
		$this->load->model('Authen_model');
	}
	public function register(){
		$jwt = new JWT();
		$data = json_decode($this->input->raw_input_stream, true);
		if(!empty($data)){
			$resultID = $this->Authen_model->insert_resigter_users($data);
			if($resultID != false){
				$data = $this->Authen_model->get_regester_user($resultID);
				$userData = ([
					'userId' => $data->id,
					'name' => $data->name,
					'email' => $data->email,
					'phone' => $this->encryption->decrypt($data->phone),
					'role' => $data->role
				]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode(['token' => $token]);
			}else{
				echo json_encode([
					'message' => 'Tài khoản đã tồn tại. Vui lòng thử lại'
				]);
			}
		}
	}
	public function login()
	{
		$jwt = new JWT();
		$data = json_decode($this->input->raw_input_stream, true);
		if(!empty($data)){
			$result = $this->Authen_model->check_login($data);
			if($result != false){
				$userData = ([
					'userId' => $result->id,
					'name' => $result->name,
					'email' => $result->email,
					'phone' => $this->encryption->decrypt($result->phone),
					'role' => $result->role
				]);
				$token = $jwt->encode($userData, '$/0ne_punch_m4n/$', 'HS256');
				echo json_encode(['token' => $token]);
			}else{
				echo json_encode([
					'message' => 'Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại'
				]);
			}
		}
	}
}
