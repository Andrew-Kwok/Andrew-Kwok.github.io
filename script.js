var toggle = document.getElementById("lightdark-toggle");

const light_theme = {
	"--primary": "#eee",
	"--secondary": "#fff",
	"--text": "#000",
	"--line_color": "#222",
	"--github": "#333"
};

const dark_theme = {
	"--primary": "#444",
	"--secondary": "#333",
	"--text": "#fff",

	"--line_color": "#ddd",
	"--github": "#ccc"
};

function setTheme(theme) {
	Object.entries(theme).forEach(row => document.documentElement.style.setProperty(row[0], row[1]));
}

toggle.addEventListener("change", function() {
	if (this.checked) {
		document.getElementById("lightdark-symbol").innerHTML = "&#9789;";
		setTheme(dark_theme);
	} else {
		document.getElementById("lightdark-symbol").innerHTML = "&#9788;";
		setTheme(light_theme);
	}
});