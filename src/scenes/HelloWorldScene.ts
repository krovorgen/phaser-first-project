import sky from '../assets/sky.png';
import platform from '../assets/platform.png';
import star from '../assets/star.png';
import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';

export class HelloWorldScene extends Phaser.Scene {
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  constructor() {
    super('hello-world');
  }
  preload() {
    this.load.image('sky', sky);
    this.load.image('ground', platform);
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    this.platforms = this.physics.add.staticGroup();
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }
}
