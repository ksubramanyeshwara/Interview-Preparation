const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// form -> button -> div to execute in the given manner, we use event capturing on bold tag and then event bubbling
grandParent.addEventListener("click", clickMe);
parent.addEventListener("click", clickMe, true);
child.addEventListener("click", clickMe);

function clickMe(event) {
  alert(
    `currentTarget is ${event.currentTarget.tagName}, event.target is ${event.target.tagName}, this is ${this.tagName}`
  );
}

const products = document.querySelector(".products");
products.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    window.location.href += "/" + e.target.className;
  }
});

// modal
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modalBtn");
const modalContainer = document.querySelector(".modalContainer");

modalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.className === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
