document.querySelector('.hamburger')?.addEventListener('click', () => {
    let links = document.querySelector('.nav-links') as any
    links.classList.toggle('expanded');
});