var projects = {
    'proteyfx': {
        title: 'Protey FX',
        descr: 'Protey FX is one of the most secure online trading environments available anywhere in the forex industry. Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/proteyfx.jpg',
        link: 'https://proteyfx.com/'
    },
    'juka': {
        title: 'Jukamarket',
        descr: 'Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/juka.jpg',
        link: 'https://jukamarket.com/'
    },
    'albatros': {
        title: 'Albatros',
        descr: 'Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/albatros.jpg',
        link: 'http://albatros.ua/'
    },
    'flyglobus': {
        title: 'FlyGlobus',
        descr: 'Web site to search and buy tickets. Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/flyglobus.png',
        link: 'https://flyglobus.com'
    },
    'otp': {
        title: 'OTP pension calculator',
        descr: 'Use this app to calculate the amount of investment. Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/otp-calc.jpg',
        link: 'http://otppension.com.ua/state-pension-calculator'
    },
    'segodnya': {
        title: 'Calculator of economic heating',
        descr: 'Uses: Joomla CMS, JQuery, Less. Fully adaptive and crossbrowser.',
        img: 'img/segodnya-calc.jpg',
        link: 'https://www.segodnya.ua/kalkulyatorotoplenie.html'
    },
    'tick-tack-toe': {
        title: 'Sci-Fi Tick Tack Toe',
        descr: '',
        img: 'img/tick-tack-toe.jpg',
        link: 'https://nightcrawlerr.github.io/tick-tack-toe/'
    },
    'last-treasure': {
        title: 'Game Last Treasure',
        descr: 'Go on adventure in a mistery forest. This is my first game made only with JavaScript.',
        img: 'img/last-treasure.jpg',
        link: 'https://nightcrawlerr.github.io/game-last-treasure/'
    },
    'timer': {
        title: 'Timer',
        descr: 'JavaScript timer with loops and share functions.',
        img: 'img/timer.png',
        link: 'https://github.com/NIghtCrawlerR/js-timer'
    }
}


//parallax
// var strength1 = 50;
// var strength2 = 100;
// var strength3 = 200;
// $("html").mousemove(function (e) {
//     var pageX = e.pageX - ($(window).width() / 2);
//     var pageY = e.pageY - ($(window).height() / 2);
//     var newvalueX = 1 * pageX * -1;
//     var newvalueY = 1 * pageY * -1;
//     if($(window).width() > 768){
//         $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1) + "px " + (strength1 / $(window).height() * pageY * -1) + "px");
//     }
    

// });
//end parallax

//menu
// $('.Menu__button').click(function () {
//     $('.Side-menu').toggleClass('Side-menu--active');
//     $(this).toggleClass('Menu__button--active');
// })

$('.wrapper-menu').click(function () {
    $('.Side-menu').toggleClass('Side-menu--active');
    $(this).toggleClass('open');
})


$('.Side-menu li, .navigation_hidden li').click(function () {
    var index = $(this).index();
    $('.Side-menu li').removeClass('menu-item--active');
    $('body').addClass('blur');
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

//rocket animation
$('.rocket-animated').click(function(){
    $(this).removeClass('rocket-animated') 
    $(this).addClass('rocket-animated--active') 
    setTimeout(function() {
        $('.navigation_hidden').fadeIn(500);
    }, 2000)
})

//end animation

$(document).mouseup(function (e) {
    var container = $(".sidepage, .case_preview, .Side-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".sidepage").css('left', '-50%');
        $('.Side-menu li').removeClass('menu-item--active');
        $('body').removeClass('blur');
       // $('.Side-menu').hide();
    }
});

//view project
$('.case_preview').click(function () {
    var name = $(this).data('name');
    $('.case_preview').removeClass('case_preview--active');
    $(this).addClass('case_preview--active');
    selectProject(name)
})

function selectProject(name) {
    $('.Project__title').text(projects[name].title)
    $('.Project__descr__text').text(projects[name].descr)
    $('.Project__image').css('background-image', 'url(' + projects[name].img + ')')
    $('.link_to_project').attr('href', projects[name].link)
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
    "pieBaseColor": "#A65600", //094b73 - blue
    "pieBrightnessStep": 15,
    "outlineColor": "#A65600",
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
        "level": 150,
        "color": "#5e0a1a"
    }, {
        "skill": "CSS",
        "level": 150,
        "color": "#c03435"
    }, {
        "skill": "ReactJS",
        "level": 65,
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
    }, {
        "skill": "Node.js",
        "level": 70,
        "color": "#333"
    },{
        "skill": "MongoDB",
        "level": 65,
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