class SpotTheDifference_game extends RenJS.Plugin {
    onCall(){
        let fail_count = 0;
        let differences_count = 0;
        const TheGame = this.game
        TheGame.canvas.style.display = "none";
        const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[2];
        gameBody.style.display = "block";

        let main_container = document.createElement('div');
        main_container.classList.add('STD-container');
        let head_text = document.createElement('h3');
        head_text.innerHTML = 'Добро пожаловать в мини-игру «Поиск различий»!';
        main_container.appendChild(head_text);
        let diff_counter = document.createElement('h4');
        diff_counter.innerHTML = 'Осталось отличий: N/A';
        main_container.appendChild(diff_counter);
        let image_div = document.createElement('div');
        image_div.classList.add('differences');
        let image_left = document.createElement('div');
        image_left.classList.add('imagediff');
        let left_inner = document.createElement('img');
        left_inner.classList.add('imagediff');
        left_inner.src = 'games/SpotTheDifference/images/Day' + TheGame.managers.logic.vars['day'] + '_left.png';
        image_left.appendChild(left_inner);
        let image_right = document.createElement('div');
        image_right.classList.add('imagediff');
        let right_inner = document.createElement('img');
        right_inner.classList.add('imagediff');
        right_inner.src = 'games/SpotTheDifference/images/Day' + TheGame.managers.logic.vars['day'] + '_right.png';
        image_right.appendChild(right_inner);
        
        switch(TheGame.managers.logic.vars['day']){
            case 1:
                differences_count = 3;
                let day1_diff_1_left = document.createElement('button');
                day1_diff_1_left.classList.add('diffbutton');
                day1_diff_1_left.id = 'l1';
                day1_diff_1_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 50px; width: 50px; top: -66%; left: -30%;");
                image_left.appendChild(day1_diff_1_left);
                let day1_diff_1_right = document.createElement('button');
                day1_diff_1_right.id = 'r1';
                day1_diff_1_right.classList.add('diffbutton');
                day1_diff_1_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 50px; width: 50px; top: -66%; left: -30%;");
                image_right.appendChild(day1_diff_1_right);

                let day1_diff_2_left = document.createElement('button');
                day1_diff_2_left.classList.add('diffbutton');
                day1_diff_2_left.id = 'l2';
                day1_diff_2_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 35px; width: 68px; top: -95%; left: 0%;");
                image_left.appendChild(day1_diff_2_left);
                let day1_diff_2_right = document.createElement('button');
                day1_diff_2_right.classList.add('diffbutton');
                day1_diff_2_right.id = 'r2';
                day1_diff_2_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 35px; width: 68px; top: -95%; left: 0%;");
                image_right.appendChild(day1_diff_2_right);

                let day1_diff_3_left = document.createElement('button');
                day1_diff_3_left.classList.add('diffbutton');
                day1_diff_3_left.id = 'l3';
                day1_diff_3_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 40px; top: -62%; left: 11%;");
                image_left.appendChild(day1_diff_3_left);
                let day1_diff_3_right = document.createElement('button');
                day1_diff_3_right.classList.add('diffbutton');
                day1_diff_3_right.id = 'r3';
                day1_diff_3_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 40px; top: -62%; left: 11%;");
                image_right.appendChild(day1_diff_3_right);
                break;
            case 2:
                differences_count = 4;
                let day2_diff_1_left = document.createElement('button');
                day2_diff_1_left.classList.add('diffbutton');
                day2_diff_1_left.id = 'l1';
                day2_diff_1_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 75px; width: 45px; top: -48%; left: -15%;");
                image_left.appendChild(day2_diff_1_left);
                let day2_diff_1_right = document.createElement('button');
                day2_diff_1_right.id = 'r1';
                day2_diff_1_right.classList.add('diffbutton');
                day2_diff_1_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 75px; width: 45px; top: -48%; left: -15%;");
                image_right.appendChild(day2_diff_1_right);

                let day2_diff_2_left = document.createElement('button');
                day2_diff_2_left.classList.add('diffbutton');
                day2_diff_2_left.id = 'l2';
                day2_diff_2_left.setAttribute("style", "color: black; background-color: transparent; border-color: transparent; outline: 0; height: 42px; width: 120px; top: -17%; left: -3%;");
                image_left.appendChild(day2_diff_2_left);
                let day2_diff_2_right = document.createElement('button');
                day2_diff_2_right.id = 'r2';
                day2_diff_2_right.classList.add('diffbutton');
                day2_diff_2_right.setAttribute("style", "color: black; background-color: transparent; border-color: transparent; outline: 0; height: 42px; width: 120px; top: -17%; left: -3%;");
                image_right.appendChild(day2_diff_2_right);
                
                let day2_diff_3_left = document.createElement('button');
                day2_diff_3_left.classList.add('diffbutton');
                day2_diff_3_left.id = 'l3';
                day2_diff_3_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 60px; width: 60px; top: -78%; left: -7%;");
                image_left.appendChild(day2_diff_3_left);
                let day2_diff_3_right = document.createElement('button');
                day2_diff_3_right.id = 'r3';
                day2_diff_3_right.classList.add('diffbutton');
                day2_diff_3_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 60px; width: 60px; top: -78%; left: -7%;");
                image_right.appendChild(day2_diff_3_right);

                let day2_diff_4_left = document.createElement('button');
                day2_diff_4_left.classList.add('diffbutton');
                day2_diff_4_left.id = 'l4';
                day2_diff_4_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 40px; top: -87%; left: 27%;");
                image_left.appendChild(day2_diff_4_left);
                let day2_diff_4_right = document.createElement('button');
                day2_diff_4_right.id = 'r4';
                day2_diff_4_right.classList.add('diffbutton');
                day2_diff_4_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 40px; top: -87%; left: 27%;");
                image_right.appendChild(day2_diff_4_right);
                break;
            case 3:
                differences_count = 3;
                let day3_diff_1_left = document.createElement('button');
                day3_diff_1_left.classList.add('diffbutton');
                day3_diff_1_left.id = 'l1';
                day3_diff_1_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 114px; top: -67%; left: -39%;");
                image_left.appendChild(day3_diff_1_left);
                let day3_diff_1_right = document.createElement('button');
                day3_diff_1_right.id = 'r1';
                day3_diff_1_right.classList.add('diffbutton');
                day3_diff_1_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 114px; top: -67%; left: -39%;");
                image_right.appendChild(day3_diff_1_right);

                let day3_diff_2_left = document.createElement('button');
                day3_diff_2_left.classList.add('diffbutton');
                day3_diff_2_left.id = 'l2';
                day3_diff_2_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 50px; width: 30px; top: -43%; left: -16%;");
                image_left.appendChild(day3_diff_2_left);
                let day3_diff_2_right = document.createElement('button');
                day3_diff_2_right.id = 'r2';
                day3_diff_2_right.classList.add('diffbutton');
                day3_diff_2_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 50px; width: 30px; top: -43%; left: -16%;");
                image_right.appendChild(day3_diff_2_right);

                let day3_diff_3_left = document.createElement('button');
                day3_diff_3_left.classList.add('diffbutton');
                day3_diff_3_left.id = 'l3';
                day3_diff_3_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 45px; width: 45px; top: -79%; left: -11%;");
                image_left.appendChild(day3_diff_3_left);
                let day3_diff_3_right = document.createElement('button');
                day3_diff_3_right.id = 'r3';
                day3_diff_3_right.classList.add('diffbutton');
                day3_diff_3_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 45px; width: 45px; top: -79%; left: -11%;");
                image_right.appendChild(day3_diff_3_right);
                break;
            case 4:
                differences_count = 3;
                let day4_diff_1_left = document.createElement('button');
                day4_diff_1_left.classList.add('diffbutton');
                day4_diff_1_left.id = 'l1';
                day4_diff_1_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 30px; top: -51%; left: -31%;");
                image_left.appendChild(day4_diff_1_left);
                let day4_diff_1_right = document.createElement('button');
                day4_diff_1_right.id = 'r1';
                day4_diff_1_right.classList.add('diffbutton');
                day4_diff_1_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 40px; width: 30px; top: -51%; left: -31%;");
                image_right.appendChild(day4_diff_1_right);

                let day4_diff_2_left = document.createElement('button');
                day4_diff_2_left.classList.add('diffbutton');
                day4_diff_2_left.id = 'l2';
                day4_diff_2_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 56px; width: 28px; top: -22.5%; left: -10%;");
                image_left.appendChild(day4_diff_2_left);
                let day4_diff_2_right = document.createElement('button');
                day4_diff_2_right.id = 'r2';
                day4_diff_2_right.classList.add('diffbutton');
                day4_diff_2_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 56px; width: 28px; top: -22.5%; left: -10%;");
                image_right.appendChild(day4_diff_2_right);

                let day4_diff_3_left = document.createElement('button');
                day4_diff_3_left.classList.add('diffbutton');
                day4_diff_3_left.id = 'l3';
                day4_diff_3_left.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 100px; width: 45px; top: -27%; left: 2%;");
                image_left.appendChild(day4_diff_3_left);
                let day4_diff_3_right = document.createElement('button');
                day4_diff_3_right.id = 'r3';
                day4_diff_3_right.classList.add('diffbutton');
                day4_diff_3_right.setAttribute("style", "color: transparent; background-color: transparent; border-color: transparent; outline: 0; height: 100px; width: 45px; top: -27%; left: 2%;");
                image_right.appendChild(day4_diff_3_right);
                break;
            case 5:
                document.getElementsByTagName('h3')[0].innerHTML = 'Опачки, а вот это пасхалка! Тебя тут вообще-то быть не должно, ты в курсе, да?';
                document.getElementsByTagName('h4')[0].innerHTML = 'Ладно, в этот раз тебе ничего не сделаем, иди с миром.';
                setTimeout(() => {
                    gameBody.innerHTML = "";
                    gameBody.style.display = "none";
                    TheGame.managers.logic.vars["is_game_won"] = true;
                    TheGame.canvas.style.marginRight = '0px';
                    TheGame.canvas.style.display = "block";
                    TheGame.resolveAction();
                  }, 3333)
                break;
        }
        image_div.appendChild(image_left);
        image_div.appendChild(image_right);
        main_container.appendChild(image_div);

        gameBody.appendChild(main_container);
        document.getElementsByTagName('h4')[0].innerHTML = 'Осталось отличий: ' + differences_count;
        let buttons = Array.from(document.getElementsByClassName('diffbutton'));
        for (let b = 0; b< buttons.length; b++){
            buttons[b].addEventListener('click', (event) => {
                document.getElementById('l' + event.target.id.replace(/\D/g, "")).style.borderColor = "#ff4922";
                document.getElementById('l' + event.target.id.replace(/\D/g, "")).disabled = true;
                document.getElementById('r' + event.target.id.replace(/\D/g, "")).style.borderColor = "#ff4922";
                document.getElementById('r' + event.target.id.replace(/\D/g, "")).disabled = true;
                differences_count -= 1;
                document.getElementsByTagName('h4')[0].innerHTML = 'Осталось отличий: ' + differences_count;
                if(differences_count <= 0){
                    document.getElementsByTagName('h3')[0].innerHTML = "▛ ▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▘▜ <br> Поздравляем с победой! Через пять секунд вы вернётесь к новелле! <br> ▙ ▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▟";
                    setTimeout(() => {
                        gameBody.innerHTML = "";
                        gameBody.style.display = "none";
                        TheGame.managers.logic.vars["is_game_won"] = true;
                        TheGame.canvas.style.marginRight = '0px';
                        TheGame.canvas.style.display = "block";
                        TheGame.resolveAction();
                      }, 5000)
                }
            });
        }
    }
}


