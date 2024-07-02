<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Notification_model extends CI_Model {
	public function __construct(){
		parent::__construct();
	}

	public function admin_update_notification_post($data, $postId){
		$check = $data["check"];
		$title = mb_strtoupper($data['title'],"UTF-8");

		$dataDB["adminId"] = $data["adminId"];
		$dataDB["userId"] = $data["userId"];
		$dataDB["postId"] = $postId;

		switch($check){
			case 1:
				$dataDB["message"] = "Admin, Bài đăng " .$title ." vừa được duyệt";
				break;
			case 2:
				$dataDB["message"] = "Admin, Bài đăng " .$title. " vừa bị từ chối";
				break;
			case 3:
				$dataDB["message"] = "Admin, Bài đăng " .$title. " vừa hết hạn";
				break;
			case "delete":
				$deleteReason = $data["deleteReason"] ? $data["deleteReason"] : "không có";
				$dataDB["message"] = "Admin, Bài đăng " .$title. " vừa bị xóa. Lý do: " .$deleteReason;
				break;
			default:
				break;
		}

		if(!empty($postId)){
			$notifications = $this->get_notification_by_postId($postId, $dataDB["adminId"]);

			if(!empty($notifications->postId)){
				$dataDB["isRead"] = 0;
				$this->db->where("postId", $notifications->postId);
				$query = $this->db->update("adminNotifications", $dataDB);
				return $query;
			}else{
				$query = $this->db->insert("adminNotifications", $dataDB);
				return $query;	
			}
		}else{
			return false;
		}
	}

	public function user_update_notification_post($data, $postId){
		$check = $data["check"];
		$title = mb_strtoupper($data['title'],"UTF-8");
		$userName = $data["userName"];

		$dataDB["userId"] = $data["userId"];
		$dataDB["postId"] = $postId; 

		switch($check){
			case 0:
				$dataDB["message"] = $userName.  ", Bài viết " .$title. "vừa được đăng" ;
				break;
			default:
				break;
		}

		if(!empty($postId)){
			$notifications = $this->get_notification_by_postId($postId);

			if(!empty($notifications->postId)){
				$dataDB["isRead"] = 0;
				$this->db->where("postId",$notifications->postId);
				$query = $this->db->update("userNotifications", $dataDB);
				return $query;
			}else{
				$query = $this->db->insert("userNotifications", $dataDB);
				return $query;	
			}
		}else{
			return false;
		}
	}

	public function get_notification_by_postId($PostId, $adminId = null){
		if(!empty($adminId)){
			$query =$this->db->get_where('adminNotifications', ['postId' => $PostId]);
			return $query->row();
		}else{
			$query =$this->db->get_where('userNotifications', ['postId' => $PostId]);
			return $query->row();
		}
	}

	public function get_notification_by_userId($userId){
		$this->db->where('userId', $userId);
		$this->db->where('isRead =', 0);
		$query = $this->db->get('adminNotifications');

		return $query->result();
	}

	public function get_all_user_notification(){
		$this->db->select("users.avatar as avatar, userNotifications.id, userNotifications.postId as postId, userNotifications.message as message, userNotifications.createAt as createAt");
		$this->db->from("users");
		$this->db->join("userNotifications", "users.id = userNotifications.userId");
		$this->db->where("userNotifications.isRead", 0);
		$query = $this->db->get();

		return $query->result();
	}

	public function admin_mark_read($id){
		if($id){
			$this->db->where("id",$id);
		}
			$query = $this->db->update("userNotifications",[ "isRead" => 1]);
			return $query;
	}

	public function user_mark_read($id){
		if($id){
			$this->db->where("id",$id);
		}
			$query = $this->db->update("adminNotifications",[ "isRead" => 1]);
			return $query;
	}


}
