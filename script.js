//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Step 1: Create a function to remove A, An, The
function strip(article) {
    return article.replace(/^(a |an |the )/i, "");
}

// Step 2: Sort articles alphabetically
bands.sort((a, b) => {
    return strip(a).localeCompare(strip(b));
});

// Step 3: Select the unordered list
const ul = document.querySelector("#band");

// Step 4: Create li elements and display articles
bands.forEach((band) => {
    const li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
});