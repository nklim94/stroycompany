		/**************ВЫПАДАЮЩЕЕ МЕНЮ***************/
let hamburger = document.querySelector('.hamburger'),
	line1 = document.querySelector('.line1'),
	line2 = document.querySelector('.line2'),
	line3 = document.querySelector('.line3'),	
	body = document.querySelector('body'),
	mobileMenu = document.querySelector('.mobile-menu');	

function burgerAnim() {
	line1.classList.toggle('line1_active');
	line2.classList.toggle('line2_active');
	line3.classList.toggle('line3_active');
	mobileMenu.classList.toggle('mobile-menu_hidden');
	body.classList.toggle('scroll_block');	
}
hamburger.addEventListener('click', burgerAnim);

		/******************Слайдер наши предложения******************/


let predlozhLeft = document.querySelector('.predlozheniya__button-left'),
	predlozhRight = document.querySelector('.predlozheniya__button-right'),
	predlozhLeftActive = document.querySelector('.predlozh__strelka-left_active'),
	predlozhRightActive = document.querySelector('.predlozh__strelka-right_active');
	

function animStrelkaLeft(){
	predlozhLeftActive.classList.toggle('strelka_active');
}
function animStrelkaRight(){
	predlozhRightActive.classList.toggle('strelka_active');
}

predlozhLeft.addEventListener('mouseover', animStrelkaLeft);
predlozhLeft.addEventListener('mouseout', animStrelkaLeft);
predlozhRight.addEventListener('mouseover', animStrelkaRight);
predlozhRight.addEventListener('mouseout', animStrelkaRight);



/***********Мы работаем с мат капиталом стрелки************/

let matKapLeft = document.querySelector('.mat-kap__strelka-box-left'),
	matKapRight = document.querySelector('.mat-kap__strelka-box-right'),
	matKapLeftActive = document.querySelector('.mat-kap__strelka-left_active'),
	matKapRightActive = document.querySelector('.mat-kap__strelka-right_active');


function animMatKapLeft(){
	matKapLeftActive.classList.toggle('mat-kap_active');
}
function animMatKapRight(){
	matKapRightActive.classList.toggle('mat-kap_active');
}
matKapLeft.addEventListener('mouseover', animMatKapLeft);
matKapLeft.addEventListener('mouseout', animMatKapLeft);
matKapRight.addEventListener('mouseover', animMatKapRight);
matKapRight.addEventListener('mouseout', animMatKapRight);



				/***********Отзывы листать ****************/
 
let cardAll = document.querySelectorAll('.otzyvi__card'),
    testr = document.querySelector('.otzyvi__button-right'),
    testl = document.querySelector('.otzyvi__button-left'),
    totalClick = 0,
    cardScale = 1;    


function rightAnimCard() {
	if (totalClick<cardAll.length - 3){
		totalClick++;
	}else{
		totalClick=0;
	}
	cardAll.forEach(function(item){
		item.style.transform = 'translateX(' + (-654 * totalClick) +'px)'		
	}		
	)
	cardAll[cardScale].style.transform='translateX(' + (-654 * totalClick) +'px) scale(1)';
	if(cardScale < cardAll.length - 2){
	cardScale++;
	}else{
		cardScale=1;
	}
	cardAll[cardScale].style.transform='translateX(' + (-654 * totalClick) +'px) scale(1.1)';
	console.log('totalClick: ' + totalClick);
	console.log('cardScale: ' + cardScale);
}

function leftAnimCard() {
	if(totalClick > 0){
	totalClick--;
	}else{
		totalClick = cardAll.length - 3;
	}
	cardAll.forEach(function(item){
		item.style.transform = 'translateX(' + (-654 * totalClick) +'px)'		
	}
	)
	cardAll[cardScale].style.transform='translateX(' + (-654 * totalClick) +'px) scale(1)';
	if(cardScale > 1){
	cardScale--;
	}else{
		cardScale=cardAll.length - 2;
	}
	cardAll[cardScale].style.transform='translateX(' + (-654 * totalClick) +'px) scale(1.1)';
	console.log('totalClick: ' + totalClick);
	console.log('cardScale: ' + cardScale);
}

testr.addEventListener('click',rightAnimCard);
testl.addEventListener('click',leftAnimCard);


				
				/***********SUBMENU**************/

let catalogue = document.querySelector('.catalogue'),
	catalogueSubMenu =  document.querySelector('.header__catalogue-submenu'),
	firstScreen = document.querySelector('.first-screen');

function showMenu() {
	catalogueSubMenu.classList.add('show');
}
function hiddenMenu() {
	catalogueSubMenu.classList.remove('show');
}

catalogue.addEventListener('mouseover', showMenu);
firstScreen.addEventListener('mouseover', hiddenMenu);


	
	/****************ПРЕДЛОЖЕНИЯ ДЛЯ ВАС (УПРАВЛЕНИЕ)*************/

let housesCardButton = document.querySelector('.houses-card'),
	baniCardButton = document.querySelector('.bani-card'),
	baniItem = document.querySelectorAll('.bani'),
	houseItem = document.querySelectorAll('.house'),
	buttonBackground = document.querySelectorAll('.predlozheniya__item');

function showBaniCard() {	
	baniCardButton.style.background='#FFC239';
	baniItem.forEach(function(item){	
		item.style.opacity='1';			
		setTimeout(()=>item.classList.remove('none'),600);
	})
}
function hiddenHouseCard() {
	housesCardButton.style.background='';
	houseItem.forEach(function(item){
		item.style.opacity = '0';		
		setTimeout(()=>item.classList.add('none'),800);
	})
}

function showHouseCard() {
	housesCardButton.style.background='#FFC239';
	houseItem.forEach(function(item){
		item.style.opacity = '1';				
		setTimeout(()=>item.classList.remove('none'),600);
	})
}
function hiddenBaniCard() {
	baniCardButton.style.background='';
	baniItem.forEach(function(item){
		item.style.opacity = '0';		
		setTimeout(()=>item.classList.add('none'),800);
	})
}

baniCardButton.addEventListener('click', showBaniCard);
baniCardButton.addEventListener('click', hiddenHouseCard);
housesCardButton.addEventListener('click', hiddenBaniCard);
housesCardButton.addEventListener('click', showHouseCard);
