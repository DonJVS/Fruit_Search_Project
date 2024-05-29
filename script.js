const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowerCased = str.toLowerCase(); // converts the string to lower case

	results = fruit.filter(fruit => fruit.toLowerCase().includes(lowerCased)); // returns the elements in array that matches the input 
	return results;
}

function searchHandler() {
	const query = input.value; // this variable defines the value of the input entered in the text box
	const result = search(query); // this variable uses the search function to execute a search to match the input value against the array and return the match

	showSuggestions(result, query); //calling the showSuggestions function to handle the text input and matching strings
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''; // clears the ul element and ensures that the there is nothing in the input 
	if (inputVal === '') { 
		return;
	}
	results.forEach(result => {
		const li = document.createElement('li'); // creates a new li element for each result found in the search function and appends it to the div containing the ul element
		li.textContent = result;  // each resulting input will be added to the text content of the li element
		li.classList.add('search-result'); // each li element added will have a class of 'search-result'
		suggestions.appendChild(li); // appends the new li element as the child of the ul element in the html
	});
}

function useSuggestion(e) {
	const selection = e.target.textContent; // variable designed to target the text of the drop-down selections
	input.value = selection; // sets the unput field value to the text content suggested
	suggestions.innerHTML = ''; //clears the search result
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
