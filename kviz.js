function priNacteni() {
  let kviz = document.querySelector(".kviz");

  let otazka = document.createElement("div");
  otazka.setAttribute("id", "otazka");
  otazka.innerText = "Fooooooo";

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
  obrazek.src = "obrazky/pivo.jpg";

  let odpovedi = document.createElement("ul");
  odpovedi.setAttribute("id", "odpovedi");
  moznosti.appendChild(odpovedi);

  odpovediNaOtazku.forEach(function necoOdpoved(odp, index)
  {
    let odpoved = document.createElement("li");
    odpoved.setAttribute("data-odpoved", index);
    odpoved.innerText = odp;
    
    odpovedi.appendChild(odpoved);
  });

  kviz.appendChild(otazka);
  kviz.appendChild(obsah);
  foto.appendChild(obrazek);
}



const odpovediNaOtazku = ["od1", "od2", "od3"];
