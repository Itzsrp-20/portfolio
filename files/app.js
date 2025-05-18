const but =document.getElementById("nav_bar")
const resume = document.getElementById("resume_button")
const project = document.getElementById("project_scroll")
const info = document.getElementById("about-buttons-track")
const contact = document.getElementById("contact-social")

but.addEventListener("mouseover",event=>{
    event.target.classList.add("nav_mouse_over")
})
but.addEventListener("mouseout",event=>{
    event.target.classList.remove("nav_mouse_over")
})

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing after the first reveal
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    const elements = document.querySelectorAll('.scroll-text');
    elements.forEach((el) => observer.observe(el));
});

project.addEventListener("mouseover",event=>{
    if((event.target.className)=='images'){
        event.target.classList.add("image-hover")
    }
  if((event.target.className)==("project-link-buttons")){
    event.target.classList.add("link-hover")
  }
})
project.addEventListener("mouseout",event=>{
    if((event.target.className)=='images image-hover'){
        event.target.classList.remove("image-hover")
    }
   if((event.target.className)==("project-link-buttons link-hover")){
    event.target.classList.remove("link-hover")
  }
})

info.addEventListener("mouseover",event=>{
  if(event.target.className=='about-buttons'){
    event.target.classList.add("about-buttons-hover");
  }
})
info.addEventListener("mouseout",event=>{
  if(event.target.className=='about-buttons about-buttons-hover'){
    event.target.classList.remove("about-buttons-hover");
  }
})
info.addEventListener("click",event=>{
    if(event.target.textContent=='Education'){
        document.querySelector(".education").classList.remove('hide')
        document.querySelector(".skills").classList.add('hide')
    }
    else if(event.target.textContent=='Skills'){
        document.querySelector(".education").classList.add('hide')
        document.querySelector(".skills").classList.remove('hide')
    }
})


resume.addEventListener("mouseover",event=>{
    event.target.classList.add("resume_button_contact")
})
resume.addEventListener("mouseout",event=>{
    event.target.classList.remove("resume_button_contact")
})
