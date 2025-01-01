const navdialog = document.getElementById('nav-dialog');
function handleMenu() {
    navdialog.classList.toggle('hidden');
}

function toggleDropdown() {
    let dropdown = document.querySelector('#dropDownbutton #dropdown');
    dropdown.classList.toggle('hidden');
}

function serviceMenuDropdown(event) {
    // Stop event propagation to prevent closing the parent dropdown
    event.stopPropagation();
    let shopDropdown = document.querySelector('#servicesDropdown #service');
    shopDropdown.classList.toggle('hidden');
}

// const navbar = document.getElementById('navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         navbar.classList.remove('bg-[#fff8ee]');
//         navbar.classList.add('bg-white');
//     } else {
//         navbar.classList.remove('bg-white');
//         navbar.classList.add('bg-[#fff8ee]');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const navItems = document.querySelectorAll('#nav-menu li');

//     navItems.forEach(item => {
//         item.addEventListener('click', () => {
//             navItems.forEach(nav => nav.classList.remove('active'));
//             item.classList.add('active');
//         });
//     });
// });
