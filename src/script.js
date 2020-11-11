const question = document.getElementsByClassName("FAQ-QUESTIONS");

for(var i = 0 ; i < question.length ; i++){
  question[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("visible");
    this.classList.toggle("clicked");
    this.lastElementChild.classList.toggle("upsidedown");
  })
}

