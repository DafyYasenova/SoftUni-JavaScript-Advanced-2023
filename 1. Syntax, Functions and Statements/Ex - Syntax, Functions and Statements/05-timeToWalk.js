function timeToWalk(steps, length, speedKm){

let distance = steps * length;
let speed = speedKm * 1000 / 3600;
let restTime = Math.floor(distance / 500 )* 60;
let totalTime = (distance / speed) + restTime;

let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2,'0');
let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');

console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5); // 00:32:48
timeToWalk(2564, 0.70, 5.5); // 00:22:35


