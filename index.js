// function to get advice based on age
async function getAdvice(){
    const nameInput = document.getElementById('nameInput').value;
    const ageInput = document.getElementById('ageInput').value;

    if (!nameInput || !ageInput){
        alert('Please enter your name and age');
        return;
    }

try{
    const response = await fetch(`https://api.adviceslip.com/advice/${ageInput}`);
    const data = await response.json();
    const advice = data.slip.advice;
    document.getElementById('advice').innerHTML = `${nameInput},Here's some advice for you: "${advice}"`;
} catch (error) {
    console.error('Error fetching advice', error);
    document.getElementById('advice').innerHTML = 'Kurikiza amabwiriza wahawe mbere!';
}
}
//Thank you for watching
// Function to calculate remaining time untill new year
//Come on
 
function getRemainingTime() {
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
    const timeDifference = newYearDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) /1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

// Function to update the countdown display
//come on
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const remainingTime = getRemainingTime();
    countdownElement.innerHTML = `remains: ${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes, ${remainingTime.seconds} seconds`}

    //function to update countdown every second
    setInterval(updateCountdown,1000);
    // Function to get the current date
     const currentDate = new Date();
     const dateString = currentDate.toDateString();
     document.getElementById('date').innerHTML = `Today's Date: ${dateString}`;