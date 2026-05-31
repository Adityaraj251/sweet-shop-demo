/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader-wrapper");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);

});

/* =========================
   STICKY NAVBAR
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML =
            `<i class="fas fa-times"></i>`;

    } else {

        menuBtn.innerHTML =
            `<i class="fas fa-bars"></i>`;
    }

});

/* Close menu on link click */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
                `<i class="fas fa-bars"></i>`;

        });

    });

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar =
    document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   TESTIMONIAL AUTO SLIDER
========================= */

const testimonials =
    document.querySelectorAll(
        ".testimonial-card"
    );

let testimonialIndex = 0;

function showTestimonial() {

    testimonials.forEach(card => {

        card.classList.remove("active");

    });

    testimonials[testimonialIndex]
        .classList.add("active");

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {
        testimonialIndex = 0;
    }
}

if (testimonials.length > 0) {

    setInterval(
        showTestimonial,
        4000
    );

}

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item img"
    );

const lightbox =
    document.querySelector(".lightbox");

const lightboxImg =
    document.getElementById(
        "lightbox-img"
    );

const closeLightbox =
    document.querySelector(
        ".close-lightbox"
    );

galleryItems.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .sweet-card, .why-card, .gallery-item, .glass-card"
    );

revealElements.forEach(item => {

    item.classList.add("reveal");

});

function revealOnScroll() {

    revealElements.forEach(item => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   PARALLAX EFFECT
========================= */

window.addEventListener("scroll", () => {

    const heroImage =
        document.querySelector(
            ".hero-image img"
        );

    if (heroImage) {

        let offset =
            window.pageYOffset;

        heroImage.style.transform =
            `translateY(${offset * 0.05}px)`;

    }

});

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}

/* =========================
   SWEET CARD HOVER GLOW
========================= */

const sweetCards =
    document.querySelectorAll(
        ".sweet-card"
    );

sweetCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(212,175,55,0.18),
                white 45%)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "#fff";

        }
    );

});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "current"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "current"
            );

        }

    });

});

/* =========================
   FLOATING ANIMATION
========================= */

const floatingElements =
    document.querySelectorAll(
        ".floating"
    );

floatingElements.forEach(
    (element, index) => {

        element.style.animationDuration =
            `${6 + index * 2}s`;

    }
);

/* =========================
   CONSOLE CREDIT
========================= */

console.log(
    "%cPremium Sweet Shop Website",
    "color:#D4AF37;font-size:18px;font-weight:bold;"
);

console.log(
    "%cDesigned with Luxury UI/UX",
    "color:#5C4033;font-size:14px;"
);