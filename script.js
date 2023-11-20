// Define your modal content arrays for each modal
const modalContent1 = [
  {
    heading: "Heading 1",
    content: "Content 1",
    imageSrc: "image1.jpg",
  },
  // Add more content objects as needed for modal1
];

const modalContent2 = [
  {
    heading: "Heading 1",
    content: "Content 1",
    imageSrc: "image1.jpg",
  },
  // Add more content objects as needed for modal2
];

// Initialize variables for each modal
let currentContentIndex1 = 0;
let currentContentIndex2 = 0;

// Add event listeners to each "Read More" button
const openModalBtns = document.querySelectorAll(".openModalBtn");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const modalId = event.currentTarget.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    
    if (modalId === "modal1") {
      modal.style.display = "block";
      updateModalContent1(currentContentIndex1);
    } else if (modalId === "modal2") {
      modal.style.display = "block";
      updateModalContent2(currentContentIndex2);
    }
  });
});

// Function to update content for modal1
function updateModalContent1(index) {
  modalHeading1.textContent = modalContent1[index].heading;
  modalImage1.src = modalContent1[index].imageSrc;
  modalText1.textContent = modalContent1[index].content;
}

// Function to update content for modal2
function updateModalContent2(index) {
  modalHeading2.textContent = modalContent2[index].heading;
  modalImage2.src = modalContent2[index].imageSrc;
  modalText2.textContent = modalContent2[index].content;
}

// Add event listeners for modal navigation buttons for modal1
const prevBtn1 = document.getElementById("prevBtn1");
const nextBtn1 = document.getElementById("nextBtn1");

prevBtn1.addEventListener("click", () => {
  if (currentContentIndex1 > 0) {
    currentContentIndex1--;
    updateModalContent1(currentContentIndex1);
  }
});

nextBtn1.addEventListener("click", () => {
  if (currentContentIndex1 < modalContent1.length - 1) {
    currentContentIndex1++;
    updateModalContent1(currentContentIndex1);
  }
});

// Add event listeners for modal navigation buttons for modal2
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

prevBtn2.addEventListener("click", () => {
  if (currentContentIndex2 > 0) {
    currentContentIndex2--;
    updateModalContent2(currentContentIndex2);
  }
});

nextBtn2.addEventListener("click", () => {
  if (currentContentIndex2 < modalContent2.length - 1) {
    currentContentIndex2++;
    updateModalContent2(currentContentIndex2);
  }
});

// Close modal event listeners for both modals
const closeBtns = document.querySelectorAll(".close");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});








