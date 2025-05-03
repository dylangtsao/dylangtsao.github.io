document.addEventListener('DOMContentLoaded', function() {
    const contentLines = document.querySelectorAll('.content-line');
    const heroSection = document.querySelector('.hero-section');
    let currentLineIndex = -1;
    let highlightingComplete = false;
    let lastScrollY = 0;
    let scrollThreshold = 40; // Increased threshold to require more deliberate scrolling
    let isOnCooldown = false; // Prevent rapid successive highlights
    let cooldownTime = 500; // Cooldown time in milliseconds
    
    // Function to highlight a specific line
    function highlightLine(index) {
        if (isOnCooldown) return;
        
        if (index >= 0 && index < contentLines.length) {
            // Set cooldown to prevent rapid highlights
            isOnCooldown = true;
            setTimeout(() => {
                isOnCooldown = false;
            }, cooldownTime);
            
            // Reset previous highlights if going backward
            if (index < currentLineIndex) {
                for (let i = index + 1; i <= currentLineIndex; i++) {
                    if (i < contentLines.length) {
                        contentLines[i].classList.remove('highlight');
                    }
                }
            }
            
            // Highlight current line
            contentLines[index].classList.add('highlight');
            currentLineIndex = index;
            console.log('Highlighting line', index + 1);
            
            // Check if all lines are highlighted
            if (currentLineIndex === contentLines.length - 1) {
                highlightingComplete = true;
                console.log('All lines highlighted, enabling scroll');
                // Allow scrolling to continue after a short delay
                setTimeout(() => {
                    heroSection.style.position = 'relative';
                    heroSection.style.zIndex = '1';
                }, 500);
            }
        }
    }
    
    // Track accumulated scroll for more deliberate actions
    let accumulatedDeltaY = 0;
    const scrollActivationThreshold = 100; // Amount of scroll needed to trigger highlight
    
    // Modified scroll handling with wheel event which is more reliable
    window.addEventListener('wheel', function(e) {
        if (!highlightingComplete) {
            e.preventDefault();
            
            // Accumulate scroll delta
            accumulatedDeltaY += e.deltaY;
            
            // Only trigger highlight after significant scrolling
            if (Math.abs(accumulatedDeltaY) >= scrollActivationThreshold) {
                const scrollingDown = accumulatedDeltaY > 0;
                
                if (scrollingDown) {
                    if (currentLineIndex < contentLines.length - 1) {
                        highlightLine(currentLineIndex + 1);
                    }
                } else {
                    if (currentLineIndex > -1) {
                        highlightLine(currentLineIndex - 1);
                    }
                }
                
                // Reset accumulated scroll
                accumulatedDeltaY = 0;
            }
        }
    }, { passive: false });
    
    // Fallback to scroll event for browsers that might not support wheel
    let lastScrollPosition = 0;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (!highlightingComplete) {
            // Reset scroll position
            window.scrollTo(0, 0);
            
            // Calculate scroll difference from last position
            const scrollDifference = Math.abs(currentScrollY - lastScrollPosition);
            
            // Only highlight after significant scrolling
            if (scrollDifference > scrollThreshold && !isOnCooldown) {
                const scrollingDown = currentScrollY > lastScrollPosition;
                
                if (scrollingDown) {
                    if (currentLineIndex < contentLines.length - 1) {
                        highlightLine(currentLineIndex + 1);
                    }
                } else {
                    if (currentLineIndex > -1) {
                        highlightLine(currentLineIndex - 1);
                    }
                }
                
                lastScrollPosition = currentScrollY;
            }
        }
    });
    
    // Handle touch events for mobile
    let touchStartY = 0;
    let touchAccumulator = 0;
    const touchThreshold = 80; // Larger threshold for touch to require deliberate swipes
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
        touchAccumulator = 0; // Reset accumulator on new touch
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        if (!highlightingComplete) {
            const touchY = e.touches[0].clientY;
            const touchDiff = touchStartY - touchY;
            
            // Accumulate touch movement
            touchAccumulator += touchDiff;
            
            if (Math.abs(touchAccumulator) > touchThreshold && !isOnCooldown) {
                if (touchAccumulator > 0) { // Scrolling down
                    if (currentLineIndex < contentLines.length - 1) {
                        highlightLine(currentLineIndex + 1);
                    }
                } else { // Scrolling up
                    if (currentLineIndex > -1) {
                        highlightLine(currentLineIndex - 1);
                    }
                }
                
                // Reset after triggering highlight
                touchAccumulator = 0;
                touchStartY = touchY;
                e.preventDefault();
            }
        }
    }, { passive: false });
    
    // Enable the scroll indicator click to highlight all lines
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
        if (highlightingComplete) {
            document.getElementById('one').scrollIntoView({ behavior: 'smooth' });
        } else {
            // Highlight all lines when clicked with longer delays between highlights
            contentLines.forEach((line, index) => {
                setTimeout(() => {
                    // Skip the cooldown for the auto-highlight sequence
                    isOnCooldown = false;
                    highlightLine(index);
                }, index * 600); // Increased delay between highlights
            });
        }
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (!highlightingComplete && !isOnCooldown) {
            if (e.key === 'ArrowDown' || e.key === 'Space') {
                e.preventDefault();
                if (currentLineIndex < contentLines.length - 1) {
                    highlightLine(currentLineIndex + 1);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentLineIndex > -1) {
                    highlightLine(currentLineIndex - 1);
                }
            }
        }
    });
    
    // Start with the first line highlighted after a delay
    setTimeout(() => {
        highlightLine(0);
    }, 1500); // Wait for initial animations to complete
}); 