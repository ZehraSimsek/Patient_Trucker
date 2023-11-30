<?php
    $action=@$_POST['action'];/*veritabanında request edilen actionu post olarak alıyoruz. */ 
/*if~else sorguları ile alınan action'lara göre işlem oluşturuluyor. */ 
    if($action == 'getUsers'){ // action listelemek amacıyla gelirse;
        $host='localhost'; /*bu kısımda veri tabanı bağlantımızı yapıyoruz */ 
        $dbName='hasta';
        $userName='root';
        $password='';

        $pdo=new PDO("mysql: host=$host; dbname=$dbName; charset=utf8" , $userName , $password);
        /*pdo kullanarak bağlantımızı yapıyoruz */
        $sql='SELECT * FROM hasta ORDER BY Id DESC';/*burada sql sorgusu yazıyoruz , tablodan istediğimiz verileri almak için */ 
        $stmt=$pdo->query($sql);/*dışarıdan veri alınmadığı için direkt veritabanından veri almak için query kullanıyoruz*/ 

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);/*sütun ismine göre işleme alınması için*/ 

        $pdo=null;/*bağlantıyı sonlandırma*/ 
	
        echo json_encode($results);/*result olarak aldığımız değerin json formatına göre kodlandırdım ve echo ile yazdırdım*/
	
    }
    else if($action == 'insertUser')/*ekleme yapacaksak*/
    {
        $newName=$_REQUEST['newName'];/*Burada yeni bir satır oluşturma işleöi yapıyoruz aslında*/ 
        $newSurName=$_REQUEST['newSurName'];
        $newTc=$_REQUEST['newTc'];
        $newRandevu=$_REQUEST['newRandevu'];
        $newBolum=$_REQUEST['newBolum'];
        $newIslem=$_REQUEST['newIslem'];
        $newDoktor=$_REQUEST['newDoktor'];

        $host ='localhost';/*veritabanına bağlantı sağladık*/ 
        $dbName='hasta';
        $userName='root';
        $password='';

        $pdo=new PDO("mysql: host=$host; dbname=$dbName; charset=utf8" , $userName , $password);
/*sql sorgumuzu bu sefer INSERT INTO key kullanarak yazıyoruz ve ekleme yapacağımız kısımları tanımlıyoruz*/
        $sql="INSERT INTO hasta (Name, SurName , Tc , Randevu , Bolum , Islem , Doktor) VALUES ('$newName' , '$newSurName' , '$newTc' , '$newRandevu' , $newBolum , $newIslem , $newDoktor)";
        $stmt=$pdo->query($sql);/*dışarıdan veri alınmadığı için -yönlendirme ile ekleme yaptığımız için - eklediğimiz verileri çekiyoruz */

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);/*sütun ismine göre işleme alınması için*/ 

        $lastId=$pdo->lastInsertId();/*tanımlı son Id'den sonrasına ekleme yaptığımız için*/
        $pdo=null;/*bağlantıyı sonlandırma*/

        echo 'Kayıt alındı.';/*Ekrana bilgi yazısı gönderiyoruz */
    }
    else if($action == 'deleteUser')/*silme yapacaksak */
    {
        $userId=$_REQUEST['userId']; /*silinecek olan satırın Id'sini request ediyoruz */

        $host='localhost';/*veritabanı bağlantımızı yapıyoruz */
        $dbName='hasta';
        $userName='root';
        $password='';

        $pdo=new PDO("mysql: host=$host; dbname=$dbName; charset=utf8" , $userName , $password);

        $sql="DELETE FROM hasta WHERE id=$userId";/*sql sorgumuzu delete key kullanarak yazıyoruz */
        $stmt=$pdo->query($sql);/*veritabanından tablonun son halini alıyoruz */
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);/*sütun ismine göre işleme alınması için*/
        $pdo=null;/*bağlantıyı kestik */
        echo "Hasta kaydı silindi.";  /*Bilgilendirme yazısı yazdırdık */
    }
    else if($action == 'updateUser')/*güncelleme yapacaksak */
    {
        /*güncelleme yapacağımız satırın Id'sini ve güncellenecek kısımları request alıyoruz */
	    $userId=$_REQUEST['userId'];
        $bolum=$_REQUEST['Bolum'];
        $islem=$_REQUEST['Islem'];
        $doktor=$_REQUEST['Doktor'];
	
	/*database bağlantısı */
        $host='localhost';
        $dbName='hasta';
        $userName='root';
        $password='';

        $pdo=new PDO("mysql: host=$host; dbname=$dbName; charset=utf8" , $userName , $password);
/*Update key kullanarak sql sorgusu yazdım */
	    $sql="Update hasta set Bolum = $bolum, Islem = $islem , Doktor = $doktor WHERE id=$userId";

        $stmt=$pdo->query($sql);/*tablonun son halini aldım */ 
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);/*sütun ismine göre işleme alınması için */ 
        $pdo=null;/*bağlantıyı kestik */ 
        echo "Bilgi güncellendi.";
  
    }
    else if($action == 'printUser')/*burada barkod çıktısının bilgisini vermek istiyorsak diye oluşturduğum bir else if sorgusu var. içerisinde temel olarak getUsers action'ı gibi işlem yaptım */ 
    {
	    $userId=$_REQUEST['userId'];/*yazdıracağım satırın Id'sini request aldım */
	
        $host='localhost';/*db bağlantısı kurdum*/
        $dbName='hasta';
        $userName='root';
        $password='';

        $pdo=new PDO("mysql: host=$host; dbname=$dbName; charset=utf8" , $userName , $password);
/*sql sorgusu yazdım */
        $sql="SELECT Id FROM hasta WHERE id=$userId";
        $stmt=$pdo->query($sql);
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        $pdo=null;/*bağlantıyı kestim */ 
        echo $userId . " Numaralı barkod çıktı.";/*bilgi çıktısı verdim */
  
    }

?>