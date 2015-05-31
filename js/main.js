var mainEl = document.getElementById('fb');
var mainText = "";
for (var i = 1; i < 101; i++) {

	mainText += "<li>";

    if ((i % 3 === 0) && (i % 5 === 0)) {

        mainText += "FizzBuzz";

    } else if(i % 3 === 0) {

        mainText += "Fizz";

    } else if(i % 5 === 0) {

        mainText += "Buzz";

    } else{

        mainText += i;

    }
    mainText += "</li>";

}

fb.innerHTML = mainText;
