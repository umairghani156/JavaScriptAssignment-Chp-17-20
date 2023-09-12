// Question No 1
var multiArray =[[],[],[]];
// Question No 2
var arr = [[0, 1, 2,3],[1, 0, 1,2],[2, 1, 0,1]];
document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);
// Question No 3
for (var i = 1; i <= 10; i++) {
    const element =i;
    console.log(element)
};
// Question No 3
var tableNumber = prompt("Enter a number to show its multiplication table");
if (!isNaN(tableNumber)) {
    for (var i = 1; i <= 1; i++) {
        console.log(tableNumber+"x"+ i + " = "+ (tableNumber*i))
    }
}else {
    alert("Please enter correctly")
}
// Question No 4
var multiplyTable = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");
for (var i = 1;i <= tableLength; i++) {
    console.log(multiplyTable+ " x " + i + " = "+(multiplyTable*i))
};
// Question No 4 can also be solved like so
var multiplyTables = +prompt("Enter a number to show its multiplication table");
var tablesLength = +prompt("Enter length multiplication table");
if (multiplyTables<=tablesLength) {
    for (var i = 1; i <= tablesLength; i++) {
        console.log(multiplyTables + " x "+ i + " = "+(multiplyTables*i))
    }
}else {
    alert("Please enter correct number")
}
var items = ["apple","banana","mango","orange","strawberry"];
for (var i = 0; i < items.length; i++) {
    const element = items[i];
    console.log(element);
};
console.log("Element at index 0 is "+items[0]);
console.log("Element at index 1 is "+items[1]);
console.log("Element at index 2 is "+items[2]);
console.log("Element at index 3 is "+items[3]);
console.log("Element at index 4 is "+items[4]);
// Question No 6
document.write("<b>Counting:</b> <br><br>")
for (var i = 0; i <= 15; i++) {
    const counting = i;
    document.write(counting+" ,")
};
document.write("<br><br><b>Reverse counting:</b><br><br>");
for (var i = 10; i > 0; i--) {
    let element = i;
    document.write(element+ " ,")
};
document.write("<br><br><b>Even:</b><br><br>");
for (var i = 0; i <= 20; i++) {
    let even = i++;
    document.write(even +" ,")
}
document.write("<br><br><b>Odd:</b><br><br>");
for (var i = 1; i <= 19; i++) {
    const odd = i++;
    document.write(odd+" ,")
};
document.write("<br><br><b>Series:</b><br><br>");
for (var i = 2; i < 20; i++) {
    const series = i++;
    document.write(series+"k, ")
}
// Question No 7
var number;
var flag = false
var bakeryItems = ['cake','apple pie','cookie','chips','patties'];
var askingAboutItems = prompt("Welcome to United Bakery.What do you want to order sir/ma'am?");
for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] == askingAboutItems) {
        flag = true;
        number = i;
    }
}
if(flag) {
    alert(askingAboutItems+" is available at index " +number+" in our bakery");
}else{
    alert("We are sorry. "+ askingAboutItems+ " is not available in our bakery.")
}
// Question No 8
var largestNumber = [24, 53, 78, 91, 12];
var findingLargestNum = largestNumber[0];
for (let i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] > findingLargestNum) {
        findingLargestNum = largestNumber[i];
    }
}
document.write("<br><br>Arrays items: "+largestNumber+"<br>The largest number is " + findingLargestNum);

// Question No 9
var smallestNumber = [24, 53, 78, 91, 12];
var findingSmallestNum = smallestNumber[0];
for (let i = 0; i < smallestNumber.length; i++) {
    if (smallestNumber[i] < findingSmallestNum) {
        findingSmallestNum = smallestNumber[i];
    }
}
document.write("<br><br>Arrays items: "+smallestNumber+"<br>The largest number is " + findingSmallestNum);

// Question No 10
for (let i = 5 ; i <= 100; i = i +5) {
    document.write(i + ", ")
}
