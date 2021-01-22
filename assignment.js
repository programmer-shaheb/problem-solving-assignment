//  https://github.com/programmer-shaheb/problem-solving-assignment

//  Problem1 (Kilometer To Meter)

function kilometerToMeter(distance) {
  if (distance < 0) {
    return "Distance cannot be negative!";
  } else {
    return distance * 1000;
  }
}

// Problem2 (Find The Big String From An Array)

function megaFriend(arr) {
  var longestString = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

// Problem3 (Create A Budget Calculator)

function budgetCalculator(watchCount, phoneCount, laptopCount) {
  let totalMoney = 0;
  if (watchCount < 0 || phoneCount < 0 || laptopCount < 0) {
    return "Invalid Number!";
  }
  if (watchCount >= 0) {
    var moneyForWatch = watchCount * 50;
  }
  if (phoneCount >= 0) {
    var moneyForPhone = phoneCount * 100;
  }
  if (laptopCount >= 0) {
    var moneyForLaptop = laptopCount * 500;
  }
  totalMoney = moneyForWatch + moneyForPhone + moneyForLaptop;
  return totalMoney;
}

// Problem4 (Find The Costing For Staying In A Hotel)

function hotelCost(days) {
  var cost = 0;
  if (days < 0 || !Number.isInteger(days)) {
    return "Please Input A Valid Number.";
  } else if (days <= 10) {
    var first10Days = days * 100;
    cost = first10Days;
  } else if (days <= 20) {
    var first10Days = 10 * 100;
    var extraDays = days - 10;
    var second10Days = extraDays * 80;
    cost = first10Days + second10Days;
  } else {
    var first10Days = 10 * 100;
    var second10Days = 10 * 80;
    var laterDays = days - 20;
    var remainingDays = laterDays * 50;
    cost = first10Days + second10Days + remainingDays;
  }
  return cost;
}
