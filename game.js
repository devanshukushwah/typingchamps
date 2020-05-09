// define the time limit
var console = { log: function() {} };
var TIME_LIMIT = 60;

// define quotes to be used

var check = true;
var forcharsize= [];
var forcharsize2= [];
var size_char = 0;
var t = 0;
var ks= 0;
var shint = false;
// var missmatch=0;
// var match=0;
var accuracyVal=0;
var inputVal ="";
var until = false;
// quotes_array = temp_array3;
// selecting required elements
var timer_text = document.querySelector(".curr_time");
var sibox = document.querySelector(".ibox");
var iibox = sibox.value;
var accuracy_text = document.querySelector(".acc");
var error_text = document.querySelector(".curr_errors");
var cpm_text = document.querySelector(".curr_cpm");
var wpm_text = document.querySelector(".curr_wpm");
var quote_text = document.querySelector(".quote");
var input_area = document.querySelector(".input_area");
var restart_btn = document.querySelector(".restart_btn");
var cpm_group = document.querySelector(".cpm");
var wpm_group = document.querySelector(".wpm");
var error_group = document.querySelector(".errors");
var accuracy_group = document.querySelector(".accuracy");
var keystrokes = document.querySelector(".keystrokes");
var sahigalat = document.querySelector(".sahigalat");
var sahi = document.querySelector(".sahi");
var galat = document.querySelector(".galat");
var sresult = document.querySelector(".sresult");
var typesection = document.querySelector("#type-section");
var txthint = document.querySelector("#txtHint");
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var demo3 = document.querySelector("#demo3");
var demo4 = document.querySelector("#demo4");
var demo5 = document.querySelector("#demo5");
var demo6 = document.querySelector("#demo6");
var demo7 = document.querySelector("#demo7");
// var scw = document.querySelector(".scw");

var timeLeft = TIME_LIMIT;
var timeElapsed = 0;
var total_errors = 0;
var errors = 0;
var accuracy = 0;
var characterTyped = 0;
var current_quote = "";
var quoteNo = 0;
var timer = null;
var cpm=0;
var wpm = 0;
var currvalue;
var read_array=[];
var write_array=[];
var sahi_word=0;
var galat_word=0;
var untiltimer = null;
// var quotes_array=[];

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(graph);
var items = [];
// var items = [
//   [1, 5],
//   [3, 2],
//   [5, 7],
//   [6, 3],
//   [9, 2]
// ];



function updateQuote() {
  error_text.textContent = total_errors + errors;

  
  quote_text.textContent = null;
  // current_quote = "pixel";
  current_quote = quotes_array[quoteNo];
  // current_quote = "pixles dlkf adsklfdasklL";


  // separate each character and make an element 
  // out of each of them to individually style them
  current_quote.split('').forEach(char => {
    const charSpan = document.createElement('span')
    charSpan.innerText = char
    quote_text.appendChild(charSpan)

  })
      

  // roll over to the first quote
  // if (quoteNo < quotes_array.length - 1)
  //   quoteNo++;
  // else
  //   quoteNo = 0;
}
function fibox(){
  // iibox = sibox.value;
  alert(iibox);
processCurrentText();

}
 function getInputValue(){
            // Selecting the input element and get its value 
            inputVal = document.getElementById("myInput").value;

        }
function processCurrentText() {
  //   e = e || window.event;
  // var kcode = e.keyCode;
// result in undefined

  //       var phpadd= <?php insert();?> //call the php add function
  // alert(phpadd); 
  // return false;
  updateTimer();
  // e = e || window.event;
  // var kcode = e.keyCode;
  //   e = e || window.event;
  // var kcode = e.keyCode;
  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input;
  forcharsize = curr_input.length;
  // size_char = forcharsize;
  t =size_char+forcharsize;
  // demo.textContent= t;
  // increment total characters typed
  characterTyped =t;
  ks++;
  errors = 0;
    currvalue = curr_input;
   
   
  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    var typedChar = curr_input_array[index];
    // ascii = curr_input_array.charCodeAT(0);
    // characters not currently typed

    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');

      // correct characters
    }
    //else if(ascii 97){
    //   characterTyped--;
    // } 
    else if (typedChar === char.innerText) {

      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');

       // incorrect characters
    } else {
      // missmatch++;
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');


      // increment number of 
      // if (typedChar == " ")
      // {
      // }
      // else
      errors++;


    }
    // if (kcode == 8) {
    //     characterTyped--;
    // }
  });
          // demo4.textContent =errors;
      // demo5.textContent = total_errors;
  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update accuracy text
  var correctCharacters = (characterTyped - (total_errors + errors));
  // demo2.textContent=characterTyped;
  // demo3.textContent=match;
  // demo4.textContent=ks;
  accuracyVal = 0;
  accuracyVal = ((correctCharacters / ks) * 100) ;
  // ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal) + "%";
  keystrokes.textContent = ks;


  // if current text is compvarely typed
  // irrespective of errors
  if (curr_input.length== current_quote.length) {
      // read_array.push(current_quote);
      write_array.push(currvalue);
       quoteNo++;
    updateQuote();
    size_char+=forcharsize; 
     // errors--;
    // update total errors
    total_errors += errors;
    // total_errors--;
    
    // clear the input area
    input_area.value = "";
    
  }
     // calculate cpm and wpm
  // cpm = Math.round(((characterTyped / timeElapsed) * 60));
  cpm = characterTyped;
  // wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));

  // update cpm and wpm text
  cpm_text.textContent = cpm;
  // wpm_text.textContent = wpm;
