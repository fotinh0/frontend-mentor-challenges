// toggles answer

const toggleAnswer = (e) => {
    const question = e.childNodes[1];
    hideAllAnswers(question);
    e.childNodes[3].classList.toggle("rotate-icon");
    e.classList.toggle("bold");
    e.nextElementSibling.classList.toggle("hide");
  };
  
  //hides answers
  
  const hideAllAnswers = (question) => {
    const questionsEl = [...document.querySelectorAll(".question")];
    questionsEl.forEach((questionEl) => {
      console.log();
      if (questionEl.childNodes[1] != question) {
        questionEl.classList.remove("bold");
        questionEl.nextElementSibling.classList.add("hide");
        questionEl.childNodes[3].classList.remove("rotate-icon");
      }
    });
  };