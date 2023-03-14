if (innerWidth > '768px') {
   const portfolio_nav = document.querySelector('#portfolio_nav');
portfolio_nav.style.display = 'none'
console.log(9);
}
   

document.querySelector('.navbar-toggler-icon').addEventListener('click', (e) => {
   // Get the navbar toggle button icon element
   const navbarToggleIcon = document.querySelector('button.navbar-toggler span.navbar-toggler-icon');
   
   const portfolio_nav = document.querySelector('ul');
   portfolio_nav.classList.add('d')

   

//  navbarToggleIcon.style.backgroundImage='url(https://static.vecteezy.com/system/resources/previews/009/267/401/original/minus-sign-icon-free-png.png)'

  
   
})




