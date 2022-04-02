function priNacteni() {
  indexOtazky = 0;
  vytvorStrukturuOtazky(poleVotazek[indexOtazky]);
}

function vytvorStrukturuOtazky(otazecka) {
  let kviz = document.querySelector(".kviz");

  //zbavime se deti pokud existujou
  kviz.innerHTML = "";

  let otazka = document.createElement("h3");
  otazka.setAttribute("id", "otazka");
  otazka.innerText = otazecka.text;

  let obsah = document.createElement("div");
  obsah.classList.add("obsah");

  let moznosti = document.createElement("div");
  moznosti.setAttribute("id", "moznosti");

  let foto = document.createElement("div");
  foto.classList.add("foto");

  obsah.appendChild(foto);
  obsah.appendChild(moznosti);
  let obrazek = document.createElement("img");
  obrazek.setAttribute("id", "obrazek");
  obrazek.src = otazecka.ilustrace;

  let odpovedi = document.createElement("ul");
  odpovedi.setAttribute("id", "odpovedi");
  moznosti.appendChild(odpovedi);

  otazecka.odpovedi.forEach(function necoOdpoved(odp, index) {
    let odpoved = document.createElement("li");
    odpoved.setAttribute("data-odpoved", index);
    odpoved.innerText = odp;
    odpoved.onclick = function click() {
      otazecka.odpoved = index;
      if (poleVotazek.length > indexOtazky + 1) {
        vytvorStrukturuOtazky(poleVotazek[++indexOtazky]);
      } else vyhodnot();
    };

    odpovedi.appendChild(odpoved);
  });

  kviz.appendChild(otazka);
  kviz.appendChild(obsah);
  foto.appendChild(obrazek);
}

function vyhodnot() {
  let kviz = document.querySelector(".kviz");
  kviz.innerHTML = "";
  kviz.style.display = "none";
  let vysledek = document.querySelector(".vysledek");
  vysledek.style.display = "block";

  let x = 0;

  poleVotazek.forEach(function vyhodnotitOdpovedi(odp, index) {
    let fracek = document.createElement("div");
    vysledek.appendChild(fracek);
    let fakan = document.createElement("h3");
    fracek.appendChild(fakan);
    fakan.innerText = odp.text;
    let decka = document.createElement("p");
    let indexZvoleneOdpovedi = odp.odpoved;
    let textZvoleneOdpovedi = odp.odpovedi[indexZvoleneOdpovedi];
    decka.innerText = "Tvoje odpoveď byla: " + textZvoleneOdpovedi;
    fracek.appendChild(decka)
    let decko = document.createElement("p");
    fracek.appendChild(decko)

    if (odp.odpoved === odp.spravnaOdpoved) {
      // dobre nooo...
      x++;
      decko.innerText = "A je to tak.";
    } else {
      decko.innerText = "Tak to není, správná odpověď je: " + odp.odpovedi[odp.spravnaOdpoved];
    }
    
  });

  let nadpis = document.createElement("h2");
  nadpis.innerHTML =
    "Správně " +
    x +
    " z " +
    poleVotazek.length +
    " otázek. Úspěšnost " +
    Math.round(100 * (x / poleVotazek.length)) +
    " %";
  vysledek.appendChild(nadpis);
}

let indexOtazky = 0;
let poleVotazek = [
  (otazecka1 = {
    text: "Een kat in de zak kopen (koupit kočku v pytli)",
    ilustrace: "obrazky/kat.jpg",
    odpovedi: ["Potmě je každká kočka černá", "Koupit zajíce v pytli", "Brát si někoho jenom pro peníze"],
    spravnaOdpoved: 1,
    odpoved: -1,
  }),
  (otazecka2 = {
    text: "Nu breekt mijn klomp! (Teď se mi rozbil dřevák)",
    ilustrace: "obrazky/klomp.png",
    odpovedi: ["Už je potřeba jít nakupovat", "Ztratil/a jsem pevnou půdu pod nohama", "Tak to mě překvapuje"],
    spravnaOdpoved: 2,
    odpoved: -1,
  }),
  {
    text: "De bloemetjes buiten zetten (Dát kytičky ven)",
    ilustrace: "obrazky/bloem.png",
    odpovedi: ["Vyhodit si z kopýtka", "Zbavit se marihuany", "Přijít s křížkem po funuse"],
    spravnaOdpoved: 0,
    odpoved: -1,
  },
];
