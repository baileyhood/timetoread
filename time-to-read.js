function timeToRead (str) {
  var emptyVar = "";
  var words = document.getElementsByTagName('p');
  for (i = 0; i < words.length; i++) {
    emptyVar += words[i].innerHTML;
  }
  var total = emptyVar.split(" ");
  totalLength = Math.round(total.length/230);
  return totalLength + " min read";
}

var time = timeToRead();
var bodyTime = document.getElementsByTagName('body')[0];
var p = document.createElement('p');
p.className = "time-counter";
p.textContent = time;
bodyTime.appendChild(p);
