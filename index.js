function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector(".target")
}

function increaseRankBy(n){
<<<<<<< HEAD
  var rank = document.querySelectorAll("ul.ranked-list li");
  for(var i = 0; i<rank.length;i++){
    var number = parseInt(rank[i].innerHTML);
    rank[i].innerHTML = (number + n).toString();
  }
}

function deepestChild(){
  return document.querySelector("div#grand-node div div div div")
=======
  
}

function deepestChild(){
  
>>>>>>> c48e0ed62ca22932b70895e623417a5b797801c2
}