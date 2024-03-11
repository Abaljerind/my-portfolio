// function untuk layar pada mobile size agar saat di klik icon bar nya, maka akan muncul tampilan menu nav nya
const elements = document.querySelectorAll(".hidden");

function dropdown() {
  elements.forEach((element) => {
    element.classList.toggle("hidden");
  });
}

// function untuk efek mengetik
const dynamicText = document.querySelector("h1.greeting span");
const words = ["AbalJerind", "a Frontend Web Dev"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // jika kondisi diatas bernilai true maka tampilkan huruf selanjutnya
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // jika kondisi diatas bernilai true maka hapus huruf sebelumnya
    charIndex--;
    setTimeout(typeEffect, 150);
  } else {
    // jika variable wordIndex sudah dihapus, lanjut ke word / isi array words selanjutnya.
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1500);
  }
};

typeEffect();
