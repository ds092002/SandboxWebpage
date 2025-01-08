document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});


function handleMenu() {
  const navdialog = document.getElementById("nav-dialog");
  navdialog.classList.toggle("hidden");
}

function toggleDropdown() {
  let dropdown = document.querySelector("#dropDownbutton #dropdown");
  dropdown.classList.toggle("hidden");
}

// function serviceMenuDropdown(event) {
//     // Stop event propagation to prevent closing the parent dropdown
//     event.stopPropagation();
//     let serviceDropdown = document.querySelector('#servicesDropdown #service');
//     serviceDropdown.classList.toggle('hidden');
// }

// function serviceMenuDropdown(show) {
//   const serviceDropdown = document.querySelector("#servicesDropdown #service");
//   if (show) {
//     serviceDropdown.classList.remove("hidden");
//   } else {
//     serviceDropdown.classList.add("hidden");
//   }
// }

function aboutMenuDropdown(event) {
  event.stopPropagation();
  let aboutDropdown = document.querySelector("#aboutDropdown #about");
  aboutDropdown.classList.toggle("hidden");
}

function shopDropdown(event) {
  event.stopPropagation();
  let shopDropdown = document.querySelector("#shopDropdown #shop");
  shopDropdown.classList.toggle("hidden");
}

function contactDropdown(event) {
  event.stopPropagation();
  let contactDropdown = document.querySelector("#contactDropdown #contact");
  contactDropdown.classList.toggle("hidden");
}

function careerDropdown(event) {
  event.stopPropagation(event);
  let careerDropdown = document.querySelector("#careerDropdown #career");
  careerDropdown.classList.toggle("hidden");
}

function utilityDropdown(event) {
  event.stopPropagation(event);
  let utilityDropdown = document.querySelector("#utilityDropdown #utility");
  utilityDropdown.classList.toggle("hidden");
}

function projectDropdown() {
  let projectDropdown = document.querySelector("#projectDropdown #project");
  projectDropdown.classList.toggle("hidden");
}

function toggleDemoDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden"); // Toggles the visibility of the dropdown
}

function togglePagesDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden"); // Toggles visibility
}

function toggleServiceDropdown(id) {
  // event.stopPropagation(); // Prevents parent event from triggering
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden"); // Toggles visibility
}

function toggleAboutDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleShopDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}
function toggleContactDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleCareerDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleUtilityDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleProjectDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleBlogDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleBlogPostDropdown(id){
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden'); // Toggles visibility
}

function toggleAccordion(id) {
  // Get all accordion content elements and icons
  const allContents = document.querySelectorAll("[id^='content-']");
  const allIcons = document.querySelectorAll("[id^='icon-']");
  const allLabels = document.querySelectorAll("[id^='label-']");

  // Loop through all content elements to close them
  allContents.forEach((content, index) => {
    const currentId = index + 1;
    const icon = document.getElementById(`icon-${currentId}`);
    const label = document.getElementById(`label-${currentId}`);

    if (currentId === id) {
      // Toggle the selected accordion
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");

      // Adjust the label color for the selected accordion
      if (content.classList.contains("hidden")) {
        label.classList.remove("text-[#fab758]");
        label.classList.add("text-gray-800");
      } else {
        label.classList.add("text-[#fab758]");
        label.classList.remove("text-gray-800");
      }
    } else {
      // Close other accordions
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");
      label.classList.remove("text-[#fab758]");
      label.classList.add("text-gray-800");
    }
  });
}

// Select the toggle checkbox and prices
const toggle = document.getElementById("toggle-pricing");
const prices = document.querySelectorAll(".price");
const durations = document.querySelectorAll(".duration");

// Event listener for toggling prices
toggle.addEventListener("change", () => {
  const isYearly = toggle.checked;

  prices.forEach((price) => {
    const newPrice = isYearly ? price.dataset.yearly : price.dataset.monthly;
    price.textContent = `$${newPrice}`;
  });

  durations.forEach((duration) => {
    duration.textContent = isYearly ? "/year" : "/month";
  });
});




// function handleMobileMenu() {
//     const navdialog = document.getElementById('nav-dialog');
//     if (navdialog.classList.contains('-translate-x-full')) {
//         navdialog.classList.remove('-translate-x-full');
//         navdialog.classList.add('translate-x-0')
//     } else {
//         navdialog.classList.add('-translate-x-full');
//         navdialog.classList.remove('translate-x-0');
//     }
// }
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
