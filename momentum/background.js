const bg = document.querySelector("body");
const bgN = 10;
   

window.onload= function(){
    const randomN = String(Math.floor(Math.random() * bgN)).padStart(2, '0');
    const randomBgUrl = `./bg/bg${randomN}.PNG`;
    console.log(randomBgUrl);
    bg.style.backgroundImage=`url(${randomBgUrl})`;
 
}