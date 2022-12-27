
// hoini 

const namese = [
    "riju",
    "sweet",
    "kasem",
    "sagor",
    "rohim",
    "sweet",
    "korim",
    "sagor",
    "puja",
  ];
  function perfactFriend(array) {
    var friendWord = "";
  
    array.forEach(function(word) {
      if(word.length > friendWord.length) {
        friendWord = word;
      }
    });
  
    return friendWord;
  }
  console.log(perfactFriend(namese));