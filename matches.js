// write js code here corresponding to matches.html


var MatchArr=JSON.parse(localStorage.getItem("schedule")) 
//console.log( MatchArr)


displayData(MatchArr);

var MMatchArr=JSON.parse(localStorage.getItem("favourites")) ||[]

function displayData(data){
    document.querySelector("tbody").innerHTML=""
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
    td6.innerText="Favourite"
    td6.style.color="green"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        FaVorfunction(elem)
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})
}
function  FaVorfunction(elem){
    MMatchArr.push(elem)
    //console.log( MMatchArr)
    localStorage.setItem("favourites",JSON.stringify(MMatchArr))
    window.location.href="favourites.html"
}

//var selected= document.querySelector("#filterVenue").addEventListener("change",handleState);

function handleState(){
    var selected=document.querySelector("#filterVenue").value;
    console.log(selected)

var filterList=MatchArr.filter(function(elem){
    return elem.newData===selected;
})
//console.log( filterList)
displayData( filterList)


}

