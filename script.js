// const pupil1=document.getElementsByClassName("pupil")[0];
// const pupil2=document.getElementsByClassName("pupil")[1];
// pupil2.style.backgroundColor="red";

// let x=0;
// let y=0;

// document.addEventListener("mousemove",(event)=>{
//     x=event.clientX;
//     y=event.clientY;
//     console.log(`${x}, ${y}`);
// });


const eye = document.querySelector(".eye");
const pupil = document.querySelector(".pupil");


document.addEventListener("mousemove", (e) => {

  // Get the bounding box of the eye element (position & size)
  const eyeRect = eye.getBoundingClientRect();

  // Calculate the X and Y coordinates of the center of the eye
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  // Calculate the angle between the eye center and the mouse position
  // Math.atan2 gives the angle in radians (Y difference first, then X difference)
  const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
  
  // Set how far the pupil should move from the center of the eye
  const radius = 53;

  // Calculate the new X and Y offsets for the pupil using trigonometry
  const x = radius * Math.cos(angle); // Horizontal offset
  const y = radius * Math.sin(angle); // Vertical offset


  pupil.style.transform = `translate(${x}px, ${y}px)`;
});

const pupil2=document.getElementsByClassName("pupil")[1];
const eye2=document.getElementsByClassName("eye")[1];

document.addEventListener("mousemove", (e)=>{
    const eyeReact=eye2.getBoundingClientRect();

    const eyeCenterX=eyeReact.left +eyeReact.width /2;
    const eyeCenterY=eyeReact.top + eyeReact.height /2;

    const angle= Math.atan2(e.clientY - eyeCenterY , e.clientX - eyeCenterX);

    const radius =53;

    const x=radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    pupil2.style.transform = `translate(${x}px, ${y}px)`;
});



  function isLaptop() {
    const isWideScreen = window.innerWidth >= 1024;
    const isNotTouchDevice = !('ontouchstart' in window);
    const isDesktopAgent = /Win|Mac|Linux/i.test(navigator.platform);

    return isWideScreen && isNotTouchDevice && isDesktopAgent;
  }

  if (!isLaptop()) {
    alert("This experience works best on a laptop or desktop!");
  }

