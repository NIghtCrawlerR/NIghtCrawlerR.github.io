'use strict';

var input = document.querySelector('.search__field');
var imagesGroup = document.querySelectorAll('.images__group');
var image = document.querySelectorAll('.image');

var groups = ['good mood', 'good vibes'];
var autocompleteAvailable = false,
    completeVal = '';

var fadeIn = function fadeIn(item) {
    item.classList.remove('fadeOut');
    setTimeout(function () {
        item.children[0].classList.add('fadeInFirst');
        item.children[1].classList.add('fadeInMid');
        item.children[2].classList.add('fadeInMid');
        item.children[3].classList.add('fadeInLast');
    }, 300);
};

var fadeOut = function fadeOut(item) {
    item.classList.add('fadeOut');
    setTimeout(function () {
        item.children[1].classList.remove('fadeInMid');
        item.children[0].classList.remove('fadeInFirst');
        item.children[2].classList.remove('fadeInMid');
        item.children[3].classList.remove('fadeInLast');
    }, 500);
};

var keyDownHandler = function keyDownHandler(e) {
    var searchQuery = e.target.value.toLowerCase();
    var complete = groups.filter(function (group) {
        return group.indexOf(searchQuery) != -1;
    });
    if (complete.length == 1 && searchQuery.length >= 6) {
        document.querySelector('.complete').innerHTML = complete[0];
        autocompleteAvailable = true;
        completeVal = complete[0];
    } else {
        document.querySelector('.complete').innerHTML = '';
        autocompleteAvailable = false;
    }

    imagesGroup.forEach(function (item) {
        if (searchQuery.indexOf('good ' + item.dataset.group) == 0 && searchQuery != '') {
            fadeIn(item);
        } else {
            fadeOut(item);
        }
    });
};

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13 && autocompleteAvailable) {
        input.value = completeVal;
    }
});

input.addEventListener('keyup', keyDownHandler, false);