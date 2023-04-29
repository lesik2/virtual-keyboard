import { enKeyBoard,enKeyBoardShift,rusKeyBoard,rusKeyBoardShift } from './keys.js';


const createInitDoM = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerHTML = 'RSS Виртуальная клавиатура';

  const textArea = document.createElement('textarea');
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '50');
  textArea.setAttribute('autofocus',true);
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
    if(sessionStorage.getItem('lang') === 'rus')
    {
      
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    }
    else{
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    
    row1.append(key);
  }
  keyboard.append(row1);

  const row2 = document.createElement('div');
  row2.classList.add('row');
  for (let i = 14; i < 29; i++) {
    const key = document.createElement('div');
    if(sessionStorage.getItem('lang') === 'rus')
    {
      
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    }
    else{
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }

    row2.append(key);
  }
  keyboard.append(row2);

  const row3 = document.createElement('div');
  row3.classList.add('row');
  for (let i = 29; i < 42; i++) {
    const key = document.createElement('div');
    if(sessionStorage.getItem('lang') === 'rus')
    {
      
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    }
    else{
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    row3.append(key);
  }
  keyboard.append(row3);

  const row4 = document.createElement('div');
  row4.classList.add('row');
  for (let i = 42; i < 55; i++) {
    const key = document.createElement('div');
    if(sessionStorage.getItem('lang') === 'rus')
    {
      
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    }
    else{
      key.className = `key ${enKeyBoard[i].code}`;
      key.innerHTML = enKeyBoard[i].key;
    }
    row4.append(key);
  }
  keyboard.append(row4);

  const row5 = document.createElement('div');
  row5.classList.add('row');
  for (let i = 55; i < enKeyBoard.length; i++) {
    const key = document.createElement('div');
    if(sessionStorage.getItem('lang') === 'rus')
    {
      
      key.className = `key ${rusKeyBoard[i].code}`;
      key.innerHTML = rusKeyBoard[i].key;
    }
    else{
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
const capsAction=()=>{

  document.querySelector('.CapsLock').classList.toggle('clicked');
  let elements=document.querySelectorAll('.key');

      if(document.querySelector('.CapsLock').classList.contains('clicked'))
      {
        let i=0;
        for(let elem of elements)
        {
          if(elem.classList.contains('Backspace')||elem.classList.contains('Tab')||elem.classList.contains('Delete')||
          elem.classList.contains('CapsLock')||elem.classList.contains('Enter')||
          elem.classList.contains('ShiftLeft')||elem.classList.contains('ShiftRight')||
          elem.classList.contains('ControlLeft')||elem.classList.contains('MetaLeft')||elem.classList.contains('AltLeft')||
          elem.classList.contains('AltRight')||elem.classList.contains('ControlRight'))
          {
            i++;
            continue;
          }
          elem.innerHTML=elem.innerHTML.toUpperCase();
          enKeyBoard[i].key=enKeyBoard[i].key.toUpperCase();
          rusKeyBoard[i].key=rusKeyBoard[i].key.toUpperCase();
          i++;
        }
       
      }
      else{
        let i=0;
        for(let elem of elements)
        {
          if(elem.classList.contains('Backspace')||elem.classList.contains('Tab')||elem.classList.contains('Delete')||
          elem.classList.contains('CapsLock')||elem.classList.contains('Enter')||
          elem.classList.contains('ShiftLeft')||elem.classList.contains('ShiftRight')||
          elem.classList.contains('ControlLeft')||elem.classList.contains('MetaLeft')||elem.classList.contains('AltLeft')||
          elem.classList.contains('AltRight')||elem.classList.contains('ControlRight'))
          {
            i++;
            continue;
          }
          elem.innerHTML=elem.innerHTML.toLowerCase();
          enKeyBoard[i].key=enKeyBoard[i].key.toLowerCase();
          rusKeyBoard[i].key=rusKeyBoard[i].key.toLowerCase();
          i++;
        }

      }
}
const changeLanguage=(str)=>{
  let firstKey=document.querySelector('.KeyQ');
  let elements=document.querySelectorAll('.key');
  let i=0;
  if(firstKey.innerHTML.charCodeAt(0)===81||firstKey.innerHTML.charCodeAt(0)===113)
  {
    sessionStorage.setItem('lang','rus');
    for(let elem of elements)
    {
      if(str!=='shift') elem.innerHTML=rusKeyBoard[i].key;
      else elem.innerHTML=rusKeyBoardShift[i].key;
     i++;
    }
  }
  else{
    sessionStorage.setItem('lang','en');
    for(let elem of elements)
    {
      if(str!=='shift') elem.innerHTML=enKeyBoard[i].key;
      else elem.innerHTML=enKeyBoardShift[i].key;
     i++;
    }
  }
  
}
const shiftAction=(str='off')=>{
  let flag=0;
  let elements=document.querySelectorAll('.key');
  let caps=document.querySelector('.CapsLock');
  if(caps.classList.contains('clicked')) flag=1;
  let firstKey=document.querySelector('.KeyQ');
  let lang='ru';
  if(firstKey.innerHTML.charCodeAt(0)===81||firstKey.innerHTML.charCodeAt(0)===113) lang='en';
  let i=0;
  for(let elem of elements)
  {
    if(elem.classList.contains('Backspace')||elem.classList.contains('Tab')||elem.classList.contains('Delete')||
          elem.classList.contains('CapsLock')||elem.classList.contains('Enter')||
          elem.classList.contains('ShiftLeft')||elem.classList.contains('ShiftRight')||
          elem.classList.contains('ControlLeft')||elem.classList.contains('MetaLeft')||elem.classList.contains('AltLeft')||
          elem.classList.contains('AltRight')||elem.classList.contains('ControlRight'))
          {
            i++;
            continue;
          }

    if(str==='on')
    {
      if(lang==='en') elem.innerHTML=enKeyBoardShift[i].key;
      else elem.innerHTML=rusKeyBoardShift[i].key;
      
    } 
    else{
      if(lang==='en') elem.innerHTML=enKeyBoard[i].key;
      else elem.innerHTML=rusKeyBoard[i].key;
    } 
    
    if(flag===0)
    {
      if(str==='on')
      {
        elem.innerHTML=elem.innerHTML.toUpperCase();
         enKeyBoardShift[i].key=enKeyBoardShift[i].key.toUpperCase();
        rusKeyBoardShift[i].key=rusKeyBoardShift[i].key.toUpperCase();
      }
      else{
        elem.innerHTML=elem.innerHTML.toLowerCase();
         enKeyBoard[i].key=enKeyBoard[i].key.toLowerCase();
         rusKeyBoard[i].key=rusKeyBoard[i].key.toLowerCase();
      }
    }
    if(flag===1)
    {
      if(str==='on')
      {
        elem.innerHTML=elem.innerHTML.toLowerCase();
        enKeyBoardShift[i].key=enKeyBoardShift[i].key.toLowerCase();
         rusKeyBoardShift[i].key=rusKeyBoardShift[i].key.toLowerCase();
        
      }
      else{
        elem.innerHTML=elem.innerHTML.toUpperCase();
         enKeyBoard[i].key=enKeyBoard[i].key.toUpperCase();
         rusKeyBoard[i].key=rusKeyBoard[i].key.toUpperCase();
      }
    }
    i++;
  }
}
const textAreaAction=()=>{

  let textArea=document.querySelector('.text-area');



}
document.addEventListener('keydown', (event)=>{

 
    if((event.key ==='Alt'&& event.ctrlKey===true)||(event.key==='Control' && event.altKey===true))
    {
      if(event.shiftKey===true)changeLanguage('shift');
      else changeLanguage('unshift');
      
    }
    if(event.code === 'CapsLock') 
    {
      capsAction();
      return;
    }   
    for(let i=0;i<enKeyBoard.length;i++)
    { 
      if(enKeyBoard[i].code===event.code)
      {
        document.querySelector('.'+event.code).classList.add('clicked');
        break;
      }
      
    } 
    if(event.key==='Shift')
    {
        shiftAction('on');
    }
   
    textAreaAction();
    
});
document.addEventListener('keyup', (event)=>{
  
  if(event.code === 'CapsLock') 
  {
    return;
  }
  
  for(let i=0;i<enKeyBoard.length;i++)
    {
      if(enKeyBoard[i].code===event.code)
      {
        
        document.querySelector('.'+event.code).classList.remove('clicked');
        break;
      }
      
    }
    if(event.key==='Shift')
    {
      shiftAction();
    }
     
});
document.querySelector('.keyboard').addEventListener('mousedown',(event)=>{
 if(event.target.classList.contains('key')){
  let arr=event.target.className.split(' ');
  if(arr[1] ==='CapsLock')
  {
   capsAction();
   return;
  }
  document.querySelector('.'+arr[1]).classList.add('clicked');
  if(event.target.innerHTML==='Shift')
    {
     shiftAction('on');
    }
 }

});
document.querySelector('.keyboard').addEventListener('mouseout',(event)=>{
  if(event.target.classList.contains('key')){
   let arr=event.target.className.split(' ');
   if(arr[1] === 'CapsLock') 
  {
    return;
  }
   document.querySelector('.'+arr[1]).classList.remove('clicked');
   if(event.target.innerHTML==='Shift')
    {
      shiftAction();
    }
  }
 
 });
document.querySelector('.keyboard').addEventListener('mouseup',(event)=>{
  if(event.target.classList.contains('key')){
   let arr=event.target.className.split(' ');
   if(arr[1] === 'CapsLock') 
  {
    return;
  }
   document.querySelector('.'+arr[1]).classList.remove('clicked');
   if(event.target.innerHTML==='Shift')
    {
      shiftAction();
    }
  }
 });
