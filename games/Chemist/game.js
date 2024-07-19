class Chemist_game extends RenJS.Plugin {
    onCall(){
        var death_timer = true;
        const TheGame = this.game
        TheGame.canvas.style.display = "none";
        const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[4];
        gameBody.style.display = "block";

        gameBody.parentElement.setAttribute('style', 'background-image: url(/games/Chemist/images/xim.jpg); background-repeat: no-repeat; background-position: center');

        let greeting = document.createElement('div');
        greeting.classList.add('text');
        let greeting_text = document.createElement('h3');
        greeting_text.style.color = 'white';
        greeting_text.innerHTML = 'Добро пожаловать в увлекательный мир химии и экспериментов! В игре "Химики" вы станете настоящим химиком, который должен сочетать различные элементы, чтобы создавать новые удивительные соединения.<br>В этой игре вам предстоит исследовать различные элементы из периодической таблицы, смешивая их между собой, чтобы получать новые уникальные элементы и соединения. Каждое сочетание элементов приводит к удивительным химическим реакциям, открывая перед вами новые возможности и тайны химии.';
        greeting.appendChild(greeting_text);
        gameBody.appendChild(greeting);

        let main_container = document.createElement('div');
        main_container.classList.add('C-container');
        let substances_container = document.createElement('div');
        substances_container.classList.add('substances');
        let substance_array = [["Водород(H2)","H2"],["Кислород(O2)","O2"]]
        let metals_array = [["Железо(Fe)","Fe"],["Литий(Li)","Li"],["Натрий(Na)","Na"],["Кальций(Ca)","Ca"]]
        let nonmetals_array = [["Углерод(C)","C"],["Сера(S)","S"],["Азот(N)","N"],["Кремний(Si)","Si"]]
        for (let elem = 0; elem < substance_array.length; elem++){
            let temporary_div = document.createElement('div');
            temporary_div.classList.add('substance');
            temporary_div.innerHTML = substance_array[elem][0];
            temporary_div.setAttribute('data-substance', substance_array[elem][1]);
            substances_container.appendChild(temporary_div);
        }
        main_container.appendChild(substances_container);
        gameBody.appendChild(main_container);

        let result_container = document.createElement('div');
        result_container.classList.add('result-container');
        let result_div = document.createElement('div');
        result_div.classList.add('result');
        result_container.appendChild(result_div);
        gameBody.appendChild(result_container);

        const substances = gameBody.querySelectorAll('.substance');
        const resultElement = gameBody.querySelector('.result');

        let selectedSubstances = [];

        substances.forEach(substance => {
            substance.addEventListener('click', (event) => {
                const substance = event.target;
                if (selectedSubstances.length < 2) {
                    substance.classList.add('selected');
                    selectedSubstances.push(substance.dataset.substance);
                    if (selectedSubstances.length === 2) {
                        const result = calculateResult(selectedSubstances);
                        resultElement.textContent = result;
                        selectedSubstances = [];
                        substances.forEach(s => s.classList.remove('selected'));
                    }
                }
            });
        });

        let randomized = []
        let first_random_div = document.createElement('div');
        first_random_div.classList.add('substance-random');
        randomized = metals_array[Math.floor(Math.random()*metals_array.length)];
        first_random_div.innerHTML = randomized[0];
        first_random_div.setAttribute('data-substance', randomized[1]);
        substances_container.appendChild(first_random_div);
        Ender();
        let second_random_div = document.createElement('div');
        second_random_div.classList.add('substance-random');
        randomized = nonmetals_array[Math.floor(Math.random()*nonmetals_array.length)];
        second_random_div.innerHTML = randomized[0];
        second_random_div.setAttribute('data-substance', randomized[1]);
        substances_container.appendChild(second_random_div);
        Ender();

        death_timer = false;
        function calculateResult(substances) {
            let counter = 0;
            if (substances.includes('H2') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'H2O'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Вода(H2O)';
                    temp_result.setAttribute('data-substance', 'H2O');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Вода(H2O)';
            } else if (substances.includes('Fe') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'Fe3O4'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Ржавчина(Fe3O4)';
                    temp_result.setAttribute('data-substance', 'Fe3O4');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Ржавчина(Fe3O4)';
            } else if (substances.includes('Na') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'Na2O2'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Пероксид натрия(Na2O2)';
                    temp_result.setAttribute('data-substance', 'Na2O2');
                    substances_container.appendChild(temp_result);
                    document.getElementsByClassName('substance-combined')[document.getElementsByClassName('substance-combined').length-1].style.lineHeight = '50px';
                    Ender();
                }
                else counter = 0;
                return 'Пероксид натрия(Na2O2)';
            } else if (substances.includes('Li') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'Li2O'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Оксид лития(Li2O)';
                    temp_result.setAttribute('data-substance', 'Li2O');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Оксид лития(Li2O)';
            } else if (substances.includes('Ca') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'CaO'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Оксид кальция(CaO)';
                    temp_result.setAttribute('data-substance', 'CaO');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Оксид кальция(CaO)';
            } else if (substances.includes('C') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'CO2'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Углекислый газ(CO2)';
                    temp_result.setAttribute('data-substance', 'CO2');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Углекислый газ(CO2)';
            } else if (substances.includes('S') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'SO2'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Оксид серы(SO2)';
                    temp_result.setAttribute('data-substance', 'SO2');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Оксид серы(SO2)';
            } else if (substances.includes('N') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'NO'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Оксид азота(NO)';
                    temp_result.setAttribute('data-substance', 'NO');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Оксид азота(NO)';
            } else if (substances.includes('Si') && substances.includes('O2')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'SiO2'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Диоксид кремния(SiO2)';
                    temp_result.setAttribute('data-substance', 'SiO2');
                    substances_container.appendChild(temp_result);
                    Ender();
                }
                else counter = 0;
                return 'Диоксид кремния(SiO2)';
            } else if (substances.includes('Na') && substances.includes('H2O')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'NaOH'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Гидроксид натрия(NaOH)';
                    temp_result.setAttribute('data-substance', 'NaOH');
                    substances_container.appendChild(temp_result);
                    document.getElementsByClassName('substance-combined')[document.getElementsByClassName('substance-combined').length-1].style.lineHeight = '50px';
                    Ender();
                }
                else counter = 0;
                return 'Гидроксид натрия(NaOH)';
            } else if (substances.includes('Ca') && substances.includes('H2O')) {
                let current_substances = Array.from(document.getElementsByClassName('substance-combined'));
                for (let subs = 0; subs < current_substances.length; subs++){
                    if(current_substances[subs].getAttribute("data-substance") == 'Ca(OH)2'){
                        counter ++;
                    }
                }
                if (counter == 0){
                    let temp_result = document.createElement('div');
                    temp_result.classList.add('substance-combined');
                    temp_result.innerHTML = 'Гидроксид натрия(NaOH)';
                    temp_result.setAttribute('data-substance', 'NaOH');
                    substances_container.appendChild(temp_result);
                    document.getElementsByClassName('substance-combined')[document.getElementsByClassName('substance-combined').length-1].style.lineHeight = '50px';
                    Ender();
                }
                else counter = 0;
                return 'Гидроксид натрия(NaOH)';
            } else {
                return 'Элементы не реагируют';
            }
        }

        function Ender(){
            document.getElementsByClassName('substances')[0].getElementsByTagName('*')[document.getElementsByClassName('substances')[0].getElementsByTagName('*').length-1].addEventListener('click', (event) => {
                const substance = event.target;
                if (selectedSubstances.length < 2) {
                    substance.classList.add('selected');
                    selectedSubstances.push(substance.dataset.substance);
                    if (selectedSubstances.length === 2) {
                        const result = calculateResult(selectedSubstances);
                        resultElement.textContent = result;
                        selectedSubstances = [];
                        substances.forEach(s => s.classList.remove('selected'));
                    }
                }
            });
            if(Array.from(document.getElementsByClassName('substances')[0].getElementsByTagName('*')).length >= 12){
                document.getElementsByClassName('substances')[0].style.display = 'none';
                alert('Победа! Вы собрали достаточное количество элементов! Нажмине "Ок" и вскоре будете возвращены к основной новелле!');
                setTimeout(function() {
                    gameBody.innerHTML="";
                    gameBody.style.display = "none";
                    TheGame.managers.logic.vars["is_game_won"] = true;
                    TheGame.canvas.style.marginRight = '0px';
                    TheGame.canvas.style.display = "block";
                    TheGame.resolveAction();
                  }, 2000)
            }
            if (!death_timer){
                Deathbringer();
                death_timer = true;
            }
        }

        function Deathbringer(){
            if (document.getElementsByClassName('substances')[0].getElementsByClassName('substance-combined').length == 0){
                gameBody.innerHTML="";
                gameBody.style.display = "none";
                TheGame.canvas.style.marginRight = '0px';
                TheGame.canvas.style.display = "block";
                TheGame.resolveAction();
            }
            setTimeout(function() {
                document.getElementsByClassName('substance-combined')[document.getElementsByClassName('substance-combined').length-1].remove();
                let new_random = []
                new_random = metals_array[Math.floor(Math.random()*metals_array.length)];
                document.getElementsByClassName('substance-random')[0].innerHTML = new_random[0];
                document.getElementsByClassName('substance-random')[0].setAttribute('data-substance', new_random[1]);
                new_random = nonmetals_array[Math.floor(Math.random()*nonmetals_array.length)];
                document.getElementsByClassName('substance-random')[1].innerHTML = new_random[0];
                document.getElementsByClassName('substance-random')[1].setAttribute('data-substance', new_random[1]);
                setTimeout(function() {
                    Deathbringer();
                  }, 2000)
            }, 5000)
        }
    }
}

RenJSGame.addPlugin('Chemist_game',Chemist_game)
