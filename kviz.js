function priNacteni () {
    let kviz = document.querySelector('.kviz');

    let otazka = document.createElement('div');
    otazka.setAttribute('id', 'otazka');
    otazka.innerText = 'Fooooooo';

    let obsah = document.createElement('div');
    obsah.classList.add('obsah');

    let moznosti = document.createElement('div');
    moznosti.setAttribute('id', 'moznosti');

    let foto = document.createElement('div');
    foto.classList.add('foto');

    obsah.appendChild(moznosti);
    obsah.appendChild(foto);

    let obrazek = document.createElement('img')
    obrazek.setAttribute('id', 'obrazek');
    obrazek.src = 'obrazky/pivo.jpg';

    


    //kviz.appendChild()
    kviz.appendChild(otazka);
    kviz.appendChild(obsah);
    foto.appendChild(obrazek);
}

