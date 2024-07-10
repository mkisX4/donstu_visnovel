class Chemist_game extends RenJS.Plugin {
    onCall(){
        const TheGame = this.game
        TheGame.canvas.style.display = "none";
        const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[4];
        gameBody.style.display = "block";

        gameBody.parentElement.setAttribute('style', 'background-image: url(http://127.0.0.1:5500/games/Chemist/images/xim.jpg); background-repeat: no-repeat; background-position: center');

        let greeting = document.createElement('div');
        greeting.classList.add('text');
        let greeting_text = document.createElement('h3');
        greeting_text.innerHTML = 'Добро пожаловать в увлекательный мир химии и экспериментов! В игре "Химики" вы станете настоящим химиком, который должен сочетать различные элементы, чтобы создавать новые удивительные соединения.<br>В этой игре вам предстоит исследовать различные элементы из периодической таблицы, смешивая их между собой, чтобы получать новые уникальные элементы и соединения. Каждое сочетание элементов приводит к удивительным химическим реакциям, открывая перед вами новые возможности и тайны химии.';
        greeting.appendChild(greeting_text);
        gameBody.appendChild(greeting);

        let main_container = document.createElement('div');
        main_container.classList.add('container');
        let substances_container = document.createElement('div');
        substances_container.classList.add('substances');
        let substance_array = [["Натрий(Na)","Na"],["Хлор(Cl)","Cl"],["Водород(H2)","H2"],["Водород(H)", "H"],["Кислород(O2)","O2"],["Железо(Fe)","Fe"],["Кислород(O)","O"],["Сера(S)","S"],["Углерод(C)","C"],["Алюминий(Al)","Al"],["Фтор(F)","F"],["Медь(Cu)","Cu"],["Кальций(Ca)","Ca"],["Фтористый водород(HF)","HF"],["Калий(K)","K"],["Бром(Br)","Br"],["Магний(Mg)","Mg"],["Вода(H2O)","H2O"],["Азот(N)","N"],["Фосфор(P)","P"],["Свинец(Pb)","Pb"],["Карбонат Кальция(CaCO3)","CaCO3"],["Йод(I)","I"],["Литий(Li)","Li"]];
        for (let elem = 0; elem < substance_array.length; elem++){
            let temporary_div = document.createElement('div');
            temporary_div.classList.add('substance');
            temporary_div.innerHTML = substance_array[elem][0];
            temporary_div.setAttribute('data-substance', substance_array[elem][1]);
            substances_container.appendChild(temporary_div);
        }
        main_container.appendChild(substances_container);

        let result_container = document.createElement('div');
        result_container.classList.add('result-container');
        let result_div = document.createElement('div');
        result_div.classList.add('result');
        result_container.appendChild(result_div);
        main_container.appendChild(result_container);

        //Temporary buttons
        let win_button = document.createElement('Button');
        win_button.id = 'win_button';
        win_button.innerHTML = 'Победа!';
        main_container.appendChild(win_button);
        let lose_button = document.createElement('Button');
        lose_button.id = 'lose_button';
        lose_button.innerHTML = 'Поражение...';
        main_container.appendChild(lose_button);

        gameBody.appendChild(main_container);


        const substances = gameBody.querySelectorAll('.substance');
        const resultElement = gameBody.querySelector('.result');

        let selectedSubstances = [];

        substances.forEach(substance => {
            substance.addEventListener('click', () => {
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

        //Temporary buttons functions
        document.getElementById('win_button').addEventListener('click', () => {
            gameBody.innerHTML = "";
                gameBody.style.display = "none";
                TheGame.managers.logic.vars["is_game_won"] = true;
                TheGame.canvas.style.display = "block";
                TheGame.resolveAction();
        });

        document.getElementById('lose_button').addEventListener('click', () => {
            gameBody.innerHTML = "";
                gameBody.style.display = "none";
                TheGame.canvas.style.display = "block";
                TheGame.resolveAction();
        });


        function calculateResult(substances) {
            if (substances.includes('Na') && substances.includes('Cl')) {
                return 'Поваренная соль (NaCl)';
            } else if (substances.includes('H2') && substances.includes('O2')) {
                return 'Вода (H2O)';
            } else if (substances.includes('C') && substances.includes('O')) {
                return 'Углекислый газ (CO2)';
            } else if (substances.includes('Fe') && substances.includes('O')) {
                return 'Ржавчина (Fe2O3)';
            } else if (substances.includes('Al') && substances.includes('O')) {
                return 'Алюминиевый оксид (Al2O3)';
            } else if (substances.includes('Na') && substances.includes('F')) {
                return 'Фторид натрия (NaF)';
            } else if (substances.includes('Cu') && substances.includes('S')) {
                return 'Сульфид меди (CuS)';
            } else if (substances.includes('Ca') && substances.includes('P')) {
                return 'Фосфид кальция (Ca3P2)';
            } else if (substances.includes('K') && substances.includes('Br')) {
                return 'Бромид калия (KBr)';
            } else if (substances.includes('Mg') && substances.includes('Cl')) {
                return 'Хлорид магния (MgCl2)';
            } else if (substances.includes('Na') && substances.includes('H2O')) {
                return 'Гидроксид натрия (NaOH)';
            } else if (substances.includes('S') && substances.includes('O')) {
                return 'Диоксид серы (SO2)';
            } else if (substances.includes('N') && substances.includes('H')) {
                return 'Аммиак (NH3)';
            } else if (substances.includes('P') && substances.includes('O')) {
                return 'Фосфорная кислота (H3PO4)';
            } else if (substances.includes('Na') && substances.includes('O')) {
                return 'Пероксид натрия (Na2O2)';
            } else if (substances.includes('Cu') && substances.includes('O')) {
                return 'Оксид меди (CuO)';
            } else if (substances.includes('Al') && substances.includes('Cl')) {
                return 'Хлорид алюминия (AlCl3)';
            } else if (substances.includes('Ca') && substances.includes('O')) {
                return 'Оксид кальция (CaO)';
            } else if (substances.includes('S') && substances.includes('H2O')) {
                return 'Сероводород (H2S)';
            } else if (substances.includes('Mg') && substances.includes('HF')) {
                return 'Магниевый фторид MgF2';
            } else if (substances.includes('K') && substances.includes('O')) {
                return 'Поташ K2O';
            } else if (substances.includes('Cu') && substances.includes('S')) {
                return 'Сульфид меди CuS';
            } else if (substances.includes('Pb') && substances.includes('O')) {
                return 'Оксид свинца PbO';
            } else if (substances.includes('N') && substances.includes('O')) {
                return 'Оксид азота NO';
            } else if (substances.includes('Al') && substances.includes('I')) {
                return 'Йодид алюминия AlI3';
            } else if (substances.includes('Na') && substances.includes('P')) {
                return 'Фосфид натрия Na3P';
            } else if (substances.includes('Mg') && substances.includes('S')) {
                return 'Сульфид магния MgS';
            } else if (substances.includes('Fe') && substances.includes('CaCO3')) {
                return 'Железо(II) карбонат FeCO3';
            } else if (substances.includes('F') && substances.includes('Li')) {
                return 'Фторид лития';
            } else {
                return 'Неправильно';
            }
        }
    }
}

RenJSGame.addPlugin('Chemist_game',Chemist_game)
