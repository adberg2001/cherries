const animEls = document.querySelectorAll('.cherry');

animEls.forEach(img => {
  //random number between 0 to 90
  const randomNumLeft = Math.floor(Math.random() * (90 + 1));
  //random negative number between 0 to 40
  const randomNumTop = Math.floor(Math.random() * (2000 + 1)) * -1;

  //setting random num to the falling img left value
  img.style.left = `${randomNumLeft}%`;

  //setting negative random num as attribute "top" to the falling img
  img.setAttribute('top', `${randomNumTop}`);
  img.style.top = `${randomNumTop}px`;
});

window.addEventListener('scroll', () => {
  animEls.forEach(img => {
    const imgTop = img.getAttribute('top')
    const scrollValue = window.scrollY;

    img.style.top = `${Number(scrollValue) * 2.2 + (Number(imgTop))}px`;
  });
})
