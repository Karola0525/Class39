class Player {
  /* constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  } */
  //NOVENO LEER LOS DATOS Y GUARDAR LOS VALORES EN PLAYERCOUNT
  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
//DECIMO ACTUALIZAR LA BASE DE DATOS E IR A LA CLASE FORM
  updateCount(count){
    database.ref('/').update({
      playerCount:count
    })
  }
}
