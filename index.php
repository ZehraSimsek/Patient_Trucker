<?php
include 'model.php';/*iki dosya include ettim. bunlardan birisi sayfanın genel düzeni için oluşturduğum , diğeri ise bu model için kontrol işlevi gören dosya*/ 
include 'control.php';

    if(!empty($_GET["url"])){/*get metodu ile url kısmının kontrolünü yaptım */
        $url = $_GET["url"];/*girilen url aldım*/

        switch($url){/*switch yapısı ile bu url e uyan case'leri çalıştırdım */
            case "kayit" :
                kayit();
                break;
            case "liste":
                liste();
                break;
            default :
                include 'index.php';
        }
    }
    else{
        include 'gorunum/header.html';/*eğer url kısmı boş ise hiçbir işlem yapılmaması header dosyasında kalması için ekledim bu kısmı */
    }

?>