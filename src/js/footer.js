export function cargaFooter() {
    var footer = document.getElementsByTagName('footer')[0];
    fetch('/footer.txt')
        .then(r => console.log(r));
}