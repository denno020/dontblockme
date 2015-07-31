<?php

namespace DontBlockMe\PublicContent;

use DontBlockMe\Controllers\Router;
use Exception;

$rootPath = realpath(__DIR__."/../");
define("DONT_BLOCK_ME_SITE_ROOT", realpath($rootPath."/"));

try {
    if(isset($_GET['f'])){
        $file = $_GET['f'];
        $ini = parse_ini_file("../min.ini", true);
        foreach($ini[$file] as $f){
            if(preg_match("/^.*\.css$/", $f)){
                header('Content-Type: text/css');
            }else{
                header('Content-Type: text/javascript');
            }
            include $f;
            echo "\n\n";
        }
    }else{
        require_once '../'."Autoload.php";
        $router = new Router();
        $router->run();
    }
} catch (Exception $e) {
    echo '<p>An exception was encountered in '.$e->getFile().'('.$e->getLine().'): <br/>',
        '<div style="margin-left:10px">'.$e->getMessage().'</div>',
         '</p><h4>Trace:</h4><pre>',
         $e->getTraceAsString(),
         '</pre>';
}