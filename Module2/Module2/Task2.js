let start = 1900;
let end = 2016;

for (let y = start; y <= end; y++) {
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
        console.log(y)
    }
}