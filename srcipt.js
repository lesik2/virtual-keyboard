import {
  enKeyBoard, enKeyBoardShift, rusKeyBoard, rusKeyBoardShift,
} from './keys.js';

const keysForTextArea = ['CapsLock', 'Shift', 'Win', 'Alt', 'Ctrl'];
const keysForCaps = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'];
const createInitDoM = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerHTML = 'RSS Виртуальная клавиатура';

  const textArea = document.createElement('textarea');
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '50');
  textArea.setAttribute('autofocus', true);
  textArea.classList.add('text-area');

  const description = document.createElement('p');
  const language = document.createElement('p');
  description.classList.add('description');
  language.classList.add('language');
  description.innerHTML = 'Клавиатура создана в операционной системе Windows';
  language.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const row1 = document.createElement('div');
  row1.classList.add('row');
  for (let i = 0; i < 14; i += 1) {
    const key = document.createElement('div');
    if (sessionStorage.getItem('lang') === 'rus') {
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    } else {
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }

    row1.append(key);
  }
  keyboard.append(row1);

  const row2 = document.createElement('div');
  row2.classList.add('row');
  for (let i = 14; i < 29; i += 1) {
    const key = document.createElement('div');
    if (sessionStorage.getItem('lang') === 'rus') {
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    } else {
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }

    row2.append(key);
  }
  keyboard.append(row2);

  const row3 = document.createElement('div');
  row3.classList.add('row');
  for (let i = 29; i < 42; i += 1) {
    const key = document.createElement('div');
    if (sessionStorage.getItem('lang') === 'rus') {
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    } else {
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    row3.append(key);
  }
  keyboard.append(row3);

  const row4 = document.createElement('div');
  row4.classList.add('row');
  for (let i = 42; i < 55; i += 1) {
    const key = document.createElement('div');
    if (sessionStorage.getItem('lang') === 'rus') {
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    } else {
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    row4.append(key);
  }
  keyboard.append(row4);

  const row5 = document.createElement('div');
  row5.classList.add('row');
  for (let i = 55; i < enKeyBoard.length; i += 1) {
    const key = document.createElement('div');
    if (sessionStorage.getItem('lang') === 'rus') {
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    } else {
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    row5.append(key);
  }
  keyboard.append(row5);

  container.append(h1);
  container.append(textArea);
  container.append(keyboard);
  container.append(description);
  container.append(language);
  document.body.append(container);
};
createInitDoM();
const capsAction = () => {
  document.querySelector('.CapsLock').classList.toggle('clicked');
  const elements = document.querySelectorAll('.key');

  if (document.querySelector('.CapsLock').classList.contains('clicked')) {
    for (let i = 0; i < elements.length; i += 1) {
      const arr = elements[i].className.split(' ');
      if (!keysForCaps.includes(arr[1])) {
        elements[i].innerHTML = elements[i].innerHTML.toUpperCase();
        enKeyBoard[i].key = enKeyBoard[i].key.toUpperCase();
        rusKeyBoard[i].key = rusKeyBoard[i].key.toUpperCase();
      }
    }
  } else {
    for (let i = 0; i < elements.length; i += 1) {
      const arr = elements[i].className.split(' ');
      if (!keysForCaps.includes(arr[1])) {
        elements[i].innerHTML = elements[i].innerHTML.toLowerCase();
        enKeyBoard[i].key = enKeyBoard[i].key.toLowerCase();
        rusKeyBoard[i].key = rusKeyBoard[i].key.toLowerCase();
      }
    }
  }
};
const changeLanguage = (str) => {
  const firstKey = document.querySelector('.KeyQ');
  const elements = document.querySelectorAll('.key');
  if (firstKey.innerHTML.charCodeAt(0) === 81 || firstKey.innerHTML.charCodeAt(0) === 113) {
    sessionStorage.setItem('lang', 'rus');
    for (let i = 0; i < elements.length; i += 1) {
      if (str !== 'shift') elements[i].innerHTML = rusKeyBoard[i].key;
      else elements[i].innerHTML = rusKeyBoardShift[i].key;
    }
  } else {
    sessionStorage.setItem('lang', 'en');

    for (let i = 0; i < elements.length; i += 1) {
      if (str !== 'shift') elements[i].innerHTML = enKeyBoard[i].key;
      else elements[i].innerHTML = enKeyBoardShift[i].key;
    }
  }
};
const shiftAction = (str = 'off') => {
  let flag = 0;
  const elements = document.querySelectorAll('.key');
  const caps = document.querySelector('.CapsLock');
  if (caps.classList.contains('clicked')) flag = 1;
  const firstKey = document.querySelector('.KeyQ');
  let lang = 'ru';
  if (firstKey.innerHTML.charCodeAt(0) === 81 || firstKey.innerHTML.charCodeAt(0) === 113) lang = 'en';
  for (let i = 0; i < elements.length; i += 1) {
    const arr = elements[i].className.split(' ');
    if (!keysForCaps.includes(arr[1])) {
      if (str === 'on') {
        if (lang === 'en') elements[i].innerHTML = enKeyBoardShift[i].key;
        else elements[i].innerHTML = rusKeyBoardShift[i].key;
      } else if (lang === 'en') elements[i].innerHTML = enKeyBoard[i].key;
      else elements[i].innerHTML = rusKeyBoard[i].key;

      if (flag === 0) {
        if (str === 'on') {
          elements[i].innerHTML = elements[i].innerHTML.toUpperCase();
          enKeyBoardShift[i].key = enKeyBoardShift[i].key.toUpperCase();
          rusKeyBoardShift[i].key = rusKeyBoardShift[i].key.toUpperCase();
        } else {
          elements[i].innerHTML = elements[i].innerHTML.toLowerCase();
          enKeyBoard[i].key = enKeyBoard[i].key.toLowerCase();
          rusKeyBoard[i].key = rusKeyBoard[i].key.toLowerCase();
        }
      }
      if (flag === 1) {
        if (str === 'on') {
          elements[i].innerHTML = elements[i].innerHTML.toLowerCase();
          enKeyBoardShift[i].key = enKeyBoardShift[i].key.toLowerCase();
          rusKeyBoardShift[i].key = rusKeyBoardShift[i].key.toLowerCase();
        } else {
          elements[i].innerHTML = elements[i].innerHTML.toUpperCase();
          enKeyBoard[i].key = enKeyBoard[i].key.toUpperCase();
          rusKeyBoard[i].key = rusKeyBoard[i].key.toUpperCase();
        }
      }
    }
  }
};
const textAreaAction = (symbol) => {
  const textArea = document.querySelector('.text-area');
  if (keysForTextArea.includes(symbol)) return;
  if (symbol === 'Enter') {
    textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
    return;
  }
  if (symbol === 'Tab') {
    textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
    return;
  }
  if (symbol === 'Backspace') {
    const index = textArea.selectionStart - 1;
    if (index === -1) return;
    const str = textArea.value;
    textArea.value = str.slice(0, index) + str.slice(index + 1);
    textArea.selectionStart = index;
    textArea.selectionEnd = index;
    return;
  }
  if (symbol === 'Del') {
    const index = textArea.selectionStart - 1;
    const str = textArea.value;
    textArea.value = str.slice(0, index + 1) + str.slice(index + 2);
    textArea.selectionStart = index + 1;
    textArea.selectionEnd = index + 1;
    return;
  }
  if(symbol==='&amp;')
  {
    textArea.setRangeText('&', textArea.selectionStart, textArea.selectionEnd, 'end');
    return;
  }
  textArea.setRangeText(symbol, textArea.selectionStart, textArea.selectionEnd, 'end');
};
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if ((event.key === 'Alt' && event.ctrlKey === true) || (event.key === 'Control' && event.altKey === true)) {
    if (event.shiftKey === true)changeLanguage('shift');
    else changeLanguage('unshift');
  }
  if (event.code === 'CapsLock') {
    capsAction();
    return;
  }
  if (event.key === 'Shift') {
    shiftAction('on');
  }
  for (let i = 0; i < enKeyBoard.length; i += 1) {
    if (enKeyBoard[i].code === event.code) {
      document.querySelector(`.${event.code}`).classList.add('clicked');
      const symbol = document.querySelector(`.${event.code}`);
      textAreaAction(symbol.innerHTML);
      break;
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    return;
  }

  for (let i = 0; i < enKeyBoard.length; i += 1) {
    if (enKeyBoard[i].code === event.code) {
      document.querySelector(`.${event.code}`).classList.remove('clicked');
      break;
    }
  }
  if (event.key === 'Shift') {
    shiftAction();
  }
});
document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('key')) {
    const arr = event.target.className.split(' ');
    if (arr[1] === 'CapsLock') {
      capsAction();
      return;
    }
    if (event.target.innerHTML === 'Shift') {
      shiftAction('on');
    }
    document.querySelector(`.${arr[1]}`).classList.add('clicked');
    const symbol = document.querySelector(`.${arr[1]}`);
    textAreaAction(symbol.innerHTML);
  }
});
document.querySelector('.keyboard').addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('key')) {
    const arr = event.target.className.split(' ');
    if (arr[1] === 'CapsLock') {
      return;
    }
    document.querySelector(`.${arr[1]}`).classList.remove('clicked');
    if (event.target.innerHTML === 'Shift') {
      shiftAction();
    }
  }
});
document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key')) {
    const arr = event.target.className.split(' ');
    if (arr[1] === 'CapsLock') {
      return;
    }
    document.querySelector(`.${arr[1]}`).classList.remove('clicked');
    if (event.target.innerHTML === 'Shift') {
      shiftAction();
    }
  }
});
