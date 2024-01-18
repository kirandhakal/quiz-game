const quizdata = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
]
let index=0;
let total =quizdata.length; 
let right =0,wrong=0;
const quesbox =document.getElementById("quesbox")
const optioninputs =document.querySelectorAll('.options')
const loadquestion =()=>{
    if(index===total){
        return endquiz()
    }
    reset()
    const data= quizdata[index]
    quesbox.innerText =  `${index+1})${data.question}`;
    optioninputs[0].nextElementSibling.innerText =data.a;
     optioninputs[1].nextElementSibling.innerText =data.b;
 optioninputs[2].nextElementSibling.innerText =data.c;
  optioninputs[3].nextElementSibling.innerText =data.d;
}
const submitquiz =()=>{
    const data =quizdata[index];
    const ans =getanswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;

    }
    index=index+1;
    loadquestion();
    return;
}
const getanswer=()=>{
    let answer;
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
              
            }
        }
    )
    return answer;
    }
const reset =()=>{
    optioninputs.forEach(
        (input)=>{
        input.checked =false;
               
            }
    )

}
const endquiz =()=>
{
    document.getElementById("container").innerHTML=`
    <div style ="text-align:center">
    <div style ="color:red">
    <h3> thanks for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>`

}
loadquestion();