function openMenu() {
    document.querySelector('nav').classList.add('drop');
    document.querySelectorAll('nav > ul > li:has(a)').forEach(e => e.style.display = 'block');
    document.querySelector('nav > ul > li.open-menu').style.display = 'none';
    document.querySelector('header > .close-menu').style.display = 'block';
}

function closeMenu() {
    document.querySelector('header > .close-menu').style.display = 'none';
    document.querySelector('nav > ul > li.open-menu').style.display = 'block';
    document.querySelectorAll('nav > ul > li:has(a)').forEach(e => e.style.display = 'none');
    document.querySelector('nav').classList.remove('drop');
}