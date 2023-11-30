<?php
    include ("ayar.php");/*bağlantı yaptığımız dosyayı kullanmak üzere include ettim */
    if($_POST){/*admin ekranında girilen bilgileri if sorgusuna alıyoruz */
        $kullanici=$_POST["kullanici"];/*girilen kullanıcı ve şifreyi post olarak alıyoruz*/
        $sifre=$_POST["sifre"];
/*sql sorgusu ile girilen değerlerin doğruluğunu kontrol ettim */
        $sorgu=$baglan->query("SELECT * FROM kullanici WHERE kullanici='$kullanici' AND sifre='$sifre'");
        $kayitsay=$sorgu->num_rows;/*bu sorguya uyan satır sayısını hesaplayan bir ifade yazdım */
        if($kayitsay > 0){/*eğer kayıt varsa */
            $_SESSION["giris"]="var";/*giris var olarak oturum açtım */
            echo "<script>window.location.href='index.php';</script>";/*js kodlarını kullanarak window.location.href ile index.php sayfasına yönlendirme yaptım  */
        }else{
            echo "<script>alert('Hatalı deneme'); window.location.href='giris.php';</script>";/*oturum açılamazsa hata verip aynı giriş sayfasında kalıyoruz */ 
        }
    }
?>

<html><!--html ve css kodlarını kullanarak admin sayfasını tasarladım.-->
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="css/styl.css" type="text/css" /> <!--css dosyasını ekledim -->
        <title>ADMİN GİRİŞ</title><!--sayfa adını belirledim -->
    </head>
    
    <body style="text-align:center; padding-top:50px;">
        <div id="wrapper">
            <div id="header">
                <img src="hp.png" width="180px" class="left"><!--logo ve hastane adını girdim -->
                <div class="taCenter headerTitle">ISTANBUL BERCESTE HASTANESI</div>
                <div class="clear"></div>
            </div>
            <form action="" method="post"><!--post metodunu kullanarak bilgileri alacağımız bir form oluşturdum -->
            <table border="3" cellspacing="0" cellpadding="3" align="center"  style="height: 22px; width: 75px;">
            <tr style="width: 50px; height: 22px; ">
            <td style="width: 150px;  height: 22px; font-weight: bold"><b>Admin:</b></td>
            <td style="width: 44px;  height: 22px;"><input type="text" name="kullanici" required><br><!--key'leri tanımladım ve required ederek alanların doldurulmasını zorunlu kıldım -->
            </td>
            </tr>
            <tr style="width: 50px; height: 22px; ">
            <td style="width: 150px;  height: 22px; font-weight: bold"><b>Şifre:</b></td>
            <td style="width: 44px;  height: 22px;"><input type="password" name="sifre" required><br><br><!--key'leri tanımladım ve required ederek alanların doldurulmasını zorunlu kıldım -->
            </td>
            </tr>
            <tr style="height: 30px;">
            <td colspan="3" align="center" class="taCenter"><input type="submit" value="Giriş Yap"></td><!--Butonu oluşturdum , submit ederek onaylamaya gönderdim -->
            </tr>
            </table></form>
            
                
                <div class="clear"></div>
            </div>
