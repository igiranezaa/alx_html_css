/* ================================
   MOBILE MENU TOGGLE
================================ */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav ul');

    // Toggle navigation menu
    menuToggle.addEventListener('change', function () {
        if (this.checked) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = '';
        }
    });

    /* ============================
       SMOOTH SCROLLING
    ============================ */
    const links = document.querySelectorAll('.nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }

            // Close menu after clicking (mobile)
            menuToggle.checked = false;
            navMenu.style.display = '';
        });
    });

    /* ============================
       ACTIVE SECTION HIGHLIGHT
    ============================ */
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
