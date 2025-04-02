function changeContent(page) {
    // Cache toutes les sections de contenu
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Affiche la section correspondant à l'élément cliqué
    const activeSection = document.getElementById(page);
    activeSection.classList.add('active');
}


document.querySelectorAll('.box-proj').forEach(section => {
    section.addEventListener('mouseenter', function () {
        // Sélection de la div où afficher les infos
        const infoBox = document.querySelector('.first-box-droit');

        // Récupération des données depuis l'élément survolé
        const title = this.getAttribute('data-title');
        const name = this.getAttribute('data-name');
        const lieu = this.getAttribute('data-lieu');
        let description = this.getAttribute('data-description');

        description = description.replace(/\[red\](.*?)\[\/red\]/g, '<span class="red-text">$1</span>');


        // Mise à jour du contenu
        infoBox.querySelector('h1').textContent = title;
        infoBox.querySelector('.name').textContent = name;
        infoBox.querySelector('.lieu').textContent = lieu;
        infoBox.querySelector('.contain-text p').innerHTML = description;
    });
});
