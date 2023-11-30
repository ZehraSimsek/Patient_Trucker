<?php
    try{
        $host='localhost';/*Burada doktorların iletişim bilgilerini almak için bir veritabanı bağlantısı oluşturdum */
        $dbname='hasta';
        $user='root';
        $pass='';
        $db=new PDO("mysql:host=$host;dbname=$dbname;charset=UTF8","$user",$pass);
    }
    catch(PDOException $e){/*try~catch yapısını kullandım. try ifadesi yürütülmezse catch ile hata mesajı verdik */
        print $e->getMessage();
    } 
?>
