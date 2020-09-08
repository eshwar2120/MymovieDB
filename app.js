window.addEventListener("load", function()
{
    document.querySelector(".control-submit").addEventListener("click",handleclick)

})
function handleclick(e){
var searchstring=document.querySelector(".control-input").value;
if(searchstring)
{
    makeapicall(searchstring);
}
}
async function makeapicall(queryword){
var api="48b0bf908c7b9bf3939b87f5b2b4be8d";
var results;
await fetch("https://api.themoviedb.org/3/movie/550?api_key=${48b0bf908c7b9bf3939b87f5b2b4be8d}&s=${queryword}").then(resp=>resp.json()).then(data => results=data);
populateResults(results);
}
function populateResults(results){
    var edom=[];
    debugger;
}