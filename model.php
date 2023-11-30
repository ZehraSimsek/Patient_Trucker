<?php
    function showpage($src , $title=false){/*bu fonksiyonu sayfanın genel modelini oluşturması için oluşturdum*/
        include ('gorunum/header.html');/*Burada genel hatlarıyla header , işlem kısmı ve footer kısmını include ettim */ 
        include $src ;
        include ('gorunum/footer.html');
    }

?>