// Code your solution in this file!
function distanceFromHqInBlocks(_value) {
    return Math.abs(_value-42 );
}

//distanceFromHqInBlocks

console.log(distanceFromHqInBlocks(43))

console.log(distanceFromHqInBlocks(50))

console.log(distanceFromHqInBlocks(34))

// distanceFromHqInFeet

function distanceFromHqInFeet(_value) {
    return distanceFromHqInBlocks(_value) *264;
}

console.log(distanceFromHqInFeet(43))

console.log(distanceFromHqInFeet(50))

console.log(distanceFromHqInFeet(34))

// distanceTravelledInFeet

function distanceTravelledInFeet( num1, num2) {
    return Math.abs(num2 -num1) *264;
}

console.log(distanceTravelledInFeet(43, 48));

console.log(distanceTravelledInFeet(50, 60));

console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distances > 400 and <= 2000
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fee of $25 for distances > 2000 and <= 2500
    } else {
      return "cannot travel that far"; // For distances > 2500 feet
    }
  }
  