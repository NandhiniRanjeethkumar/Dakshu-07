document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;";  // This is the HTML entity for a heart symbol
    
    // Set the position to where the cursor is
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    
    // Set random movement offsets for each heart
    const randomX = (Math.random() - 0.5) * 200; // Random horizontal offset
    const randomY = (Math.random() - 0.5) * 300; // Random vertical offset
    
    // Set CSS custom properties for animation
    heart.style.setProperty('--x-offset', `${randomX}px`);
    heart.style.setProperty('--y-offset', `${randomY}px`);

    // Append heart to the body or container
    document.querySelector('.heart-container').appendChild(heart);
    
    // Remove the heart from the DOM after animation is complete
    setTimeout(() => {
        heart.remove();
    }, 5000);
});
