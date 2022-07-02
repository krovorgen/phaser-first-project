import { HelloWorldScene } from '../scenes/HelloWorldScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [HelloWorldScene],
};

const game = new Phaser.Game(config);
