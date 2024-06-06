<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cors
{
    public function enable_cors()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With");
    }
}
