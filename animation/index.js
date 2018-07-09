let input = document.querySelector('.search__field');
let imagesGroup = document.querySelectorAll('.images__group');
let image = document.querySelectorAll('.image');

const groups = ['good mood', 'good vibes'];
let autocompleteAvailable = false,
    completeVal = '';

const fadeIn = (item) => {
    item.classList.remove('fadeOut')
    setTimeout(() => {
        item.children[0].classList.add('fadeInFirst')
        item.children[1].classList.add('fadeInMid')
        item.children[2].classList.add('fadeInMid')
        item.children[3].classList.add('fadeInLast')
    }, 300)
}

const fadeOut = (item) => {
    item.classList.add('fadeOut')
    setTimeout(() => {
        item.children[1].classList.remove('fadeInMid')
        item.children[0].classList.remove('fadeInFirst')
        item.children[2].classList.remove('fadeInMid')
        item.children[3].classList.remove('fadeInLast')
    }, 500)
}

const keyDownHandler = (e) => {
    let searchQuery = e.target.value.toLowerCase()
    let complete = groups.filter(group => {
        return group.indexOf(searchQuery) != -1;
    })
    if(complete.length == 1 && searchQuery.length >= 6){
        document.querySelector('.complete').innerHTML = complete[0];
        autocompleteAvailable = true;
        completeVal = complete[0];
    }
    else{
        document.querySelector('.complete').innerHTML = '';
        autocompleteAvailable = false;
    }
    
    imagesGroup.forEach((item) => {
        if (searchQuery.indexOf('good ' + item.dataset.group) == 0 && searchQuery != '') {
            fadeIn(item);
        }
        else {
            fadeOut(item);
        }
    })
}

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && autocompleteAvailable) {
       input.value = completeVal;
    }
});


input.addEventListener('keyup', keyDownHandler, false);

