// Config phaser
const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Create variables
var bullets;
var asteroids;
var ship;
var speed;
var stats;
var lastFired = 0;
var isDown = false;
var mouseX = 0;
var mouseY = 0;
var points = 0;

function updatePoints() {
    let ponts = document.getElementById('points');
    ponts.innerHTML = `Puntuacion: ${points}`;
}


// Game Instance
var game = new Phaser.Game(config);


// Preload: 
// Make everything ready for the game 
function preload() {
    this.load.image('ship', 'assets/ship.png');
    this.load.image('bullet1', 'assets/bullet2.png');
    this.load.image('asteroid', 'assets/asteroidx.png');
    // this.load.spritesheet('asteroid', 'asteroid.png', 1024, 1024, 64);
}

// Create
// Create the game world

function create() {
    updatePoints()
    // Bullet Class
    var Bullet = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

            function Bullet(scene) {
                Phaser.GameObjects.Image.call(this, scene, 100, 1, 'bullet1');
                this.setScale(0.02)
                this.scene.physics.world.enableBody(this, 0);
                this.incX = 0;
                this.incY = 0;
                this.lifespan = 0;

                this.speed = Phaser.Math.GetSpeed(600, 1);
            },

        fire: function (x, y) {

            this.setActive(true);
            this.setVisible(true);

            //  Bullets fire from the middle of the screen to the given x/y
            this.setPosition(400, 300);

            // Calculate rotation between mouse and center
            var angle = Phaser.Math.Angle.Between(x, y, 400, 300);
            this.setRotation(angle);
            this.incX = Math.cos(angle);
            this.incY = Math.sin(angle);

            this.lifespan = 1000;
        },

        update: function (time, delta) {
            this.lifespan -= delta;

            this.x -= this.incX * (this.speed * delta);
            this.y -= this.incY * (this.speed * delta);

            if (this.lifespan <= 0) {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    var Asteroid = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

            function Asteroid(scene) {
                Phaser.GameObjects.Image.call(this, scene, 0, 0, 'asteroid');
                // Required to enable physics on the object
                this.scene.physics.world.enableBody(this, 0);
                // Set object inclination
                this.incX = 0;
                this.incY = 0;
                this.lifespan = 0;

                this.speed = Phaser.Math.GetSpeed(200, 1);
            },
        spawn: function () {
            this.lifespan = 1000;
            // Asteroids are going to appear at any of 4 sides
            // Select one of 4 sides to span
            // 0 = up
            // 1 = right
            // 2 = down
            // 3 = left 
            let _side = Phaser.Math.Between(0, 3);

            switch (_side) {
                case 0:
                    // up
                    this.x = Phaser.Math.Between(0, 800);
                    this.y = -50;
                    break;
                case 1:
                    // right
                    this.x = 800;
                    this.y = Phaser.Math.Between(0, 600);
                    break;
                case 2:
                    // down
                    this.x = Phaser.Math.Between(0, 800);
                    this.y = 600;
                    break;
                case 3:
                    // left
                    this.x = -50;
                    this.y = Phaser.Math.Between(0, 600);
                    break;

                default:
                    break;
            }

            var angle = Phaser.Math.Angle.Between(this.x, this.y, 400, 300);
            this.incX = Math.cos(angle);
            this.incY = Math.sin(angle);

        },
        update: function (time, delta) {
            this.lifespan -= delta;
            this.x += this.incX * (this.speed * delta);
            this.y += this.incY * (this.speed * delta);

            // if (this.lifespan <= 0)
            // {
            //     this.setActive(false);
            //     this.setVisible(false);
            // }
        }
    })

    asteroids = this.add.group({
        classType: Asteroid,
        maxSize: 50,
        runChildUpdate: true
    })

    // Add asteroids every 1 second
    this.time.addEvent({
        delay: 1000,
        callback() {
            // Create asteroid
            let asteroid = asteroids.get()
            if (asteroid) {
                asteroid.spawn()
            }
        },
        callbackScope: this,
        loop: true,
    })

    bullets = this.add.group({
        classType: Bullet,
        maxSize: 50,
        runChildUpdate: true
    });


    // Setup physics collision
    this.physics.add.collider(bullets, asteroids, (bullet, asteroid) => {
        // Destroy bullet and asteroid
        if (asteroid) {
            asteroid.destroy();
            bullet.destroy();
            points += 1;
            updatePoints();
        }
    });


    // Create the ship
    ship = this.add.sprite(400, 300, 'ship').setDepth(1);
    ship.setScale(0.2)


    // Detect mouse movement
    this.input.on('pointermove', function (pointer) {
        mouseX = pointer.x;
        mouseY = pointer.y;
    });

    // Detect mouse click
    this.input.on('pointerup', function (pointer) {
        isDown = false;
    });

    this.input.on('pointerdown', function (pointer) {
        isDown = true;
        mouseX = pointer.x;
        mouseY = pointer.y;
    });

}

// Update:
// Execute every frame, useful to setup movement
function update(time, delta) {

    // If mouse is down and the last fire was more than 50ms ago
    if (isDown && time > lastFired) {
        // Create a bullet
        const bullet = bullets.get();
        // Check if the instance is not null
        if (bullet) {
            // Fire the bullet
            bullet.fire(mouseX, mouseY);
            // Set fire time
            lastFired = time + 50;
        }
    }

    // Calculate ship rotation based on mouse location
    // 
    //                    Mouse
    //                  /
    //                 /
    //                /
    //               /
    //       -------A Ship

    // Radians = Degrees * PI / 180
    // 90 = PI / 2
    // 180 = PI
    // 270 = 3PI / 2
    // 360 = 2PI
    // Circunference = 2 * PI * Radius

    // We substract PI / 2 because the ship is pointing up.
    ship.setRotation(Phaser.Math.Angle.Between(mouseX, mouseY, ship.x, ship.y) - Math.PI / 2);

}
