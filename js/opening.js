document.addEventListener('DOMContentLoaded',() =>{
  const roll = document.getElementById('roll');
  const distance = window.innerHeight + roll.clientHeight
  const duration = distance / 155;
  
  roll.style.animationDuration = `${duration}s`
  roll.classList.add('anim');
})