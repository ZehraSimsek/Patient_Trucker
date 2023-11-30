function tabloarama() {
    var k, t, n, a, l;/*değişkenlerimi tanımladım */
    k = document.getElementById("ara").value.toUpperCase();/*küçük büyük kelime duyarı olmaması için toUpperCase kullandım. Bu arama kısmına yazılacak her şey için geçerli */ 
    t = document.getElementById("tableDoktor").getElementsByTagName("tr");/*tablodaki tüm satırları aldım */
    for (l = 1; l < t.length; l++) {/*satırların uzunluğuna kadar artan bir for döngüsü oluşturdum*/
      t[l].style.display = "none";/*arka planda bir şey göstermemesi için*/
      n = t[l].getElementsByTagName("td");/*sütunları artan l değerine göre aldık*/ 
      for (var m = 0; m < n.length; m++)/*sütunların uzunluğu kadar for döngüsü*/
        if ((a = t[l].getElementsByTagName("td")[m]) && a.innerHTML.toUpperCase().indexOf(k) > -1) {
          t[l].style.display = "";/*Sütunlarda aranan kelimenin/sayının ,string tipinde olmalı, içerisinde bulunan harfe göre filtrelemesi için yazdım */
          break
        }
    }
  }
