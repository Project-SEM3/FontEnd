const avatarDropdown = document.getElementById("avatarDropdown");
const avatarDropdownMenu = document.getElementById("avatarDropdownMenu");
const notiDropdown = document.getElementById("notiDropdown");
const notiDropdownMenu = document.getElementById("notiDropdownMenu");
const darkModeBtn = document.getElementById("darkModeBtn");
const avatarEdit = document.getElementById("avatarEdit");
const avatarEditImg = document.getElementById("avatarEditImg");
const hiddenPass = document.querySelectorAll(".hiddenPass");
const requestStationery = document.getElementById("requestStationery");
const requestStationeryBtn = document.getElementById("requestStationeryBtn");
const loading = document.getElementById("loading");
const passCheck = document.getElementById("passCheck");
const rePassCheck = document.getElementById("rePassCheck");
const alertPass = document.getElementById("alertPass");
const btnSubmit = document.getElementById("btnSubmit");
const btnDeleteAccount = document.querySelectorAll(".btnDelete");
const btnCloseModalAcc = document.querySelectorAll(".btnCloseModalAcc");

if (avatarDropdownMenu && avatarDropdown) {
	avatarDropdown.addEventListener("click", () => {
		avatarDropdownMenu.classList.toggle("hidden");
	});
}
if (avatarDropdownMenu && avatarDropdown) {
	notiDropdown.addEventListener("click", () => {
		notiDropdownMenu.classList.toggle("hidden");
	});
}

document.addEventListener("click", function (event) {
	if (!avatarDropdown.contains(event.target)) {
		avatarDropdownMenu.classList.add("hidden");
	}
	if (!notiDropdown.contains(event.target)) {
		notiDropdownMenu.classList.add("hidden");
	}
});

if (darkModeBtn) {
	darkModeBtn.addEventListener("click", () => {
		darkModeBtn.classList.toggle("light");
		document.body.classList.toggle("dark");
		if (darkModeBtn.classList.contains("light")) {
			darkModeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
		} else {
			darkModeBtn.innerHTML = '<i class="fa-regular fa-sun-bright"></i>';
		}
	});
}

if (avatarEdit) {
	avatarEdit.addEventListener("change", (e) => {
		avatarEditImg.src = URL.createObjectURL(e.target.files[0]);
	});
}

if (hiddenPass) {
	hiddenPass.forEach((item) => {
		item.addEventListener("click", () => {
			item.classList.toggle("viewPass");
			if (item.classList.contains("viewPass")) {
				item.innerHTML = '<i class="fa-solid fa-eye"></i>';
				item.previousElementSibling.type = "password";
			} else {
				item.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
				item.previousElementSibling.type = "text";
			}
		});
	});
}

if (requestStationery) {
	let innerStationery = `
	<div class="col-span-2">
	<label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
		stationery</label>
	<select name="category"
		class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
		<option value="tt">Pen</option>
		<option value="tt3">Paper</option>
		<option value="tt4">Ruler</option>
		<option value="tt5">Notebook</option>
	</select>
</div>
<div class="col-span-3">
	<label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
		stationery type</label>
	<select name="typeCategory"
		class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
		<option value="465">Pencil</option>
		<option>Ballpoint pens</option>
		<option>Ink pen</option>
		<option>Eraser pen</option>
	</select>
</div>
<div>
	<label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
	<input name="quantity" type="number"
		class="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="0" required min="1">
</div>
<div class="col-span-3">
	<label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
	<input name="note" type="text"
		class="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="Vd: Thien Long Pen">
</div>
<div class="flex flex-col items-center ">
	<h5 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Action</h5>
	<button type="button"
		class="text-white rounded-md bg-rose-500 py-2 px-4 hover:bg-rose-700 deleteRequest">Delete</button>
</div>
</div>`;

	function deteleRequestRow() {
		let btnDeleteStationery = document.querySelectorAll(".deleteRequest");

		btnDeleteStationery.forEach((item) => {
			item.addEventListener("click", () => {
				requestStationery.removeChild(item.parentNode.parentNode);
			});
		});
	}

	requestStationeryBtn.addEventListener("click", () => {
		let newStationery = document.createElement("div");
		newStationery.className = "grid grid-cols-10 gap-3 mb-6";
		newStationery.innerHTML = innerStationery;
		requestStationery.appendChild(newStationery);
		deteleRequestRow();
	});

	deteleRequestRow();
}

window.addEventListener("load", () => {
	loading.classList.add("hidden");
});

if (passCheck) {
	function checkPassMatch() {
		if (passCheck.value !== rePassCheck.value) {
			alertPass.classList.remove("hidden");
			btnSubmit.classList.add("opacity-30", "cursor-not-allowed");
			btnSubmit.type = "button";
		} else {
			alertPass.classList.add("hidden");
			btnSubmit.classList.remove("opacity-30", "cursor-not-allowed");
			btnSubmit.type = "submit";
		}
	}
	rePassCheck.addEventListener("blur", () => {
		checkPassMatch();
	});
	passCheck.addEventListener("blur", () => {
		checkPassMatch();
	});
}

if (btnDeleteAccount) {
	btnDeleteAccount.forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.nextElementSibling.classList.remove("hidden");
		});
	});
	btnCloseModalAcc.forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.parentNode.parentNode.parentNode.parentNode.classList.add("hidden");
		});
	});
}
