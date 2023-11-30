<!--box ve iconlar için css özellikleri tanımladım -->
<style>
.newUserBox{
    padding:3px;
    font-size:20px;
    width:20px;
}
.iconDelete{
    cursor:pointer;
}
.iconUptade{
    cursor:pointer;
}
.iconPrint{
    cursor:pointer;
}
.iconFind{
    cursor:pointer;
}
</style>
<!--arama kısmımız için bir icon tanımladım ve input girdim. onkeyup: yazılmaya başlandığı anda arama yapması için -->
<img width="20px" src="glass.jpg"><input type="text" id="aramakutusu" onkeyup="tabloarama()" placeholder="Ara..."><br>

<!--tabloyu oluşturdum ve bir id atadım -->
<table id="tableUsers" border="3" cellspacing="0" cellpadding="6" align="center" style="height: 50px; width: 80px;">

    <tr>
        <th>ID</th>
        <th>AD</th>
        <th>SOYAD</th>
        <th>TC</th>
        <th>RANDEVU</th>
        <th>BOLUM</th>
        <th>ISLEM</th>
        <th><a href="iletisim.php"><img width="20px" src="tel.png"></a>DOKTOR</th><!--img tanımlamamın sebebi menüye yeni bir ekleme yapmamak , bir icon ile tablolar arası geçiş yapabilmek -->
        <th>D</th>
        <th>U</th>
        <th>P</th>
</tr>
</table>
<!--veritabanı ve liste üzeri işlemler , kontroller için js include ettim -->
<script src="listee.js"></script>

