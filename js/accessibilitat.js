window.onload = function() {
  document.getElementById("iconaContrastEstandar").classList.add("text-muted");
  document.getElementById("iconaFontPetita").classList.add("text-muted");
};

/**
 * Activa el mode de contrast "Blanc/Negre"
 */
function contrastBlancNegre() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaContrastAlt = document.getElementById("iconaContrastBlancNegre");

  // En cas que el botó no estigui deshabilitat, fem la lògica preestablerta.
  // Si està deshabilitat, llavors no fem res.
  if (!iconaContrastAlt.classList.contains('text-muted')) {
    // Habilitem el botó deshabilitat
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-adjust.text-muted");
    if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

    // Deshabilitem el botó
    iconaContrastAlt.classList.add("text-muted");

    // Cambiem l'esquema de colors => posem tots els botons blaus a negre i els "hr" també
    // Obtenim tots els botons de la pàgina
    let botons = document.getElementsByClassName("btn");

    // Borrem qualsevol classe que modifiqui el color dels botons
    for (let boto = 0; boto < botons.length; boto++) {
      if (botons[boto].classList.contains('btn-success')) botons[boto].classList.remove("btn-success");
      if (botons[boto].classList.contains('btn-primary')) botons[boto].classList.remove("btn-primary");
      if (botons[boto].classList.contains('btn-warning')) botons[boto].classList.remove("btn-warning");

      if (!botons[boto].classList.contains('btn-dark')) botons[boto].classList.add("btn-dark");
    }

    // Cambiem el color dels "hr"
    let hrs = document.getElementsByTagName("hr");

    for (let hr = 0; hr < hrs.length; hr++) {
      hrs[hr].style.borderColor = "#343a40";
    }

    // Cambiem el color de fons a blanc tots els elements amb fons negre
    document.getElementsByTagName("body")[0].classList.add("bg-white");

    if (document.getElementsByTagName("body")[0].classList.contains('text-warning')) document.getElementsByTagName("body")[0].classList.remove("text-warning");
    if (document.getElementsByTagName("body")[0].classList.contains('text-success')) document.getElementsByTagName("body")[0].classList.remove("text-success");

    let elementsAmbBgDark = document.getElementsByClassName("bg-dark");
    let element = 0;

    while(elementsAmbBgDark.length > 0 && element < elementsAmbBgDark.length) {
      elementsAmbBgDark[element].classList.add("bg-white");
      elementsAmbBgDark[element].classList.remove("bg-dark");
    }

    // Invertim els colors de la barra d'accessibilitat
    document.getElementById("navBarraAccessibilitat").classList.add("bg-dark");
    document.getElementById("navBarraAccessibilitat").classList.remove("bg-white");
    let iconesBarraAccessibilitat = document.getElementsByClassName("fas");

    for (let icona = 0; icona < iconesBarraAccessibilitat.length; icona++) {
      if (iconesBarraAccessibilitat[icona].classList.contains("text-dark")) {
        iconesBarraAccessibilitat[icona].classList.add("text-white");
        iconesBarraAccessibilitat[icona].classList.remove("text-dark");
      }
    }

    let elementsAmbBorder = document.getElementsByClassName("border");
    for (let element = 0; element < elementsAmbBorder.length; element++) {
      if (elementsAmbBorder[element].classList.contains('border-warning')) elementsAmbBorder[element].classList.remove("border-warning");
      if (elementsAmbBorder[element].classList.contains('border-success')) elementsAmbBorder[element].classList.remove("border-success");
    }
  }
}

/**
 * Activa el mode de contrast "Negre/Groc"
 */
