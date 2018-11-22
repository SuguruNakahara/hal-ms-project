document.addEventListener('DOMContentLoaded',() =>{
  const roll = document.getElementById('roll');
  const distance = window.innerHeight + roll.clientHeight
  const duration = distance / 39;
  
  roll.style.animationDuration = `${duration}s`
  roll.classList.add('anim');
})