RenJSGame.addPlugin('SpotTheDifference_game',SpotTheDifference_game)

/*window.onload = function() {
    let app = new PIXI.Application({
        view: document.getElementById('game-canvas'),
        width: window.innerWidth,
        height: window.innerHeight - 60 // Регулировка высоты 
    });

    let imageGap = 20; 

    let levels = [
        {
            image1: 'assets/images/image1.png',
            image2: 'assets/images/image1.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
                
            ]
        },
        {
            image1: 'assets/images/image2.png',
            image2: 'assets/images/image2.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image3.png',
            image2: 'assets/images/image3.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image4.png',
            image2: 'assets/images/image4.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image5.png',
            image2: 'assets/images/image5.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image6.png',
            image2: 'assets/images/image6.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image7.png',
            image2: 'assets/images/image7.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
        {
            image1: 'assets/images/image8.png',
            image2: 'assets/images/image8.png',
            differences: [
                { x: 120, y: 20, width: 50, height: 50 },
                { x: 370, y: 100, width: 50, height: 50 },
            ]
        },
    
    ];

    let currentLevel = 0;
    let image1, image2;

    // счетчик
    let differenceCounter = document.createElement('div');
    differenceCounter.id = 'difference-counter';
    document.getElementById('blockHepl').appendChild(differenceCounter);

    // кнопка шпора
    let hintButton = document.createElement('button');
    hintButton.textContent = 'Шпаргалка';
    hintButton.id = 'hint-button';
    hintButton.onclick = function() {
        alert('Сегодня без шпор');
    };
    document.getElementById('blockHepl').appendChild(hintButton);

    function loadLevel(level) {
        app.stage.removeChildren();

        let loader = new PIXI.Loader();
        loader
            .add('image1', level.image1)
            .add('image2', level.image2)
            .load((loader, resources) => {
                setupLevel(level, resources);
            });
    }

    function setupLevel(level, resources) {
        image1 = new PIXI.Sprite(resources.image1.texture);
        image2 = new PIXI.Sprite(resources.image2.texture);
        
        image1.width = 700;
        image1.height = 411;
        image2.width = 700;
        image2.height = 411;


        image1.anchor.set(0.5, 0.5);
        image2.anchor.set(0.5, 0.5);

        let totalWidth = image1.width + imageGap + image2.width;
        let startX = (app.view.width - totalWidth) / 2;

        image1.x = startX + image1.width / 2;
        image1.y = app.view.height / 2;
        image2.x = startX + image1.width + imageGap + image2.width / 2;
        image2.y = app.view.height / 2;

        app.stage.addChild(image1);
        app.stage.addChild(image2);

        level.differences.forEach(diff => {
            let graphics = new PIXI.Graphics();
            graphics.lineStyle(2, 0xff0000, 1); 
            graphics.drawRect(diff.x, diff.y, diff.width, diff.height);
            graphics.x = image2.x - image2.width / 2; 
            graphics.y = image2.y - image2.height / 2;
            app.stage.addChild(graphics);
        });

        differenceCounter.textContent = 'Всего отличий: ' + levels[currentLevel].differences.length;

        app.stage.interactive = true;
        app.stage.off('pointerdown', onPointerDown); // Удаление предыдущих прослушивателей событий
        app.stage.on('pointerdown', onPointerDown);
    }

    function onPointerDown(event) {
        let x = event.data.global.x;
        let y = event.data.global.y;

        levels[currentLevel].differences.forEach((diff, index) => {
            let adjustedX = diff.x + image2.x - image2.width / 2;
            let adjustedY = diff.y + image2.y - image2.height / 2;

            if (x > adjustedX && x < adjustedX + diff.width &&
                y > adjustedY && y < adjustedY + diff.height) {
                // Если клик находится внутри прямоугольника разницы
                levels[currentLevel].differences.splice(index, 1); // Удалить найденную разницу
                let graphics = new PIXI.Graphics();
                graphics.beginFill(0x00ff00, 0.5);
                graphics.drawRect(diff.x, diff.y, diff.width, diff.height);
                graphics.x = image2.x - image2.width / 2;
                graphics.y = image2.y - image2.height / 2;
                app.stage.addChild(graphics);

                // Обновление счетчика разниц
                differenceCounter.textContent = 'Осталось отличий: ' + levels[currentLevel].differences.length;

                if (levels[currentLevel].differences.length === 0) {
                    alert('Вы нашли все отличия!');
                    currentLevel++;
                    if (currentLevel < levels.length) {
                        loadLevel(levels[currentLevel]);
                    } else {
                        alert('Вы прошли все уровни!');
                    }
                }
            }
        });
    }

    // меню левелов
    let menu = document.getElementById('menu');

    levels.forEach((level, index) => {
        let button = document.createElement('button');
        button.textContent = 'Уровень ' + (index + 1);
        button.onclick = () => {
            currentLevel = index;
            loadLevel(levels[currentLevel]);
        };
        menu.appendChild(button);
    });

    loadLevel(levels[currentLevel]);
};*/
