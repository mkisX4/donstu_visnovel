class GameMap extends RenJS.Plugin {
  config = null;
  infoPaC = null;

  onCall() {
    const TheGame = this.game;
    TheGame.canvas.style.display = "none";
    const mapBody = TheGame.canvas.parentElement.getElementsByTagName("div")[5];
    mapBody.style.display = "block";

    mapBody.parentElement.setAttribute('style', 'background-image: url(http://127.0.0.1:5500/map/images/map.jpg); background-repeat: no-repeat; background-position: center');

    if (TheGame.managers.logic.vars['day'] == 5){
      TheGame.managers.story.startScene('exam_'+TheGame.managers.logic.vars['mc_type']);
      TheGame.resolveAction();
      mapBody.parentElement.setAttribute('style', 'margin-top: 0px; margin-bottom: 0px; margin-left: 0px;margin-right: 0px;');
      mapBody.innerHTML='';
      mapBody.style.display = "none";
      TheGame.canvas.style.display = "block";
    }

    let temprorary_time = parseInt(TheGame.managers.logic.vars['time']);
    switch(temprorary_time){
      case 1:
        let morningButton = document.createElement('button');
        morningButton.classList.add('walk_button');
        morningButton.id = 'morning_walk';
        mapBody.appendChild(morningButton);
        break;
      case 2:
        let dayButtonStudy = document.createElement('button');
        dayButtonStudy.classList.add('study_button');
        dayButtonStudy.id = 'day_study';
        mapBody.appendChild(dayButtonStudy);
        let dayButtonFriendly = document.createElement('button');
        dayButtonFriendly.classList.add('frienly_button');
        dayButtonFriendly.id = 'day_friendly';
        mapBody.appendChild(dayButtonFriendly);
        break;
      case 3:
        let eveningButtonWalk = document.createElement('button');
        eveningButtonWalk.classList.add('walk_button');
        eveningButtonWalk.id = 'evening_walk';
        mapBody.appendChild(eveningButtonWalk);
        let eveningButtonStudy = document.createElement('button');
        eveningButtonStudy.classList.add('study_button');
        eveningButtonStudy.id = 'evening_study';
        mapBody.appendChild(eveningButtonStudy);
        let eveningButtonFriendly = document.createElement('button');
        eveningButtonFriendly.classList.add('frienly_button');
        eveningButtonFriendly.id = 'evening_friendly';
        mapBody.appendChild(eveningButtonFriendly);
        break;
      default:
        console.log(TheGame.managers.logic.vars['time']);
        TheGame.managers.logic.vars['time'] = 1;
        TheGame.managers.logic.vars['day']++;
        TheGame.managers.story.startScene('rest_short');
        TheGame.resolveAction();
        mapBody.parentElement.setAttribute('style', 'margin-top: 0px; margin-bottom: 0px; margin-left: 0px;margin-right: 0px;');
        mapBody.innerHTML='';
        mapBody.style.display = "none";
        TheGame.canvas.style.display = "block";
        break;
    }

    document.getElementById('morning_walk').addEventListener('click', () => {
      TheGame.managers.story.startScene('morning_walk_' + Math.floor(Math.random() * (5 - 1) + 1));
      TheGame.resolveAction();
      mapBody.parentElement.setAttribute('style', 'margin-top: 0px; margin-bottom: 0px; margin-left: 0px;margin-right: 0px;');
      mapBody.innerHTML='';
      mapBody.style.display = "none";
      TheGame.canvas.style.display = "block";
    });

    document.getElementById('day_study').addEventListener('click', () => {
      switch(TheGame.managers.logic.vars['mc_type']){
        case 'technical':
          TheGame.managers.story.startScene('OneHundredTwentyEight');
          break;
        case 'humanitarian':
          TheGame.managers.story.startScene('AssembleWords');
          break;
        case 'designer':
          TheGame.managers.story.startScene('SpotTheDifference');
          break;
        case 'sportsman':
          TheGame.managers.story.startScene('SportClicker');
          break;
        case 'chemist':
          TheGame.managers.story.startScene('Chemist');
          break;
      }
      TheGame.resolveAction();
      mapBody.parentElement.setAttribute('style', 'margin-top: 0px; margin-bottom: 0px; margin-left: 0px;margin-right: 0px;');
      mapBody.innerHTML='';
      mapBody.style.display = "none";
      TheGame.canvas.style.display = "block";
    });

    document.getElementById('day_friendly').addEventListener('click', () => {
      TheGame.managers.story.startScene('morning_walk_' + Math.floor(Math.random() * (5 - 1) + 1));
      TheGame.resolveAction();
      mapBody.parentElement.setAttribute('style', 'margin-top: 0px; margin-bottom: 0px; margin-left: 0px;margin-right: 0px;');
      mapBody.innerHTML='';
      mapBody.style.display = "none";
      TheGame.canvas.style.display = "block";
    });
  }
}

RenJSGame.addPlugin('GameMap', GameMap);


