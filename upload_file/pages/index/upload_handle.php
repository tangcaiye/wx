<?php  
	
	//sae存储文件的方法
	$s = new SaeStorage();

	ob_start();
	readfile($_FILES['fileup']['tmp_name']);
	$img = ob_get_contents();
	ob_end_clean();
	//获取文件大小
	$size = strlen($img);

	file_put_contents(SAE_TMP_PATH."/bg.jpg", $img);

	if ($s->upload("test","test.jpg",SAE_TMP_PATH."/bg.jpg")){
		echo "上传成功";
	}else{
		echo "上传失败";
	}



 ?>