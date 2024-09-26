const observer = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenSection = document.querySelectorAll('.hidden-section');
hiddenSection.forEach((el) => observer.observe(el));


const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    // Simpan preferensi pengguna ke localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Atur tema berdasarkan preferensi yang tersimpan
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}