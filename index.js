// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit" ,matchSubmit)

var MatchArr=JSON.parse(localStorage.getItem("schedule")) || []
function matchSubmit(){
     event.preventDefault();

     var matchObj={
         MathchNumber:masaiForm.matchNum.value,
         TeamA:masaiForm.teamA.value,
         TeamB:masaiForm.teamB.value,
         DateA:masaiForm.date.value,
         newData:masaiForm.venue.value,

       }
      // console.log( matchObj)
      MatchArr.push(matchObj)
      localStorage.setItem("schedule" ,JSON.stringify( MatchArr));
      window.location.href="matches.html"



}
