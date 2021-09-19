// spread operator
let listItems = [...document.querySelectorAll('li')];

let options = {
    // Set a property as item and a value
    rootMargin: '-10%',
    threshold: 0.0
}
// Argument takes callbackfunction and options of object
// observer is text
let observer = new IntersectionObserver(showItem, options);

// Callback function
function showItem(entries) {
    // console.log(entries);
    entries.forEach(entry => {

        if(entry.isIntersecting){
            // target is each items of the array
            entry.target.children[0].classList.add('active');
        }
    })
}


// sepatrate text animation
listItems.forEach(item => {
    observer.observe(item);
})