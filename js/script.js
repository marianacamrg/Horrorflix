function changeMode(){
    changeClasses();
    changeText();
}


function changeClasses(){
    button.classList.toggle(darkModeClass);
    h4.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    nav.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h4.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h4.innerHTML = lightMode + " ON";

}


const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h4 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const nav = document.getElementsByTagName('nav')[0];

console.log(body);

button.addEventListener('click', changeMode);