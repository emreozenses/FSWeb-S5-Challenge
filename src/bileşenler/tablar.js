import axios from "axios";

const Tablar = (data) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.className = "topics";
  const konu = data.konular;
  konu.forEach((topic) => {
    const tabDiv = document.createElement("div");
    tabDiv.className = "tab";
    tabDiv.textContent = topic;
    topicsDiv.append(tabDiv);
  });

  return topicsDiv;
};

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

const tabEkleyici = (secici) => {
  const url = "http://localhost:5001/api/konular";
  axios
    .get(url)
    .then((response) => {
      document.querySelector(secici).append(Tablar(response.data));
    })
    .catch((err) => {
      console.log("yükleme yapılamadı!" + err);
    });
};
// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Tablar, tabEkleyici };
