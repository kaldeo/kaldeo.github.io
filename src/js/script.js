// Système de gestion des onglets - Version GitHub Pages compatible
console.log('🚀 Chargement du script...');

// Fonction principale qui s'exécute une fois que tout est chargé
function initPortfolio() {
    console.log('📋 Initialisation du portfolio...');
    
    // Récupération de tous les boutons et contenus
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    console.log(`✅ Trouvé ${tabButtons.length} boutons et ${tabContents.length} contenus`);

    // Vérification que les éléments sont bien trouvés
    if (tabButtons.length === 0) {
        console.error('❌ Aucun bouton trouvé ! Vérifiez les classes CSS.');
        return;
    }
    
    if (tabContents.length === 0) {
        console.error('❌ Aucun contenu trouvé ! Vérifiez les IDs.');
        return;
    }

    // Fonction pour désactiver tous les onglets
    function deactivateAllTabs() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
    }

    // Fonction pour activer un onglet spécifique
    function activateTab(tabName) {
        console.log(`🎯 Activation de l'onglet: ${tabName}`);
        
        // Désactiver tous les onglets
        deactivateAllTabs();
        
        // Activer le bouton correspondant
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
            console.log(`✅ Bouton ${tabName} activé`);
        } else {
            console.error(`❌ Bouton ${tabName} non trouvé`);
        }
        
        // Activer le contenu correspondant
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
            console.log(`✅ Contenu ${tabName} activé`);
        } else {
            console.error(`❌ Contenu ${tabName} non trouvé`);
        }
    }

    // Ajouter les écouteurs d'événements aux boutons
    tabButtons.forEach((button, index) => {
        console.log(`🔗 Ajout d'écouteur sur le bouton ${index}: ${button.getAttribute('data-tab')}`);
        
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            console.log(`🖱️ Clic sur: ${tabName}`);
            activateTab(tabName);
        });

        // Effet visuel de clic
        button.addEventListener('click', function() {
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
    console.log('🎉 Système d\'onglets initialisé avec succès !');
}

// Démarrage de l'application
document.addEventListener('DOMContentLoaded', initPortfolio);

// Fallback si DOMContentLoaded ne marche pas
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}

// Triple sécurité pour GitHub Pages
window.addEventListener('load', function() {
    setTimeout(initPortfolio, 100);
});