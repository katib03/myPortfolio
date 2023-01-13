const prj1 = document.querySelector('#prj1');
const prj2 = document.querySelector('#prj2');
const prj3 = document.querySelector('#prj3');
const project1 = document.querySelector('#project1');
const project2 = document.querySelector('#project2');
const project3 = document.querySelector('#project3');

prj1.addEventListener('click', () => {
  if(project1.style.display === "none"){
  project1.style.display = "block";
  project2.style.display = "none";
  project3.style.display = "none";
  }else{project1.style.display = "none";}
});

prj2.addEventListener('click', () => {
  if(project2.style.display === "none"){
  project2.style.display = "block";
  project1.style.display = "none";
  project3.style.display = "none";
  }else{project2.style.display = "none";}
});

prj3.addEventListener('click', () => {
  if(project3.style.display === "none"){
  project3.style.display = "block";
  project1.style.display = "none";
  project2.style.display = "none";
  }else{project3.style.display = "none";}
});

