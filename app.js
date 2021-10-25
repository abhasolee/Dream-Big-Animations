//Selectors
const slider=document.querySelector('.slider');
const logo=document.querySelector('.logo');
const navlinks=document.querySelectorAll('nav');
const hero=document.querySelector('.hero');
const headline=document.querySelector('section h1');

//Timeline 
const tl= gsap.timeline();

//Animations
tl.fromTo(hero, {height:'0'}, {height:'80vh', duration:1, ease:'Power2.easeOut'})
.fromTo(hero, {width:'100%'},{width:'80%',duration:2,ease:'Bounce.easeOut'})
.fromTo(slider, {x:"-100%"},{x:0, duration:2, delay:-1, ease:'Power3.easeOut'})
.fromTo(headline, {opacity:0, x:100}, {opacity:1, x:0,duration:2, ease:'elastic'})
.fromTo(navlinks,{opacity:0, x:50}, {x:0, opacity:1,duration:2, ease:'elastic', delay:-2});