let urutanSoal = [];

for (let i = 0; i < 10; i++) {
	let randomNumber = Math.floor(Math.random() * 10);
	if (i != 0) {
		for (let j = 0; j < i; j++) {
			if (randomNumber == urutanSoal[j]) {
				randomNumber = Math.floor(Math.random() * 10);
				j = -1;
			}
		}
	}
	urutanSoal.push(randomNumber);
}

function acakJawaban() {
	let jawabanAcak = [];
	for (let i = 0; i < 5; i++) {
		let randomNumber = Math.floor(Math.random() * 5);
		if (i != 0) {
			for (let j = 0; j < i; j++) {
				if (randomNumber == jawabanAcak[j]) {
					j = -1;
					randomNumber = Math.floor(Math.random() * 5);
				}
			}
		}
		jawabanAcak.push(randomNumber);
	}
	return jawabanAcak;
}

{
	let soalTemp = [];
	for (let i = 0; i < 10; i++) {
		soalTemp.push(dataSoal[urutanSoal[i]]);
		let urutanJawaban = [];
		urutanJawaban = acakJawaban();
		let Jawaban = [];
		for (let j = 0; j < 5; j++) {
			Jawaban.push(dataSoal[urutanSoal[i]].a[urutanJawaban[j]]);
		}
		soalTemp[i].a = Jawaban;
	}
	dataSoal = soalTemp;
}

let times = 0;
var nextButton = document.querySelector('.next i');
nextButton.addEventListener('click', function () {
	if (times == 11) {
		return;
	}
	if (times == 10) {
		let nilai = hitungNilai();
		soal_finish(nilai);
		times++;
		return;
	}
	ubahSoal(times);
	inputJawaban(times - 1);
	times++;
});

document.addEventListener('DOMContentLoaded', function () {
	ubahSoal(times);
	times++;
});
