class SpotTheDifference_game extends RenJS.Plugin {
    onCall(){
        const TheGame = this.game
        TheGame.add.sprite(0,0,("STD_day"+TheGame.managers.logic.vars["day"]+"_left"));

        
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
