function dogru() {
  document.getElementById("sonuc").innerText = "✅ Doğru! Kurallara uymak hayat kurtarır.";
}

function yanlis() {
  document.getElementById("sonuc").innerText = "❌ Yanlış! Kırmızı ışıkta durulur.";
}

let yesil = false;

setTimeout(() => {
  document.getElementById("light").innerText = "🟢";
  yesil = true;
}, Math.random() * 3000 + 2000);

function tikla() {
  if (yesil) {
    document.getElementById("oyunSonuc").innerText =
      "👏 Tebrikler! Dikkatlisin.";
  } else {
    document.getElementById("oyunSonuc").innerText =
      "⚠️ Erken bastın! Trafikte acele tehlikelidir.";
  }
}
