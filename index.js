// Calculates distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42); // HQ is located at 42nd street
}

// Calculates distance from HQ in feet
function distanceFromHqInFeet(block) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(block) * feetPerBlock;
}

// Calculates distance traveled in feet between two points
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}

// Calculates the fare price for the journey
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
  