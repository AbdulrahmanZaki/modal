"use strict";

//storing html elements
const showModalBtns = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlayHidden = document.querySelector(".overlay");

console.log(showModalBtns);

let displayModal = function () {
  /*the var modal holds an element which consists of two classes which are modal & hidden when we 
      click the button the class hidden should be removed from the var that's how we can return everything 
     to normal so we use (classList) property to choose among various calsses within in one element*/
  //===> note : the class name is written without the dot unlike usual
  modal.classList.remove("hidden");
  overlayHidden.classList.remove("hidden");
  console.log("visible");

  /* we can use modal.style.display = "block" but now we have to memorize and change every single 
  property in that class which is painful instead we can put the changes into one class then add it or 
  remove it */
};

for (let i = 0; i < showModalBtns.length; i++) {
  console.log(showModalBtns[i].addEventListener("click", displayModal));
}

const closeTheModal = function () {
  modal.classList.add("hidden");
  overlayHidden.classList.add("hidden");
  console.log("closed");
};

closeModalBtn.addEventListener("click", closeTheModal);

//also when we click outside the window (overlay) the window should be closed
overlayHidden.addEventListener("click", closeTheModal);

document.addEventListener("keydown", function (e) {
  /*===>console.log(e.key); //allow us to access the object that stores the information about the pressed key
     and then we can access any property of that object like any other object*/
  console.log(e.key);

  //now we check if the key pressed is ESC to close the modal or not
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    /*we want to make sure if the modal is already opened and the "hidden" class is added
     to the modal var or not if yes then nothing happens if it's not in the modal var we add it when
    the escape key is pressed*/

    closeTheModal();
  }
});
