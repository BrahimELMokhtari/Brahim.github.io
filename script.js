const links=document.querySelectorAll('a[href^="#"]');links.forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
const researchScroll = document.querySelector('.research-scroll');

researchScroll.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    researchScroll.scrollLeft += event.deltaY;
  }
}, { passive: false });