// demo4.textContent= items;
// setInterval(graph,1000);


}



function finishGame() {
  // stop the timer
  clearInterval(timer);
  obj =[];
  // disable the input area
  input_area.disabled = true;
    if ( inputVal != "" && accuracyVal > 75){
     // demo6.textContent = "working both";
   // document.cookie = inputVal;
     checkCookie();
     jinsert();
     setTimeout(showUser,2000);


  }
  // show finishing text
  quote_text.textContent = "Press restart Symbol to start a Typing Test.";



}


function startGame() {
    $.post('https://typingchamps.000webhostapp.com/matkar.php',
     function( result ){    
         quotes_array=JSON.parse(result);
      });
   // var usr=;
   // alert(usr);
   // document.getElementById("myInput").value=document.cookie;
   checkCookie();
     showUser();
  resetValues();
  updateQuote();
    document.getElementById("foo").focus();

 
}


function updateTimer() {
  if(check == true){
  timer = setInterval(() => {
  if (timeLeft > 0) {
    // decrease the current time left

    timeLeft--;

    // increase the time elapsed
    timeElapsed++;

    // update the timer text
    timer_text.textContent = timeLeft;
    wpm = Math.round((((cpm / 5) / timeElapsed) * 60));
    // wpm = Math.round(((ks-total_errors)/timeElapsed)*10);
    wpm_text.textContent = wpm;
    google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(graph);

  }
  else {
    // finish the game
    // input_area.value = input_area.value + " ";
      write_array.push(currvalue);
      var write = write_array.toString().replace(","," ").split(" ");
      var read= quotes_array.toString().replace(","," ").split(" ");
      for( var e=0;e<write.length;e++){
         for(var f=0;f<write.length;f++)
        {
        if(write[e]==read[f])
        {
          sahi_word++;
          break;
        }
        
      }
    }
            galat_word = Math.abs(write.length-sahi_word);
      // if(write[write.length-1] != read[write.length-1])
      //   {
      //     galat_word--;
      //     // errors--
      //     // error_text.textContent = total_errors + errors;
      //     //     if(write[write.length-1] == read[write.length-1]){
      //     // errors--;
      //     // error_text.textContent = total_errors + errors;
      //     // }
      //   }
      

      sahigalat.style.display="block";
      sahi.style.display="block";
      galat.style.display="block";
      sresult.style.height="150px";
      // typesection.style.margin="-63px 0px 0px 16px";
      // demo4.textContent = write.length;
      // demo5.textContent = sahi_word;
      // demo2.textContent = write[write.length-1];
      // demo3.textContent = read[write.length-1];
      sahi.textContent = sahi_word;
      if (total_errors + errors== 0){
        galat.textContent = 0;
      }
      else
      galat.textContent = galat_word;
    finishGame();
    clearInterval(timer);
  }
},1000);
  // setInterval(graph,1000);
check = false;
}
}
function resetValues() {
  // updateQuote();
  // setInterval(updateQuote,1500);
  if(until!=true){
  untiltimer = setInterval(() => {
 if(current_quote==""){
  updateQuote();
 }
 else{
clearInterval(untiltimer)
 }
},500);
  until = false;
}
  check = true;
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  correct_word = 0;
  input_area.disabled = false;
  size_char=0;
  accuracyVal =0;
  missmatch=0;
  match=0;
  // items = [];
  input_area.value = "";
  // quote_text.textContent = 'Click on the area below to start the game.';
  // accuracy_text.textContent = 100;
  // timer_text.textContent = timeLeft;
  error_text.textContent = 0;
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
}
function graph()
{    var te = TIME_LIMIT-timeLeft;
  items.push([te,wpm]);
        var data = new google.visualization.DataTable();
      // data.addColumn('number', 'Y');
      // data.addColomn('number','Time');
      data.addColumn('number', 'X');
      data.addColumn('number', 'WPM');

      data.addRows(items);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'WPM'
        }
              };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
}

function showUser(str) {
    $.ajax({
        crossOrigin: true,
        url: 'https://typingchamps.000webhostapp.com/datashow.php',
        // url: 'http://typingchamps.byethost17.com/datashow.php',
        // url: 'http://localhost:8000/datashow.php',
        success: function(data) {
            document.getElementById("txtHint").innerHTML=data;
        }
    });}




function jinsert(){
var data1=inputVal;

var data2=wpm;
var data3 = accuracyVal;

var dataTosend='user='+data1+'&pwd='+data2+'&accu='+data3;

$.ajax({

url: 'https://typingchamps.000webhostapp.com/phpincert.php',

type: 'POST',

data:dataTosend,

async: true,

success: function (data) {



},

});
}


function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    // alert("Welcome again " + user);
    document.getElementById("myInput").value=user;
  } 
  if (inputVal!=""){
     // user = prompt("Please enter your name:","");
     user = inputVal;
    document.getElementById("myInput").value=user;
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
