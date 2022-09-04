let a = prompt("Введите число а");

new Promise((resolve, reject) => {
	console.log("Начнем");
	if (a > 5) reject();
	else resolve();
})
	.then(() => {
		console.log("Отлично");
	})
	.catch(() => {
		console.log("Ошибка");
	})
	.finally(() => {
		console.log("И в любом случае круто")
	})