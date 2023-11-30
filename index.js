const getItemNames = (arr)=> {
    return arr.map((item)=>  {
      return item.name;
    });
  }

  const getItemPrices = (arr)=> {
    return arr.map((item)=>  {
      return item.price;
    });
  }

  
function findItemById(id, arr){
    return arr.find((item)=> {
      return item.id === id;
    });
}

function mostExpensiveItem(arr){
    return arr.map((item)=>  {
        return Math.max(item.price);
    });
}

const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  

  
  console.log(getItemNames(items));//returns an array of the names of the items
  console.log(getItemPrices(items));//returns an array of prices
  console.log(findItemById(2, items));//returns an item by it's id
  console.log(mostExpensiveItem(items));//returns the most expensive item 
  //console.log(leastExpensiveItem(items));//returns the least expensive item 
  //console.log(calculateInventory(items));//returns the total value of the inventory 