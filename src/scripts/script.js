function start() {
    document.getElementById('education-section').style.display = "none";
    document.getElementById('skills-section').style.display = "none";
    document.getElementById('portfolio-section').style.display = "none";
    document.getElementById('contact-me-section').style.display = "none";
}

function buttonClick(button) {
    if (button == 'about-me') {
        document.getElementById('about-me-section').style.display = "block";
        document.getElementById('education-section').style.display = "none";
        document.getElementById('skills-section').style.display = "none";
        document.getElementById('portfolio-section').style.display = "none";
        document.getElementById('contact-me-section').style.display = "none";
    } else if (button == 'education') {
        document.getElementById('about-me-section').style.display = "none";
        document.getElementById('education-section').style.display = "block";
        document.getElementById('skills-section').style.display = "none";
        document.getElementById('portfolio-section').style.display = "none";
        document.getElementById('contact-me-section').style.display = "none";
    } else if (button == 'skills') {
        document.getElementById('about-me-section').style.display = "none";
        document.getElementById('education-section').style.display = "none";
        document.getElementById('skills-section').style.display = "block";
        document.getElementById('portfolio-section').style.display = "none";
        document.getElementById('contact-me-section').style.display = "none";
    } else if (button == 'portfolio') {
        document.getElementById('about-me-section').style.display = "none";
        document.getElementById('education-section').style.display = "none";
        document.getElementById('skills-section').style.display = "none";
        document.getElementById('portfolio-section').style.display = "block";
        document.getElementById('contact-me-section').style.display = "none";
    } else if (button == 'contact-me') {
        document.getElementById('about-me-section').style.display = "none";
        document.getElementById('education-section').style.display = "none";
        document.getElementById('skills-section').style.display = "none";
        document.getElementById('portfolio-section').style.display = "none";
        document.getElementById('contact-me-section').style.display = "block";
    }
}