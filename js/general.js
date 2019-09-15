 //гамбургер-меню 
 const hamburgerMenu = document.querySelector(".hamburger-menu");
 const fullScreenMenu = document.querySelector(".full-screen-menu");
 const burgerMenuClosed = document.querySelector("#full-screen-menu__closed-id");
 const burgerMenuLink = document.querySelectorAll(".full-screen-menu__link");

 hamburgerMenu.addEventListener('click', function(event){
     event.preventDefault();
     fullScreenMenu.style.right = '0';

 })

 burgerMenuClosed.addEventListener('click', function(ev){
     ev.preventDefault();
     fullScreenMenu.style.right = '-100%';
     
 })

 for (let i=0; i < burgerMenuLink.length; i++) {
 burgerMenuLink[i].addEventListener('click', function(ev){
    ev.preventDefault();
    fullScreenMenu.style.right = '-100%';
    
})
}

 // слайдер
 const left = document.querySelector(".arrow__link--left");
 const right = document.querySelector(".arrow__link--right");
 const items = document.querySelector(".burger-content__items");

 right.addEventListener("click", function(e) {
     e.preventDefault();
 loop("right");
 });

 left.addEventListener("click", function(e) {
     e.preventDefault();
 loop("left");
 });

 function loop(direction) {
 if (direction === "right") {
     items.appendChild(items.firstElementChild);
 } else {
     items.insertBefore(items.lastElementChild, items.firstElementChild);
 }
 }



 /*
 let sliderRight = document.querySelector(".arrow__link--right");
 const burgerSlider = document.querySelector(".burger-content__items");

 const computed = getComputedStyle(burgerSlider);

 sliderRight.addEventListener('click', function(ev) {
     ev.preventDefault();
     let currentRight = parseInt(computed.right);
     console.log(parseInt(computed.right));

     if(!currentRight) {
         currentRight = 0;
         console.log('2');
     }

     if (currentRight < 100%) {
         burgerSlider.style.right = currentRight + 300 + 'px';
         console.log('3');
     }
 })*/


 // аккордеон команда

 let teamMember = document.querySelectorAll('.accordeon__item');
 
 for (let i=0; i < teamMember.length; i++) {
     teamMember[i].addEventListener('click', function(e) {
         
         if(!teamMember[i].classList.contains('accordeon__item--active')) {
             let tmpNode = document.querySelector('.accordeon__item--active');
             
             if(tmpNode) {
                tmpNode.classList.remove('accordeon__item--active'); 
             }

             teamMember[i].classList.toggle('accordeon__item--active');
         } else {
             teamMember[i].classList.remove('accordeon__item--active');
         }                  
         
     })
 }


 // accordeon  page menu

 let menuItemMeat = document.querySelectorAll('.menu__item');
 let menuText = document.querySelectorAll('.menu__text');

 for (let i=0; i < menuItemMeat.length; i++) {
     menuItemMeat[i].addEventListener('click', function(e){
         
         
             if(menuItemMeat[i].querySelector('.menu__text').classList.contains('menu__text--active'))
         
                 menuItemMeat[i].querySelector('.menu__text')
                     .classList.remove('menu__text--active'); 
             else {
             for (j=0; j< document.querySelectorAll('.menu__text').length; j++) {
                 document.querySelectorAll('.menu__text')[j].classList.remove('menu__text--active');
             }
             menuItemMeat[i].querySelector('.menu__text')
                     .classList.toggle('menu__text--active'); 
             }
     })
     }

     //окно отзыв

 let Overlay = document.querySelector('.overlay');
 let ButtomComments = document.querySelectorAll('.btn--overlay');
 let DisplayOverlay = getComputedStyle(Overlay);
 let OverlayClosed = document.querySelector('.overlay__closed');

 for (let i=0; i < ButtomComments.length; i++) {
     ButtomComments[i].addEventListener('click', function(e){
         e.preventDefault();
         Overlay.style.display = 'block';
     })

     OverlayClosed.addEventListener('click', function(e) {
         e.preventDefault();
         Overlay.style.display = 'none';
     })
 }

 // отправка формы

 let Form = document.querySelector('.form__elem');
 let OrderButton = document.querySelector('.btn-submit');


 //создание поля email
 let InputEmail = document.createElement('input');
 let EmailContainer = document.querySelector('.form__column');
 let LabelEmail = document.createElement('label');
 let LabelText = document.createElement('div');
 let EmailError = document.createElement('div');
 
 EmailContainer.appendChild(LabelEmail);
 LabelEmail.appendChild(LabelText);
 LabelEmail.appendChild(InputEmail);
 LabelEmail.appendChild(EmailError);

 LabelText.textContent = 'Email';
 InputEmail.classList.add('form__input');
 InputEmail.setAttribute('name', 'email');
 InputEmail.setAttribute('type', 'email');
 //InputEmail.setAttribute('reguired', 'reguired')
 EmailError.classList.add('error');
 //-------------------

 OrderButton.addEventListener('click', event => {
     event.preventDefault();
     
     if(validateForm(Form)) {
         const FormData = {
             name: Form.elements.name.value,
             phone: Form.elements.phone.value,
             comment: Form.elements.comment.value,
             email: Form.elements.email.value
         }
         // потом удалить
         console.log(FormData);
         //
         const xhr = new XMLHttpRequest();
         xhr.responseType = 'json';
         xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
         xhr.send(JSON.strindify(FormData));
         xhr.addEventListener('load', (response) => {
             console.log(xhr.response);
             
             //if(xhr.response.status) {
            // }
         })
     }
     return false;
 })

 function validateForm(form) {
     let valid = true;

     if (!validateField(form.elements.name)) {
         valid = false;
     }

     if (!validateField(form.elements.phone)) {
         valid = false;
     }

     if (!validateField(form.elements.comment)) {
         valid = false;
     }

     if (!validateField(form.elements.email)) {
         valid = false;
     }

     return valid;
 }

 function validateField(field) {
     if(!field.checkValidity()) {
         field.nextElementSibling.textContent = field.validationMessage;

         return false;
     } else {
         field.nextElementSibling.textContent = '';

         return true;
     }
 }

 // мщдальное окно отправки формы

 let OrderSubmitButton = document.querySelector('.btn-submit');
 let OrderOverlayWindow = document.querySelector('.overlay-order');
 let OverlayWindowClosed = document.querySelector('.btn-order--overlay');
 let DisplayOverlayOrder = getComputedStyle(OrderOverlayWindow);

 OrderSubmitButton.addEventListener('click', function(e){
         e.preventDefault();
         OrderOverlayWindow.style.display = 'block';
     })

 OverlayWindowClosed.addEventListener('click', function(e) {
     console.log('try close');
         e.preventDefault();
         OrderOverlayWindow.style.display = 'none';
     })
 


