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
          <p>Audience: ${item.attendance}</p>
          <p>Audience:${item.event_name}</p>
          <p>Audience:${item.event_type}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  });

  
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data');
    let html = '';

    data.forEach((item, index) => {
      const colorClass = index % 3 === 2 ? 'one' : 'two';
      html += `
        <div class="${colorClass}">
        <p>Audience: ${item.audience}</p>
          <p>Audience: ${item.date_and_time}</p>
          <p>Audience: ${item.attendance}</p>
          <p>Audience:${item.event_name}</p>
          <p>Audience:${item.event_type}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  });