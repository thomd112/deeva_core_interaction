// Sample JSON data
const jsonData = {
    "category1": ["item1", "item2", "item3"],
    "category2": ["item4", "item5", "item6"],
    "category3": ["item7", "item8", "item9"]
  };
  
  // Parse the JSON data
  const data = JSON.parse(JSON.stringify(jsonData));
  
  // Get the HTML element
  const dataElement = document.getElementById("data");
  
  // Loop through the data and create lists
  for (let category in data) {
    // Create the list
    const list = document.createElement("ul");
    
    // Loop through the items in the category
    for (let item of data[category]) {
      // Create the list item
      const listItem = document.createElement("li");
      listItem.innerText = item;
      
      // Append the list item to the list
      list.appendChild(listItem);
    }
    
    // Add the list to the HTML element
    dataElement.appendChild(list);
  }
  