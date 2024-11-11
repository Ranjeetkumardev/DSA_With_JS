function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let pos1 = x1;
    let pos2 = x2;

    while (true) {
        pos1 += v1;
        pos2 += v2;
        if (pos1 === pos2) return 'YES'
        if (pos1 > pos2 || v2 >= v1) return 'NO'
         
    }

}

function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }

}

console.log(kangaroo(0, 3, 4, 2))