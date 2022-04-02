function priNacteni() {
    vytvorStrukturuOtazky(poleVotazek[0]);
}



function vytvorStrukturuOtazky(otazecka) {
  let kviz = document.querySelector(".kviz");

  //zbavime se deti pokud existujou
  kviz.innerHTML = '';

  let otazka = document.createElement("div");
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

  otazecka.odpovedi.forEach(function necoOdpoved(odp, index)
  {
    let odpoved = document.createElement("li");
    odpoved.setAttribute("data-odpoved", index);
    odpoved.innerText = odp;
    odpoved.onclick = function click() { vytvorStrukturuOtazky(poleVotazek[1]) };
    
    odpovedi.appendChild(odpoved);
  });

  kviz.appendChild(otazka);
  kviz.appendChild(obsah);
  foto.appendChild(obrazek);
}


let poleVotazek = [otazecka1 = {
    text: 'palmicka vole?',
    ilustrace: 'obrazky/pivo.jpg',
    odpovedi: ["odp1", "odp2", "odp3"],
    spravnaOdpoved : 1
}, otazecka2 = {
    text: 'palmicka2 vole?',
    ilustrace: 'obrazky/pivo.jpg',
    odpovedi: ["od", "p2", "op3"],
    spravnaOdpoved : 0
}
]