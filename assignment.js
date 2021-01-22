//  Problem1

function kilometerToMeter(distance) {
  if (distance < 0) {
    return "Distance cannot be negative!";
  } else {
    return distance * 1000;
  }
}

// Problem2

var friendsList = [
  "Akash",
  "Pankaj",
  "Faruque Parvej45454545454",
  "xxxydfyc",
  "Abidur Rahman Akash",
  10,
  "Rasel",
];

function megaFriend(arr) {
  var longestString = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

// Problem3

function budgetCalculator(watchCount, phoneCount, laptopCount) {
  let totalMoney = 0;
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

// var value = budgetCalculator(20, 4560, 10);
// console.log(value);

// Problem4

function hotelCost(days) {
  var cost = 0;
  if (days < 0 || !Number.isInteger(days)) {
    return "Please Input A Valid Number";
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

var res = hotelCost(1);
console.log(res);
