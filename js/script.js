// Płynne przewijanie do sekcji
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  for (let link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetID = this.getAttribute("href");
      const targetElement = document.querySelector(targetID);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  }
});
