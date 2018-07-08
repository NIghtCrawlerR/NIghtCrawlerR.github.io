let input = document.querySelector('.search__field');
let imagesGroup = document.querySelectorAll('.images__group');
let image = document.querySelectorAll('.image');

const keyDownHandler = (e) => {
    let searchQuery = e.target.value.toLowerCase()

    imagesGroup.forEach((item) => {
        if (searchQuery.indexOf('good ' + item.dataset.group) == 0 && searchQuery != '') {
            item.classList.remove('fadeOut')
            setTimeout(() => {
                item.children[0].classList.add('fadeInFirst')
                item.children[1].classList.add('fadeInMid')
                item.children[2].classList.add('fadeInMid')
                item.children[3].classList.add('fadeInLast')
            }, 300)
        }
        else {
            item.classList.add('fadeOut')
            setTimeout(() => {
                item.children[1].classList.remove('fadeInMid')
                item.children[0].classList.remove('fadeInFirst')
                item.children[2].classList.remove('fadeInMid')
                item.children[3].classList.remove('fadeInLast')
            }, 500)

        }
    })

}


input.addEventListener('keyup', keyDownHandler, false);

