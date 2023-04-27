

            function filterEvents() {
                console.log('filter events');
              fetch('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
                .then(response => response.json())
                .then(data => {
                 console.log(data);
                  const filteredData = data.filter(event => {
                    // console.log(event['date_and_time']);
                    const year = new Date(event['date_and_time']).getFullYear();
                    return year >= 2017 && year <= 2021;
                  });

                  console.log(filteredData);
               
                  const eventsDiv = document.getElementById('events');
                  eventsDiv.innerHTML = '';
                  filteredData.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = `event event-year-${new Date(event.date).getFullYear()}`;
                    eventElement.innerHTML = `
                      <h2>${event.event_name}</h2>
                      <p>Borough: ${event.borough}</p>
                      <p>Location: ${event.location}</p>
                    `;
                    eventsDiv.appendChild(eventElement);
                  });
                });
            }
