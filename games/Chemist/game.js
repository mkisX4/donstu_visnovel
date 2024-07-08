class Chemist_game extends RenJS.Plugin {
    onCall(){
        const substances = document.querySelectorAll('.substance');
        const resultElement = document.querySelector('.result');

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
