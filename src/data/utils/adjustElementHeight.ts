
function adjustElementHeight(element: HTMLElement) {
    element.style.height = 'auto';  // Reset the height to auto to recalculate it correctly
    element.style.height = `${element.scrollHeight}px`;  // Set the new height
}

export {
    adjustElementHeight
}