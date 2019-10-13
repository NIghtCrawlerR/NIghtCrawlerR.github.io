window.onload = function () {
    var checkbox = document.querySelector('#store-card')
    var form = document.querySelector('.card-form')

    var onlyNums = function (el) {
        var reg = /\d/;
        el.addEventListener('keydown', function (e) {
            if (reg.test(e.key) || e.keyCode == 8 || e.keyCode == 9) return;
            else e.preventDefault();
        })
    }

    $('[name=card-number]').mask("0000 0000 0000 0000");
    $('[name=card-exp-date]').mask("00/00", {
        placeholder: "MM/YY"
    });

    function $get(selector) {
        return document.querySelectorAll(selector)
    }

    function isValid() {
        var errors = 0;
        $('[reqval]').each(function () {
            var el = this

            if (!el.value ||
                (el.name === 'card-number' && el.value.length < 19) ||
                (el.name === 'card-exp-date' && el.value.length < 5) ||
                (el.name === 'card-cvv' && el.value.length <3)) {
                errors++
                el.classList.add('invalid')
            } else {
                el.classList.remove('invalid')
            }
        })
        return errors === 0
    }

    function clearForm() {
        $('.form-control').each(function () {
            this.value = ''
        })
    }

    function showLoader(callback) {
        $('.loader__wrap').removeClass('hidden')
        setTimeout(function () {
            $('.loader__wrap').addClass('hidden')
            callback()
        }, 2000)
    }

    checkbox.addEventListener('change', function () {
        $('.optional-field').toggleClass('hidden')
        $get('[name=card-email]')[0].toggleAttribute('reqval')
    })

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        if (!isValid()) return !1;
        showLoader(function () {
            $('#modal').modal('show')
        })
    })

    $('[onlyNums]').each(function () {
        onlyNums(this)
    })

    $('.clear-form').click(function () { clearForm() })

}