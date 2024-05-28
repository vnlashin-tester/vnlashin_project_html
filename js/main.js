const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Check the system settings of Color scheme and switch dark mode
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}
// 2. Check the Color mode in localStorage
if (localStorage.getItem('darkMode')=== 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode')=== 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}
// 4. Dependencies of system (time) chacngeble settings
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" :'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light');
    }
})
// 4. Switch on the Night mode with help of button
btnDarkMode.onclick = function() {
    // Add classes
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    // Save Color mode
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    }else {
        localStorage.setItem('darkMode', 'light');
    }
    }







