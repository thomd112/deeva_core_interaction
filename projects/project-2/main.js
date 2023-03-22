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
      let trigger = document.getElementById('trigger'); //get element by id attribute
      let target = document.querySelector('.target'); //get element by CSS seelector
      trigger.addEventListener('click', function(){
          target.classList.toggle('effect');
      });
      
      // if using jQuery, the above code will look like
      // make sure you are loading jQuery in your <head> with a script tag
      // uncomment the CDN link
      
      // $(document).ready(function(){
      //     $('#trigger').click(function(){
      //         $('.target').toggleClass('effect');
      //     })
      // });
      
  });




}