const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const headlineDiv = document.createElement("div");
  headlineDiv.className = "headline";
  headlineDiv.textContent = makale.anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.className = "author";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const imgYazarFoto = document.createElement("img");
  imgYazarFoto.src = makale.yazarFoto;

  const spanYazarAdi = document.createElement("span");
  spanYazarAdi.textContent = `${makale.yazarAdi} + tarafından`;

  imgContainer.append(imgYazarFoto);
  authorDiv.append(imgContainer, spanYazarAdi);
  cardDiv.append(headlineDiv, authorDiv);

  return cardDiv;
};

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
