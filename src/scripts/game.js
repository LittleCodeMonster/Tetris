var keyInfo = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40
};

var coordinatePlane = {
    originX: 0,
    originY: 600
};

class Player {
    constructor(name, elementId) {
        this.name = name;

        this.body = document.getElementById(elementId);

        this.x = 0;
        this.y = 0;
        this.updateBody();
    }

    moveLeft() {
        console.log('Moving left');
        this.x -= 10;
        this.updateBody();
    }

    moveRight() {
        console.log('Moving right');
        this.x += 10;
        this.updateBody();
    }

    moveUp() {
        console.log('Moving up');
        this.y += 10;
        this.updateBody();
    }

    moveDown() {
        console.log("Moving down");
        this.y -= 10;
        this.updateBody();
    }

    updateBody() {
        // this.body is null here and the below code results in an error
        this.body.style.position = 'relative';
        this.body.style.left = (coordinatePlane.originX + this.x) + 'px';
        this.body.style.top = (coordinatePlane.originY - this.y) + 'px';
    }
}

var player = null;

window.onload = (event) => {
    // Initialize game here
    player = new Player("Adventurer", "player");
};

window.onkeydown = (key) => {
    switch (key.keyCode) {
        case keyInfo.Right:
            player.moveRight();
            break;

        case keyInfo.Left:
            player.moveLeft();
            break;

        case keyInfo.Up:
            player.moveUp();
            break;

        case keyInfo.Down:
            player.moveDown();
            break;
    }
};