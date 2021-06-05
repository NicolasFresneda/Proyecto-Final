// ¿Cómo definir un arreglo?
let arregloA = [];
let arregloB = new Array(10);
let arregloMapa = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// Como construimos nuestro mapa
let mapa = []; // 1 - [ .... ]



let coinX;
let coinY;
let coinCol;
let coinFil;
let coinTrapped;

let xPos; // pixeles
let yPos; // pixeles
let xPosa; // pixeles
let yPosa; // pixeles
let pjCol; // validamos el mapa en la matriz
let pjFil; // validamos el mapa en la matriz
let xrange;
let yrange;
let enemyPosX; // pixeles
let enemyPosY; // pixeles
let enemyCol; // validamos el mapa en la matriz
let enemyFil; // validamos el mapa en la matriz
let vistap; // direccion a la que observa el personaje
let vistap2
let swerd2;// switch de la espada
let magic; // switch de magia
var img = new Image();   // Create new img element



function setup() {

  createCanvas(400, 400);

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image(60, 45); // Using optional size for image


  // Load an image of intrinsic size 300x227 in CSS pixels
  image.src = 'Group 18.png';

  function drawImageActualSize() {
    // Use the intrinsic size of image in CSS pixels for the canvas element
    ctx.drawImage(this, 0, 0, 60, 45);
  }

  image.onload = drawImageActualSize; // Draw when image has loaded


  pjCol = 0; // pixeles
  pjFil = 0; // pixeles
  xrange = 0;
  yrange = 0;
  xPos = (pjCol * 40) + 20; // validamos el mapa en la matriz
  yPos = (pjFil * 40) + 20; // validamos el mapa en la matriz
  xPosa = xPos;
  yPosa = yPos;
  vistap = 1; // 1 abajo, 2 izquierda,3 arriba, 4 derecha
  vistap2 = 1;
  sword = 0;
  magic = 0;
  sword2 = 0;

  // Crear Arreglo de arreglos
  for (let index = 0; index < 10; index++) {
    mapa.push(new Array(10));
  }

  // asignar valores iniciales
  for (let fil = 0; fil < 10; fil++) {
    for (let col = 0; col < 10; col++) {
      mapa[fil][col] = 0;
    }
  }
  //console.log(arregloMapa)
  // seleccionamos algunos [fila][col] --> y, x
  mapa[2][0] = 1;
  mapa[7][2] = 1;
  mapa[0][3] = 1;
  mapa[4][5] = 1;
  mapa[2][8] = 1;
  mapa[3][8] = 1;
  mapa[4][8] = 1;
  console.log(mapa)

  sword = 0;
  coinCol = 5;
  coinFil = 5;
  coinX = (coinCol * 40) + 20;
  coinY = (coinFil * 40) + 20;
  coinTrapped = false;

  enemyCol = 8; // validamos el mapa en la matriz
  enemyFil = 8; // validamos el mapa en la matriz
  enemyPosX = (enemyCol * 40) + 20; // pixeles
  enemyPosY = (enemyFil * 40) + 20; // pixeles


}

function draw() {
  background(220);
  // pintamos basados en los valores de la matriz
  for (let fil = 0; fil < 10; fil++) {
    for (let col = 0; col < 10; col++) {
      if (mapa[fil][col] === 0) {
        fill(255);
      } else if (mapa[fil][col] === 1) {
        fill(0);
      }
      stroke(0);
      rect(col * 40, fil * 40, 40, 40);
    }
  }



  if (sword2 == 1) {

    if (vistap2 == 1) {
      ellipse((xPos - 40), (yPos), 50, 50);
    }
    else if (vistap2 == 2) {
      ellipse((xPos + 40), (yPos), 50, 50);
    } else if (vistap2 == 3) {
      ellipse((xPos), (yPos - 40), 50, 50);
    } else if (vistap2 == 4) {
      ellipse((xPos), (yPos + 40), 50, 50);
    }
    sword2 = 0;
  }

  if (magic == 1) {

    if (vistap2 == 1) {
      for(let col = 0; col < 10; col++) {
      ellipse((xPos - 40*col), (yPos), 50, 50);
      }
    } else if (vistap2 == 2) {
      for(let col = 0; col < 10; col++) {
      ellipse((xPos + 40*col), (yPos), 50, 50);
      }
    } else if (vistap2 == 3) {
      for(let col = 0; col < 10; col++) {
      ellipse((xPos), (yPos - 40*col), 50, 50);
      }
    } else if (vistap2 == 4) {
      for(let col = 0; col < 10; col++) {
      ellipse((xPos), (yPos + 40*col), 50, 50);
      }
    }
    magic = 0;
  }


  if (!coinTrapped) {
    fill(255, 255, 0);
    ellipse(coinX, coinY, 15, 15);
  }
  fill(255, 0, 0);
  ellipse(xPos, yPos, 30, 30);

  fill(0, 255, 0);
  ellipse(enemyPosX, enemyPosY, 30, 30);

}

function keyPressed() {
  switch (key) {
    case 'a': // izquierda
      if (pjCol - 1 >= 0) {
        if (mapa[pjFil][pjCol - 1] === 0) {
          pjCol -= 1;
          vistap2 = 1;
        }
      }
      break;
    case 'd': // derecha
      if (pjCol + 1 < 10) {
        if (mapa[pjFil][pjCol + 1] === 0) {
          pjCol += 1;
          vistap2 = 2;
        }
      }
      break;
    case 'w': // arriba
      if (pjFil - 1 >= 0) {
        if (mapa[pjFil - 1][pjCol] === 0) {
          pjFil -= 1;
          vistap2 = 3;
        }
      }
      break;
    case 's': // abajo
      if (pjFil + 1 < 10) {
        if (mapa[pjFil + 1][pjCol] === 0) {
          pjFil += 1;
          vistap2 = 4;
        }
      }
      break;
    case 'z': // estocada
      sword2 = 1;
      break;
    case 'x': // magia
      magic = 1;
      break;
  }
  xPos = (pjCol * 40) + 20; // validamos el mapa en la matriz
  yPos = (pjFil * 40) + 20; // validamos el mapa en la matriz
  verifyItem();
  verifyEnemy();
}

function verifyItem() {
  if (dist(xPos, yPos, coinX, coinY) < 5) {
    coinTrapped = true;
    // ...
    // ...
  }
}

function verifyEnemy() {
  if (dist(xPos, yPos, enemyPosX, enemyPosY) < 5) {
    coinTrapped = false;
    coinCol = 5;
    coinFil = 5;
    coinX = (coinCol * 40) + 20;
    coinY = (coinFil * 40) + 20;
    pjCol = 0; // pixeles
    pjFil = 0; // pixeles
    xPos = (pjCol * 40) + 20; // validamos el mapa en la matriz
    yPos = (pjFil * 40) + 20; // validamos el mapa en la matriz
    // ...
    // ...
  }
}