function contrastNegreGroc() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaContrastAlt = document.getElementById("iconaContrastNegreGroc");

  // En cas que el botó no estigui deshabilitat, fem la lògica preestablerta.
  // Si està deshabilitat, llavors no fem res.
  if (!iconaContrastAlt.classList.contains('text-muted')) {
    // Habilitem el botó deshabilitat
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-adjust.text-muted");
    if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

    // Deshabilitem el botó
    iconaContrastAlt.classList.add("text-muted");

    // Cambiem l'esquema de colors => posem tots els botons blaus a negre i els "hr" també
    // Obtenim tots els botons de la pàgina
    let botons = document.getElementsByClassName("btn");

    // Borrem qualsevol classe que modifiqui el color dels botons
    for (let boto = 0; boto < botons.length; boto++) {
      if (botons[boto].classList.contains('btn-primary')) botons[boto].classList.remove("btn-primary");
      if (botons[boto].classList.contains('btn-dark')) botons[boto].classList.remove("btn-dark");
      if (botons[boto].classList.contains('btn-success')) botons[boto].classList.remove("btn-success");

      if (!botons[boto].classList.contains('btn-warning')) botons[boto].classList.add("btn-warning");
    }

    // Cambiem el color dels "hr"
    let hrs = document.getElementsByTagName("hr");

    for (let hr = 0; hr < hrs.length; hr++) {
      hrs[hr].style.borderColor = "#ffc107";
    }

    // Cambiem el color de fons a negre tots els elements amb fons blanc
    if (document.getElementsByTagName("body")[0].classList.contains('bg-white'))
      document.getElementsByTagName("body")[0].classList.remove("bg-white");

    document.getElementsByTagName("body")[0].classList.add("bg-dark");

    if (document.getElementsByTagName("body")[0].classList.contains('text-dark')) document.getElementsByTagName("body")[0].classList.remove("text-dark");
    if (document.getElementsByTagName("body")[0].classList.contains('text-success')) document.getElementsByTagName("body")[0].classList.remove("text-success");

    document.getElementsByTagName("body")[0].classList.add("text-warning");

    let elementsAmbBgWhite = document.getElementsByClassName("bg-white");
    let element = 0;

    while(elementsAmbBgWhite.length > 0 && element < elementsAmbBgWhite.length) {
      elementsAmbBgWhite[element].classList.add("bg-dark");
      elementsAmbBgWhite[element].classList.remove("bg-white");
    }

    // Invertim els colors de la barra d'accessibilitat
    document.getElementById("navBarraAccessibilitat").classList.add("bg-white");
    document.getElementById("navBarraAccessibilitat").classList.remove("bg-dark");
    let iconesBarraAccessibilitat = document.getElementsByClassName("fas");

    for (let icona = 0; icona < iconesBarraAccessibilitat.length; icona++) {
      if (iconesBarraAccessibilitat[icona].classList.contains("text-white")) {
        iconesBarraAccessibilitat[icona].classList.add("text-dark");
        iconesBarraAccessibilitat[icona].classList.remove("text-white");
      }
    }

    let elementsAmbBorder = document.getElementsByClassName("border");
    for (let element = 0; element < elementsAmbBorder.length; element++) {
      if (elementsAmbBorder[element].classList.contains('border-success')) elementsAmbBorder[element].classList.remove("border-success");
      if (!elementsAmbBorder[element].classList.contains('border-warning')) elementsAmbBorder[element].classList.add("border-warning");
    }
  }
}

/**
 * Activa el mode de contrast "Negre/Verd"
 */
