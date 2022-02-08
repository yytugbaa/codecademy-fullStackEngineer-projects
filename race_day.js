let raceNumber = Math.floor(Math.random() * 1000);
let registeredOnly = false; 
const runnerAge = 19;
if (runnerAge > 18 && registeredOnly) {
  raceNumber += 1000;
  } 
if (runnerAge > 18 && registeredOnly) { 
  console.log('Race start at 9:30am.');
} else if (runnerAge>18 && !registeredOnly) { 
   console.log('Race starts at 11.00am');
} else if (runnerAge<18) {
  console.log('Race starts at 12.30 am');
} else {
  console.log('registration desk');
}


