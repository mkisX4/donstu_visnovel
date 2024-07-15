class ClickerSport_game extends RenJS.Plugin {
    onCall(){    
        const TheGame = this.game
        TheGame.canvas.style.display = "none";
        const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[3];
        gameBody.style.display = "block";

        gameBody.parentElement.setAttribute('style', 'background-image: url(/games/ClickerSport/images/sportzal.jpg); background-repeat: no-repeat; background-position: center');

        let header = document.createElement('header');
        header.classList.add('header-title');
        header.innerHTML = 'Магазин';
        let store_button1 = document.createElement('button');
        store_button1.classList.add('header-item');
        store_button1.id = 'double-click';
        store_button1.innerHTML = 'Двойной клик <br />300 points';
        header.appendChild(store_button1);
        let store_button2 = document.createElement('button');
        store_button2.classList.add('header-item');
        store_button2.id = 'autoclicker';
        store_button2.innerHTML = 'Автокликер <br />500 points';
        header.appendChild(store_button2);

        gameBody.appendChild(header);

        let main_div = document.createElement('div');
        main_div.classList.add('main');

        let skill_menu_div = document.createElement('div');
        skill_menu_div.classList.add('skills-menu');
        let skill_span = document.createElement('span');
        skill_span.classList.add('title_for_blocks');
        skill_span.innerHTML = 'Навыки';
        skill_menu_div.appendChild(skill_span);
        let skill_list_div = document.createElement('div');
        skill_list_div.classList.add('skills-list');
        let strength_span = document.createElement('span');
        strength_span.classList.add('skill-item');
        let strength_button = document.createElement('button');
        strength_button.classList.add('skill-btn');
        strength_button.id = 'upgrade-strength';
        strength_button.innerHTML = 'Улучшить силу -';
        let str_cost_span = document.createElement('span');
        str_cost_span.id = 'strength-cost';
        str_cost_span.innerHTML = '15';
        strength_button.appendChild(str_cost_span);
        strength_span.appendChild(strength_button);
        skill_list_div.appendChild(strength_span);
        let endurance_span = document.createElement('span');
        endurance_span.classList.add('skill-item');
        let endurance_button = document.createElement('button');
        endurance_button.classList.add('skill-btn');
        endurance_button.id = 'upgrade-endurance';
        endurance_button.innerHTML = 'Улучшить выносливость -';
        let end_cost_span = document.createElement('span');
        end_cost_span.id = 'endurance-cost';
        end_cost_span.innerHTML = '30';
        endurance_button.appendChild(end_cost_span);
        endurance_span.appendChild(endurance_button);
        skill_list_div.appendChild(endurance_span);
        skill_menu_div.appendChild(skill_list_div);
        main_div.appendChild(skill_menu_div);

        let container_div = document.createElement('div');
        container_div.classList.add('CS-container');
        let title_div = document.createElement('div');
        title_div.classList.add('titul');
        let title_span = document.createElement('span');
        title_span.innerHTML='Титул:';
        title_div.appendChild(title_span);
        let actual_title_span = document.createElement('span');
        actual_title_span.id = 'titul';
        actual_title_span.innerHTML = 'Новичок';
        title_div.appendChild(actual_title_span);
        container_div.appendChild(title_div);
        let lifter_div = document.createElement('div');
        lifter_div.id = 'weightlifter';
        let first_weight = document.createElement('div');
        first_weight.classList.add('weight', 'weight-first');
        lifter_div.appendChild(first_weight);
        let second_weight = document.createElement('div');
        second_weight.classList.add('weight', 'weight-second');
        lifter_div.appendChild(second_weight);
        container_div.appendChild(lifter_div);
        let clicker_button = document.createElement('button');
        clicker_button.classList.add('clicker_btn');
        clicker_button.id = 'clicker';
        clicker_button.innerHTML = 'Жми!';
        container_div.appendChild(clicker_button);
        let score_div = document.createElement('div');
        score_div.classList.add('score_table');
        score_div.id = 'score';
        score_div.innerHTML = 'Очки: 0';
        container_div.appendChild(score_div);
        main_div.appendChild(container_div);

        let statistics_div = document.createElement('div');
        statistics_div.classList.add('statistics');
        let stat_title_span = document.createElement('span');
        stat_title_span.classList.add('title_for_blocks');
        stat_title_span.innerHTML = 'Статистика';
        statistics_div.appendChild(stat_title_span);
        let statistics_list_div = document.createElement('div');
        statistics_list_div.classList.add('statistics_list');
        let strength_stat_span = document.createElement('span');
        strength_stat_span.classList.add('statistics-item');
        strength_stat_span.innerHTML = 'Сила lvl:';
        let str_stat_inner_span = document.createElement('span');
        str_stat_inner_span.id = 'strength-level';
        str_stat_inner_span.innerHTML = '1';
        strength_stat_span.appendChild(str_stat_inner_span);
        statistics_list_div.appendChild(strength_stat_span);
        let endurance_stat_span = document.createElement('span');
        endurance_stat_span.classList.add('statistics-item');
        endurance_stat_span.innerHTML = 'Выносливость lvl:';
        let end_stat_inner_span = document.createElement('span');
        end_stat_inner_span.id = 'endurance-level';
        end_stat_inner_span.innerHTML = '1';
        endurance_stat_span.appendChild(end_stat_inner_span);
        statistics_list_div.appendChild(endurance_stat_span);
        statistics_div.appendChild(statistics_list_div);

        main_div.appendChild(statistics_div);
        gameBody.appendChild(main_div)

        let score = 0;
        let strength = 1;
        let endurance = 1;
        let strengthLevel = 1;
        let enduranceLevel = 1;
        let strengthCost = 15;
        let enduranceCost = 30;
        let doubleClickPurchased = false;
        let autoclickerPurchased = false;
        let autoclickerInterval = null;

        const weightFirst = gameBody.querySelector('.weight-first');
        const weightSecond = gameBody.querySelector('.weight-second');
        const button = document.getElementById('clicker');
        const scoreDisplay = document.getElementById('score');
        const strengthLevelDisplay = document.getElementById('strength-level');
        const enduranceLevelDisplay = document.getElementById('endurance-level');
        const strengthCostDisplay = document.getElementById('strength-cost');
        const enduranceCostDisplay = document.getElementById('endurance-cost');
        const upgradeStrengthButton = document.getElementById('upgrade-strength');
        const upgradeEnduranceButton = document.getElementById('upgrade-endurance');
        const doubleClickButton = document.getElementById('double-click');
        const autoclickerButton = document.getElementById('autoclicker');
        const titleDisplay = document.getElementById('titul');

        const titles = ['Новичок', 'Специалист', 'Мастер', 'Эксперт', 'Легенда'];

        button.addEventListener('click', () => {
            let pointsToAdd = 3 * strength;
            if (doubleClickPurchased) {
                pointsToAdd *= 2;
            }
            score += pointsToAdd;
            scoreDisplay.textContent = `Очки: ${score}`;

            button.disabled = true;

            weightFirst.style.top = '60px';
            weightSecond.style.top = '60px';

            setTimeout(() => {
                weightFirst.style.top = '180px';
                weightSecond.style.top = '180px';

                setTimeout(() => {
                    button.disabled = false;
                }, 1000 / endurance);
            }, 900 / endurance);
        });

        upgradeStrengthButton.addEventListener('click', () => {
            if (score >= strengthCost) {
                score -= strengthCost;
                strength++;
                strengthLevel++;
                strengthCost = Math.ceil(strengthCost * 4);
                updateDisplay();
            }
        });

        upgradeEnduranceButton.addEventListener('click', () => {
            if (score >= enduranceCost) {
                score -= enduranceCost;
                endurance++;
                enduranceLevel++;
                enduranceCost = Math.ceil(enduranceCost * 4);
                updateDisplay();
            }
        });

        doubleClickButton.addEventListener('click', () => {
            if (score >= 300 && !doubleClickPurchased) {
                score -= 300;
                doubleClickPurchased = true;
                doubleClickButton.disabled = true;
                updateDisplay();
            }
        });

        autoclickerButton.addEventListener('click', () => {
            if (score >= 500 && !autoclickerPurchased) {
                score -= 500;
                autoclickerPurchased = true;
                autoclickerButton.disabled = true;
                autoclickerInterval = setInterval(() => {
                    button.click();
                }, 1000); // 
                updateDisplay();
            }
        });
        function updateTitle() {
            const titleIndex = strengthLevel - 1;
            const title = titles[Math.min(titleIndex, titles.length - 1)];
            titleDisplay.textContent = title;
            if (strengthLevel >=3 && enduranceLevel >=3){
                gameBody.innerHTML = "";
                gameBody.style.display = "none";
                TheGame.managers.logic.vars["is_game_won"] = true;
                TheGame.canvas.style.marginRight = '0px';
                TheGame.canvas.style.display = "block";
                TheGame.resolveAction();
            }
        }

        function updateDisplay() {
            scoreDisplay.textContent = `Очки: ${score}`;
            strengthLevelDisplay.textContent = strengthLevel;
            enduranceLevelDisplay.textContent = enduranceLevel;
            strengthCostDisplay.textContent = strengthCost;
            enduranceCostDisplay.textContent = enduranceCost;
            updateTitle();
        }
    }
}

RenJSGame.addPlugin('ClickerSport_game',ClickerSport_game)