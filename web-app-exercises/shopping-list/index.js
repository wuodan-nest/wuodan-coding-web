// shopping app
// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
// Create a function that will run in response to the button being clicked.
// Inside the function body, start off by storing the current value of the input element in a variable.
// Next, empty the input element by setting its value to an empty string — ''.
// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
// Append the span and the button as children of the list item.
// Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
// Append the list item as a child of the list.
// Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const itemList = document.createElement("li");
const itemSpan = document.createElement("span");
const itemButton = document.createElement("button");

const removeItem = function() {
    list.removeChild(itemList);
};

const addItem = function() {
    const item = input.value;
    input.value = "";
    console.log(item);

    itemList.appendChild(itemSpan);
    itemSpan.textContent = item;
    itemList.appendChild(itemButton);
    itemButton.textContent = "Delete";
    list.appendChild(itemList);
};

button.addEventListener("click", addItem);
itemButton.addEventListener("click", removeItem);
input.focus();

