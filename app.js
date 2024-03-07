// membuat function agar ketika layar di mobile version dan di klik icon bar nya akan muncul tampilan menu nya
const elements = document.querySelectorAll(".hidden");

function dropdown() {
  elements.forEach((element) => {
    element.classList.toggle("hidden");
  });
}
