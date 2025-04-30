//baraja española de 40 cartas con id y referencia de imagen
const barajaEspañola = [
  { id: 1, img: 'oro1.png' },
  { id: 2, img: 'oro2.png' },
  { id: 3, img: 'oro3.png' },
  { id: 4, img: 'oro4.png' },
  { id: 5, img: 'oro5.png' },
  { id: 6, img: 'oro6.png' },
  { id: 7, img: 'oro7.png' },
  { id: 8, img: 'oro8.png' },
  { id: 9, img: 'oro9.png' },
  { id: 10, img: 'oro10.png' },
  //basto
  { id: 11, img: 'basto1.png' },
  { id: 12, img: 'basto2.png' },
  { id: 13, img: 'basto3.png' },
  { id: 14, img: 'basto4.png' },
  { id: 15, img: 'basto5.png' },
  { id: 16, img: 'basto6.png' },
  { id: 17, img: 'basto7.png' },
  { id: 18, img: 'basto8.png' },
  { id: 19, img: 'basto9.png' },
  { id: 20, img: 'basto10.png' },
  //espada
  { id: 21, img: 'espada1.png' },
  { id: 22, img: 'espada2.png' },
  { id: 23, img: 'espada3.png' },
  { id: 24, img: 'espada4.png' },
  { id: 25, img: 'espada5.png' },
  { id: 26, img: 'espada6.png' },
  { id: 27, img: 'espada7.png' },
  { id: 28, img: 'espada8.png' },
  { id: 29, img: 'espada9.png' },
  { id: 30, img: 'espada10.png' },
  //oro
  { id: 31, img: 'oro1.png' },
  { id: 32, img: 'oro2.png' },
  { id: 33, img: 'oro3.png' },
  { id: 34, img: 'oro4.png' },
  { id: 35, img: 'oro5.png' },
  { id: 36, img: 'oro6.png' },
  { id: 37, img: 'oro7.png' },
  { id: 38, img: 'oro8.png' },
  { id: 39, img: 'oro9.png' },
  { id: 40, img: 'oro10.png' }

];
//generador de mano aleatoria utilizando barajaEspañola
function generarMano() {
  const mano = [];
  while (mano.length < 5) {
    const carta = barajaEspañola[Math.floor(Math.random() * barajaEspañola.length)];
    if (!mano.includes(carta)) {
      mano.push(carta);
    }
  }
  return mano;
}

//mostrar mano en pantalla
function mostrarMano(mano) {
  const contenedorMano = document.getElementById('mano');
  contenedorMano.innerHTML = '';
  mano.forEach((carta, index) => {
    const img = document.createElement('img');
    img.src = `Cartas/${carta.img}`;
    img.alt = `Carta ${carta.id}`;
    img.style.width = '100px';
    img.style.marginRight = '10px';
    contenedorMano.appendChild(img);
  });
}


//función para repartir cartas














