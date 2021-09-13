let ubahSoal = (index) => {
	const heading = document.querySelector('h2');
	const text = document.querySelectorAll('.answer .text');
	heading.innerHTML = dataSoal[index].q;
	for (let i = 0; i < 5; i++) {
		text[i].innerHTML = dataSoal[index].a[i].option;
	}
	if (times == 9) {
		nextButton.nextElementSibling.innerHTML = 'Selesai';
	}
};

let inputJawaban = (index) => {
	const answer = document.querySelectorAll('.answer');
	for (let i = 0; i < 5; i++) {
		if (answer[i].classList.contains('answerToggle')) {
			dataSoal[index].jawaban = i;
			if (dataSoal[index].a[i].isAnswer) {
				dataSoal[index].correct = true;
			}
			toggleJawaban(answer[i], answer[i].firstElementChild);
		}
	}
};

let hitungNilai = () => {
	let nilai = 0;
	for (let i of dataSoal) {
		if (i.correct) {
			nilai++;
		}
	}
	return nilai;
};

let soal_finish = (nilai) => {
	nilai *= 10;
	let temp = `<h2>Selamat anda mendapatkan nilai <br/> ${nilai}</h2>`;
	const card = document.querySelector('.card');
	card.classList.add('card-finish');
	card.innerHTML = temp;
};
