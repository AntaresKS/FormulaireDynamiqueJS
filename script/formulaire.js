export default class Formulaire {
  // definition du constructeur

  constructor(id) {
    this.id = id;
    this.formulaireHtml = document.getElementById(this.id);
    this.formdata = new FormData(this.formulaireHtml);
    this.answers = new Array();
  }

  // methode pour recuperer le div parent
  getDiv(id) {
    return document.getElementById(id).parentNode;
  }

  // methode pour recuperer un element
  getElement(id) {
    return document.getElementById(id);
  }

  // methode permettant de masquer un elemnet sans animation
  maskChamp(id) {
    this.getDiv(id).classList.add('masque');
    this.getElement(id).required = false;
  }

  // methode permettant d'afficher le champ
  showChamp(id) {
    this.getDiv(id).classList.remove('disp');
    this.getDiv(id).classList.add('app');
    this.getElement(id).required = true;
  }

  // methode permettant de masquer le champ avec animation
  hideChamp(id) {
    this.getDiv(id).classList.remove('app');
    this.getDiv(id).classList.add('disp');
    this.getElement(id).required = false;
  }
  
  // methode pour savoir si un radio est selectionné
  isSelected(id, value, action, otherAction) {
    this.formdata = new FormData(this.formulaireHtml);
    if (this.formdata.get(id) === value) {
      action();
    } else {
      otherAction();
    }
  }

  // methode pour recuperer les elements de chaque input (et les ajouter a answer)
  getAnswers() {
    this.formdata = new FormData(this.formulaireHtml);
    this.formdata.forEach((value, key) => {
      //console.log(`${key} : ${value}`);
      if (value !== "" &&  value !== "on") {
        // console.log(`${key} : ${value}`);
        this.answers.push([key, value]);
      }
    }
  )
return this.answers;
};

// methode pour afficher dans un alert les résultats
showResults() {
  let chaine = "Récapitulatif\n\n";
  for (let ligne of this.getAnswers()) {
    chaine += `${ligne[0]} : ${ligne[1]}\n`;
  }
  alert(chaine);
}


}