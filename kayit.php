<!--buton ve kayot sistemi için css özellikleri tanımladım -->
<style>
.newUserBox{
    padding:5px;
    font-size:20px;
    width:250px;
}

#btnAdd{
    font-size:20px;
    font-weight:bold;
    padding:10px;
    cursor:pointer;
}
</style>
<!--Tabloyu oluşturdum(genişlik , uzunluk , hücre genişliği gibi) ve input bilgilerini girdim. -->
<table border="3" cellspacing="0" cellpadding="6" align="center"  style="height: 220px; width: 700px;">
<tr style="width: 100px; height: 22px; ">
<td style="width: 150px;  height: 22px; font-weight: bold">Ad</td>
<td style="width: 5px;   height: 22px;">&nbsp;:</td>
<td style="width: 44px;  height: 22px;"><input id="inputName" class="newUserBox" maxlength="20" type="text" width="50px" placeholder="Ad girin " /></td>
</tr>
<tr style="height: 22px;">
<td style="width: 25px; height: 22px; font-weight: bold" >Soyad</td>
<td style="width: 5px; height: 22px;">&nbsp;:&nbsp;</td>
<td style="width: 47px; height: 22px;"><input id="inputSurname" class="newUserBox" maxlength="20" type="text" placeholder="Soyad girin " /></td>
</tr>

<tr style="height: 22px;">
<td style="width: 25px; height: 22px; font-weight: bold">TC</td>
<td style="width: 5px; height: 22px;">&nbsp;:&nbsp;</td>
<td style="width: 47px; height: 22px;"><input id="inputTc" class="newUserBox" maxlength="11" type="text" placeholder="XXXXXXXXXXX"/></td>
</tr>

<tr style="height: 22px;">
<td style="width: 25px; height: 22px; font-weight: bold">Randevu</td>
<td style="width: 5px; height: 22px;">&nbsp;:&nbsp;</td>
<td style="width: 47px; height: 22px;"><input id="inputRandevu" type="datetime-local" name="randevu" placeholder="Randevu bilgisi girin." /></td><br>

<!--Bu kısımda ek olarak select~option yapısını kullandım , seçenekler oluştuğu için. -->
<tr style="height: 19px;">
<td style="width: 50px; height: 19px; font-weight: bold" >Bölüm</td>
<td style="width: 5px; height: 19px;">&nbsp;:</td>
<td style="width: 47px; height: 19px;"><select id="inputBolum">
<option value="0">-Seçiniz-</option>
<option value="1">Cerrahi</option>
<option value="2">Radyoloji</option>
<option value="3">Pedodonti</option>
<option value="4">Endodonti</option>
<option value="5">Ortodonti</option>
<option value="6">Periodontoloji</option>
<option value="7">Protetik</option>
</select></td>

</tr> 

<tr style="height: 19px;">
<td style="width: 50px; height: 19px; font-weight: bold" >Işlem</td>
<td style="width: 5px; height: 19px;">&nbsp;:</td>
<td style="width: 47px; height: 19px;"><select id="inputIslem">
<option value="0">-Seçiniz-</option>
<option value="1">Görüntüleme</option>
<option value="2">Gömülü Diş</option>
<option value="3">Köprü ve Protez</option>
<option value="4">Muayene</option>
<option value="5">Temizleme</option>
<option value="6">Dolgu</option>
<option value="7">Çekim</option>
</select></td>

</tr> 
   
<tr style="height: 19px;">
<td style="width: 50px; height: 19px; font-weight: bold" >Doktor</td>
<td style="width: 5px; height: 19px;">&nbsp;:</td>
<td style="width: 47px; height: 19px;"><select id="inputDoktor">
<option value="0">-Seçiniz-</option>
    <optgroup label="Cerrahi">
        <option value="1">GIZEM HARMANKAYA</option>
        <option value="2">NARIN KIR</option>
    </optgroup>
    <optgroup label="Radyoloji">
        <option value="3">BURCE TINAZ</option>
    </optgroup>
    <optgroup label="Pedodonti">
        <option value="4">GÖZDE OKANT</option>
        <option value="5">IŞIL BALCI</option>
    </optgroup>
    <optgroup label="Endodonti">
        <option value="6">MEHMET FATİH ULAŞ</option>
        <option value="7">DAMLA ŞİVİL</option>
    </optgroup>
    <optgroup label="Ortodonti">
        <option value="8">ARZU DADLI</option>
        <option value="9">EREN ÖZGÜR</option>
    </optgroup>
    <optgroup label="Periodontoloji">
        <option value="10">MAZLUM GERDAN</option>
    </optgroup>
    <optgroup label="Protetik">
        <option value="11">HABİP KARA</option>
        <option value="12">ATIL GÖZÜGÜL</option>
    </optgroup>
</select></td>

</tr> 

    <tr style="height: 30px;">
        <td colspan="3" align="center" class="taCenter"><button id="btnAdd"> KAYDET </button> </td>
    </tr>
</table>
<!--İşlemlerin kayıt altına alınması ve kontrol edilmesi , veritabanı işlemleri için js uzantılı dosyayı include ettim-->
<script src="kayitt.js"></script>

