// var maxProfit = function(prices) {
//     let buy =0;
//     let min = prices[0] ;
//     for(let i=0 ; i< prices.length ; i++){
//         if(prices[i] < min){
//             min = prices[i]
//             buy =i
//         }
//     }
//     let max = -Infinity;
//     for(let i=buy ; i< prices.length ; i++){
//         if(prices[i] > max){
//             max = prices[i]
//         }
//     }
//     return max-min;
// };
// var maxProfit = function(prices) {
//     let minPrice = Infinity;
//    let maxProfit = 0;

//    for (let i = 0; i < prices.length; i++) { 
//        if (prices[i] < minPrice) {
//            minPrice = prices[i];
//        }
//        const profit = prices[i] - minPrice;
//        if (profit > maxProfit) {
//            maxProfit = profit;
//        }
//    }
//    return maxProfit;
// };


var maxProfitTwo = function(prices) {
     let maxProfit = 0;
    for(let i =1 ; i < prices.length ; i++){
       if(prices[i] > prices[i -1]){
         maxProfit += (prices[i] - prices[i -1])
       } 
    }
   return maxProfit;
      
 };
console.log(maxProfitTwo([7,1,5,3,6,4]))