function contrastNegreVerd() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaContrastAlt = document.getElementById("iconaContrastNegreVerd");

  // En cas que el botó no estigui deshabilitat, fem la lògica preestablerta.
  // Si està deshabilitat, llavors no fem res.
  if (!iconaContrastAlt.classList.contains('text-muted')) {
    // Habilitem el botó deshabilitat
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-adjust.text-muted");
    if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

    // Deshabilitem el botó
    iconaContrastAlt.classList.add("text-muted");

    // Cambiem l'esquema de colors => posem tots els botons blaus a negre i els "hr" també
    // Obtenim tots els botons de la pàgina
    let botons = document.getElementsByClassName("btn");

    // Borrem qualsevol classe que modifiqui el color dels botons
    for (let boto = 0; boto < botons.length; boto++) {
      if (botons[boto].classList.contains('btn-primary')) botons[boto].classList.remove("btn-primary");
      if (botons[boto].classList.contains('btn-dark')) botons[boto].classList.remove("btn-dark");
      if (botons[boto].classList.contains('btn-warning')) botons[boto].classList.remove("btn-warning");

      if (!botons[boto].classList.contains('btn-success')) botons[boto].classList.add("btn-success");
    }

    // Cambiem el color dels "hr"
    let hrs = document.getElementsByTagName("hr");

    for (let hr = 0; hr < hrs.length; hr++) {
      hrs[hr].style.borderColor = "#28a745";
    }

    // Cambiem el color de fons a negre tots els elements amb fons blanc
    if (document.getElementsByTagName("body")[0].classList.contains('bg-white'))
      document.getElementsByTagName("body")[0].classList.remove("bg-white");

    document.getElementsByTagName("body")[0].classList.add("bg-dark");

    if (document.getElementsByTagName("body")[0].classList.contains('text-dark')) document.getElementsByTagName("body")[0].classList.remove("text-dark");
    if (document.getElementsByTagName("body")[0].classList.contains('text-warning')) document.getElementsByTagName("body")[0].classList.remove("text-warning");

    document.getElementsByTagName("body")[0].classList.add("text-success");

    let elementsAmbBgWhite = document.getElementsByClassName("bg-white");
    let element = 0;

    while(elementsAmbBgWhite.length > 0 && element < elementsAmbBgWhite.length) {
      elementsAmbBgWhite[element].classList.add("bg-dark");
      elementsAmbBgWhite[element].classList.remove("bg-white");
    }

    // Invertim els colors de la barra d'accessibilitat
    document.getElementById("navBarraAccessibilitat").classList.add("bg-white");
    document.getElementById("navBarraAccessibilitat").classList.remove("bg-dark");
    let iconesBarraAccessibilitat = document.getElementsByClassName("fas");

    for (let icona = 0; icona < iconesBarraAccessibilitat.length; icona++) {
      if (iconesBarraAccessibilitat[icona].classList.contains("text-white")) {
        iconesBarraAccessibilitat[icona].classList.add("text-dark");
        iconesBarraAccessibilitat[icona].classList.remove("text-white");
      }
    }

    let elementsAmbBorder = document.getElementsByClassName("border");
    for (let element = 0; element < elementsAmbBorder.length; element++) {
      if (elementsAmbBorder[element].classList.contains('border-warning')) elementsAmbBorder[element].classList.remove("border-warning");
      if (!elementsAmbBorder[element].classList.contains('border-success')) elementsAmbBorder[element].classList.add("border-success");
    }
  }
}

/**
 * Activa el mode de contrast "Estàndar"
 */
 function contrastEstandar() {
   // Obtenim l'icona a la que hem de canviar la classe
   let iconaContrastEstandar = document.getElementById("iconaContrastEstandar");

   // En cas que el botó no estigui deshabilitat, fem la lògica preestablerta.
   // Si està deshabilitat, llavors no fem res.
   if (!iconaContrastEstandar.classList.contains('text-muted')) {
     // Habilitem el botó deshabilitat
     let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-adjust.text-muted");
     if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

     // Deshabilitem el botó
     iconaContrastEstandar.classList.add("text-muted");

     // Cambiem l'esquema de colors => posem tots els botons blaus a negre i els "hr" també
     // Obtenim tots els botons de la pàgina
     let botons = document.getElementsByClassName("btn");

     // Borrem qualsevol classe que modifiqui el color dels botons
     for (let boto = 0; boto < botons.length; boto++) {
       if (botons[boto].classList.contains('btn-success')) botons[boto].classList.remove("btn-success");
       if (botons[boto].classList.contains('btn-dark')) botons[boto].classList.remove("btn-dark");
       if (botons[boto].classList.contains('btn-warning')) botons[boto].classList.remove("btn-warning");

       if (!botons[boto].classList.contains('btn-primary')) botons[boto].classList.add("btn-primary");
     }

     // Cambiem el color dels "hr"
     let hrs = document.getElementsByTagName("hr");

     for (let hr = 0; hr < hrs.length; hr++) {
       hrs[hr].style.borderColor = "green";
     }

     // Cambiem el color de fons a blanc tots els elements amb fons negre
     document.getElementsByTagName("body")[0].classList.add("bg-white");

     if (document.getElementsByTagName("body")[0].classList.contains('text-warning')) document.getElementsByTagName("body")[0].classList.remove("text-warning");
     if (document.getElementsByTagName("body")[0].classList.contains('text-success')) document.getElementsByTagName("body")[0].classList.remove("text-success");

     let elementsAmbBgDark = document.getElementsByClassName("bg-dark");
     let element = 0;

     while(elementsAmbBgDark.length > 0 && element < elementsAmbBgDark.length) {
       elementsAmbBgDark[element].classList.add("bg-white");
       elementsAmbBgDark[element].classList.remove("bg-dark");
     }

     // Invertim els colors de la barra d'accessibilitat
     document.getElementById("navBarraAccessibilitat").classList.add("bg-dark");
     document.getElementById("navBarraAccessibilitat").classList.remove("bg-white");
     let iconesBarraAccessibilitat = document.getElementsByClassName("fas");

     for (let icona = 0; icona < iconesBarraAccessibilitat.length; icona++) {
       if (iconesBarraAccessibilitat[icona].classList.contains("text-dark")) {
         iconesBarraAccessibilitat[icona].classList.add("text-white");
         iconesBarraAccessibilitat[icona].classList.remove("text-dark");
       }
     }

     let elementsAmbBorder = document.getElementsByClassName("border");
     for (let element = 0; element < elementsAmbBorder.length; element++) {
       if (elementsAmbBorder[element].classList.contains('border-warning')) elementsAmbBorder[element].classList.remove("border-warning");
       if (elementsAmbBorder[element].classList.contains('border-success')) elementsAmbBorder[element].classList.remove("border-success");
     }
   }
 }

