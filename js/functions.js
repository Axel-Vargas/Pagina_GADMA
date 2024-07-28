document.addEventListener("DOMContentLoaded", () => {
    const floatingButton = document.getElementById("floatingButton");
    const navbar = document.getElementById('main-nav');
    const images = document.querySelectorAll('.img-principal');
    const slideContainer = document.querySelector('.slide-container');
    let currentIndex = 0;
    let index = 0;

    const fechas = [
        '25 abril, 2024',
        '26 mayo, 2020',
        '02 diciembre, 2024'
    ];

    const noticias = [
        'Ubican contenedores para aceite usado en las plazas y mercados de Ambato.',
        'Municipalidad capacita al sector minero del cantón.',
        'Inauguran parque ecológico en el centro de la ciudad.'
    ];

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            floatingButton.classList.add("hidden");
        } else {
            floatingButton.classList.remove("hidden");
        }
    });

    function cambiarTexto() {
        index = (index + 1) % fechas.length;

        const nuevaFecha = document.createElement('span');
        const nuevaNoticia = document.createElement('span');

        nuevaFecha.className = 'span-fecha enter';
        nuevaNoticia.className = 'enter';

        nuevaFecha.textContent = fechas[index];
        nuevaNoticia.textContent = noticias[index];

        slideContainer.appendChild(nuevaFecha);
        slideContainer.appendChild(nuevaNoticia);

        // Forzar el reflow
        nuevaFecha.offsetWidth;
        nuevaNoticia.offsetWidth;

        setTimeout(() => {
            nuevaFecha.classList.add('active');
            nuevaNoticia.classList.add('active');
        }, 10);

        const fechaSpan = document.querySelector('#fecha-span');
        const noticiaSpan = document.querySelector('#noticia-span');

        if (fechaSpan && noticiaSpan) {
            fechaSpan.classList.add('exit');
            noticiaSpan.classList.add('exit');

            setTimeout(() => {
                if (slideContainer.contains(fechaSpan)) {
                    slideContainer.removeChild(fechaSpan);
                }
                if (slideContainer.contains(noticiaSpan)) {
                    slideContainer.removeChild(noticiaSpan);
                }

                nuevaFecha.id = 'fecha-span';
                nuevaNoticia.id = 'noticia-span';

                nuevaFecha.classList.remove('enter');
                nuevaNoticia.classList.remove('enter');
            }, 1000);
        } else {
            nuevaFecha.id = 'fecha-span';
            nuevaNoticia.id = 'noticia-span';
        }
    }

    setInterval(cambiarTexto, 5000);
    
    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 5000);
});