export const addEventListeners = (
    element: Window | Document | HTMLElement,
    events: string[],
    handler: EventListener
): void => {
    events.forEach(event => element.addEventListener(event, handler));
};

export const removeEventListeners = (
    element: Window | Document | HTMLElement,
    events: string[],
    handler: EventListener
): void => {
    events.forEach(event => element.removeEventListener(event, handler));
};