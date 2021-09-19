// spread operator
let listItems = [...document.querySelectorAll('li')];

// Set initial animation.
let options = {
    // Set a property as item and a value
    rootMargin: '0%',
    threshold: 1.0
}

// Argument takes callbackfunction and options of object
// observer is text
let observer = new IntersectionObserver(showItem, options);

// Callback function
function showItem(entries) {
    // console.log(entries);
    entries.forEach(entry => {

        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter, idx) => {
                setTimeout(() => {
                    letter.classList.add('active');
                }, idx * 100); // time is index times 10 milliseconds, index is indivisdual letter such as gold is 'g', 'o', 'l', 'd';
            })
            // target is each items of the array
            entry.target.children[0].classList.add('active');
        }
    })
}


// sepatrate text animation 
// get the first letter
listItems.forEach(item => {
    /**
     * Create a new string
     * map each individual letter and if there has a gap next letter will be following it.
     */

    // Create new string
    let newString = '';
    // get the individual letters. For example act split a 'a', 'c', 't'.
    let itemText = item.children[0].innerText.split('');
    // console.log(itemText);
    // map each individual letter
    // ' ' means a space between the two words
    itemText.map(letter => (newString += letter == ' ' ? `<span class='gap'></span>` : `<span>${letter}</span>`))

    // Something item as etter is there to be inserted newString.
    item.innerHTML = newString;

    observer.observe(item);
})


/**
 * children is span
 */