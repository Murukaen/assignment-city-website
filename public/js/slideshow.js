(function() {
    let cur = 0;
    let cnt;

    function refresh() {
        const slides = document.getElementsByClassName('slide');
        for (let i = 0; i < cnt; i++) {
            slides[i].style.display = 'none';
        }
        slides[cur].style.display = 'block';
    }

    window.onload = function() {
        cnt = document.getElementsByClassName('slide').length;
        refresh();
    }

    window.nextSlide = function() {
        cur += 1;
        if (cur >= cnt) {
            cur = 0;
        }
        refresh();
    };
})();