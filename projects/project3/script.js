


            function filterEvents() {
            
              fetch('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
                .then(response => response.json())
                .then(data => {
                
                  const filteredData = data.filter(event => {
                    const year = new Date(event.date).getFullYear();
                    return year >= 2017 && year <= 2021;
                  });
               
                  const eventsDiv = document.getElementById('events');
                  eventsDiv.innerHTML = '';
                  filteredData.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = `event event-year-${new Date(event.date).getFullYear()}`;
                    eventElement.innerHTML = `
                      <h2>${event.name}</h2>
                      <p>Date: ${event.date}</p>
                      <p>Location: ${event.location}</p>
                    `;
                    eventsDiv.appendChild(eventElement);
                  });
                });
            }
