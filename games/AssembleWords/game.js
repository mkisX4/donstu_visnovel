class AssembleWords_game extends RenJS.Plugin {
  onCall(){
    const TheGame = this.game
    TheGame.canvas.style.display = "none";
    const gameBody = TheGame.canvas.parentElement.getElementsByTagName("div")[1];
    gameBody.style.display = "block";

    let main_container = document.createElement('div');
    main_container.classList.add('container');
    let main_card = document.createElement('div');
    main_card.classList.add('card');
    let card_item = document.createElement('div');
    card_item.classList.add('card__item');
    card_item.innerHTML = 'Загаданное слово для Вас';
    main_card.appendChild(card_item);
    let card_item_finder = document.createElement('div');
    card_item_finder.classList.add('card__item', 'find__word');
    main_card.appendChild(card_item_finder);
    let card_item_question = document.createElement('div');
    card_item_question.classList.add('card__item', 'question__block');
    main_card.appendChild(card_item_question);

    main_container.appendChild(main_card);
    gameBody.appendChild(main_container);


    const edit__block = document.querySelector('.edit__block');
    const button = document.querySelector('.button');
    const form = document.querySelector('.form');
    const find__word = document.querySelector('.find__word');
    const question__block = document.querySelector('.question__block');

    const words = [
      { word: 'слон', question: 'Какое животное самое крупное на суше?' },
      { word: 'собака', question: 'Какое животное считается лучшим другом человека?' },
      { word: 'кот', question: 'Какое животное мурлычет?' },
      { word: 'ноутбук', question: 'Устройство для работы и развлечений, которое можно носить с собой?' },
      { word: 'телефон', question: 'Что мы используем для звонков и сообщений?' },
      { word: 'сканер', question: 'Устройство для перевода бумажных документов в цифровой формат?' },
      { word: 'бумага', question: 'На чем мы обычно пишем?' },
      { word: 'машина', question: 'Средство передвижения на четырех колесах?' },
      { word: 'велосипед', question: 'Двухколесное транспортное средство с педалями?' },
      { word: 'корабль', question: 'Большое судно для плавания по морям и океанам?' },
      { word: 'самолет', question: 'Воздушное судно с крыльями?' },
      { word: 'дерево', question: 'Высокое растение с толстым стволом и ветвями?' },
      { word: 'река', question: 'Естественный водный поток, текущий в русле?' },
      { word: 'молоко', question: 'Белый напиток, получаемый от коров?' },
      { word: 'хлеб', question: 'Основной продукт, изготовленный из муки и воды?' },
      { word: 'солнце', question: 'Звезда, вокруг которой вращается Земля?' },
      { word: 'луна', question: 'Естественный спутник Земли?' },
      { word: 'звезда', question: 'Светящийся объект на ночном небе?' },
      { word: 'океан', question: 'Большой водоем, покрывающий большую часть Земли?' },
      { word: 'гора', question: 'Высокий природный объект с вершиной?' },
      { word: 'дождь', question: 'Осадки в виде капель воды?' },
      { word: 'снег', question: 'Осадки в виде ледяных кристаллов?' },
      { word: 'облако', question: 'Скопление капель воды или кристаллов льда в небе?' },
      { word: 'ветер', question: 'Движение воздуха?' },
      { word: 'огонь', question: 'Процесс горения, выделяющий свет и тепло?' },
      { word: 'земля', question: 'Планета, на которой мы живем?' },
      { word: 'лес', question: 'Большая территория, покрытая деревьями?' },
      { word: 'песок', question: 'Мелкие частицы минералов на пляже или в пустыне?' },
      { word: 'стол', question: 'Предмет мебели с плоской поверхностью для работы или еды?' },
      { word: 'стул', question: 'Предмет мебели для сидения?' },
      { word: 'окно', question: 'Отверстие в стене для света и воздуха?' },
      { word: 'дверь', question: 'Проем в стене для входа и выхода?' },
      { word: 'дом', question: 'Здание для проживания людей?' },
      { word: 'книга', question: 'Печатное издание с текстами и иллюстрациями?' },
      { word: 'ручка', question: 'Инструмент для письма?' },
      { word: 'карандаш', question: 'Инструмент для рисования и письма с грифелем?' },
      { word: 'картина', question: 'Произведение искусства на холсте или бумаге?' },
      { word: 'зеркало', question: 'Поверхность для отражения изображений?' }
    ];

    const selected = words[getRandomInt(words.length)];
    const findWord = selected.word;
    const question = selected.question;
    let WORD = [...findWord];
    console.log(findWord);

    if (find__word && question__block) {
      question__block.textContent = question;
      for (let i = 0; i < findWord.length; i++) {
        find__word.innerHTML += '<span>_</span>';
      }
      var spans = find__word.querySelectorAll('span');
    } else {
      console.error('Элементы find__word или question__block не найдены.');
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function logic(letter) {
      let indexes = [];
      for (let i = 0; i < WORD.length; i++) {
        if (WORD[i] === letter) {
          indexes.push(i);
        }
      }

      if (indexes.length > 0 && letter !== '') {
        indexes.forEach(index => {
          spans[index].textContent = letter;
          WORD[index] = '';
        });
      }

      if (WORD.every(l => l === '')) {
        const winMessage = document.createElement('p');
        winMessage.textContent = 'Вы выиграли!';
        document.body.appendChild(winMessage); // сообщение о победе
        edit__block.readOnly = true; // Используем readOnly вместо disabled
        button.disabled = true;
        const cardItem = document.querySelector('.card__item.final');
        if (cardItem) {
          cardItem.appendChild(winMessage);
        }
      }
    }

    function submitForm(event) {
      event.preventDefault();
      const letter = edit__block.value.toLowerCase();
      logic(letter);
      edit__block.value = '';
    }

    function editBlock(event) {
      if (!event.target.value.match(/[а-яА-ЯЁё]+/)) {
        event.target.value = '';
      }
      if (event.target.value.length > 1) {
        event.target.value = event.target.value[0];
      }
    }

    form.addEventListener('submit', submitForm);
    edit__block.addEventListener('input', editBlock);

    edit__block.addEventListener('keydown', function(e) {
      if ((e.key === 'я' || e.key === 'Я' || e.key === 'z' || e.key === 'Z') && e.ctrlKey) {
        e.target.value = e.target.value.slice(0, -1);
      }
      if (e.key === 'Enter') {
        submitForm(e);
      }
    });
  }
}

RenJSGame.addPlugin('AssembleWords_game',AssembleWords_game)