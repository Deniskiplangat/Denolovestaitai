const containerElement = document.querySelectorAll('.container');



function fn(i) {
  containerElement[i].classList.remove('active')
  
  
  if (i < containerElement.length - 1) {
    
    setTimeout(fn, 5000, i + 1);
    
  }
}
setTimeout(fn, 5000, 0);

