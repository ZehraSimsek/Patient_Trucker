const tableUsers=document.getElementById('tableUsers');
const inputName=document.getElementById('inputName');
const inputSurName=document.getElementById('inputSurName');
const inputTc=document.getElementById('inputTc');
const inputRandevu=document.getElementById('inputRandevu');
const inputBolum=document.getElementById('inputBolum');
const inputIslem=document.getElementById('inputIslem');
const inputDoktor=document.getElementById('inputDoktor');
/*php kısmında girdiğim input idleri const olarak aldım */

function satirEkle(id , name , surname , tc, randevu, bolum , islem , doktor){/*ekleyeceğim değerleri parametre olarak aldım*/ 
    var row=tableUsers.insertRow();/*tabloya satır ekledim */
    var bolumInt = bolum;/*switch~case yapısı ile veritabanında numara şeklinde tutulan değerlerimi var ile tanımladım*/
    var islemInt = islem;
    var doktorInt = doktor;
/*hücreleri oluşturdum */
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);
    var cell5=row.insertCell(5);
    var cell6=row.insertCell(6);
    var cell7=row.insertCell(7);
    var cell8=row.insertCell(8);
    var cell9=row.insertCell(9);
    var cell10=row.insertCell(10);
/*girilen değerleri bu hücrelere atadım */
    cell0.innerHTML = id;
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = tc;
    cell4.innerHTML = randevu;

    switch(bolum) 
    {
       case "0":
            bolum = "-Seçiniz-";
	        cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option selected value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
           break;
       case "1":
            bolum = "Cerrahi";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option selected value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
           break;
       case "2":
            bolum = "Radyoloji";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option selected value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
           break;
       case "3":
            bolum = "Pedodonti";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option selected value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
           break;
        case "4":
            bolum = "Endodonti";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option selected value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
            break;
        case "5":
            bolum = "Ortodonti";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option selected value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik </option></select>';
            break;
        case "6":
            bolum = "Periodontoloji";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option selected value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
            break;
        case "7":
            bolum = "Protetik";
            cell5.innerHTML = '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option selected value="7">Protetik</option></select>';
            break;
    }

    switch(islem) 
    {
       case "0":
            islem = "-Seçiniz-";
	        cell6.innerHTML = '<select id="islemUserId_' + id + '"><option selected value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
           break;
       case "1":
            islem = "Görüntüleme";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option selected value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
           break;
       case "2":
            islem = "Gömülü Diş";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option selected value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
           break;
       case "3":
            islem = "Köprü ve Protez";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option selected value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
           break;
        case "4":
            islem = "Muayene";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option selected value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
            break;
        case "5":
            islem = "Temizleme";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option selected value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
            break;
        case "6":
            islem = "Dolgu";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option selected value="6">Dolgu</option><option value="7">Çekim</option></select>';
            break;
        case "7":
            islem = "Çekim";
            cell6.innerHTML = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option selected value="7">Çekim</option></select>';
            break;
    }
   
    switch(doktor) 
    {
        case "0":
            doktor = "-Seçiniz-";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option selected value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "1":
            doktor = "GIZEM HARMANKAYA";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option selected value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "2":
            doktor = "NARIN KIR";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option selected value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "3":
            doktor = "BURCE TINAZ";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option selected value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "4":
            doktor = "GÖZDE OKANT";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option selected value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "5":
            doktor = "IŞIL BALCI";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option selected value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "6":
            doktor = "MEHMET FATİH ULAŞ";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option selected value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "7":
            doktor = "DAMLA ŞİVİL";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option selected value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "8":
            doktor = "ARZU DADLI";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option selected value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "9":
            doktor = "EREN ÖZGÜR";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option selected value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "10":
            doktor = "MAZLUM GERDAN";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option selected value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "11":
            doktor = "HABİP KARA";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option selected value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
        case "12":
            doktor = "ATIL GÖZÜGÜL";
            cell7.innerHTML = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option selected value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
            break;
    }