/**
* Activa la font petita
*/
function fontPetita() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaFontPetita = document.getElementById("iconaFontPetita");

  // Habilitem el botó deshabilitat
  let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-font.text-muted");
  if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

  // Deshabilitem el botó
  iconaFontPetita.classList.add("text-muted");

  // Obtenim tots els elements de la pàgina
  let totsElsTitolsH1 = document.getElementsByTagName("h1");
  for (let titolH1 = 0; titolH1 < totsElsTitolsH1.length; titolH1++) {
    totsElsTitolsH1[titolH1].style.fontSize = 40 + 'px';
  }

  let totsElsTitolsH2 = document.getElementsByTagName("h2");
  for (let titolH2 = 0; titolH2 < totsElsTitolsH2.length; titolH2++) {
    totsElsTitolsH2[titolH2].style.fontSize = 38.4 + 'px';
  }

  let totsElsTitolsH4 = document.getElementsByTagName("h4");
  for (let titolH4 = 0; titolH4 < totsElsTitolsH4.length; titolH4++) {
    totsElsTitolsH4[titolH4].style.fontSize = 28.8 + 'px';
  }

  let totsElsBotons = document.getElementsByTagName("button");
  for (let boto = 0; boto < totsElsBotons.length; boto++) {
    totsElsBotons[boto].style.fontSize = 16 + 'px';
  }

  let totsElsLabels = document.getElementsByTagName("label");
  for (let label = 0; label < totsElsLabels.length; label++) {
    totsElsLabels[label].style.fontSize = 16 + 'px';
  }

  let totsElsInputs = document.getElementsByTagName("input");
  for (let input = 0; input < totsElsInputs.length; input++) {
    totsElsInputs[input].style.fontSize = 16 + 'px';
  }

  let totsElsSelects = document.getElementsByTagName("select");
  for (let select = 0; select < totsElsSelects.length; select++) {
    totsElsSelects[select].style.fontSize = 16 + 'px';
  }

  let totElsParagrafs = document.getElementsByTagName("p");
  for (let paragraf = 0; paragraf < totElsParagrafs.length; paragraf++) {
    totElsParagrafs[paragraf].style.fontSize = 16 + 'px';
  }
}

