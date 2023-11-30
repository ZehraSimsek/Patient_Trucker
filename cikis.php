<?php
    session_destroy();/*oturumda oluşturduğumuz tüm işlemleri destroy ederiz - yok ederiz*/
    echo "<script>alert('Çıkış yapılıyor.'); window.location.href='giris.php';</script>";/*alert mesajı ile çıkış yapıldığının bilgisini verdim.window.location.href ifadesi ile de çıkış sonrası ekranda görülecek sayfayı tanımladım. */ 
?>