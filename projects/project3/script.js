const url = 'https://data.cityofnewyork.us/resource/6v4b-5gp4.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data');
    let html = '';

    data.forEach(item => {
      html += `<div>${item.location}</div>`;
      // add more HTML elements here to display other data
    });

    container.innerHTML = html;
  });
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data');
    let html = '';

    data.forEach(item => {
      html += `
        <div>
          <p>Name: ${item.location}</p>
          <p>Audience: ${item.audience}</p>
          <p>Audience: ${item.date_and_time}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  });

  
  
