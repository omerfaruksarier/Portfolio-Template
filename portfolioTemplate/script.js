$(document).ready(function () {
    $(document).on("scroll", onScroll);
});
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation ul li').removeClass("active");
            currLink.closest("li").addClass("active");
        }
    });
}

const list = document.querySelectorAll('.list');
list.forEach((item) =>
    item.addEventListener('click', function (e) {
        // e.preventDefault();
        $(document).off("scroll");
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
        setTimeout(function () {
            $(document).on("scroll", onScroll);
        }, 1000);

    })
);

function getLocation() {
    $(document).off("scroll");
    location.href = "#about";
    $('.navigation ul li').removeClass("active");
    $('a[href^="#about"]').closest('li').addClass('active');
    setTimeout(function () {
        $(document).on("scroll", onScroll);
    }, 1000);
}
function getContact(){
    $(document).off("scroll");
    location.href = "#contact";
    $('.navigation ul li').removeClass("active");
    $('a[href^="#contact"]').closest('li').addClass('active');
    setTimeout(function () {
        $(document).on("scroll", onScroll);
    }, 1000);
}
function getHome(){
    $(document).off("scroll");
    location.href = "#home";
    $('.navigation ul li').removeClass("active");
    $('a[href^="#home"]').closest('li').addClass('active');
    setTimeout(function () {
        $(document).on("scroll", onScroll);
    }, 1000);
}
function scDown(){
    $(document).off("scroll");
    location.href = "#footer";
    $('.navigation ul li').removeClass("active");
    $('a[href^="#contact"]').closest('li').addClass('active');
    setTimeout(function () {
        $(document).on("scroll", onScroll);
    }, 1000);
}
$("#darkMode").on('click', function () {
    if (this.name == "moon-outline") {
        this.name = "sunny-outline";
        document.documentElement.style.setProperty('--dT', '#f0f2f5');
        document.documentElement.style.setProperty('--dt-textColor', '#000');
        document.documentElement.style.setProperty('--dt-box', '#fff');
        document.documentElement.style.setProperty('--dT-lgColor', '#242424');
        document.documentElement.style.setProperty('--dt-navColor', '#1f1f38');
    }
    else {
        this.name = "moon-outline";
        document.documentElement.style.setProperty('--dT', '#1f1f38');
        document.documentElement.style.setProperty('--dt-textColor', '#fff');
        document.documentElement.style.setProperty('--dt-box', 'rgb(50, 50, 97)');
        document.documentElement.style.setProperty('--dT-lgColor', '#dfdfdf');
        document.documentElement.style.setProperty('--dt-navColor', '#fff');
    }
})

$(".modalClsIcon").on('click',function(){
    $(this).closest(".modal").css("display","none");
})