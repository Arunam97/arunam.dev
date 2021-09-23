function openSection(input) {
    if (input === "aboutme") {
        document.getElementById("aboutme_body").style.display = "block";
        document.getElementById("education_body").style.display = "none";
        document.getElementById("skills_body").style.display = "none";
        document.getElementById("projects_body").style.display = "none";
    } else if (input === "education") {
        document.getElementById("aboutme_body").style.display = "none";
        document.getElementById("education_body").style.display = "block";
        document.getElementById("skills_body").style.display = "none";
        document.getElementById("projects_body").style.display = "none";
    } else if (input === "skills") {
        document.getElementById("aboutme_body").style.display = "none";
        document.getElementById("education_body").style.display = "none";
        document.getElementById("skills_body").style.display = "block";
        document.getElementById("projects_body").style.display = "none";
    } else if (input === "projects") {
        document.getElementById("aboutme_body").style.display = "none";
        document.getElementById("education_body").style.display = "none";
        document.getElementById("skills_body").style.display = "none";
        document.getElementById("projects_body").style.display = "block";
    }
}