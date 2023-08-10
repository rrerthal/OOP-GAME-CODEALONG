class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 5;
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

        console.log(`moving right... ${this.positionX}`);
    }
}

class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 100;
        this.width = 20;
        this.height = 5;
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

        console.log("moving down")
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
        obstacleInstance.moveDown();
    });

}, 200);

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
})
