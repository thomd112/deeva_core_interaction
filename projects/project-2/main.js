fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processMorse(data);
  })
  .catch(error => console.log(error));

function processMorse( data ){

  data.forEach( function(item, index){
    
      let newItem = document.createElement("div");
      newItem.classList.add("icon");

      newItem.innerHTML = `
      <div class="alphabet">${item.alphabet}</div>
      <div class="detail">
        <div class="alphabet">${item.alphabet}</div>
        <audio src="morse_code_audios/${item.sound}">
    </div>
      `;
      container.appendChild(newItem); 
      newItem.addEventListener('click', function(){
        newItem.classList.toggle("active");
      });
   
  });
}