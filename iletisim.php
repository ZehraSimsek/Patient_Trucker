<?php
    include("dapi.php");/*veritabanı bağlantısını include ettim */
    $sorgu=$db->prepare('SELECT * FROM doktor');/*aynı sql sorgusunu tekrar tekrar çalıştırabilmek için prepare kullandım */
    $sorgu->execute();/*sorguyu execute ettim */
    $doktor=$sorgu-> fetchAll(PDO::FETCH_OBJ);/*sorgudaki her bir satırı bir nesne gibi ele alıyor */
?>

<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styl.css" type="text/css" />
    <title>DOKTOR İLETİŞİM</title>
  </head>
  <body style="padding-top:50px;">
    <div id="wrapper">
        <div id="header">
            <img src="hp.png" width="180px" class="left">
            <div class="taCenter headerTitle">ISTANBUL BERCESTE HASTANESI</div>
            <div class="clear"></div>
        </div>
        <div id="myMenu" style="width:auto;">
                <ul>
                    <li><a href="index.php?url=liste">LISTE</a></li>
                    <li><a href="iletisim.php">ILETISIM</a></li>
                </ul>
                <div class="clear"><a href="cikis.php" onclick="if(!confirm('Çıkış yapacak mısınız?')) return false;">ÇIKIŞ</a></div> 
            </div>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<!--tab işlemi -->
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <!--Buraya kadar olan kısımda header.html düzenini oluşturdum -->
            <img width="20px" src="glass.jpg"><input type="text" id="ara" onkeyup="tabloarama()" placeholder="Ara..."><br><!--arama yeri için input oluşturdum -->
        <table id="tableDoktor" border="3" cellspacing="0" cellpadding="6" align="center" style="height: 50px; width: 80px;">
			<tr><!--tablomu oluşturdum , id atadım. satır ve sütun bilgisi girdim -->
			 <td><b>ID</b></td>
			 <td><b>AD</b></td>
			 <td><b>SOYAD</b></td>
			 <td><b>TEL</b></td>
			 <td><b>BÖLÜM</b></td>
			 </tr>
			 <!--veritabanından foreach(i as item) mantığı ile verileri tabloya yazdırdım -->
			 <?php
        foreach($doktor as $doktor){?>
          <tr><!--tablo html kodları ile oluştuğu için ve foreach döngüsü php dilinde olduğu için yapısı göze karışık geliyor olabilir -->
          <td><?= $doktor->Id ?></td><!--tabloda sütun adları yerine itemleri yazdık-->
          <td><?= $doktor->Name ?></td>
          <td><?= $doktor->SurName ?></td>
          <td><?= $doktor->Phone ?></td>
          <td><?= $doktor->Bolum ?></td>
          </tr>
				 
			 <?php } ?>

			</table>  
 
  </body>
</html>
<!--js dosyasını arama işlemi için include ettim -->
<script src="iletisim.js"></script>
<!--footer ekledim -->
<?php
  include("gorunum/footer.html");
?>
