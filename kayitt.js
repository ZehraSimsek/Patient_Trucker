const tableUsers=document.getElementById('tableUsers');
const btnAdd=document.getElementById('btnAdd');
/*getElementById tanımlamasına göre o nesne üzerinde işlem yapmak için kullanılan bir js keydir */
const inputName=document.getElementById('inputName');
const inputSurName=document.getElementById('inputSurName');
const inputTc=document.getElementById('inputTc');
const inputRandevu=document.getElementById('inputRandevu');
const inputBolum=document.getElementById('inputBolum');
const inputIslem=document.getElementById('inputIslem');
const inputDoktor=document.getElementById('inputDoktor');
/*Burada tablomun adını , butonu ve input name'leri const olarak tanımladığım değerlere atıyorum */
btnAdd.onclick=function(){/*Butona basıldığı zaman çalışması için bir fonksiyon oluşturdum */
    var name=inputName.value;/*Kayıt ekranında girilen bilgileri değişkenlere atıyoruz, veritabanına kayıt için ve kontrol için*/
    var surname=inputSurname.value;
    var tc = inputTc.value;
    var randevu = inputRandevu.value;
    var bolum = inputBolum.value;
    var islem=inputIslem.value;
    var doktor=inputDoktor.value;
/*if~else yapısı ile kontrol işlemleri yaptım. */
    if(name == ''){
        alert('"Adınız" boş olamaz!');
        return;
    }
    if(name.length < 2){
        alert('"Adınız" en az 2 karakter olmalıdır.');
        return;
    }

    if(surname == ''){
        alert('"Soyadınız" boş olamaz!');
        return;
    }
    if(surname.length < 2){
        alert('"Soyadınız" en az 2 karakter olmalıdır.');
        return;
    }

    if(tc == ''){
        alert('"TC" boş olamaz!');
        return;
    }
    if(tc.length != 11){
        alert('"TC" 11 haneli olmalı!');
        return;
    }

    if(randevu == 0){
        alert('"Randevu" boş olamaz!');
        return;
    }

    if(bolum == ''){
        alert('"Bölüm" boş olamaz.');
        return;
    }
    
    if(islem == ''){
        alert('"Işlem" boş olamaz.');
        return;
    }

    if(doktor == ''){
        alert('"Doktor" boş olamaz.');
        return;
    }
   

    var request=new XMLHttpRequest();/*Arka plandaki işlemler için tanımladım. Bu ifade işlemleri yürütürken yenileme yapmadan isteği alır , istekte bulunur ve işler */
    request.open("POST" , 'api.php');/*Veritabanı bağlantısına erişmek için request oluşturdum. Post metodu ile api dosyasına request oluşturdum */
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");/*yukarıda belirttiğimiz gibi server tarafına içerik türü ve parametresi ile request gönderir. parametreden kastımız form üzerinde girilen tüm verilerin uzunluğuna bakılmaksızın tutulması işlemidir*/
    request.setRequestHeader("Connection", "close");/*Bağlantı işlemleri için : bağlanma ve kapanma */

    /*Yukarıda yürüttüğüm request işleminin durumunu tutması için tanımladığım onreadystatechange func var */
    request.onreadystatechange = function() 
    {/*4 : request bitti ve cevap hazırı temsil ederken 200: OK komutunu temsil ediyor */
      if(request.readyState == 4 && request.status == 200) 
	    {
           alert(this.responseText);/*response text : kayıt alındı bilgisidir */
	    
	    }
     }
/*girilen değerleri veritabanına gönderilmek üzere request oluşturup send ediyoruz. action belirtiyoruz */
    request.send('action=insertUser&newName=' + name
        +'&newSurName=' + surname
        + '&newTc=' + tc
        + '&newRandevu=' + randevu
        + '&newBolum=' + bolum
        + '&newIslem=' + islem
        + '&newDoktor=' + doktor
    );
/*tekrar eden insert işlemleri için değerleri boş olarak tanımlıyoruz */
    inputname.value='';
    inputlastname.value='';
    inputtc.value='';
    inputrandevu.value = '';
    inputbolum.value = 1;
    inputislem.value = 1;
    inputdoktor.value = 1;
}