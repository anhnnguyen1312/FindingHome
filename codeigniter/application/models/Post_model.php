<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post_model extends CI_Model {
	public function __construct(){
		parent::__construct();
	}
	public function handle_post($data, $id=null){
		
		$data_Post['userId'] = $data['userId'];
		$data_Post['address'] = $this->encryption->encrypt($data['address']);
		$data_Post['typeRoom'] = $data['typeRoom'];
		$data_Post['price'] = $data['price'];
		$data_Post['title'] = mb_strtoupper($data['title'],"UTF-8");
		$data_Post['area'] = $data['area'];
		$data_Post['zalo'] = $this->encryption->encrypt($data['zalo']);
		$data_Post['furniture'] = $data['furniture'];
		$data_Post['description'] = $data['description'];
		$data_Post['otherFee'] = $data['otherFee'];
		$data_Post['rule'] = $data['rule'];
		$data_Post['nearby'] = $data['nearby'];
		$data_Post['urlImages'] = $this->encryption->encrypt($data['urlImages']);
		
		if(!empty($id)){
			$this->db->where('id', $id);
			$result = $this->db->update('posts', $data_Post);
			if($result){
				$data_statusPost['dateCreateAt'] = $data['dateCreateAt'];
				$data_statusPost['dateExpired'] = $data['dateExpired'];
				$data_statusPost['status'] = $data['status'];
				$data_statusPost['check'] = $data['check'];
				
				$this->db->where("postId", $id);
				$query =$this->db->update('statusPost', $data_statusPost);
				return $query;
			}else{
				return false;
			}
		}else{
			$this->db->insert('posts', $data_Post);
			$post_id = $this->db->insert_id();
	
			if(!empty($post_id)){
				$data_statusPost['postId'] = $post_id;
				$data_statusPost['dateCreateAt'] = $data['dateCreateAt'];
				$data_statusPost['dateExpired'] = $data['dateExpired'];
				$data_statusPost['status'] = $data['status'];
				$data_statusPost['check'] = $data['check'];
	
				$this->db->insert('statusPost', $data_statusPost);
				return $post_id;
			}else{
				return false;
			}
		}
	}
	
	public function get_homepage_post(){
		$this->db->select('users.name as name, users.phone as phone, posts.*, statusPost.dateCreateAt as dateCreateAt, statusPost.dateExpired as dateExpired, statusPost.status as status, statusPost.check as check');
		$this->db->from('posts');
		$this->db->join('users','posts.userId = users.id');
		$this->db->join('statusPost', 'posts.id = statusPost.postId');
		$this->db->where(['check' => 1, 'status' => 0]);
		$query =  $this->db->get();

		if(!empty($query)){
			return $query->result();
		}else{
			return false;
		}
	}

	public function get_all_post(){
		$this->db->select('users.name as name, users.phone as phone, users.role as role,  posts.*, statusPost.dateCreateAt as dateCreateAt, statusPost.dateExpired as dateExpired, statusPost.status as status, statusPost.check as check');
		$this->db->from('posts');
		$this->db->join('users','posts.userId = users.id');
		$this->db->join('statusPost', 'posts.id = statusPost.postId');
		$query =  $this->db->get();

		if(!empty($query)){
			return $query->result();
		}else{
			return false;
		}
	}

	public function get_post_detail($id){
		$this->db->select('users.name as name, users.phone as phone, users.avatar as avatar, posts.*, statusPost.dateCreateAt as dateCreateAt, statusPost.dateExpired as dateExpired, statusPost.status as status, statusPost.check as check');
		$this->db->from('posts');
		$this->db->join('users','posts.userId = users.id');
		$this->db->join('statusPost', 'posts.id = statusPost.postId');
		$this->db->where('posts.id', $id);
		$query =  $this->db->get();

		if(!empty($query)){
			return $query->row();
		}else{
			return false;
		}
		
	}

	public function update_check_post($data, $postId){
		if($postId){
			$check = $data['check'];
			$this->db->where('postId', $postId);
			$query = $this->db->update('statusPost',['check' => $check]);
			return $query;
		}else{
			return false;
		}
	}

	public function handle_like_post($data)
	{
		$userId = $data["userId"];
		$postId = $data["postId"];

		$checkLike = $this->check_like_post($userId, $postId);
		if ($checkLike) {

			$this->db->trans_start();

			$this->db->where("userId", $userId);
			$this->db->where("postId", $postId);
			$this->db->delete("userLikes");

			$this->db->set('likes', 'likes -1', false);
			$this->db->where('postId', $postId);
			$this->db->update("countLikes");

			$this->db->trans_complete();

			if ($this->db->trans_status() === false) {
				return false;
			} else {
				return 2;
			}

		} else {
			$this->db->trans_start();

				$dataDB['userId'] = $userId;
				$dataDB['postId'] = $postId;
				$this->db->insert('userLikes', $dataDB);

				$countLike = $this->get_count_like_post_by_postId($postId);
				if ($countLike) {
					$this->db->set('likes', 'likes +1', false);
					$this->db->where('postId', $postId);
					$this->db->update("countLikes");
				} else {
					$dataCountLike['likes'] = 1;
					$dataCountLike['PostId'] = $postId;
					$this->db->insert("countLikes", $dataCountLike);
				}

			$this->db->trans_complete();

			if ($this->db->trans_status() === false) {
				return false;
			} else {
				return 1;
			}
		}
	}

	public function check_like_post($userId, $postId){
		$query = $this->db->get_where('userLikes', ['userId' => $userId, 'postId' => $postId]);
		return $query->num_rows() > 0;
	}
	public function get_count_like_post_by_postId($postId){
		$query = $this->db->get_where('countLikes', ["postId" => $postId]);
		return $query->row();
	}
	public function get_liked_post_by_userId($userId){
		$list_liked_post = $this ->db->get_where('userLikes', ['userId' => $userId])->result();
		if($list_liked_post){
			foreach ($list_liked_post as $liked_post){
				$postId = $liked_post->postId;
				$query = $this->get_post_detail($postId);
				if($query){
					$list_post[] = $query;
				}
			}
			return $list_post;
		}else{
			return false;
		}
	}

	public function post_delete($id){
		$this->db->trans_start();

			$this->db->where('id', $id);
			$this->db->delete('posts');

			$tables = ['statusPost', 'countLikes', 'userLikes'];
			$this->db->where('postId', $id);
			$this->db->delete($tables);

		$this->db->trans_complete();

		if($this->db->trans_status() === false){
			return false;
		}else{
			return true;
		}
	}
}
