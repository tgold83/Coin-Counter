// const coinCounter = (money) => {
//   //termination condition
//   if (isNaN(money)) {
//     return;
//   }
//   //base case
//   if (money == 0) {
//     return money;
//   }
//   //recursion 
//   else {
//     if (money/.25 >= 1)
//     {
//       const numQuarters = Math.floor(money/.25);
//       console.log("Quarters: " + numQuarters);
//       return coinCounter(money - numQuarters*.25);
//     }
//     if (money / .1 >= 1)
//     {
//       const numDime = Math.floor(money / .1);
//       console.log("Dime: " + numDime);
//       return coinCounter(money - numDime * .1);
//     }
//     if (money / .05 >= 1)
//     {
//       const numNickle = Math.floor(money / .05);
//       console.log("Nickle :" + numNickle);
//       return coinCounter(money - numNickle * .05);
//     }
//     if (money / .01 >= 1)
//     {
//       const numPenny = Math.floor(money / .01);
//       console.log("Penny :" + numPenny);
//       return coinCounter(money - numPenny * .01);
//     }
//   }
// };
// coinCounter(4.99);







const coinCounter = (coinIndex) => {
  const coinArray = [.25, .10, .05, .01];
  return (totalMoney) => {
    if (totalMoney == 0) {
      return "no coin of this value";
    }
    const money = totalMoney / coinArray[coinIndex];
    if (money >= 1) {
      //amount of specified coin
      const coinNum = Math.floor(totalMoney / coinArray[coinIndex]);
      console.log(coinNum)
      //leftover money
      return coinCounter(coinIndex + 1)(totalMoney - coinNum * coinArray[coinIndex]);
    } 
    if (money < 1){
      const coinNum = 0;
      return coinCounter(coinIndex + 1)(totalMoney - coinNum * coinArray[coinIndex]);
    }
   }
}
coinCounter(0)(4.99); 