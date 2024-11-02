import Formulaire from './formulaire.js';

// creer le formulaire
const formulaire = new Formulaire('formulaire');

formulaire.maskChamp('societe');
formulaire.maskChamp('email');

// addEventListener pour changer le comportement en fonction du radio coché
formulaire.getElement('particulier').addEventListener('change', () => {
  formulaire.hideChamp('societe');
});

  formulaire.getElement('professionnel').addEventListener('change', () => {
    formulaire.showChamp('societe');
});

// addEventListener pour changer le comportement en fonction de la valeur de l'input
formulaire.getElement('objet').addEventListener('change', () => {
  formulaire.isSelected('objet', 'demande_de_contact', () => {
    formulaire.showChamp('email');
  }, () => {
    formulaire.hideChamp('email');
  });
});

// addEventListener pour recuperer les données du formulaire
formulaire.formulaireHtml.addEventListener('submit', (event) => {
  event.preventDefault();
  formulaire.showResults();
});