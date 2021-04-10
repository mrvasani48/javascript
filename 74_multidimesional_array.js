//empty array
var array = [[], [], []];
array[0][0] = 12;
array[0][1] = 12;
array[0][2] = 12;
array[1][0] = 12;
array[1][1] = 12;
array[1][2] = 12;
array[2][0] = 12;
array[2][1] = 12;
array[2][2] = 12;

console.log(array);


var d2array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(d2array);
var newarray = array.concat(d2array);
console.log(newarray);

var d2array = new Array(
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
);
//console.log(d2array);
var d2array = [[], [], []];

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        document.write(" " + d2array[i][j] + " " + "|");
    };
    document.write("<br>");
};
