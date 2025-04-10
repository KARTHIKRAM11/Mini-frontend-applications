var btn=document.getElementById("sbtbtn");
btn.addEventListener("click",function(){
    let score=0;
    const q1=document.getElementsByName("n1");
    q1.forEach(ans =>{
        if(ans.checked && ans.value==="var x=5;")
        {
            score++;
        }
    });
    const q2=document.getElementsByName("q2");
    const q2ans=['for loop','while loop'];
    let correctCount = 0;

for (let i=0;i<q2.length;i++) {
    if (q2[i].checked) {
        if (q2ans.includes(q2[i].value)) {
            correctCount++;
        }
        else{ 
            correctCount=-1; 
            break;
        }
    }
}
if (correctCount === q2ans.length) 
    {
    score++;
    }
    const q3=document.getElementById("textbox").value.trim().toLowerCase();
    if(q3=="helloworld")
    {
        score++;
    }
    document.getElementById("result").textContent = `Your score is: ${score}`;
});