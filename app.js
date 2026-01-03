// ===================== app.js =====================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Auto-close menu when a link is clicked (mobile UX)
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        });
});

  const testimonials = [
    {
      text: `"Korede's graphic designs are stunning! He created a logo and branding materials for my business that exceeded my expectations. His creativity, attention to detail, and professionalism are top-notch. He's a talented designer who truly understands the importance of visual storytelling. Would definitely recommend his graphic design services!"`,
      author: "HXILL Photography"
    },
    {
      text: `"Korede's scripts are a game-changer! He created custom automation scripts for my business, and they've saved me hours of manual work. The scripts are easy to use and work flawlessly. Korede's attention to detail and technical expertise are impressive. Highly recommend his scripting services!"`,
      author: "Timeless limited"
    },
    {
      text: `"I've worked with Korede on multiple projects and he's consistently delivered high-quality work. His designs are modern, sleek, and always meet the client's requirements. He's a great communicator and is always willing to go the extra mile to ensure client satisfaction. Would definitely recommend!"`,
      author: "Fiverr Client"
    },
    {
      text: `"Korede is a talented web designer who brought my vision to life! His attention to detail and creativity are top-notch. I was impressed by his ability to understand my needs and deliver exactly what I wanted. The website is responsive, user-friendly, and looks amazing on all devices. Highly recommend Korede for your web design needs!"`,
      author: "LOV Gyms Client"
    }
  ];

  let currentIndex = 0;

  const textEl = document.getElementById("testimonial-text");
  const authorEl = document.getElementById("testimonial-author");
  const button = document.getElementById("next-testimonial");

  button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;

    textEl.textContent = testimonials[currentIndex].text;
    authorEl.textContent = testimonials[currentIndex].author;
});


// MOUSE ENTERRING
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  reveals.forEach(section => {
    observer.observe(section);
  });