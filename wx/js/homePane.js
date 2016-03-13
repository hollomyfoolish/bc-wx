;(function () {
    var $ = document.querySelector.bind(document);
    var homePane = {
        container: $('#homeContainer'),
        searBtn: $('#searchTab'),
        lineBtn: $('#lineTab'),
        findBtn: $('#findTab')
    };

    [homePane.searBtn, homePane.lineBtn, homePane.findBtn].forEach(function(btn){
        btn.addEventListener('click', function(){
            homePane.container.querySelector('.tab-selected').classList.remove('tab-selected');
            btn.classList.add('tab-selected');
            homePane.container.querySelector('.active').classList.remove('active');
            $('#' + btn.getAttribute('data-for')).classList.add('active');
        }, false);
    });
} ())