/*Nurada iconların üzerinde tıklandığında id lere göre belirtilen işlemleri yapması için tanımladım */
    cell8.innerHTML='<img onclick="deleteUser(' + id + ')" src="delete.png" width="20" class="iconDelete" />';
    cell9.innerHTML='<img onclick="updateUser(' +id + ')" src="refresh.png" width="20" class="iconUptade" />';
    cell10.innerHTML='<img onclick="printUser(' +id + ')" src="print.jpg" width="20" class="iconPrint" />';
}

function deleteUser(userId)/*silme işlemi için id yi parametre alan bir fonksiyon oluşturdum*/ 
{
    var requestDel = new XMLHttpRequest();/*arka planda refresh edilmeden yapılacak işlemler için request oluşturdum */
    
    requestDel.open("POST" , 'api.php',true);/*veritabanına bağlantı için method dosya ve true boolean döndürdüm */
    requestDel.setRequestHeader("Content-type", "application/x-www-form-urlencoded");/*içerik türünü ve parametreleri uzunluğuna bakmaksızın bütün halde tutması için tanımladım. bu da kalıp bir yapı */
    requestDel.setRequestHeader("Connection", "close");/*bağlantı ve kapatma */

    requestDel.onreadystatechange = function() /*request işlemlerin durumunu kontrol etme */
    {/*4 : request bitti , cevap hazır , 200 : OK  */
    	if(requestDel.readyState == 4 && requestDel.status == 200) 
	{
	    alert(this.responseText);/*alert olarak ekrana cevap gönder */

        /*satırlar içinde parametre olarak aldığımız userId ye uyup uymadığını ilgili hücre içinde arama yapıp bulduktan sonra komple satırı sildim */
	    var length = tableUsers.rows.length;
            
        for(let i=0 ; i<length ; i++)
	    {
                var tableUsersId=tableUsers.rows[i].cells[0].innerHtml;

            if(tableUsersId==userId)
		    {
                tableUsers.deleteRow(i);
                break;
            }
	    }	
	 } 
    }  
    requestDel.send('action=deleteUser&userId=' + userId);/* Bu işlemi veritabanına göndermek üzere ilgili action ile api.php ye request ettim*/
    kullaniciListcek();/*son kullanıcı listesini aldım */
}

