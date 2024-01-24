  document.addEventListener("DOMContentLoaded", () => {
     new window.TypeIt("#JET-BOTE", {
       lifeLike: false,
       speed: 100,
       loop: true,
       cursorChar: " "
     })
       .type("JET-SKI", { delay: 2000 })
       .delete()
       .type("BOTE", { delay: 2000 })
       .delete()
       .go();
 });
