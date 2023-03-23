
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processMorse(data);
  })
  .catch(error => console.log(error));

function processMorse( data ){

  data.forEach( function(item, index){
    
    let buttonb=document.getElementById("B");
    buttonb.addEventListener('click', function(){

      


  let newItem = document.createElement("div");
  newItem.classList.add("icon");

      newItem.innerHTML = `
      <div class="alphabet">${item.alphabet}</div>
      <div class="morse code">${item.morsecode}</div>
        <audio src="morse_code_audios/${item.sound}" controls>
        
      </div>
      <div class="phrase"><p>${item.phrase}</p> </div>
      `;
      container.appendChild(newItem); 
      // newItem.item.alphabet.toggle("active");
      });
      
  });
  



}