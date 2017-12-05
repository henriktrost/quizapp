//Hämta in globala variabler

var btn = document.getElementById("knapp");
var fel = document.getElementById("fel");
var quest = document.getElementById("question");
var ok = document.getElementById("ok");
var fragetext = document.getElementById("fraga");
var alter = document.getElementsByClassName("alter");
var number = document.getElementById("fragaNumber");


//Gör en AJAX-request

var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple', true);

    xhr.onload = function(){
        if(this.status == 200){
            
            var questionResp = JSON.parse(this.responseText);
            console.log(questionResp);
            var i = 0;
            console.log(i);
            //Lägger in frågetexten i dokumentet
            getQuestion(questionResp, i);
              
                //Kolla om rätt svar skickas.
                for (var t = 0; t<alter.length; t++) {
                    alter[t].addEventListener("click", function() {
                        var svar = this.innerHTML;
                        kollaRatt(svar, questionResp, i);
                        i++;
                        getQuestion(questionResp,i);
                    });
                   
                };
                console.log(i);
        };
    } 

    xhr.send();


    function getQuestion(fragearray, q){
        number.innerHTML = "Fråga "+(q+1);
        fragetext.innerHTML = fragearray.results[q].question;
        console.log(q);
        
        //Skapar en array av rätt + fel svar och skickar dessa för att slumpas

        var fragearr = [fragearray.results[q].correct_answer, fragearray.results[q].incorrect_answers[0], fragearray.results[q].incorrect_answers[1], fragearray.results[q].incorrect_answers[2]];
        var correct = fragearray.results[q].correct_answer;
        shuffle(fragearr);
                   

            //Lägger in svarsalternativen. //Gör i en loop istället
            alter[0].innerHTML = fragearr[0];
            alter[1].innerHTML = fragearr[1];
            alter[2].innerHTML = fragearr[2];
            alter[3].innerHTML = fragearr[3];
    }



    function shuffle(array) {
        
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array; 
   }


   function kollaRatt(sv, ques, r) {
       if(sv == ques.results[r].correct_answer) {
            console.log("Det var rätt");
        }
        else{
            console.log("Fel fel fel");
        }

    console.log("Hej")
   };




