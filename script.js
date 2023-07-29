const body = document.querySelector("body");
const navToggleBtn = document.querySelector(".navToggle");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const navListItem1 = document.querySelector(".nav-list-item1");
const navListItem2 = document.querySelector(".nav-list-item2");
const navListItem3 = document.querySelector(".nav-list-item3");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavListItem1 = document.querySelector(".mobile-nav-list-item1");
const mobileNavListItem2 = document.querySelector(".mobile-nav-list-item2");
const mobileNavListItem3 = document.querySelector(".mobile-nav-list-item3");
const mobileSubList1 = document.querySelector(".mobile-sub-list1");
const mobileSubList2 = document.querySelector(".mobile-sub-list2");
const mobileSubList3 = document.querySelector(".mobile-sub-list3");

navToggleBtn.addEventListener("click", () => {
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
});

body.addEventListener("click", (e) => {
  const navListItem1Text = navListItem1.querySelector("a");
  const subList1 = navListItem1.querySelector("ul");
  const navListItem2Text = navListItem2.querySelector("a");
  const subList2 = navListItem2.querySelector("ul");
  const navListItem3Text = navListItem3.querySelector("a");
  const subList3 = navListItem3.querySelector("ul");
  if (e.target === navListItem1Text) {
    subList1.classList.toggle("hidden");
  } else {
    subList1.classList.add("hidden");
  }
  if (e.target === navListItem2Text) {
    subList2.classList.toggle("hidden");
  } else {
    subList2.classList.add("hidden");
  }
  if (e.target === navListItem3Text) {
    subList3.classList.toggle("hidden");
  } else {
    subList3.classList.add("hidden");
  }
  if (e.target === mobileNavListItem1) {
    mobileSubList1.classList.toggle("hidden");
  }
  if (e.target === mobileNavListItem2) {
    mobileSubList2.classList.toggle("hidden");
  }
  if (e.target === mobileNavListItem3) {
    mobileSubList3.classList.toggle("hidden");
  }
});
