let SpeedLimits = (speed) => {
  let penaltyPoint = (speed - 50) / 5;
  if (speed <= 50) {
    return "Safe driving. Continue.";
  } else if (speed > 50 && speed <= 120) {
    if (penaltyPoint <= 10) {
      return `Speed Limit Crossed. Penalty points: ${penaltyPoint}`;
    } else {
      return "You went over 10 penalty points, License Suspended";
    }
  } else {
    return "License Suspended";
  }
};
console.log(SpeedLimits(40));
console.log(SpeedLimits(60));
console.log(SpeedLimits(110));
console.log(SpeedLimits(121));
