class Player {
    constructor() {
        this.width = 10;
        this.height = 5;
        this.positionX = 50 - (this.width/2);
        this.positionY = 0;
        this.domElement = null;

        this.createDomElement();

    }

    createDomElement() {

        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";


        // 
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);



    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";



    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";

        
    }
}

class Obstacle {
    constructor() {
        this.width = 20;
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {

        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";


        // append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);

    }
    moveDown() {
        this.positionY -= 2;
        this.domElement.style.bottom = this.positionY + "vh";

        
    }
}


const player = new Player();

const obstacleArr = []; // will store instaces of the class obstacle


//create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle);
}, 2000)

// move all obstacles
setInterval(() => {
    obstacleArr.forEach( (obstacleInstance) => {
        //move
        obstacleInstance.moveDown();
        
        //remove if outside
        if( obstacleInstance.positionY < 0 - obstacleInstance.height){
               obstacleInstance.domElement.remove();
               obstaclesArr.shift(); 
        }

        //DETECT COLLISION
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width> obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            // Collision detected!
            console.log("game over my fren! ");
            //location.href = "./gameover.html";

        }
    
    
    
    
    });

}, 200);

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
})
