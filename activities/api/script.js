let news;

function getNews(){
    fetch('https://newsapi.org/v2/everything?')
    var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  }

function displayFact(factIndex){
  let fact = factList[factIndex];
  let text = fact.text;
  document.getElementById('fact').innerHTML = text;
}  

window.onload = function(e){ 

    let factCount = 0;

    getFact();

    let refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', function(){

     if(factCount < 4){        
        factCount ++; // increment fact index until 5
        displayFact(factCount);
      }else{
        factCount = 0; // reset fact index
        getFact();
      }  
       
    });

};