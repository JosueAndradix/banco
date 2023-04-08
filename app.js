const users = [
	{ username: "Josue", password: "tacodecabeza", balance: 100 },
	{ username: "Ronaldo", password: "tortadetamal", balance: 500 },
	{ username: "Roberto", password: "enchiladasuiza", balance: 300 }
];

let currentUser = null;

function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const user = users.find(u => u.username === username && u.password === password);
	if (user) {
		currentUser = user;
		document.getElementById("user").textContent = user.username;
		document.getElementById("login").style.display = "none";
		document.getElementById("main").style.display = "block";
	} else {
		alert("Usuario o contraseña incorrectos.");
	}
}


function salir() {
	currentUser = null;
	document.getElementById("login").style.display = "block";
	document.getElementById("main").style.display = "none";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("amount").value = "";
}

function checar(){
    document.getElementById("balance").textContent = `Tu saldo actual es de $ ${currentUser.balance}`
}

function depositar() {
	const amount = parseInt(document.getElementById("amount").value);
	if (amount > 0) {
		const newBalance = currentUser.balance + amount;
		if (newBalance > 990) {
			alert("El límite de cuenta es de $990.");
			return;
		} else if (newBalance < 10) {
			alert("El saldo mínimo permitido es de $10.");
			return;
		}
		currentUser.balance = newBalance;
		document.getElementById("balance").textContent = `Tu saldo actual es de $ ${currentUser.balance}`
		alert(`Se han depositado $${amount}.`);
	} else {
		alert("Ingrese una cantidad válida.");
	}
}

function retirar() {
	const amount = parseInt(document.getElementById("amount").value);
	if (amount > 0) {
		const newBalance = currentUser.balance - amount;
		if (newBalance > 990) {
			alert("El límite de cuenta es de $990.");
			return;
		} else if (newBalance < 10) {
			alert("El saldo mínimo permitido es de $10.");
			return;
		}
		currentUser.balance = newBalance;
		document.getElementById("balance").textContent = `Tu saldo actual es de $ ${currentUser.balance}`
		alert(`Se han retirado $${amount}.`);
	} else {
		alert("Ingrese una cantidad válida.");
	}
}