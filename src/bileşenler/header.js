const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.className = "date";
  dateSpan.textContent = `${tarih}`;

  const baslikHead = document.createElement("h1");
  baslikHead.textContent = `${baslik}`;

  const tempSpan = document.createElement("span");
  tempSpan.className = "temp";
  tempSpan.textContent = `${yazi}`;

  headerDiv.append(dateSpan);
  headerDiv.append(baslikHead);
  headerDiv.append(tempSpan);

  return headerDiv;
};
// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const newHeader = Header("Teknoloji Zamanı", "01.10.2023", "Ankara");

const headerEkleyici = (secici) => {
  document.querySelector(secici).append(newHeader);
};

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

export { Header, headerEkleyici };
