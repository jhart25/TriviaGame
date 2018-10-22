$(document).ready(function(){

    $('#questions').hide();

var questions = [{
    q: "What does the 'D' in the Dennis System stand for?",
    a: ["Divide entirely", "Demonstrate value", "Duckwalk", "Deny everything"],
    correct: "Demonstrate value",
    name: "dennisSystem",
    divClass: ".dennisSystem"
},
{
    q: "What is Frank's idea for a band name?",
    a: ["Chemical Toilet", "Bon Joni", "Pecan Sandies", "Electric Dream Machine"],
    correct: "Pecan Sandies",
    name: "bandName",
    divClass: ".bandName"
},
{
    q: "Who is Mac's idol?",
    a: ["Chase Utley", "Liam McPoyle", "Tom Brady", "Mac Miller"],
    correct: "Chase Utley",
    name: "macIdol",
    divClass: ".macIdol"
},
{
    q: "What is Charlie's legal specialty?",
    a: ["Cat law", "Maritime law", "Bird law", "Civil rights law"],
    correct: "Bird law",
    name: "charlieLaw",
    divClass: ".charlieLaw"
},
{
    q: "What is the best description of Dee?",
    a: ["Funny", "Pretty", "A big stupid bird", "Smart"],
    correct: "A big stupid bird",
    name: "sweetDee",
    divClass: ".sweetDee"
},
{
    q: "What is Charlie's favorite food?",
    a: ["Milk steak", "Spaghetti", "Crack", "Meatloaf"],
    correct: "Milk steak",
    name: "favFood",
    divClass: ".favFood"
},
{
    q: "What is Rickety Cricket's full name?",
    a: ["Micky Fishwall", "Rickety Cricket", "Lebron James", "Matthew Mara"],
    correct: "Matthew Mara",
    name: "cricket",
    divClass: ".cricket"
},
{
    q: "What is the game that Charlie and Frank often play at night?",
    a: ["Rock, paper, scissors", "Nightcrawlers", "Poker", "Trash gremlins"],
    correct: "Nightcrawlers",
    name: "nightGame",
    divClass: ".nightGame"
},
{
    q:"What is the name of Charlie's play?",
    a: ["Cats and Spydars", "Cats", "Project Badass", "Nightman Cometh"],
    correct: "Nightman Cometh",
    name: "charliePlay",
    divClass: ".charliePlay"
},
{
    q: "What is Charlie's favorite hobby?",
    a: ["Dumpster diving", "Janitorial stuff", "Magnets", "Bashing rats"],
    correct: "Magnets",
    name: "favHobby",
    divClass: ".favHobby"
}
]
$('#timeUp').hide();
$('#gameContainer').hide();

var startGame =$('#startGame').on("click", function() {
    $('#startScreen').hide();
    $('#gameContainer').show();
    countDown(120);
    questionShow();
});

var labels = ["a", "b", "c", "d"];

var questionShow = function() {
    $(".questions :not('#submitButton')").empty();

    for (var i=0; i<10; i++) {
        $('#questions').prepend('<div class="' + questions[i].name + '"></div>');
        $(questions[i].divClass).append('<div class ="questionTitle">' + questions[i].q + '</div>');
        
        for (var j = 0; j<4; j++) {
            $(questions[i].divClass).append('<input type="radio" name="' + questions[i].name + '" value="' + questions[i].a[j] + '"/><label for="' + labels[j] + '">' + questions[i].a[j] + '</label>');
            
        }
        $('#questions').prepend('<br>');
    }
    $('#questions').show();
    
}

var countDown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds -1;
        $('#timeRemaining').html(seconds);

        if (seconds < 1) {
            $('#gameContainer').hide();
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unanswered = 0;

            for (var k = 0; k<10; k++) {
                if ($('input:radio[name="' + questions[k].name + '"]:checked').val() === questions[k].correct) {
                    correctAnswers++;
                } else if ($('input:radio[name="' + questions[k].name + '"]:checked').val() === "") {
                    unanswered++;
                }
                else {
                    wrongAnswers++;
                };
            };
            
            $('#timeUpHeader').append("Time's up time's up time's up");
            $('#correctTimeUp').append('Correct answers: ' + correctAnswers);
            $('#wrongTimeUp').append('Wrong answers: ' + wrongAnswers);
            $('#unansweredTimeUp').append('Unanswered questions: ' + unanswered);
            $('#timeUp').fadeIn(1000).show();
            
            alert("Time's up!!!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#submitButton').on("click", function() {
        clearInterval(timer);
    });
};

var scoreBoard = $('#submitButton').on("click", function(){
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    for (var i=0; i<10; i++){
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } else if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === "") {
            unanswered++;
        }
        else {
            wrongAnswers++;
        };
    };

    countDown();
    $('#gameContainer').hide();
    $('#answerDiv').show();
    $('#correctAnswers').append('Correct answers: ' + correctAnswers);
    $('#wrongAnswers').append('Wrong answers: ' + wrongAnswers);
    $('#unanswered').append('Unanswered questions: ' + unanswered);
});

});

