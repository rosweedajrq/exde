// Parent element
const parentElement = document.getElementById('parentElement');

// Add event listener to the parent element
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.childElement')) {
        console.log('Child element clicked');
    }
});

// To remove the listener
parentElement.removeEventListener('click', delegatedListener);
