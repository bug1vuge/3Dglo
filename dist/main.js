(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=e=>e<10?"0"+e:e,c=()=>{let e=(()=>{let e=(new Date("31 october 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=r(e.hours),n.textContent=r(e.minutes),o.textContent=r(e.seconds);let l=setInterval(c,1e3);e.timeRemaining<0&&(clearInterval(l),t.textContent="00",n.textContent="00",o.textContent="00")};c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul > li > a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>{e.addEventListener("click",r)}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),o=t.querySelector(".popup-close");let r,c=0;const l=()=>{let e=parseInt(screen.width/2-130);n.style.left=`${c}px`,c+=50,c<e&&(r=requestAnimationFrame(l)),screen.width<=768&&(cancelAnimationFrame(r),n.style.left=`${e}px`)};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",l()}))})),o.addEventListener("click",(()=>{t.style.display="none",c=0}))})()})();