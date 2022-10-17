window.addEventListener('load', init);

function init() {
    genTOC();
}

function genTOC() {

    let tocList = document.getElementById('toc').children[1];
    let sections = document.getElementsByTagName('H2');
    for (section of sections) {

        let entry = document.createElement('LI');
        entry.append(section.innerText);
        tocList.appendChild(entry);
        entry.addEventListener('click', () => {
            section.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    }

}