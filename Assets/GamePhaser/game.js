const TILE_SIZE = 16;
const WORLD_WIDTH = 40 * TILE_SIZE;
const WORLD_HEIGHT = 20 * TILE_SIZE;

class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
        
        this.player = null;
        this.platforms = null;
        this.cursors = null;
        this.balls = null;
        this.gameOverText = null;
        this.livesText = null;
        this.restartText = null;
    }

    init() {
        this.gameOver = false;
        this.isPlayerInvincible = false;
        this.lives = 3;
    }

    preload() {
        this.load.setPath('assets/');
        this.load.image('background', 'background.png');
        this.load.image('rock', 'rock.png');
        this.load.image('platform_img', 'platform.png');
        this.load.spritesheet('player_idle', 'Dude_Monster_Idle_4.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('player_run', 'Dude_Monster_Run_6.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('player_jump', 'Dude_Monster_Jump_8.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('player_death', 'Dude_Monster_Death_8.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('player_hurt', 'Dude_Monster_Hurt_4.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.add.image(0, 0, 'background')
            .setOrigin(0, 0)
            .setDisplaySize(WORLD_WIDTH, WORLD_HEIGHT);
        
        this.platforms = this.physics.add.staticGroup();
        collisions.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol === 1) {
                    const pixelX = x * TILE_SIZE;
                    const pixelY = y * TILE_SIZE;
                    let platformTile = this.platforms.create(pixelX, pixelY, 'platform_img')
                        .setOrigin(0, 0);
                    platformTile.setDisplaySize(TILE_SIZE, TILE_SIZE);
                    platformTile.refreshBody();
                }
            });
        });

        this.player = this.physics.add.sprite(100, 100, 'player_idle');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1); 
        this.player.body.setSize(16, 32);
        this.player.body.setOffset(8, 0);

        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNumbers('player_idle', { start: 0, end: 3 }), frameRate: 8, repeat: -1 });
        this.anims.create({ key: 'run', frames: this.anims.generateFrameNumbers('player_run', { start: 0, end: 5 }), frameRate: 12, repeat: -1 });
        this.anims.create({ key: 'jump', frames: this.anims.generateFrameNumbers('player_jump', { start: 0, end: 7 }), frameRate: 12, repeat: 0 });
        this.anims.create({ key: 'death', frames: this.anims.generateFrameNumbers('player_death', { start: 0, end: 7 }), frameRate: 10, repeat: 0, hideOnComplete: true });
        this.anims.create({ key: 'hurt', frames: this.anims.generateFrameNumbers('player_hurt', { start: 0, end: 3 }), frameRate: 10, repeat: 0 });

        this.player.anims.play('idle', true);

        let graphics = this.add.graphics();
        graphics.fillStyle(0xffffff, 0.7);
        graphics.fillRect(0, 0, 2, 2);
        graphics.generateTexture('trail_particle', 2, 2);
        graphics.destroy();

        this.balls = this.physics.add.group();

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.balls, this.platforms, this.hitGround, null, this);
        this.physics.add.overlap(this.player, this.balls, this.hitByBall, (player, ball) => {
            return !this.isPlayerInvincible;
        }, this);

        const keys = this.input.keyboard.addKeys('W,S,A,D,Z,Q,UP,DOWN,LEFT,RIGHT');
        const cursors = this.input.keyboard.createCursorKeys();
        this.cursors = { ...keys, ...cursors };

        this.time.addEvent({ delay: 100, callback: this.spawnBall, callbackScope: this, loop: true });

        this.livesText = this.add.text(8, 8, 'Vies: ' + this.lives, { fontSize: '16px', fill: '#fff', fontFamily: 'Arial, sans-serif' }).setScrollFactor(0);
        this.gameOverText = this.add.text(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 'GAME OVER', { fontSize: '48px', fill: '#ff0000', fontFamily: 'Arial, sans-serif', stroke: '#000', strokeThickness: 4 }).setOrigin(0.5).setVisible(false).setScrollFactor(0);
        this.restartText = this.add.text(WORLD_WIDTH / 2, WORLD_HEIGHT / 2 + 40, 'Cliquer pour rejouer', { fontSize: '24px', fill: '#fff', fontFamily: 'Arial, sans-serif', stroke: '#000', strokeThickness: 2 }).setOrigin(0.5).setVisible(false).setInteractive().setScrollFactor(0);
        
        this.restartText.on('pointerdown', () => {
            this.scene.restart();
        });
    }

    update() {
        if (this.gameOver || (this.player.anims.currentAnim && this.player.anims.currentAnim.key === 'death')) {
            return;
        }

        if (this.player.anims.currentAnim.key === 'hurt' && this.player.anims.currentFrame.isLast) {
            this.player.anims.play('idle', true);
        }

        if (this.player.anims.currentAnim.key === 'hurt') {
            return;
        }

        if (this.cursors.LEFT.isDown || this.cursors.A.isDown || this.cursors.Q.isDown) {
            this.player.setVelocityX(-180);
            this.player.setFlipX(true);
        }
        else if (this.cursors.RIGHT.isDown || this.cursors.D.isDown) {
            this.player.setVelocityX(180);
            this.player.setFlipX(false);
        }
        else {
            this.player.setVelocityX(0);
        }

        if (this.player.body.touching.down) {
            if (this.player.body.velocity.x !== 0) {
                this.player.anims.play('run', true);
            } else {
                this.player.anims.play('idle', true);
            }
            if ((this.cursors.UP.isDown || this.cursors.W.isDown || this.cursors.Z.isDown)) {
                this.player.setVelocityY(-250);
                this.player.anims.play('jump', true);
            }
        } else {
            this.player.anims.play('jump', true);
        }
    }

    spawnBall() { 
        if (this.gameOver) return;
        let x = Phaser.Math.Between(0, WORLD_WIDTH);
        let y = -50;
        let ball = this.balls.create(x, y, 'rock');
        
        ball.setScale(0.7);
        ball.setBounce(0.5);
        ball.setCollideWorldBounds(false); 
        ball.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(300, 600));

        const emitter = this.add.particles(0, 0, 'trail_particle', {
            speed: { min: -20, max: 20 },
            scale: { start: 1, end: 0 },
            alpha: { start: 1, end: 0 },
            lifespan: 300,
            frequency: 100,
            blendMode: 'ADD'
        });
        
        emitter.startFollow(ball);
        ball.emitter = emitter;
    }

    hitByBall(player, ball) {
        if (ball.emitter) {
            ball.emitter.stop();
            this.time.delayedCall(1000, () => {
                if (ball.emitter) ball.emitter.destroy();
            });
        }
        ball.destroy(); 
        
        this.lives--; 
        this.livesText.setText('Vies: ' + this.lives);
        if (this.lives <= 0) {
            this.gameOver = true;
            this.player.setVelocity(0,0);
            this.player.anims.play('death'); 
            this.player.once('animationcomplete', () => { 
                this.gameOverText.setVisible(true);
                this.restartText.setVisible(true);
            }, this);
            this.cameras.main.shake(300, 0.01);
        } else {
            this.isPlayerInvincible = true;
            this.player.anims.play('hurt', true);
            this.player.setVelocity(0, -100);
            
            this.tweens.add({
                targets: player,
                alpha: 0.5,
                ease: 'Cubic.easeOut',
                duration: 150,
                repeat: 7, 
                yoyo: true,
                onComplete: () => {
                    this.isPlayerInvincible = false;
                    this.player.setAlpha(1);
                }
            });
        }
    }

    hitGround(ball, platform) {
        if (ball.emitter) {
            ball.emitter.stop();
            this.time.delayedCall(1000, () => {
                if (ball.emitter) ball.emitter.destroy();
            });
        }
        ball.destroy();
    }
}

const config = {
    type: Phaser.AUTO,
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH 
    },
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 }, 
            debug: false
        }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);