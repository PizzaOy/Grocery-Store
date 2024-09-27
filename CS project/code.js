//First you will start at the home screen and then proceed by clicking the menu button
//Each of these buttons helps the user in moving to different screens
onEvent("MenuButton", "click", function( ) {
  setScreen("screen4");
});
onEvent("homebutton", "click", function( ) {
  setScreen("screen1");
});
onEvent("shoppingcartbutton", "click", function( ) {
  setScreen("screen3");
});
onEvent("menubutton2", "click", function( ) {
  setScreen("screen4");
});
//When you're at the menu you can choose which items you want to order and then proceed to the shopping cart
var total = 0;
var items = [];
function menu_selection(item, tot) {
  total = total + tot;
  appendItem(items, item);
  setText("total", total);
  setText("items", items);
}
onEvent("burgercost", "click", function( ) {
  menu_selection("Ham Burger", 3);
});
onEvent("Cokecost", "click", function( ) {
  menu_selection("Coca-Cola", 1);
});
onEvent("hotdogcost", "click", function( ) {
  menu_selection("Hot Dog", 2.5);
});
onEvent("pizzacost", "click", function( ) {
  menu_selection("Pizza", 5);
});
//items are added to the list depending on which items the user wants to purchase
//The price of each item is added to the total which is displayed at the end when the user purchases
hideElement("totals");
hideElement("total");
hideElement("label2");
function purchase_items(shopping) {
  var num_of_items = 0;
  for (var i = 0; i < shopping.length; i++) {
    num_of_items += 1;
  }
  if (shopping.length >= 1) {
    setText("indicator", ("You have purchased " + num_of_items) + " items from the shopping cart.");
    showElement("total");
    showElement("totals");
    showElement("label2");
    //for each item in the list "items" the procedure adds 1 to the "num_of_tries" variable
    //The procedure is called only when the user clicks the purchase button
    //The if statment checks if there are items in the list, if there are, it displays the items and number of items purchased 
  
  }
}
onEvent("purchasebutton", "click", function() {
  purchase_items(items);
});
//When the user clicks the Purchase button and he has ordred items then the procedure above is called.
onEvent("clear", "click", function( ) {
  if (items.length >= 1) {
    items.length = 0;
    setText("indicator", "You have cleared your shopping cart");
    setText("items", "");
    hideElement("total");
    hideElement("totals");
    hideElement("label2");
  }
});
//When the user clicks the Clear button, this procedure will clear the items list and will display "You have cleared your shopping cart"
