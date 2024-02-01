class Game {
  constructor() {}
//.REF: REFERENCIAR LOCACION RAIZ
//.ON()LEE LOS CAMBIOS DE LA DB
//.VAL() PARA OBTENER EL CONTENIDO DE UN OBJETO JS
//.SET()PARA GUARDAR DATOS EN UNA REFERENCIA
//SEGUNDO EXPLICAR FUNCIÓN PARA LEER EL ESTADO DEL JUEGO DESDE LA BASE DE DATOS
  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
    });
  
    }
//TERCERO EXPLICAR FUNCIÓN PARA ACTUALIZAR GAMESTATE
    update(state){
      database.ref("/").update({
        gameState:state
      });
    }

    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      //CUARTO EXPLICAR ESTILO DEL TITULO
      //EXPLICAR SELECTOR DE CLASE EN ARCHIVO STYLE, E IR AL SKETCH
      form.titleImg.class("gameTitleAfterEffect");
    }
    

  start() {
    form = new Form();
    form.display();
    player = new Player();

    player.getCount();
    //SEXTO CREAR SPRITES DE JUGADORES
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }
  play(){
    this.handleElements();
    //SÉPTIMO MOSTRAR SPRITES EN EL MÉTODO PLAY E IR AL SKETCH
    drawSprites();
  }


}
