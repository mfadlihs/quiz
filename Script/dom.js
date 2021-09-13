const jawaban = document.querySelectorAll('.answer');
const logo = document.querySelectorAll('.logo');

const toggleJawaban = (parent, child) => {
  parent.classList.toggle('answerToggle');
  child.classList.toggle('logoToggle');
};

for (let i of jawaban) {
  i.addEventListener('click', function () {
    for (let j of jawaban) {
      if (i != j) {
        if (j.classList.contains('answerToggle')) {
          toggleJawaban(j, j.firstElementChild);
        }
      }
    }
    const logo = i.firstElementChild;
    toggleJawaban(i, logo);
  });
}
