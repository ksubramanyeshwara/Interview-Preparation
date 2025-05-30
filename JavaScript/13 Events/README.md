# Events

Event is a signal that something has happened. That something can be,

- User Interaction
  - Clicking a mouse button
  - Pressing a key on the keyboard
  - Moving the mouse
  - Submitting a form
  - Selecting text
  - Scrolling
  - Touching a screen
- Browser/Document Changes
  - Page loading finished
  - Image failed to load
  - Window resized
  - Element added or removed from the DOM
- API Responses
  - Fetching data from an API
  - Making a network request

Events are actions that a user or system can trigger, and Events are responsible for listening and responding to these actions.

## Event Object

Event handling is a process of listening to events and responding to them. It involves three main steps parts:

1. event.target: The element(or window, document) that triggered the event.
2. event.type: The name of the event you want to listen for (e.g., 'click', 'mouseover', 'keydown').
3. event.currentTarget: The element to which the event handler is attached.
4. event.preventDefault(): Prevents the default behavior of the event.
5. event.stopPropagation(): Prevents the event from bubbling up or capturing down the DOM tree. It prevents parent or child element to receive the event.
6. event.key: For mouse/keyboard events indicates which key was pressed.
7. event.clientX, event.clientY (mouse events):The coordinates of the mouse pointer relative to the viewport when the event occurred.

**Event Handler**: The function that handles the event. Function that will be executed when the event occurs. It can be attached several ways, but the most preferred way is to use the `addEventListener()` method.

```JS
const myButton = document.querySelector('#myButton');

function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event target:', event.target); // The element that triggered the event
  console.log('Event type:', event.type); // The type of the event
  console.log('Current target:', event.currentTarget); // The element to which the handler is attached
  // Prevent default behavior if needed
  event.preventDefault();
  // Stop event propagation if needed
  event.stopPropagation();
}

myButton.addEventListener('click', handleClick);
```

> To remove a specific handler: myButton.removeEventListener('click', handleClick);

## Event Propagation

Order in which elements receive events is called event propagation.

If elements are nested, when an event occurs on an nested element, the event travels through the DOM tree

> If there's only one HTML element on your page, then the concept of event propagation doesn't apply.

### There are three phases of event propagation:

**When you use the method addEventListener(eventType, handler) or addEventListener(eventType, handler, false), the event listener is registered for the bubbling phase by default.**

1. Capturing Phase:
   - The event starts at the `window` object and travels down through the DOM tree toward the target element.
2. Target Phase:
   - The event reaches the target element and is triggered on the target element.
3. Bubbling Phase:
   - After the target phase, the event bubbles back up from the target element to the `window`.

**If you want to start the event from the top and end at the bottom, Use `addEventListener(eventType, handler, true)` method.**

> The three-phase event propagation (Capture -> Target -> Bubble) is a fundamental mechanism and always occurs in this order (unless stopped).

> The third argument to addEventListener (true or false) determines whether your listener function is invoked during the capturing phase or the bubbling phase.

### Events that don't bubble

1. Focus
2. blur
3. mousenter
4. mouseleave
5. load
6. unload
7. scroll

## event.target vs event.currentTarget vs this.target

- `event.target`: The element that initiated the event.
- `event.currentTarget`: The element on which the event listener is currently invoked/attached.
- `this.target`: The element that triggered the event. Same as `event.currentTarget`

### How to stop event capturing or bubbling?

- event.stopPropagation(): Prevents the event from bubbling up or capturing down the DOM tree. It prevents parent or child element to receive the event.
- event.preventDefault(): Prevents the default behavior of the event.

## Event Delegation

Attaching a single event listener to a parent element instead of attaching seperate event listeners to child elements. It uses the event bubbling phase to catch events from child elements.
