const RenJSConfig =  {
  'name': 'Live Donstu',
  'w': 1024,
  'h': 768,
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
    'background': 'assets/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': 'assets/gui/loaderloading-bar.png',
      'position': {
        'x': 256,
        'y': 460
      },
      'size': {
        'w': 500,
        'h': 128
      }
    }
  },
  'fonts': 'assets/gui/fonts.css',
  'guiConfig': 'story/GUI.yaml',
  storyConfig: 'story/Config.yaml',
  storySetup: 'story/Setup.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'logChoices': true,
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
