document.querySelector('.navbar-expand .navbar-nav .nav-link ').style.display='inline-block'
document.querySelector('.navbar-expand .navbar-nav .nav-link ').style.textAlign='center'


let iconState = false;

document.querySelector('.navbar-toggler').addEventListener('click', (e) => {
   const navbarToggleIcon = document.querySelector('.navbar-toggler-icon');
  
   
   if (!iconState) {
      navbarToggleIcon.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/009/267/401/original/minus-sign-icon-free-png.png)';
      document.querySelector('nav ul').style.setProperty('display', 'flex', 'important');
      

   } else if (iconState) {
      navbarToggleIcon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.55)\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';
      document.querySelector('nav ul').style.setProperty('display', 'none', 'important');

   }

   
   iconState = !iconState;


 


  
})
 

