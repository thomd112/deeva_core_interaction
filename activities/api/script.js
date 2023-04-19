let news;

function getNews(){
  fetch('https://newsapi.org/v2/everything?q=applen&apiKey=e52b57cb11c14b0cb144d97976c8fa19')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
}

// function displayFact(factIndex){
//   let fact = factList[factIndex];
//   let text = fact.text;
//   document.getElementById('fact').innerHTML = text;
// }  

window.onload = function(e){ 

    let factCount = 0;

    getNews();



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