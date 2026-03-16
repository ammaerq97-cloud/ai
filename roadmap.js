
function toggleContent(id, element){
  const content = document.getElementById(id);
  const card = element.closest('.card');
  const open = content.style.display === 'block';
  content.style.display = open ? 'none' : 'block';
  if(open){ card.classList.remove('open'); } else { card.classList.add('open'); }
}
