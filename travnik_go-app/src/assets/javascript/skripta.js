export function changeClassNameOnScroll(elementId, scrollAmount, newClassName) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error("Element with ID " + elementId + " not found.");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY >= scrollAmount) {
            element.classList.add(newClassName);
        } else {
            element.classList.remove(newClassName);
        }
    });
}

// Usage example:
// Call the function with the element ID, scroll amount, and new class name
