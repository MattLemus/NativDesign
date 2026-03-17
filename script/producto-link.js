// Hace que cada tarjeta de producto sea clickeable
// y abra la página de detalle con los datos del producto
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.producto-card');

    cards.forEach(function(card) {
        var img = card.querySelector('img');
        var h3 = card.querySelector('h3');
        var p = card.querySelector('.card-content > p');
        var waLink = card.querySelector('.boton-whatsapp');

        if (!img || !h3) return;

        var nombre = h3.textContent.trim();
        var desc = p ? p.textContent.trim() : '';
        var imgSrc = img.getAttribute('src');

        // Obtener el enlace de WhatsApp
        var waHref = '';
        if (waLink && waLink.tagName === 'A') {
            waHref = waLink.getAttribute('href');
        } else {
            // Para productos con botón de carrito, generar enlace de WhatsApp
            waHref = 'https://wa.me/593962959738?text=Hola,%20me%20interesa%20' + encodeURIComponent(nombre);
        }

        var url = 'producto.html?nombre=' + encodeURIComponent(nombre)
            + '&img=' + encodeURIComponent(imgSrc)
            + '&desc=' + encodeURIComponent(desc)
            + '&wa=' + encodeURIComponent(waHref);

        // Hacer la card clickeable
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // No navegar si se hizo clic en un botón o enlace dentro de la card
            if (e.target.closest('.boton-whatsapp') || e.target.closest('button') || e.target.closest('a.boton-whatsapp')) {
                return;
            }
            window.location.href = url;
        });
    });
});
