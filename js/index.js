const nc_hyperlink = document.querySelector('.Nucamp_link') 
nc_hyperlink.style.height = '45px'


document.querySelector('.Nucamp_link').addEventListener('mouseover', () => {
   const nc_hyperlink = document.querySelector('.Nucamp_link') 
   nc_hyperlink.style.opacity='.8'
   nc_hyperlink.style.cursor='pointer'
})

document.querySelector('.Nucamp_link').addEventListener('mouseout', () => {
   const nc_hyperlink = document.querySelector('.Nucamp_link') 
   nc_hyperlink.style.opacity='1'
})
document.querySelector('.Nucamp_link').addEventListener('click', () => {
   const nc_hyperlink = document.querySelector('.Nucamp_link');
   window.open('https://www.nucamp.co/')
})