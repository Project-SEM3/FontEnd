const avatarDropdown = document.getElementById("avatarDropdown");
const avatarDropdownMenu = document.getElementById("avatarDropdownMenu");
const notiDropdown = document.getElementById("notiDropdown");
const notiDropdownMenu = document.getElementById("notiDropdownMenu");
const darkModeBtn = document.getElementById("darkModeBtn");

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
