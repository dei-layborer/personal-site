window.addEventListener('load', init);

let menuLinks, closures, contentPages;

function init() {


    menuLinks = document.getElementById('links').children;
    for (let link of menuLinks) {
        link.addEventListener('click', showPage);
    }

    closures = document.getElementsByClassName('closePage');
    for (let closure of closures) {
        closure.addEventListener('click', closePage);
    }
    
    contentPages = document.getElementsByClassName('content');

}

function closePage(ev) {

    const closeButton = ev.target;
    const parentElement = ev.target.parentElement;

    const menuItem = document.getElementById(closeButton.id.replace('close-', 'menu-'));

    parentElement.classList.add('hidden');
    menuItem.classList.remove('activelink');

}

function showPage(ev) {
    const menuItem = ev.target;
    if (menuItem.id == 'menu-blog') {  // blog is a normal link, so don't need to do anything
        return;
    }
    ev.preventDefault();

    // add active state to clicked link, remove it from all others
    for (let link of menuLinks) {
        link == menuItem ? link.classList.add('activelink') : link.classList.remove('activelink');
    }

    const pageToShow = document.getElementById(ev.target.id.substring(5));
    
    // the challenge here is to synchronize animations if switching from one page to another (otherwise two pages are visible at the same time)

    // Step 1: are any content pages actually visible?  If not, we don't need to worry about any of this.
    let pageVisible = null;
    for (page of contentPages) {
        if (!page.classList.contains('hidden')) { pageVisible = page; }
    }
    
    // Step 2: If no pages are currently visible, no syncing is needed.  But if one is, then we have to "close" it before showing the next one.
    if (!pageVisible) {
        pageToShow.classList.remove('hidden');
    } else {
        pageVisible.classList.add('hidden');
        const delayedShow = new Promise((done) => setTimeout(done, 400)); // delay by the time it takes the first one to hide itself again
        delayedShow.then(() => pageToShow.classList.remove('hidden'));

    }

}