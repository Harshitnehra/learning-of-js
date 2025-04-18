// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => func(...args), delay);
//     };
// }

// // Example Usage
// const fetchData = (query) => {
//     console.log(`Fetching data for ${query}`);
// };

// const debouncedSearch = debounce(fetchData, 5000);

// // Simulating rapid user typing
// debouncedSearch("J");
// debouncedSearch("Ja");
// debouncedSearch("Jav");
// debouncedSearch("Java");  // ✅ Only "Fetching data for Java" will be logged after 500ms

function helloPattern() {
  let rowPattern = [1, 0, 1, 0, 1, 0, 1];
  
  for (let i = 0; rowPattern.length > 0; i++) {
    let spaces = ' '.repeat(i * 2);
    console.log(spaces + rowPattern.join(' '));
    rowPattern.shift();
    rowPattern.pop();
  }
}

helloPattern();