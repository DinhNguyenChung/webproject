 var index =0;
 var slides = document.getElementById('poster').getElementsByTagName('img');
 var slidess = document.getElementById('posters').getElementsByTagName('img');
 function slideshow(){
    for(var i=0;i<slides.length;i++){
        slides[i].style.display="none";
        slidess[i].style.display="none";
    }
     index++;
     if(index>slides.length) index=1;
     slides[index-1].style.display="block";
     slidess[index-1].style.display="block";
     setTimeout(slideshow,1000);
 }

 slideshow();


 document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnLogin = document.querySelector('.btnLogin');
    const close = document.querySelector('.icon-close');
    // const bodyclose = document.querySelector('#body');
    
  
    registerlink.addEventListener('click', () => {
      wrapper.classList.add('active');
    });
  
    loginlink.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
    btnLogin.addEventListener('click',()=>{
      wrapper.classList.add('active-btnlogin');
    });
    close.addEventListener('click', ()=>{
      wrapper.classList.remove('active-btnlogin');
    });
    // bodyclose.addEventListener('click',()=>{
    //   wrapper.classList.add('active-btnlogin');
    // });
    // bodyclose.addEventListener('click',()=>{
    //   wrapper.classList.remove('active-btnlogin');
    // });
  });
  