var btn = document.getElementById("knapp");
var fel = document.getElementById("fel");
var quest = document.getElementById("question");
var ok = document.getElementById("ok");
var fragetext = document.getElementById("fraga");
var alt1 = document.getElementById("alt1");
var alt2 = document.getElementById("alt2");
var alt3 = document.getElementById("alt3");
var alt4 = document.getElementById("alt4");

var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple', true);

    xhr.onload = function(){
        if(this.status == 200){
            var questionResp = JSON.parse(this.responseText);
            console.log(questionResp);
            fragetext.innerHTML = questionResp.results[0].question;
            alt1.innerHTML = questionResp.results[0].correct_answer;
            alt2.innerHTML = questionResp.results[0].incorrect_answers[0];
            alt3.innerHTML = questionResp.results[0].incorrect_answers[1];
            alt4.innerHTML = questionResp.results[0].incorrect_answers[0];

           
        }
    }
   
    xhr.send();


