function christmasCountdown(){
    const ChristmasDate = new Date ("November 10, 2025 00:00 ");
    const now = new Date ();
    const diff = ChristmasDate - now;
    const  msInSecond = 1000; // сколько миллисекунд в секунде
    const  msinMinute = 60 * 1000; // сколько миллисекунд в минуте
    const msinHour = 60 * 60 * 1000;// сколько миллисекунд в часе
    const msinDay = 24 * 60 * 60 * 1000;// сколько миллисекунд в сутках

    const displayDay = Math.floor(diff/msinDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msinDay) / msinHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msinHour) / msinMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msinMinute) /msInSecond);
    document.querySelector(".seconds").textContent =displaySecond;

    if (diff <=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timeID);
        merryChristmas();

    }


}
let timeID = setInterval(christmasCountdown, 1000);

function merryChristmas(){
    const heading = document.querySelector("h1");
    heading.textContent = "WELCOME TO BUDAPEST!!!!";
    heading.classList.add("red")
}

const button = document.querySelector("#myButton");



const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        removeFocus();
        item.classList.add('selected');
        
    })

    removeFocus = () =>{
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }


})