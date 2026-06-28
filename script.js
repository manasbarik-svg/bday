
document.getElementById("blowBtn").addEventListener("click", () => {
    document.getElementById("cake").src = "cake_blown.png";
    alert("🎂 Candles blown! Make a wish, Sonu!");
});

document.getElementById("letterBtn").addEventListener("click", () => {
    document.getElementById("letterMessage").innerHTML =
    "💌 My Friend 💙";
});

const gifts = document.querySelectorAll(".gift");

const messages = [
    "🎁 Wishing you endless happiness!",
    "☁️ May your dreams reach the sky!",
    "⭐ Keep shining brightly, Sonu!"
];

gifts.forEach((gift,index)=>{
    gift.addEventListener("click",()=>{
        alert(messages[index]);
    });
});

/* Confetti */
function createConfetti(){
    for(let i=0;i<100;i++){
        let confetti=document.createElement("div");

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-10px";
        confetti.style.width="10px";
        confetti.style.height="10px";
        confetti.style.background=
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.borderRadius="50%";
        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        let speed=Math.random()*5+2;

        let fall=setInterval(()=>{
            confetti.style.top=
            (parseFloat(confetti.style.top)+speed)+"px";

            if(parseFloat(confetti.style.top)>
               window.innerHeight){
                clearInterval(fall);
                confetti.remove();
            }
        },20);
    }
}

window.onload=createConfetti;