function updateUser(userId)/*güncelleme işlemi için id parametre alarak fonksiyon oluşturdum */
{
    /*bu sefer requesti update için oluşturdum */
    var requestUpdate = new XMLHttpRequest();
/*veritabanında int veri tipinde tanımlanmış olan sütunların updateı için tekrar tanımladım  */
    var bolumUserId = "bolumUserId_" + userId;
    var islemUserId = "islemUserId_" + userId;
    var doktorUserId = "doktorUserId_" + userId;
     /*const olarak input id girilen verileri değiştirilmek üzere aldım*/
    const inputBolum = document.getElementById(bolumUserId);
    const inputIslem=document.getElementById(islemUserId);
    const inputDoktor=document.getElementById(doktorUserId);
/*değişkenlerimize getElementById ile aldığımız id lerin value larını atadık*/
    var bolum =inputBolum.value;
    var islem =inputIslem.value;
    var doktor =inputDoktor.value;
/*request işlemlerini yaptım*/
    requestUpdate.open("POST" , 'api.php',true);
    requestUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestUpdate.setRequestHeader("Connection", "close");

    requestUpdate.onreadystatechange = function() /*durumu kontrol ettim */
    {
    	if(requestUpdate.readyState == 4 && requestUpdate.status == 200) 
	    {
            alert(this.responseText);

            var length = tableUsers.rows.length;/*satıların uzunluğunu aldım*/ 
            /*satırlar boyunca arama yapıp bulduğumuz zaman gerekli hücrelerde tekrar seçme işlemi sonucu alınan değeri icona basınca veritabanında da günceller */
            for(let i=0 ; i<length ; i++)
            {
                var tableUsersId=tableUsers.rows[i].cells[0].innerHtml;

                if(tableUsersId==userId)
                {
                    var bolum = item.Bolum;
                    var islem = item.Islem;
                    var doktor = item.Doktor;
                    
                    switch(bolum) 
                    {
                        case "0":
                            bolum = "-Seçiniz-";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option selected value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "1":
                            konu = "Cerrahi";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option selected value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "2":
                            konu = "Radyoloji";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option selected value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        case "3":
                            konu = "Pedodonti";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option selected value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "4":
                            konu = "Endodonti";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option selected value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "5":
                            konu = "Ortodonti";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option selected value="5">Ortodonti </option><option value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "6":
                            konu = "Periodontoloji";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option selected value="6">Periodontoloji</option><option value="7">Protetik</option></select>';
                        break;
                        case "7":
                            konu = "Nefroloji";
                            tableUsers.rows[i].cells[5].innerHtml= '<select id="bolumUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Cerrahi</option><option value="2">Radyoloji</option><option value="3">Pedodonti</option><option value="4">Endodonti </option><option value="5">Ortodonti </option><option value="6">Periodontoloji</option><option selected value="7">Protetik</option></select>';
                        break;
                    }
                }
                switch(islem) 
                {
                    case "0":
                        islem = "-Seçiniz-";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option selected value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "1":
                        islem = "Görüntüleme";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option selected value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "2":
                        islem = "Gömülü Diş";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option selected value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "3":
                        islem = "Köprü ve Protez";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option selected value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "4":
                        islem = "Muayene";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option selected value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "5":
                        islem = "Temizleme";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option selected value="5">Temizleme</option><option value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "6":
                        islem = "Dolgu";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option selected value="6">Dolgu</option><option value="7">Çekim</option></select>';
                        break;
                    case "7":
                        islem = "Çekim";
                        tableUsers.rows[i].cells[6].innerHtml = '<select id="islemUserId_' + id + '"><option value="0">-Seçiniz-</option><option value="1">Görüntüleme</option><option value="2">Gömülü Diş</option><option value="3">Köprü ve Protez</option><option value="4">Muayene</option><option value="5">Temizleme</option><option value="6">Dolgu</option><option selected value="7">Çekim</option></select>';
                        break;
                }
                switch(doktor) 
                {
                   case "0":
                        doktor = "-Seçiniz-";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option selected value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                       break;
                   case "1":
                        doktor = "GIZEM HARMANKAYA";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option selected value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                       break;
                   case "2":
                        doktor = "NARIN KIR";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option selected value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                       break;
                   case "3":
                        doktor = "BURCE TINAZ";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option selected value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                       break;
                    case "4":
                        doktor = "GÖZDE OKANT";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option selected value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "5":
                        doktor = "IŞIL BALCI";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option selected value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "6":
                        doktor = "MEHMET FATİH ULAŞ";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option selected value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "7":
                        doktor = "DAMLA ŞİVİL";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option selected value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "8":
                        doktor = "ARZU DADLI";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option selected value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "9":
                        doktor = "EREN ÖZGÜR";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option selected value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                       break;
                    case "10":
                        doktor = "MAZLUM GERDAN";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option selected value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "11":
                        doktor = "HABİP KARA";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option selected value="11">HABİP KARA</option><option value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                    case "12":
                        doktor = "ATIL GÖZÜGÜL";
                        tableUsers.rows[i].cells[7].innerHtml = '<select id="doktorUserId_' + id + '"><option value="0">-Seçiniz-</option><optgroup label="Cerrahi"><option value="1">GIZEM HARMANKAYA</option><option value="2">NARIN KIR</option></optgroup><optgroup label="Radyoloji"><option value="3">BURCE TINAZ</option></optgroup><optgroup label="Pedodonti"><option value="4">GÖZDE OKANT</option><option value="5">IŞIL BALCI</option></optgroup><optgroup label="Endodonti"><option value="6">MEHMET FATİH ULAŞ</option><option value="7">DAMLA ŞİVİL</option></optgroup><optgroup label="Ortodonti"><option value="8">ARZU DADLI</option><option value="9">EREN ÖZGÜR</option></optgroup><optgroup label="Periodontoloji"><option value="10">MAZLUM GERDAN</option></optgroup><optgroup label="Protetik"><option value="11">HABİP KARA</option><option selected value="12">ATIL GÖZÜGÜL</option></optgroup></select>';
                        break;
                }
                
            }	
	 } 
    }     
    requestUpdate.send('action=updateUser&userId=' + userId + '&Bolum=' + bolum + '&Islem=' + islem + '&Doktor=' + doktor);/*request olarak api.php ye database işlemleri için send ettim ve gerekli parametreleri gönderdim*/
}

