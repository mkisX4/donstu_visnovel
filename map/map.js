class GameMap extends RenJS.Plugin {
  onCall() {
    const TheGame = this.game;
    TheGame.canvas.style.display = "none";
    const mapBody = TheGame.canvas.parentElement.getElementsByTagName("div")[5];
    mapBody.style.display = "block";


    if (TheGame.managers.logic.vars['day'] == 5){
      TheGame.managers.story.startScene('ending_dream');
      TheGame.resolveAction();
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

        let morning_type = Math.floor(Math.random() * 6)+1;

        switch(morning_type){
          case 1:
            document.getElementById('morning_walk').style.left = '380px';
            document.getElementById('morning_walk').style.top = '560px';
            break;
          case 2:
            document.getElementById('morning_walk').style.left = '700px';
            document.getElementById('morning_walk').style.top = '180px';
            break;
          case 3:
            document.getElementById('morning_walk').style.left = '280px';
            document.getElementById('morning_walk').style.top = '620px';
            break;
          case 4:
            document.getElementById('morning_walk').style.left = '840px';
            document.getElementById('morning_walk').style.top = '120px';
            break;
          case 5:
            document.getElementById('morning_walk').style.left = '450px';
            document.getElementById('morning_walk').style.top = '620px';
            break;
          case 6:
            document.getElementById('morning_walk').style.left = '370px';
            document.getElementById('morning_walk').style.top = '390px';
            break;
        }
        document.getElementById('morning_walk').addEventListener('click', () => {
          mapBody.innerHTML='';
          mapBody.style.display = "none";
          TheGame.canvas.style.display = "block";
          TheGame.managers.story.startScene('morning_walk_' + morning_type);
          TheGame.resolveAction();
        });
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

        document.getElementById('day_study').addEventListener('click', () => {
          mapBody.innerHTML='';
          mapBody.style.display = "none";
          TheGame.canvas.style.display = "block";
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
        });


        let day_type = Math.floor(Math.random() * 3)+1;

        switch(day_type){
          case 1:
            document.getElementById('day_friendly').style.left = '470px';
            document.getElementById('day_friendly').style.top = '520px';
            break;
          case 2:
            document.getElementById('day_friendly').style.left = '170px';
            document.getElementById('day_friendly').style.top = '700px';
            break;
          case 3:
            document.getElementById('day_friendly').style.left = '370px';
            document.getElementById('day_friendly').style.top = '520px';
        }
        document.getElementById('day_friendly').addEventListener('click', () => {
          mapBody.innerHTML='';
          mapBody.style.display = "none";
          TheGame.canvas.style.display = "block";
          TheGame.managers.story.startScene('friend_meeting_' + day_type);
          TheGame.resolveAction();
        });
        break;
      case 3:
        let eveningButtonWalk = document.createElement('button');
        eveningButtonWalk.classList.add('evening_button');
        eveningButtonWalk.id = 'evening_rest';
        mapBody.appendChild(eveningButtonWalk);
        let eveningButtonStudy = document.createElement('button');
        eveningButtonStudy.classList.add('study_button');
        eveningButtonStudy.id = 'evening_study';
        mapBody.appendChild(eveningButtonStudy);
        // let eveningButtonFriendly = document.createElement('button');
        // eveningButtonFriendly.classList.add('frienly_button');
        // eveningButtonFriendly.id = 'evening_friendly';
        // mapBody.appendChild(eveningButtonFriendly);

        document.getElementById('evening_study').addEventListener('click', () => {
          mapBody.innerHTML='';
          mapBody.style.display = "none";
          TheGame.canvas.style.display = "block";
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
        });

        let evening_type = Math.floor(Math.random() * 5)+1;

        document.getElementById('evening_rest').addEventListener('click', () => {
          mapBody.innerHTML='';
          mapBody.style.display = "none";
          TheGame.canvas.style.display = "block";
          TheGame.managers.story.startScene('evening_' + evening_type);
          TheGame.resolveAction();
        });
        break;
      default:
        TheGame.managers.logic.vars['time'] = 1;
        TheGame.managers.logic.vars['day']++;
        mapBody.innerHTML='';
        mapBody.style.display = "none";
        TheGame.canvas.style.display = "block";
        TheGame.managers.story.startScene('rest_short');
        TheGame.resolveAction();
        break;
    }
  }
}

RenJSGame.addPlugin('GameMap', GameMap);


