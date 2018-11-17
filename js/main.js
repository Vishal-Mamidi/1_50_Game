var exists = [],
    randomNumber;
var arr = [];
for(var l=1;l < 26;l++) {
   do {
       randomNumber = Math.floor((Math.random()*25)+1);  
   } while (exists[randomNumber]);
   exists[randomNumber] = true;
   arr.push(randomNumber);
}

var exists2 = [],
    randomNumber2;
var arr2 = [];
for(var k=26;l < 51;l++) {
   do {
       randomNumber2 = Math.floor((Math.random()*25)+26);  
   } while (exists[randomNumber2]);
   exists[randomNumber2] = true;
   arr2.push(randomNumber2);
}
console.log("second array...."+arr2);

for(var i = 0;i<arr.length;i++){
  document.getElementById(i).innerHTML=arr[i];
}


var checkArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var checkArray2 = [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
$(document).ready(function(){
    $("div").click(function(){
      
      var checkNo = $(this).text();
      if(checkNo==checkArray[0]){
        if(checkNo==1){
          console.log(checkNo+"checking 1");
          $(this).text(arr2.shift());
        $(this).css("background-color", "#2196F3");
          console.log("removed element of first array"+checkArray.shift());
          start(); //starting timer function
        }
        else{
          $(this).text(arr2.shift());
          $(this).css("background-color", "#2196F3");
        
        //$(this).hide();
        console.log("removed element of first array"+checkArray.shift());
       // console.log("removed element of second array"+checkArray2.shift());
        }
        
      }
      if(checkNo==checkArray2[0]){
        if(checkNo==50){
          stop();
        }
        $(this).css('opacity', '0');
        console.log("removed element of second array"+checkArray2.shift());
        
      }
      console.log(checkNo);
        
    });
});


function myFunction() {
    document.getElementById("container").reset();
  console.log("hello")
}

var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

function start() {
    console.log("start function")
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 10);	
}

function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display-area").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
        
};

function stop() {
    timeStopped = new Date();
    clearInterval(started);
}