hihi1 = localStorage.getItem("player1_name");
hewwo2 = localStorage.getItem("player2_name");

hihi1_score = 0;
hewwo2_score = 0;
//NAME!
document.getElementById("player1_name").innerHTML = hihi1;
document.getElementById("player2_name").innerHTML = hewwo2;
//SCORE!
document.getElementById("player1_score").innerHTML = hihi1_score;
document.getElementById("player2_score").innerHTML = hewwo2_score;
//Q&A!
document.getElementById("player_question").innerHTML = "question turn - " + hihi1 + "<3";
document.getElementById("player_answer").innerHTML = "answer turn -" + hewwo2 + ">.<";
//SENDFUNCTION<3
function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthdi_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthdi_2);
    console.log(charAt2);

    lengthmi_1 = word.length - 1;
    charAt3 = word.charAt(lengthmi_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log("removecarrot" + remove_charAt3);

    question_word = "<h4 id= 'word_display'> Q."+ remove_charAt3+"</h4>";
    input_box = "<br>Answer: <input type= 'text' id= 'input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
//FUNCTIONCHECK
function check(){
    get_answer = document.getElementById("input_check_box").value;
    ans = get_answer.toLowerCase();
    console.log(ans);

    qturn = "player_1";
    aturn = "player_2";

    if(ans == word){
       if(ans = "player_1"){
           hihi1_score = hihi1_score + 1;
           document.getElementById("player1_score").innerHTML = hihi1_score;
       }
       else{
        hewwo2_score = hewwo2_score + 1;
        document.getElementById("player2_score").innerHTML = hewwo2_score;
    }

    }
//questionswitch
    if(qturn == "player_1"){
        qturn = "player_2";
        document.getElementById("player_question").innerHTML = "q u e s t i o n " + " t u r n -" + hewwo2;
    }
    else{
        qturn = "player_1";
        document.getElementById("player_question").innerHTML = "q u e s t i o n " + " t u r n -" + hihi1;
    }
//answerswitch
    if(aturn == "player_1"){
        aturn = "player_2";
        document.getElementById("player_answer").innerHTML = "a n s w e r " + " t u r n -" + hewwo2;
    }
    else{
        aturn = "player_1";
        document.getElementById("player_answer").innerHTML = "a n s w e r " + " t u r n -" + hihi1;
    }

    document.getElementById("output").innerHTML = "";
}