function printUser(userId)
{
    var requestPrint = new XMLHttpRequest();
    
    requestPrint.open("POST" , 'api.php',true);
    requestPrint.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestPrint.setRequestHeader("Connection", "close");

    requestPrint.onreadystatechange = function() 
    {
    	if(requestPrint.readyState == 4 && requestPrint.status == 200) 
	{
	    alert(this.responseText);

	    var length = tableUsers.rows.length;
            
        for(let i=0 ; i<length ; i++)
	    {
            var tableUsersId=tableUsers.rows[i].cells[0].innerHtml;

            if(tableUsersId==userId)/*print işleminde ayrı olarak ekrana barkodun çıkarıldığına dair bilgi gönderdim */
		    {
                alert("Barkod çıkarıldı.");
                break;
            }
	    }	
	 } 
    } 
    requestPrint.send('action=printUser&userId=' + userId); /*api dosyasında gerekli işlemler için action belirtip request atadım*/ 
}


function kullaniciListcek()
{
    var tableRowCount=tableUsers.rows.length;/*tablonun uzunluğunu hesaplayıp başlıkların yazılı olduğu ilk satırı sildim*/
    
    for(let i=1 ; i<=tableRowCount-1 ; i++)
    {
        tableUsers.deleteRow(1);
    }

    var params = "";/*parametreleri tanımladım.Bunu bir satırdaki tüm veriler için tanımladım. */
    var request=new XMLHttpRequest();
    request.open("POST" , 'api.php',true);

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Content-length", params.length);/*parametre uzunluğunu bu sefer üstte tanımladığım "application/x-www-form-urlencoded" yerine tanımlayarak yeniden o sorguyu yazdım - çünkü bu sefer sınırsız uzunlukta değil */
    request.setRequestHeader("Connection", "close");

    request.onreadystatechange = function() 
    {/*durumun kontrolünü yaptım */
    	if(request.readyState == 4 && request.status == 200) 
	    {
            /*bütün verileri aynı formata getirmek için Json.parse kullandım*/ 
	        var parsedData=JSON.parse(this.responseText);

            for(var k in parsedData)/*parsedData ile her sütunu belli bir formata sabitledim*/
            {
                item = parsedData[k];/*döngü */

                var id = item.Id;
                var name = item.Name;
                var surname = item.SurName;
                var tc = item.Tc;
                var randevu= item.Randevu;
                var bolum = item.Bolum;
                var islem = item.Islem;
                var doktor = item.Doktor;

                satirEkle(id,name,surname,tc,randevu,bolum,islem,doktor);/*verileri parametre alarak satıra eklemek için tanımladım */
            } 

	     } 
     } 

     request.send('action=getUsers');/*action getUsers ile verileri database den çektim*/
}

kullaniciListcek();

function tabloarama() {
    var k, t, n, a, l;/*değişkenlerimi tanımladım */
    k = document.getElementById("aramakutusu").value.toUpperCase();/*küçük büyük kelime duyarı olmaması için toUpperCase kullandım. Bu arama kısmına yazılacak her şey için geçerli */ 
    t = document.getElementById("tableUsers").getElementsByTagName("tr");/*tablodaki tüm satırları aldım */
    for (l = 1; l < t.length; l++) {/*satırların uzunluğuna kadar artan bir for döngüsü oluşturdum*/
      t[l].style.display = "none";/*arka planda bir şey göstermemesi için*/
      n = t[l].getElementsByTagName("td");/*sütunları artan l değerine göre aldık*/ 
      for (var m = 0; m < n.length; m++)/*sütunların uzunluğu kadar for döngüsü*/
        if ((a = t[l].getElementsByTagName("td")[m]) && a.innerHTML.toUpperCase().indexOf(k) > -1) {
          t[l].style.display = "";/*Sütunlarda aranan kelimenin/sayının ,string tipinde olmalı, içerisinde bulunan harfe göre filtrelemesi için yazdım */
          break;
        }
    }
  }
