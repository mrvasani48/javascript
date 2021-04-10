var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr = [arr1, arr2, arr3];
for (var i = 0; i < 3; i++) {

    arr1[i] = prompt("enter the noumber first row element");

};

for (var i = 0; i < 3; i++) {

    arr2[i] = prompt("enter the noumber second row element");

};

for (var i = 0; i < 3; i++) {

    arr3[i] = prompt("enter the noumber third row element");
};

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        document.write(" " + arr[i][j] + " " + "|");
    };r
    document.write("<br>");
};


var rows = prompt("enter the rows");
var cols = prompt("enter the cols");
var arr = new Array(rows);
for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
};

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        arr[i][j] = prompt("enter the array");
    };
};

for (var i = 0; i <rows; i++) {
    for (var j = 0; j < cols; j++) {
        document.write(" " + arr[i][j] + " " + "|");
    };
    document.write("<br>");
};
//
var rows = prompt("enter the rows");
var cols = prompt("enter the cols");
var arr = []    ;
for (var i = 0; i < rows; i++) {
    arr[i] = [];
};

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        arr[i][j] = prompt("enter the array");
    };
};

for (var i = 0; i <rows; i++) {
    for (var j = 0; j < cols; j++) {
        document.write(" " + arr[i][j] + " " + "|");
    };
    document.write("<br>");
};

