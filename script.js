// Smooth animation on scroll

window.addEventListener("scroll", () => {

  const sections = document.querySelectorAll("section");

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

      section.style.opacity = "1";
      section.style.transform = "translateY(0)";

    }

  });

});

// Initial hidden effect

const sections = document.querySelectorAll("section");

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.6s";

});