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
    let vyhodnoceni = document.createElement("div");
    vysledek.appendChild(vyhodnoceni);
    let textOtazky = document.createElement("h3");
    vyhodnoceni.appendChild(textOtazky);
    textOtazky.innerText = odp.text;
    let textOdpovedi = document.createElement("p");
    let indexZvoleneOdpovedi = odp.odpoved;
    let textZvoleneOdpovedi = odp.odpovedi[indexZvoleneOdpovedi];
    textOdpovedi.innerText = "Tvoje odpoveď byla: " + textZvoleneOdpovedi;
    vyhodnoceni.appendChild(textOdpovedi);
    let textVyhodnoceni = document.createElement("p");
    vyhodnoceni.appendChild(textVyhodnoceni);

    if (odp.odpoved === odp.spravnaOdpoved) {
      x++;
      textVyhodnoceni.innerText = "A je to tak.";
    } else {
      textVyhodnoceni.innerText =
        "Tak to není, správná odpověď je: " + odp.odpovedi[odp.spravnaOdpoved];
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
    odpovedi: [
      "Potmě je každká kočka černá",
      "Koupit zajíce v pytli",
      "Brát si někoho jenom pro peníze",
    ],
    spravnaOdpoved: 1,
    odpoved: -1,
  }),
  (otazecka2 = {
    text: "Nu breekt mijn klomp! (Teď se mi rozbil dřevák)",
    ilustrace: "obrazky/klomp.png",
    odpovedi: [
      "Už je potřeba jít nakupovat",
      "Ztratil/a jsem pevnou půdu pod nohama",
      "Tak to mě překvapuje",
    ],
    spravnaOdpoved: 2,
    odpoved: -1,
  }),
  {
    text: "De bloemetjes buiten zetten (Dát kytičky ven)",
    ilustrace: "obrazky/bloem.png",
    odpovedi: [
      "Vyhodit si z kopýtka",
      "Zbavit se marihuany",
      "Přijít s křížkem po funuse",
    ],
    spravnaOdpoved: 0,
    odpoved: -1,
  },
];
