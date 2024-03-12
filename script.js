/* Variables Feat Menu */
const feat = document.querySelector('.feat');
const featMob = document.querySelector('.feat-mob')
const featMenu = document.querySelector('.feat-menu');
const featMenuMob = document.querySelector('.feat-menu-mob');

/* Variable Comp Menu */
const comp = document.querySelector('.comp');
const compMob = document.querySelector('comp-mob');
const compMenu = document.querySelector('.comp-menu');
const compMenuMob = document.querySelector('.comp-menu-mob');

/* Variable Arrow */
const arrow = document.getElementsByTagName('i');

/* Variable Nav Mobile */
const navMob = document.querySelector('.nav-mob');

/* Enable/Disable Sub-Menu */
function showFeat() {
    if (featMenu.classList.contains('active')) {
        featMenu.classList.remove('active')
        arrow[0].classList.remove('up');
    } else {
        featMenu.classList.add('active');
        arrow[0].classList.add('up');
    }
};
function showFeatMob() {
    if (featMenuMob.classList.contains('active')) {
        featMenuMob.classList.remove('active')
        arrow[3].classList.remove('up');
    } else {
        featMenuMob.classList.add('active');
        arrow[3].classList.add('up');
    }
};
function showComp() {
    if (compMenu.classList.contains('active')) {
        compMenu.classList.remove('active')
        arrow[1].classList.remove('up');
    } else {
        compMenu.classList.add('active');
        arrow[1].classList.add('up');
    }
}
function showCompMob() {
    if (compMenuMob.classList.contains('active')) {
        compMenuMob.classList.remove('active')
        arrow[4].classList.remove('up');
    } else {
        compMenuMob.classList.add('active');
        arrow[4].classList.add('up');
    }
}

/* Enable/Disable Menu Bar Mobile */
function menuBar() {
    if (navMob.classList.contains('active')) {
        navMob.classList.remove('active');
    } else {
        navMob.classList.add('active');
    }
}
function xBar() {
    navMob.classList.remove('active');
}