document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // Ocultar el loader
        document.querySelector(".loader").style.display = "none";
        document.querySelector("#text-loader").style.display = "none";
        document.querySelector("body").style.backgroundColor = "#9bfab0";
        document.querySelector("body").style.margin = "14px";
        document.querySelector("body").style.color = "#fff";
        document.querySelector("#main-content").style.display = "block";
    }, 1500);//3500 mls = 3.5s
});

const btnProfile = document.getElementById('btn-profile');
const btnknowledges = document.getElementById('btn-knowledges');
const btnExperiences = document.getElementById('btn-experiences');
const btnProjects = document.getElementById('btn-projects');
const btnContactme = document.getElementById('btn-contactme');

const profile = document.getElementById('profile');
const knowledges = document.getElementById('knowledges');
const experiences = document.getElementById('experiences');
const projects = document.getElementById('projects');
const contactme = document.getElementById('contactme');

function actualizarBoton() {
    const seccionProfile = profile.getBoundingClientRect();
    const seccionContactme = contactme.getBoundingClientRect();
    const seccionKnowledges = knowledges.getBoundingClientRect();
    const seccionExperiences = experiences.getBoundingClientRect();
    const seccionProjects = projects.getBoundingClientRect();
    
    if (seccionProfile.top < window.innerHeight && seccionProfile.bottom >= 0) {
        // El usuario está viendo la sección 1
        btnProfile.classList.add('enSeccion');
    } else {
        // El usuario no está viendo la sección 1
        btnProfile.classList.remove('enSeccion');
    }

    if (seccionKnowledges.top < window.innerHeight && seccionKnowledges.bottom >= 0) {
        // El usuario está viendo la sección 1
        btnknowledges.classList.add('enSeccion');
    } else {
        // El usuario no está viendo la sección 1
        btnknowledges.classList.remove('enSeccion');
    }

    if (seccionContactme.top < window.innerHeight && seccionContactme.bottom >= 0) {
        // El usuario está viendo la sección 1
        btnContactme.classList.add('enSeccion');
    } else {
        // El usuario no está viendo la sección 1
        btnContactme.classList.remove('enSeccion');
    }

    if (seccionExperiences.top < window.innerHeight && seccionExperiences.bottom >= 0) {
        // El usuario está viendo la sección 1
        btnExperiences.classList.add('enSeccion');
    } else {
        // El usuario no está viendo la sección 1
        btnExperiences.classList.remove('enSeccion');
    }

    if (seccionProjects.top < window.innerHeight && seccionProjects.bottom >= 0) {
        // El usuario está viendo la sección 1
        btnProjects.classList.add('enSeccion');
    } else {
        // El usuario no está viendo la sección 1
        btnProjects.classList.remove('enSeccion');
    }
}

btnProfile.addEventListener('click', function() {
    profile.scrollIntoView({ behavior: 'smooth' });
});
btnknowledges.addEventListener('click', function() {
    knowledges.scrollIntoView({ behavior: 'smooth' });
});
btnContactme.addEventListener('click', function() {
    contactme.scrollIntoView({ behavior: 'smooth' });
});
btnExperiences.addEventListener('click', function() {
    experiences.scrollIntoView({ behavior: 'smooth' });
});
btnProjects.addEventListener('click', function() {
    projects.scrollIntoView({ behavior: 'smooth' });
});

// Escucha el evento scroll para actualizar el botón
window.addEventListener('scroll', actualizarBoton);
window.addEventListener('scroll', ()=>{
    setTimeout(() => {
        document.querySelector("#main-head").style.backgroundColor = "#9bfab0";
    }, 100);
    document.querySelector("#main-head").style.backgroundColor = "rgba(255, 255, 255, 0.2)"
});
