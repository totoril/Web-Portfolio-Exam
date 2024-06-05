// Options for the IntersectionObserver
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5 // When 50% of the element is visible
  };
  
  // Callback function when intersection occurs
  const callback = (entries, observer) => {
    entries.forEach(entry => {
        const els2animate = entry.target.querySelectorAll("[to-be-animated]");
        // const el2animate = entry.target.querySelectorAll("[data-class-to-toggle]");
        // const class2include = el2animate.dataset.classToToggle;
      if (entry.isIntersecting) {
        // If the element is in view, add animation class
        els2animate.forEach(el=>el.style["animation-play-state"] = "running");
        // els2animate.forEach(el=>el.style["border"] = "1px red solid");
        console.log(entry.target.id, "is intersecting");
      } else {
        // If the element is out of view, remove animation class
        // els2animate.forEach(el=>el.classList.add('animation-pause'));
        els2animate.forEach(el=>el.style["animation-play-state"] = "paused");
        // els2animate.forEach(el=>el.style["border"] = "unset");
        console.log(entry.target.id, "is nnot intersecting");
      }
    });
  };
  
  // Create an IntersectionObserver instance with the callback function and options
  const observer = new IntersectionObserver(callback, options);
  
  // Loop through each element in section 1 and section 2 and observe them


document.querySelectorAll(".introduction, .important, .ecosystem, .challenges, .habitat-loss, .pollution, .disease, .apocalypse, .what-can-you-do, .touch-frog, .frog-habitat, .cat-walk, .unsg").forEach(sectionEl=>observer.observe(sectionEl));

document.addEventListener("DOMContentLoaded", function() {
  // Initialize GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Select all elements with the data-animate attribute
  const animateElements = document.querySelectorAll('[fade-out="true"]');

  // Loop through each element and create a ScrollTrigger for it
  animateElements.forEach((elem) => {
      gsap.fromTo(elem, 
          {
              autoAlpha: 1 // Start with full opacity
          },
          {
              autoAlpha: 0, // End with zero opacity
              scrollTrigger: {
                  trigger: elem,
                  start: "top top", // When top of the element enters the bottom of the viewport
                  end: "bottom 50%", // When top of the element is halfway out of the viewport
                  scrub: true, // Smooth scrubbing
              }
          }
      );
  });
});




//TORIL

// Action button
window.addEventListener("scroll", function() {
  const scrollButton = document.querySelector(".frog-habitat__action-button");
  if (window.scrollY > 10350 && window.scrollY < 10900) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

// Function to add image elements to the grass box
function addImagesToGrass() {
  const image1Coordinates = { x: 800, y: 630 };
  const image2Coordinates = { x: 1000, y: 230 };
  const image3Coordinates = { x: 600, y: 295 };
  const image4Coordinates = { x: 1400, y: 390 };
  const image5Coordinates = { x: 100, y: 360 };
  const image6Coordinates = { x: 1400, y: 580 };
  const image7Coordinates = { x: 300, y: 600 };

  const grassContainer = document.querySelector(".frog-habitat");

  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  let image3 = document.createElement("img");
  let image4 = document.createElement("img");
  let image5 = document.createElement("img");
  let image6 = document.createElement("img");
  let image7 = document.createElement("img");

  image1.src = "/CA3/assets/SVGs/leafs.svg";
  image2.src = "/CA3/assets/SVGs/pond.svg";
  image3.src = "/CA3/assets/SVGs/logs1.svg";
  image4.src = "/CA3/assets/SVGs/leafs.svg";
  image5.src = "/CA3/assets/SVGs/leafs.svg";
  image6.src = "/CA3/assets/SVGs/logs3.svg";
  image7.src = "/CA3/assets/SVGs/logs2.svg";

  image1.height = 100;
  image2.height = 200;
  image3.height = 50;
  image4.height = 100;
  image5.height = 100;
  image6.height = 100;
  image7.height = 80;

  image1.style.position = "absolute";
  image1.style.left = `${image1Coordinates.x}px`;
  image1.style.top = `${image1Coordinates.y}px`;

  image2.style.position = "absolute";
  image2.style.left = `${image2Coordinates.x}px`;
  image2.style.top = `${image2Coordinates.y}px`;

  image3.style.position = "absolute";
  image3.style.left = `${image3Coordinates.x}px`;
  image3.style.top = `${image3Coordinates.y}px`;
  
  image4.style.position = "absolute";
  image4.style.left = `${image4Coordinates.x}px`;
  image4.style.top = `${image4Coordinates.y}px`;

  image5.style.position = "absolute";
  image5.style.left = `${image5Coordinates.x}px`;
  image5.style.top = `${image5Coordinates.y}px`;

  image6.style.position = "absolute";
  image6.style.left = `${image6Coordinates.x}px`;
  image6.style.top = `${image6Coordinates.y}px`;

  image7.style.position = "absolute";
  image7.style.left = `${image7Coordinates.x}px`;
  image7.style.top = `${image7Coordinates.y}px`;

  grassContainer.appendChild(image1);
  grassContainer.appendChild(image2);
  grassContainer.appendChild(image3);
  grassContainer.appendChild(image4);
  grassContainer.appendChild(image5);
  grassContainer.appendChild(image6);
  grassContainer.appendChild(image7);

  const removeImagesFromGrass = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.remove();
      }
    });
  }, {});

  removeImagesFromGrass.observe(image1);
  removeImagesFromGrass.observe(image2);
  removeImagesFromGrass.observe(image3);
  removeImagesFromGrass.observe(image4);
  removeImagesFromGrass.observe(image5);
  removeImagesFromGrass.observe(image6);
  removeImagesFromGrass.observe(image7);
}

// Function to add frog images with slide-in animations
function addSlidingFrogs() {
  const grassContainer = document.querySelector(".frog-habitat");

  const frog1 = document.createElement("img");
  const frog2 = document.createElement("img");
  const frog3 = document.createElement("img");

  frog1.src = "/CA3/assets/SVGs/frog.svg";
  frog2.src = "/CA3/assets/SVGs/frog.svg";
  frog3.src = "/CA3/assets/SVGs/frog.svg";

  frog1.height = 75;
  frog2.height = 90;
  frog3.height = 100;

  frog1.style.position = "absolute";
  frog2.style.position = "absolute";
  frog3.style.position = "absolute";

  frog1.style.animation = "slideInFromLeftFrog2 2s forwards";
  frog2.style.animation = "slideInFromRightFrog1 4s forwards";
  frog3.style.animation = "slideInFromLeftFrog3 6s forwards";

  grassContainer.appendChild(frog1);
  grassContainer.appendChild(frog2);
  grassContainer.appendChild(frog3);

  frog1.style.top = "200px";
  frog2.style.top = "450px";
  frog3.style.top = "550px";

  frog1.style.left = "-40vw";
  frog2.style.right = "-10vw";
  frog3.style.left = "-40vw";
}

// Adding event listener for the button to add frogs on click
document.querySelector(".frog-habitat__action-button").addEventListener("click", addSlidingFrogs);
