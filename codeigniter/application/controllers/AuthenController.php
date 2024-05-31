<?php
defined('BASEPATH') OR exit('No direct script access allowed');

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
		$this->load->library('cors');
        $this->cors->handle();
		header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Request-Method, Cache-Control, Authorization");
	}
	public function login()
	{
		$Data = json_decode	($this->input->raw_input_stream, true);
		print_r($Data);	
		$response = array('status' => 'success', 'message' => 'Data received and processed');
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
	}
}
