const chk = document.querySelector("#chk");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.classList.toggle('dark');
})