document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const button = document.getElementById("nextBtn");
  const footer = document.getElementById("footer");
  const music = document.getElementById("birthdayMusic"); // Musiqa elementini chaqiramiz

  let step = 1;

  button.addEventListener("click", function () {
    // Musiqani faqat birinchi bosishda ijro etamiz
    if (step === 1) {
      if (music) {
        music.play().catch((err) => {
          console.log("Musiqa autoplay bloklandi:", err);
        });
      }

      greeting.innerHTML = `
        Hurmatli akam,<br>
        Sizga bugun faqat bir tilak emas — butun bir minnatdorchilikni yo‘llayman.<br>
        Sizning hazilingiz, maslahatlaringiz va fikrlaringiz haqiqiy akalik ko'rinishidir.<br><br>
        Tug‘ilgan kuningizda sizga sog‘lik, quvonch, va har kuni yangi ilhom tilayman.<br>
        Siz bilan bir jamoada bo‘lish — bu katta baxt! 🌟
      `;
      button.textContent = "So‘nggi tilak 💫";
      step++;
    } else if (step === 2) {
      greeting.innerHTML = `
        Hurmatli akam,<br>
        Sizning borligingiz — men uchun xaqiqiy ukaligimni va maslaxat beruvchi to'g'ri yo'l ko'rsatuvchi akam borligi xissiyotidir. Siz turgan har bir joyda, menda ilhom, ishonch va kulgu bo‘ladi.<br><br>
        Tug‘ilgan kuningizda sizga shunchaki tilak emas, balki chin yurakdan rahmat aytmoqchiman.<br>
        Sizga sog‘lik, tinchlik, va qalbingizdagi har bir orzuning ro‘yobini tilayman! Olloh umringizga mazmunli va go'zal onlarni to'ldirsin!<br><br>
        🎁 Xurmat bilan yan bir bor ukangiz Bobur!.
      `;
    
      button.remove(); // tugmani olib tashlaymiz

      setTimeout(() => {
        greeting.innerHTML = `<strong>Tabrik tugamaydi yana davom etadi... 😊</strong><br><br>Yana ko‘rishguncha!`;
        footer.style.display = "none";

        // Musiqani to‘xtatamiz
        if (music) {
          music.pause();
          music.currentTime = 0;
        }
      }, 180000); // 3 daqiqa
      step++;
    }
  });
});
