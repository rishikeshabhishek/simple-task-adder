const myTask = document.querySelector('#txtTask');
const myUL = document.querySelector('ul');
myTask.addEventListener('keypress', function(event) {
    //console.log(event);
    if (event.key === 'Enter' && this.value) {
        //console.log('Hey...');
        const myLI = document.createElement('li');
        myLI.innerText = this.value;
        myUL.appendChild(myLI);
        this.value = '';
    }
});