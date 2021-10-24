# market
## [visit to page](https://volkankaraali.github.io/market)

* product.js içerisinde getData fonksiyonu (fetch) ile ürünleri products.json dosyasından okuyup default price yili olarak 2021 ile ekranda ürünler gösterilmektedir. 
* yil butonuyla yapılan değişiklikle ürünler ilgili yila göre tekrar listelenir. 
* sepet kısmı basket.js içerisinde tutulmaktadır.
* sepete eklenen her ürün, basket isimli array içerisinde tutulmaktadır. bu ürünler basketList fonksiyonu ile gösterilmektedir. showToast fonksiyonu ile de her ürün eklendiğinde ekranda bildirim gösterilir.
* basket arrayında ki tekrar eden ürünleri yakalamak için basket içerisindeki her ürünü foreach ile dönüp counts objesinde {"urunId":adet} olarak eklendi.
* ekranda listeleme işlemi count objesi üzerinden yapılmakta. key (urunId) ile basket içerisinden find ile product datasını alıp ekranda gösterilmektedir.
* toplam fiyat totalPrice fonksiyonu ile gösterilmekte. toFixed(2) ile noktadan sonra 2 basamak olacak sekilde gösterilir.
* silme işlemi deleteProduct fonksiyonu ile yapılmakta. fonksiyona gönderilen productId gönderilir. bu productId'ye göre basket arrayı içerisinden ilgili ürünün index alınır ve o index'li data basket içerisinden silinir.
