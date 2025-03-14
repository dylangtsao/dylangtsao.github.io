document.addEventListener("DOMContentLoaded", function() {
  const projectCubes = document.querySelectorAll('.project-cube');
  
  projectCubes.forEach(cube => {
    // Flip card when clicked
    cube.addEventListener('click', function() {
      this.classList.add('flipped');
    });
    
    // Add back button functionality
    const backButton = cube.querySelector('.project-back-button');
    if (backButton) {
      backButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from propagating to the cube
        cube.classList.remove('flipped');
      });
    }
  });
}); 