/**
* Activa la font mitjana
*/
function fontMitjana() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaFontMitjana = document.getElementById("iconaFontMitjana");

  let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-font.text-muted");
  if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

  // Deshabilitem el botó
  iconaFontMitjana.classList.add("text-muted");

  document.getElementsByTagName("body")[0].style.marginBottom = 100 + 'px';

  // Obtenim tots els elements de la pàgina
  let totsElsTitolsH1 = document.getElementsByTagName("h1");
  for (let titolH1 = 0; titolH1 < totsElsTitolsH1.length; titolH1++) {
    totsElsTitolsH1[titolH1].style.fontSize = (40 * 1.5) + 'px';
  }

  let totsElsTitolsH2 = document.getElementsByTagName("h2");
  for (let titolH2 = 0; titolH2 < totsElsTitolsH2.length; titolH2++) {
    totsElsTitolsH2[titolH2].style.fontSize = (38.4 * 1.5) + 'px';
  }

  let totsElsTitolsH4 = document.getElementsByTagName("h4");
  for (let titolH4 = 0; titolH4 < totsElsTitolsH4.length; titolH4++) {
    totsElsTitolsH4[titolH4].style.fontSize = (28.8 * 1.5) + 'px';
  }

  let totsElsBotons = document.getElementsByTagName("button");
  for (let boto = 0; boto < totsElsBotons.length; boto++) {
    totsElsBotons[boto].style.fontSize = (16 * 1.5) + 'px';
  }

  let totsElsLabels = document.getElementsByTagName("label");
  for (let label = 0; label < totsElsLabels.length; label++) {
    totsElsLabels[label].style.fontSize = (16 * 1.5) + 'px';
  }

  let totsElsInputs = document.getElementsByTagName("input");
  for (let input = 0; input < totsElsInputs.length; input++) {
    totsElsInputs[input].style.fontSize = (16 * 1.5) + 'px';
  }

  let totsElsSelects = document.getElementsByTagName("select");
  for (let select = 0; select < totsElsSelects.length; select++) {
    totsElsSelects[select].style.fontSize = (16 * 2) + 'px';
  }

  let totElsParagrafs = document.getElementsByTagName("p");
  for (let paragraf = 0; paragraf < totElsParagrafs.length; paragraf++) {
    totElsParagrafs[paragraf].style.fontSize = (16 * 1.5) + 'px';
  }
}

/**
* Activa la font mitjana
*/
function fontGran() {
  // Obtenim l'icona a la que hem de canviar la classe
  let iconaFontGran = document.getElementById("iconaFontGran");

  let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.fa-font.text-muted");
  if (botoDeshabilitat !== null) botoDeshabilitat.classList.remove("text-muted");

  // Deshabilitem el botó
  iconaFontGran.classList.add("text-muted");

  document.getElementsByTagName("body")[0].style.marginBottom = 150 + 'px';

  // Obtenim tots els elements de la pàgina
  let totsElsTitolsH1 = document.getElementsByTagName("h1");
  for (let titolH1 = 0; titolH1 < totsElsTitolsH1.length; titolH1++) {
    totsElsTitolsH1[titolH1].style.fontSize = (40 * 2) + 'px';
  }

  let totsElsTitolsH2 = document.getElementsByTagName("h2");
  for (let titolH2 = 0; titolH2 < totsElsTitolsH2.length; titolH2++) {
    totsElsTitolsH2[titolH2].style.fontSize = 38.4 + 'px';
  }

  let totsElsTitolsH4 = document.getElementsByTagName("h4");
  for (let titolH4 = 0; titolH4 < totsElsTitolsH4.length; titolH4++) {
    totsElsTitolsH4[titolH4].style.fontSize = (28.8 * 2) + 'px';
  }

  let totsElsBotons = document.getElementsByTagName("button");
  for (let boto = 0; boto < totsElsBotons.length; boto++) {
    totsElsBotons[boto].style.fontSize = (16 * 2) + 'px';
  }

  let totsElsLabels = document.getElementsByTagName("label");
  for (let label = 0; label < totsElsLabels.length; label++) {
    totsElsLabels[label].style.fontSize = (16 * 2) + 'px';
  }

  let totsElsInputs = document.getElementsByTagName("input");
  for (let input = 0; input < totsElsInputs.length; input++) {
    totsElsInputs[input].style.fontSize = (16 * 2) + 'px';
  }

  let totsElsSelects = document.getElementsByTagName("select");
  for (let select = 0; select < totsElsSelects.length; select++) {
    totsElsSelects[select].style.fontSize = (16 * 2) + 'px';
  }

  let totElsParagrafs = document.getElementsByTagName("p");
  for (let paragraf = 0; paragraf < totElsParagrafs.length; paragraf++) {
    totElsParagrafs[paragraf].style.fontSize = (16 * 2) + 'px';
  }
}
