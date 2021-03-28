const form = document.getElementById("form"),
	input = form.querySelector("input"),
	splitedText = document.querySelector("h1");

const shuffle = (array) => {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const handleSubmit = (event) => {
	event.preventDefault();
	const originText = input.value;
	let arr = originText.split(" ");
	arr = shuffle(arr);
	splitedText.innerText = arr.join(" / ");
};

if (form) {
	form.addEventListener("submit", handleSubmit);
}
