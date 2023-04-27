import { enKeyBoard } from './keys.js';

const createInitDoM = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerHTML = 'RSS Виртуальная клавиатура';
  const textArea = document.createElement('textarea');
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '50');
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
  for (let i = 0; i < 14; i++) {
    const key = document.createElement('div');
    key.className = `key ${enKeyBoard[i].code}`;
    key.innerHTML = enKeyBoard[i].key;
    row1.append(key);
  }
  keyboard.append(row1);
  const row2 = document.createElement('div');
  row2.classList.add('row');
  for (let i = 14; i < 29; i++) {
    const key = document.createElement('div');
    key.className = `key ${enKeyBoard[i].code}`;
    key.innerHTML = enKeyBoard[i].key;
    row2.append(key);
  }
  keyboard.append(row2);
  const row3 = document.createElement('div');
  row3.classList.add('row');
  for (let i = 29; i < 42; i++) {
    const key = document.createElement('div');
    key.className = `key ${enKeyBoard[i].code}`;
    key.innerHTML = enKeyBoard[i].key;
    row3.append(key);
  }
  keyboard.append(row3);
  const row4 = document.createElement('div');
  row4.classList.add('row');
  for (let i = 42; i < 55; i++) {
    const key = document.createElement('div');
    key.className = `key ${enKeyBoard[i].code}`;
    key.innerHTML = enKeyBoard[i].key;
    row4.append(key);
  }
  keyboard.append(row4);
  const row5 = document.createElement('div');
  row5.classList.add('row');
  for (let i = 55; i < enKeyBoard.length; i++) {
    const key = document.createElement('div');
    key.className = `key ${enKeyBoard[i].code}`;
    key.innerHTML = enKeyBoard[i].key;
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

document.addEventListener('keydown', function(event){
    
    for(let i=0;i<enKeyBoard.length;i++)
    {
      if(event.key==='Alt') event.preventDefault();
      if(enKeyBoard[i].code===event.code)
      {
        document.querySelector('.'+event.code).classList.add('clicked');
        break;
      }
      
    } 
});
document.addEventListener('keyup', function(event){
  
  for(let i=0;i<enKeyBoard.length;i++)
    {
      if(enKeyBoard[i].code===event.code)
      {
        
        document.querySelector('.'+event.code).classList.remove('clicked');
        break;
      }
      
    } 
    
  
 
});
