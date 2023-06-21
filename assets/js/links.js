/*=============== LINKS PAGE HEADER ===============*/
// Récupérer tous les liens du header
const headerLinks = document.querySelectorAll('.link');

// Masquer toutes les sections d'items, sauf la section "diaporama"
const itemSections = document.querySelectorAll('.item__links__group');
itemSections.forEach(section => {
    section.style.display = 'none';
});

const diaporamaSection = document.querySelector('.item__links__group[data-link="diaporama"]');
if (diaporamaSection) {
    diaporamaSection.style.display = 'block';
}

// Ajouter un événement de clic à chaque lien du header
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        const clickedLinkId = link.getAttribute('id');

        // Masquer toutes les sections d'items
        itemSections.forEach(section => {
            section.style.display = 'none';
        });

        // Afficher uniquement la section correspondante au lien cliqué
        const matchingSection = document.querySelector(`.item__links__group[data-link="${clickedLinkId}"]`);
        if (matchingSection) {
            matchingSection.style.display = 'block';
        }
    });
});