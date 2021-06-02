// Select the button/checkbox
const chk = document.querySelector("#chk");

// Listen for a click on the button/checkbox
chk.addEventListener('change', () => {
    // Toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme');
})