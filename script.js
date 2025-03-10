document.addEventListener('DOMContentLoaded', function () {
    // Navigation bar
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar) {
        bar.addEventListener("click", () => {
            nav.classList.add("active");
        });
    }

    if (close) {
        close.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    }

    // Loading Screen
    const links = document.querySelectorAll('a');
    const loadingScreen = document.getElementById('loading-screen');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');

            if (href && href !== '#') {
                event.preventDefault();
                loadingScreen.classList.add('show');

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
            })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: 'Terima Kasih!',
                            text: 'Pesan Anda telah berhasil dikirim.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            form.reset();
                        });
                    } else {
                        console.error('Server error:', response.status);
                        Swal.fire({
                            title: 'Oops...',
                            text: 'Terjadi kesalahan saat mengirim pesan. (Server error)',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                    Swal.fire({
                        title: 'Oops...',
                        text: 'Terjadi kesalahan. (Network error)',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        });
    }

    // sproduct
    const MainImg = document.getElementById("MainImg");
    const smallImgs = document.getElementsByClassName("small-img");

    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].onclick = function () {
            MainImg.src = smallImgs[i].src;
        };
    }
});