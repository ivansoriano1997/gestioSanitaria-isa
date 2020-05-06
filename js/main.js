'use strict'

const eleID_divEspaiModal = document.getElementById("divEspaiModal");

const eleID_barra_missatges = document.getElementById("divBarraMissatges");
const eleID_text_missatge = document.getElementById("h3BarraMissatges");

const eleID_divPresentacio = document.getElementById("divPresentacio");
const eleID_divHospital = document.getElementById("divHospital");
const eleID_divPacient = document.getElementById("divPacient");

const eleID_divControls = document.getElementById("divControls");

const eleID_btnGestHospitals = document.getElementById("btnGestHospitals");
const eleID_btnGestPacients = document.getElementById("btnGestPacients");
const eleID_btnGestMalalties = document.getElementById("btnGestMalalties");
const eleID_btnGestMetges = document.getElementById("btnGestMetges");

const eleID_btnGestAplicacio = document.getElementById("btnGestAplicacio");

const eleID_h2ResutltatFormControls = document.getElementById("h2ResutltatFormControls");

let hospital = {};

/*
taula_missatges[0][intTitol]="No habilitat"
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!"

taula_missatges[1][intTitol]="Camp buit"
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!"

taula_missatges[2][intTitol]="Camp buit"
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!"

taula_missatges[3][intTitol]="Camp buit"
taula_missatges[3][intMissatge]="Ho sento, encara no està habilitat!"
 */

const taula_missatges = [
    []
];

const intTitol = 1
const intMissatge = 2;

taula_missatges[0] = [];
taula_missatges[0][intTitol] = "No habilitat";
taula_missatges[0][intMissatge] = "Ho sento, encara no està habilitat!";

taula_missatges[1] = [];
taula_missatges[1][intTitol] = "El camp màxim pacients és obligatori!";
taula_missatges[1][intMissatge] = "Cal que entris un nombre al camp màxim pacients!";

taula_missatges[2] = [];
taula_missatges[2][intTitol] = "El camp Nom Hospital és obligatori!";
taula_missatges[2][intMissatge] = "Cal que entris un nom al camp Hospital!";

//    let metge = new Metge('Ivan', 'Soriano', '12345678A', 'Oncologia');
//     alert(JSON.stringify(metge));

function comprovaCampBuit(objecteRebut) {
    if (objecteRebut.value == "") {
        mostraMissatge(2);
    }
}

function comprovaCampNumero(objecteRebut) {
    switch (isNaN(objecteRebut.value) ? 1 : objecteRebut.value == "" ? 2 : 0) {
        case 1:
            mostraMissatge(1);
            break;

        case 2:
            mostraMissatge(2);
            break;

    }
    // if (isNaN(objecteRebut.value) || (objecteRebut.value==""))
    //   {
    //     alert("Must input numbers");
    //     return false;
    //   }
}


function mostraMissatge(codiMissatge) {
    /* Amb format JQuery   */
    $('#divEspaiModal').find('#titolModal').text(taula_missatges[codiMissatge][intTitol]);
    $('#divEspaiModal').find('#missatgeModal').text(taula_missatges[codiMissatge][intMissatge]);
    $('#divEspaiModal').modal('show');
}

function mostraBotons() {
    eleID_btnGestHospitals.disabled = false;
    eleID_btnGestPacients.disabled = false;
    eleID_btnGestMalalties.disabled = false;
    eleID_btnGestMetges.disabled = false;
    eleID_btnGestAplicacio.disabled = false;

    $(eleID_btnGestHospitals).removeClass('btn-dark');
    $(eleID_btnGestHospitals).addClass('btn-primary');

    $(eleID_btnGestPacients).removeClass('btn-dark');
    $(eleID_btnGestPacients).addClass('btn-primary');

    $(eleID_btnGestMalalties).removeClass('btn-dark');
    $(eleID_btnGestMalalties).addClass('btn-primary');

    $(eleID_btnGestMetges).removeClass('btn-dark');
    $(eleID_btnGestMetges).addClass('btn-primary');

    $(eleID_btnGestAplicacio).removeClass('btn-dark');
    $(eleID_btnGestAplicacio).addClass('btn-primary');
}

function amagaBotons() {
    eleID_btnGestHospitals.disabled = true;
    eleID_btnGestPacients.disabled = true;
    eleID_btnGestMalalties.disabled = true;
    eleID_btnGestMetges.disabled = true;
    eleID_btnGestAplicacio.disabled = true;

    $(eleID_btnGestHospitals).removeClass('btn-primary');
    $(eleID_btnGestHospitals).addClass('btn-dark');

    $(eleID_btnGestPacients).removeClass('btn-primary');
    $(eleID_btnGestPacients).addClass('btn-dark');

    $(eleID_btnGestMalalties).removeClass('btn-primary');
    $(eleID_btnGestMalalties).addClass('btn-dark');

    $(eleID_btnGestMetges).removeClass('btn-primary');
    $(eleID_btnGestMetges).addClass('btn-dark');

    $(eleID_btnGestAplicacio).removeClass('btn-primary');
    $(eleID_btnGestAplicacio).addClass('btn-dark');
}


/* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');



https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

*/

function conteClass(element, nomClass) {
    return (' ' + element.classList + ' ').indexOf(' ' + nomClass + ' ') > -1;
}



function eliminaClass(elementRebut, nomClass) {
    var arrLlistaClasses;

    arrLlistaClasses = elementRebut.className.split(" ");
    if (arrLlistaClasses.indexOf(nomClass) == -1) { // ens indica que no existeix
        elementRebut.className += " " + nomClass;
    }
}

