function timeToRead (str) {
  var emptyVar = ""; //1. Created empty variable
  var words = document.getElementsByTagName('body'); //2. Selects all elements on DOM with 'body' tag name (includes all children: headers, p's, etc.)
  for (i = 0; i < words.length; i++) {
    emptyVar += words[i].textContent; //3. Adding all the 'words' to 'emptyVar'
  }
  var total = emptyVar.split(" "); //4. Splitting everything into words, creating an array, and putting into 'total'
  totalLength = Math.round(total.length/230); //5. rounding up the 'total'/230 (words per minute)
  console.log (totalLength);
  return totalLength + " min read"; //6. returning the value
}

var time = timeToRead(); //1. Creating variable to put the 'timeToRead' function inside of
var bodyTime = document.getElementsByTagName('body')[0]; //2. selects all elements on the page with "body" tag name. Why use [0]? Because Elements are an 1 Array.
var p = document.createElement('p'); // 3. creates a new p Element
p.className = "time-counter"; // 4. Creates a classname for p
p.textContent = time;
bodyTime.appendChild(p);
