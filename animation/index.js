let input = document.querySelector('.search__field');
let imagesGroup = document.querySelectorAll('.images__group');

const keyDownHandler = (e) => {
    let searchQuery = e.target.value.toLowerCase()

    imagesGroup.forEach((item) => {
        if (searchQuery.indexOf('good ' + item.dataset.group) == 0 && searchQuery != '') {
            item.children[0].classList.add('fadeInFirst')
            item.children[1].classList.add('fadeInMid')
            item.children[2].classList.add('fadeInMid')
            item.children[3].classList.add('fadeInLast')
        }
        else {
            item.children[1].classList.remove('fadeInMid')
            item.children[0].classList.remove('fadeInFirst')
            item.children[2].classList.remove('fadeInMid')
            item.children[3].classList.remove('fadeInLast')
        }
    })

}

const fadeIn = () => {

}

input.addEventListener('keyup', keyDownHandler, false);

