<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
class NotificationController extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('Notification_model');
		$this->load->model('Authen_model');
	}

	public function get_user_notification(){
		$jwt = new JWT;
		$userId = json_decode($this->input->raw_input_stream, true);
		if($userId){
			$list_notification_data = $this->Notification_model->get_notification_by_userId($userId);
			if($list_notification_data){
				foreach ($list_notification_data as $data){
					$adminId = $data->adminId;
					$data_admin = $this->Authen_model->get_detail_user($adminId);
					$avatar = !empty($data_admin->avatar) ? $this->encryption->decrypt($data_admin->avatar) : "";
					$list_notification =([
						'avatar' => $avatar,
						'id' => $data->id,
						'postId' => $data->postId,
						'message' => $data->message,
						'createAt' =>$data->createAt
					]);
					$token[] = $jwt->encode($list_notification, '$/0ne_punch_m4n/$', 'HS256');
				}
				echo json_encode(['token' => $token ]);
			}
		}else{
			echo json_encode([
				'fail' => 'Hệ thống đang gặp lỗi trong quá trình lấy thông báo của bạn. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}
	}

	public function get_admin_notification(){
		$jwt = new JWT;
			$list_notification_data = $this->Notification_model->get_all_user_notification();
			if($list_notification_data){
				foreach ($list_notification_data as $data){
					$list_notification =([
						'avatar' => !empty($data->avatar) ? $this->encryption->decrypt($data->avatar) : "",
						'id' => $data->id,
						'postId' => $data->postId,
						'message' => $data->message,
						'createAt' =>$data->createAt
					]);
					$token[] = $jwt->encode($list_notification, '$/0ne_punch_m4n/$', 'HS256');
				}
				echo json_encode(['token' => $token ]);
			}
	}

	public function admin_mark_read($id=null){
			$result = $this->Notification_model->admin_mark_read($id);
			if($result){
				echo json_encode([
					'success' => 'Đánh dấu thông báo Admin đã đọc thành công'
				]);
			}else{
				echo json_encode([
					'fail' => 'Hệ thống đang gặp lỗi trong quá trình đánh dấu đọc thông báo Admin. Chúng tôi sẽ khắc phục sớm nhất'
				]);
			}
	}

	public function user_mark_read($id=null){
		$result = $this->Notification_model->user_mark_read($id);
		if($result){
			echo json_encode([
				'success' => 'Đánh dấu thông báo của bạn đã đọc thành công'
			]);
		}else{
			echo json_encode([
				'fail' => 'Hệ thống đang gặp lỗi trong quá trình đánh dấu đọc thông báo của bạn. Chúng tôi sẽ khắc phục sớm nhất'
			]);
		}	}
}
