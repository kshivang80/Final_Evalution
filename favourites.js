// write js code here corresponding to favourites.html


var FaVorfunction=JSON.parse(localStorage.getItem("favourites")) ||[]

displayData( FaVorfunction);

function displayData(data){
    data.forEach(function(elem){
  
      var tr=document.createElement("tr")
  
      var td1=document.createElement("td")
       td1.innerText=elem.MathchNumber
  
      var td2=document.createElement("td")
      td2.innerText=elem.TeamA
  
      var td3=document.createElement("td")
      td3.innerText=elem.TeamB
  
      var td4=document.createElement("td")
       td4.innerText=elem.DateA
  
      var td5=document.createElement("td")
      td5.innerText=elem.newData
  
      var td6=document.createElement("td")
    //   td6.setAttribute("class","deleteText")
      td6.innerText="Delete"
      td6.style.cursor="pointer"
      td6.addEventListener("click",Myfunction)
         
      
      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
  })
  }
   function Myfunction(){
   event.target.parentNode.remove()
   
}