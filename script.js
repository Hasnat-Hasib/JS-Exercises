/* JavaScript code here */

    console.log("intrnal js");
// Task2
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum += value;
    });
    return sum;
}

    console.log(sumArray([1,2,3,4,5]));
    console.log(sumArray([19,-2,30,-45]));
    
    
    // Task3
    function  checkEmail(emailString) {
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var match = emailFormat.test(emailString);
        return match;

    }
    console.log(checkEmail("john@smith.com"));    
    console.log(checkEmail("johnsmith.info"));
    
    
// Task 4

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
    function getReadingStatus(index){
        return library[index].readingStatus;
    }
    console.log(getReadingStatus(2));
    
    
    //Task5
    
    var cart = [ 
    {
      name: 'Shoes',
      price: 560,
      quantity: 4
    },
    {
      name: 'Regular Tees',
      price: 655.50,
      quantity: 6
    },
    {
      name: 'Socks',
      price: 65.99,
      quantity: 2
    }];

//(a) Adding new item

function addItem( item ){
  cart.push(item);
  return cart;
}

var newItem = {
  name: 'KK Green Tea',
  price: 120,
  quantity: 1
};

console.log("\n\nNew Item added: \n\n");
console.log(addItem(newItem));

//(b) sort by price
function itemByPrice(){
 var init = [];
 for(var i=0; i<cart.length; i++){
   for(var j=i; j<cart.length-1; j++){
     if(cart[j].price<cart[j+1].price){
       init=cart[j];
       cart[j]=cart[j+1];
       cart[j+1]=init;
     }
   }
 }
 cart.sort(function(a, b){
   return (b.price)-(a.price);
 });
 return cart;
}

console.log("\n\nItems are sorted by price in descending order: \n\n");
console.log(itemByPrice());

  //find by name
  function findByName( name){
    var matches=[];
    var temp1=name.toUpperCase();
    var temp2;
    for(var i= 0; i < cart.length; i++){
      temp2=cart[i].name.toUpperCase();
      if(temp2.search(temp1)!= -1){
        matches.push(cart[i]);
      }
    }

    return matches;
  }
  console.log(findByName("Socks"));

//Total Cost
var sum=0;
for(var i= 0; i < cart.length; i++){
  tm=(cart[i].price)*(cart[i].quantity);
  sum+=tm;
}
console.log("\n\nTotal Amount: \n\n");
console.log(sum); 