function afegirClass(elementRebut, nomClass) {
    var arrLlistaClasses;

    arrLlistaClasses = elementRebut.className.split(" ");
    if (arrLlistaClasses.indexOf(nomClass) == -1) { // ens indica que no existeix
        elementRebut.className += " " + nomClass;
    }
}



function mostraGestioApp(objecte) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divControls.classList.toggle("d-none");
    amagaBotons();
}


function mostraGestioMetges(objecte) {
    mostraMissatge(0);
}

function mostraGestioMalaties(objecte) {
    mostraMissatge(0);
}



function mostraGestioHospital(objecte) {
    document.getElementById('tancaDivHospital').onclick = function tanca() {
        eleID_divPresentacio.classList.toggle("d-none");
        eleID_divHospital.classList.toggle("d-none");
        mostraBotons();
    }
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divHospital.classList.toggle("d-none");
    amagaBotons();
}

function ocultaGestioHospital(objecteRebut) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divHospital.classList.toggle("d-none");
    mostraBotons();
}

// CREA L'INPUT DEL NOM DEL PACIENT.
function crearInputNomPacient(numeroPacient) {
  let inputNomPacient = document.createElement("input")
  inputNomPacient.setAttribute("type", "text");
  inputNomPacient.setAttribute("name", "inputNomPacient" + numeroPacient.toString());
  inputNomPacient.classList.add("form-control");

  return inputNomPacient;
}

// CREA L'OPTION DEL SELECT DE MALALTIES
function crearOptionSelectMalalties(numeroMalaltia) {
  let optionMalaltia = document.createElement("option");
  optionMalaltia.value = "malaltia" + numeroMalaltia.toString();
  optionMalaltia.text = numeroMalaltia >= 0 ? llistaMalalties[numeroMalaltia] : "Cap malaltia";

  if (numeroMalaltia < 0)
    optionMalaltia.title = "Utilizar per quan sigui una revisió o quan es tracti d'una malaltia desconeguda.";

  return optionMalaltia;
}

// CREA EL SELECT DE MALALTIES
function crearSelectMalalties(numeroPacient) {
  // Creem el desplegable de materies
  let selectMalalties = document.createElement("select");
  selectMalalties.id = "selectMalaltiaPacient" + numeroPacient.toString();
  selectMalalties.classList.add("form-control");

  // Creem la opció de 'cap seleccionada'
  selectMalalties.appendChild(crearOptionSelectMalalties(-1));

  // Afegim les opcions al formulari
  for (let numeroMalaltia = 0; numeroMalaltia < llistaMalalties.length; numeroMalaltia++) {
    selectMalalties.appendChild(crearOptionSelectMalalties(numeroMalaltia));
  }

  return selectMalalties;
}

// CREA EL CONTINGUT DEl FORMULARI DE PACIENT
function crearContingutDivPacient(numeroPacient) {
  let formulariPacient = null;

  // Creem el contenidor "row" per al pacient
  let divRowPacient = document.createElement("div");
  divRowPacient.classList.add("row");

  // Creem el contenidor "col" per al input del nom del pacient
  let divColNomPacient = document.createElement("div");
  divColNomPacient.classList.add("col");
  divColNomPacient.classList.add("mb-3");

  // Afegim la label del nom del pacient
  let labelPacient = document.createElement("label");
  labelPacient.innerText = "Introdueix el nom del pacient:";
  labelPacient.setAttribute("for", "inputNomPacient" + numeroPacient.toString());
  divColNomPacient.appendChild(labelPacient);

  // Afegim l'input del nom del pacient
  divColNomPacient.appendChild(crearInputNomPacient(numeroPacient));

  // Afegim el contenidor "col" dins del contenidor "row"
  divRowPacient.appendChild(divColNomPacient);

  // Creem el contenidor "col" per al input del nom del pacient
  let divColMalaltiaPacient = document.createElement("div");
  divColMalaltiaPacient.classList.add("col");
  divColMalaltiaPacient.classList.add("mb-3");

  // Afegim la label del nom del pacient
  let labelMalaltia = document.createElement("label");
  labelMalaltia.innerText = "Introdueix el nom del pacient:";
  labelMalaltia.setAttribute("for", "inputNomPacient" + numeroPacient.toString());
  divColMalaltiaPacient.appendChild(labelMalaltia);

  // Afegim el select de malalties
  divColMalaltiaPacient.appendChild(crearSelectMalalties(numeroPacient));

  // Afegim el contenidor "col" dins del contenidor "row"
  divRowPacient.appendChild(divColMalaltiaPacient);

  // Afegim el contenidor del pacient al formulari
  document.getElementById("dadesPacient").appendChild(divRowPacient);
}

function mostraGestioPacients(objecteRebut) {
    for (let pacient = 0; pacient < hospital.maximPacients; pacient++) {
      crearContingutDivPacient(pacient);
    }

    if (!conteClass(eleID_divPacient, "d-none")) {
        afegirClass(eleID_divPacient, "d-none");
    }
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacient.classList.toggle("d-none");
    amagaBotons();
}

function ocultaGestioPacients(objecteRebut) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacient.classList.toggle("d-none");
    mostraBotons();
}

function ocultaControls(objecteRebut) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divControls.classList.toggle("d-none");
    mostraBotons();
}

function crearHospital() {
    // Creem l'objecte Hospital amb les dades introduïdes formulari
    hospital = new Hospital (
      document.getElementById("inputNomHospital").value,
      document.getElementById("maximPacientsHospital").value,
      document.getElementById("maximMetgesHospital").value
    );

    // Ocultem aquest formulari
    ocultaGestioHospital();

    // Mostrem el formulari de gestió de pacients
    mostraGestioPacients();
}
