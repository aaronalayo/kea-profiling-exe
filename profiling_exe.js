//get a positive integer n from input

function getPositiveInt(n) {
    if (n > 2) {
        console.log("This might take a while...");
        let t1 = +new Date();
        for (let i = 1; i <= n; i++) {
            for (let j = i; j <= 100000; j++) {
                console.log(i * j);
            }
            let t2 = +new Date();
            console.log("Done!");
            console.log(`Execution time: ${t2 - t1} ms`);
        }
    }
}

getPositiveInt(4);