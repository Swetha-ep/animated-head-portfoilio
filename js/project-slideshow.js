let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num){
    if (num > project.length){
        slideIndex = 1;
    }
    else if (num < 1){
        slideIndex = project.length;
    }else{
        slideIndex = num;
    }

    for(let i=0; i < project.length; i++){
        project[i].style.display = "none";
    }
    if (slideIndex >= 1 && slideIndex <= project.length) {
        project[slideIndex - 1].style.display = "flex";
    }
}

function navigateProject(num){
    showProject((slideIndex += num));

}