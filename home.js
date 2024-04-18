function scrollToElement(elementId) {
  
  const footer = document.getElementById(elementId);
  console.log(footer);
  footer.scrollIntoView({ behavior: 'smooth' });
}


function redirectToAboutUs() {
  window.location.href = '/index.html#about-us';
}

