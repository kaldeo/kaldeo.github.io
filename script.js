// Système de gestion des onglets
document.addEventListener('DOMContentLoaded', function() {
    // Récupération de tous les boutons et contenus
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Fonction pour désactiver tous les onglets
    function deactivateAllTabs() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
    }

    // Fonction pour activer un onglet spécifique
    function activateTab(tabName) {
        // Désactiver tous les onglets
        deactivateAllTabs();
        
        // Activer le bouton correspondant
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Activer le contenu correspondant
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    // Ajouter les écouteurs d'événements aux boutons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Si c'est le bouton "fermer", demander confirmation
            if (tabName === 'fermer') {
                activateTab(tabName);
            } else {
                activateTab(tabName);
            }
        });
    });

    // Effet sonore au clic (optionnel)
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Effet visuel de clic
            this.style.transform = 'translateX(15px) scale(0.98)';
            setTimeout(() => {
                if (this.classList.contains('active')) {
                    this.style.transform = 'translateX(10px) scale(1)';
                } else {
                    this.style.transform = 'translateX(0) scale(1)';
                }
            }, 150);
        });
    });

    // Initialisation : le premier onglet (portfolio) est actif par défaut
    console.log('Système d\'onglets initialisé');
});