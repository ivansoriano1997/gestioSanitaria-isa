window.onload = function() {
  document.getElementById("iconaContrastEstandar").classList.add("text-muted");
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
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.text-muted");
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

    if (elementsAmbBgDark.length > 0) {
      while(elementsAmbBgDark.length > 0 && element < elementsAmbBgDark.length) {
        elementsAmbBgDark[element].classList.add("bg-white");
        elementsAmbBgDark[element].classList.remove("bg-dark");
      }
    } else  {
      if (elementsAmbBgDark[element].id !== "navBarraAccessibilitat") {
        elementsAmbBgDark[element].classList.add("bg-white");
        elementsAmbBgDark[element].classList.remove("bg-dark");
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
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.text-muted");
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

    if (document.getElementsByTagName("body")[0].classList.contains('text-success')) {
      document.getElementsByTagName("body")[0].classList.remove("text-success");
    }

    document.getElementsByTagName("body")[0].classList.add("text-warning");

    let elementsAmbBgWhite = document.getElementsByClassName("bg-white");
    let element = 0;

    if (elementsAmbBgWhite.length > 0) {
      while(elementsAmbBgWhite.length > 0 && element < elementsAmbBgWhite.length) {
        elementsAmbBgWhite[element].classList.add("bg-dark");
        elementsAmbBgWhite[element].classList.remove("bg-white");
      }
    } else {
      if (elementsAmbBgWhite[element].id !== "navBarraAccessibilitat") {
        elementsAmbBgWhite[element].classList.add("bg-dark");
        elementsAmbBgWhite[element].classList.remove("bg-white");
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
    let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.text-muted");
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

    if (document.getElementsByTagName("body")[0].classList.contains('text-warning')) {
      document.getElementsByTagName("body")[0].classList.remove("text-warning");
    }

    document.getElementsByTagName("body")[0].classList.add("text-success");

    let elementsAmbBgWhite = document.getElementsByClassName("bg-white");
    let element = 0;

    if (elementsAmbBgWhite.length > 0) {
      while(elementsAmbBgWhite.length > 0 && element < elementsAmbBgWhite.length) {
        elementsAmbBgWhite[element].classList.add("bg-dark");
        elementsAmbBgWhite[element].classList.remove("bg-white");
      }
    } else {
      if (elementsAmbBgWhite[element].id !== "navBarraAccessibilitat") {
        elementsAmbBgWhite[element].classList.add("bg-dark");
        elementsAmbBgWhite[element].classList.remove("bg-white");
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
     let botoDeshabilitat = document.querySelector("nav#navBarraAccessibilitat i.text-muted");
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

     if (elementsAmbBgDark.length > 0) {
       while(elementsAmbBgDark.length > 0 && element < elementsAmbBgDark.length) {
         elementsAmbBgDark[element].classList.add("bg-white");
         elementsAmbBgDark[element].classList.remove("bg-dark");
       }
     } else  {
       if (elementsAmbBgDark[element].id !== "navBarraAccessibilitat") {
         elementsAmbBgDark[element].classList.add("bg-white");
         elementsAmbBgDark[element].classList.remove("bg-dark");
       }
     }

     let elementsAmbBorder = document.getElementsByClassName("border");
     for (let element = 0; element < elementsAmbBorder.length; element++) {
       if (elementsAmbBorder[element].classList.contains('border-warning')) elementsAmbBorder[element].classList.remove("border-warning");
       if (elementsAmbBorder[element].classList.contains('border-success')) elementsAmbBorder[element].classList.remove("border-success");
     }
   }
 }
