const radius = [3,1 , 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius;
};


const circumference = function (radius) {
    return 2 * Math.PI * radius;
};


const diameter = function (radius) {
    return 2 * radius;
};



Array.prototype.calaculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    };
    return output;
};

console.log (radius.map(area));



console.log(calaculate(radius, area));
// console.log(calaculate(radius, circumference));
// console.log(calaculate(radius,diameter));