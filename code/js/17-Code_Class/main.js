/* -------------------------------------------------------------------------- */
//?                                   1.SORU                                  */
/* -------------------------------------------------------------------------- */

ogrenciNotlarList = [
    { name: "Sema", notes: [70, 90, 60] },
    { name: "Neva", notes: [50, 70, 60] },
    { name: "Salih", notes: [40, 20, 30] },
    { name: "Ahmet", notes: [80, 90, 100] },
    { name: "şevval", notes: [30, 40, 55] },
    { name: "Zeki", notes: [90, 100, 100] },
  ];
  
  //? Elif öğretmenin öğrencilerinin isimlerini ve notlarını tutan JSON yapısı gösterilmektedir. Sınıfında bazı raporlamalar yapmak istiyor.
  
  //? a- Öğrencisinin adını ve aldığı en yüksek notu yeni bir listeye almak istiyor
  
  // Beklenen Sonuç:
  //   ➞ [
  //     { "name": "sema", "EnYüksekNotu": 90 },
  //     { "name": "Neva", "EnYüksekNotu": 70 },
  //     { "name": "Salih", "EnYüksekNotu": 40 },
  //     { "name": "Ahmet", "EnYüksekNotu": 100 },
  //     { "name": "Şevval", "EnYüksekNotu": 55 },
  //     { "name": "Zeki", "EnYüksekNotu": 100},//
  //   ]