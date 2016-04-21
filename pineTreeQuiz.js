// I'm making a pine tree. More specifically, I'm growing a pine tree and
//if I can grow this tree then I can some day be paid to be a JS developer.
//So, does this mean money can grow on trees after all?
//Yes, if you code it to do so

// Once the user enters in a number, and a character,
// the user can either then just press the enter key
//(as long as the cursor is in one of the input fields),
// or click a button that is labeled "Grow your tree" and
//the tree should be shown in the console. This requires you
//to add an event listener to the button, as well as an event
// listener for the enter/return key.

// If either of the input fields does not have a value in it
// when the user presses the enter key, or presses the button,
//then display an alert stating that both fields must have a
//value.

function treeFunction () {
// key for specifying the height of the tree
// the value for the height of the tree should be from
// the user in a <input type="text"> field in the DOM

var tree = {
// var heightInputFromUser =
height: document.getElementById("heightInput").value, //.value was here before to set or return value. but it was messing it up
// var characterInputFromUser =
character: document.getElementById("characterInput").value, //.value was here before to set or return value. but it was messing it up
}
console.log("Height Chosen By User: " + tree.height);
console.log("Character Chosen By User: " + tree.character);
// This is the math to make a symmetrical tree
for (var i = 0; i < tree.height; i++) {
// this is making sure it adds correct spacing on each line
var treeMakeup = " ".repeat(tree.height - i);
// adds the proper characters with extra math to make it fuller
treeMakeup += tree.character.repeat((2*i) + 1);
console.log(treeMakeup);
}; // closes for loop
}; // closes function

