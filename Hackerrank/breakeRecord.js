/**
 * The function `breakingRecords` takes an array of scores and returns the number of times the highest
 * and lowest scores were broken.
 * @param scores - An array of integers representing scores for a game.
 * @returns The `breakingRecords` function returns a string containing the number of times the highest
 * score was broken and the number of times the lowest score was broken in the input array of scores.
 * The format of the returned string is `,` where `maxCount` is the number of
 * times the highest score was broken and `minCount` is the number of times the lowest score was broken
 */


function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            maxCount++;
            max = scores[i]
        }
        if (scores[i] < min) {
            minCount++;
            min = scores[i]
        }
    }
    return `${maxCount},${minCount}`
}


console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))