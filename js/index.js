var projects = [{
    title: 'Protey FX',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/proteyfx.jpg',
    link: 'https://proteyfx.com/'
},
{
    title: 'Jukamarket',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/juka.jpg',
    link: 'https://jukamarket.com/'
},
{
    title: 'Albatros',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/albatros.jpg',
    link: 'http://albatros.ua/'
},
{
    title: 'OTP calc',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/otp-calc.jpg',
    link: 'http://otppension.com.ua/state-pension-calculator'
},
{
    title: 'Heat calc',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/segodnya-calc.jpg',
    link: 'https://www.segodnya.ua/kalkulyatorotoplenie.html'
},
{
    title: 'Sci-Fi Tick Tack Toe',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/tick-tack-toe.jpg',
    link: 'https://nightcrawlerr.github.io/tick-tack-toe/'
},
{
    title: 'Game Last Treasure',
    descr: 'Duis fugiat non nulla sit eiusmod consectetur consectetur non incididunt et aliqua exercitation excepteur. Irure sit aliqua est deserunt.',
    img: 'img/last-treasure.jpg',
    link: 'https://nightcrawlerr.github.io/game-last-treasure/'
}]

//parallax
var strength1 = 50;
var strength2 = 100;
var strength3 = 200;
$("html").mousemove(function (e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = 1 * pageX * -1;
    var newvalueY = 1 * pageY * -1;
    if($(window).width() > 768){
        $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1) + "px " + (strength1 / $(window).height() * pageY * -1) + "px");
    }
    

});
//end parallax

//menu
$('.Menu__button').click(function () {
    $('.Side-menu').toggleClass('Side-menu--active');
    $(this).toggleClass('Menu__button--active');
})


$('.Side-menu li').click(function () {
    console.log($(this).index())
    var index = $(this).index();
    $('.Side-menu li').removeClass('menu-item--active');
    $(this).addClass('menu-item--active');
    $('.sidepage').css('left', '-50%');
    setTimeout(function () {
        $('.sidepage-' + index).css('left', '0');
        $('.sidepage-' + index).addClass('sidepage--active');
        if($(window).width() < 768){
            $('.sidepage-' + index).show();
            $('.Menu__button__mob').show()
        }
    }, 200)

})

$('.Menu__button__mob').click(function(){
    $('.sidepage').hide();
    $('.Menu__button__mob').hide();
})
//end menu

// $(document).click(function () {
//     if ($(window.event.target).attr('class') != 'sidepage')
//         $(".sidepage").css('left', '-50%');
// });

$(document).mouseup(function (e) {
    var container = $(".sidepage, .case_preview");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".sidepage").css('left', '-50%');
        $('.Side-menu li').removeClass('menu-item--active');
    }
});

//view project
$('.case_preview').click(function () {
    var index = $(this).index();
    $('.case_preview').removeClass('case_preview--active');
    $(this).addClass('case_preview--active');
    selectProject(index)
})

function selectProject(index) {
    $('.Project__title').text(projects[index].title)
    $('.Project__descr__text').text(projects[index].descr)
    $('.Project__image').css('background-image', 'url(' + projects[index].img + ')')
    $('.link_to_project').attr('href', projects[index].link)
}

//Amcharts
var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "startDuration": 0,
    "theme": "light",
    "addClassNames": true,
    "innerRadius": "30%",
    "color": "#fff",
    "fontSize": 14,
    //"colors": ["#333, #fff, #f1f1f1, #f2f2f2, #f3f3f3, #f4f4f4, #f5f5f5, #f6f6f6, #f7f7f7"],
    "pieBaseColor": "#670c1d",
    "pieBrightnessStep": 15,
    "outlineColor": "#670c1d",
    "outlineThickness": 1,
    "radius": "30%",
    "innerRadius": "50%",
    "defs": {
        "filter": [{
            "id": "shadow",
            "width": "200%",
            "height": "200%",
            "feOffset": {
                "result": "offOut",
                "in": "SourceAlpha",
                "dx": 0,
                "dy": 0
            },
            "feGaussianBlur": {
                "result": "blurOut",
                "in": "offOut",
                "stdDeviation": 5
            },
            "feBlend": {
                "in": "SourceGraphic",
                "in2": "blurOut",
                "mode": "normal"
            }
        }]
    },
    "dataProvider": [{
        "skill": "JavaScript",
        "level": 95,
        "color": "#520e1b"
    }, {
        "skill": "HTML",
        "level": 130,
        "color": "#5e0a1a"
    }, {
        "skill": "CSS",
        "level": 130,
        "color": "#c03435"
    }, {
        "skill": "Joomla",
        "level": 90,
        "color": "#300a19"
    }, {
        "skill": "ReactJS",
        "level": 80,
        "color": "#250917"
    }, {
        "skill": "Gulp",
        "level": 50,
        "color": "#ea2b3d"
    }, {
        "skill": "SCSS/LESS",
        "level": 100,
        "color": "#333"
    }, {
        "skill": "Photoshop",
        "level": 75,
        "color": "#333"
    }, {
        "skill": "Git",
        "level": 85,
        "color": "#333"
    }],
    // "colorField": "color",
    "valueField": "level",
    "titleField": "skill"
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function (e) {
    handleRollOver(e);
});

function handleInit() {
    chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e) {
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
}