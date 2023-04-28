

            function filterEvents() {
                console.log('filter events');
              fetch('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
                .then(response => response.json())
                .then(data => {
                 console.log(data);
                  const filteredData = data.filter(event => {
                    // console.log(event['date_and_time']);
                    const year = new Date(event['date_and_time']).getFullYear();
                    console.log(year);
                    return year >= 2017 && year <= 2021;
                  });

                  console.log(filteredData);
               
                  const eventsDiv = document.getElementById('events');
                  eventsDiv.innerHTML = '';
                  filteredData.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = `event event-year-${new Date(event.date_and_time).getFullYear()}`;
                    eventElement.innerHTML = `
                      <h2>${event.event_name}</h2>
                      <p>Borough: ${event.borough}</p>
                      <p>Location: ${event.location}</p>
                      <p>Attendance: ${event.attendance}</p>
                    `;
                    eventsDiv.appendChild(eventElement);
                  });
                });
            }














          

            fetch('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
            .then(response => response.json())
            .then(data => {

            

            });
            function filterData(category) {
                

                const filteredData = data.filter(event => event.category === category);
              
                return filteredData;
              }
              const select = document.getElementById('category');
             
              select.addEventListener('change', () => {
                const category = select.value;
                const filteredData = filterData(category);
              
                
              });
                                      
    















                        
              
              // Load data from the URL
const url = 'https://data.cityofnewyork.us/resource/6v4b-5gp4.json';
let data;

fetch(url)
  .then(response => response.json())
  .then(json => {
    data = json;
  });

// Filter data based on selected category and search query
function filterData() {
  const searchBar = document.getElementById('searchBar');
  const categorySelect = document.getElementById('categorySelect');
  const searchTerm = searchBar.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  const filteredData = data.filter(item => {
    return item[selectedCategory].toLowerCase().includes(searchTerm);
  });

  // Display filtered data on the HTML page
  const dataBody = document.getElementById('dataBody');
  dataBody.innerHTML = '';
  filteredData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.unique_key}</td>
      <td>${item.created_date}</td>
      <td>${item.complaint_type}</td>
      <td>${item.category}</td>
      <td>${item.location}</td>
      <td>${item.borough}</td>
      <td>${item.attendance}</td>
      <td>${item.resolution_description}</td>
      <!-- Add more columns as needed -->
    `;
    dataBody.appendChild(row);
  });
}

