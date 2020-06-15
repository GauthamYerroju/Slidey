/*
 * Slidey 0.2
 *
 * Author: Gautham Yerroju
 * GitHub: https://github.com/GauthamYerroju/Slidey
 */

function toggleSlidey() {
    document.getElementById('slidey').classList.toggle('slidey--open')
}

function openSlidey() {
    document.getElementById('slidey').classList.add('slidey--open')
}

function closeSlidey() {
    document.getElementById('slidey').classList.remove('slidey--open')
}
