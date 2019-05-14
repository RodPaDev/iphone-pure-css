const container = document.querySelector('.container')

function createPhone(parent, lion, rotate, depth, move) {
    const frame = document.createElement("div");
    const screen = document.createElement("div");
    const notchSection = document.createElement("div");
    const notch = document.createElement("div");
    const speaker = document.createElement("div");
    const camera = document.createElement("div");

    frame.classList.add("frame");
    screen.classList.add("screen");
    notchSection.classList.add('notch-section');
    notch.classList.add('notch');
    speaker.classList.add("speaker");
    camera.classList.add("camera");

    frame.style.transform = `rotate(${rotate}deg) translateY(${move}px)`;
    frame.style.zIndex = depth;
    screen.style.backgroundImage = `url("${lion}")`;

    parent.appendChild(frame);
    frame.append(screen);
    screen.append(notchSection);
    notchSection.append(notch);
    notch.append(speaker);
    notch.append(camera);
}

const lion = "http://cdn.24.co.za/files/Cms/General/d/8439/fe2bd3548bb44867b2534a083d8d6849.jpg"
const mountain = "https://i.pinimg.com/originals/c2/47/e9/c247e913a0214313045a8a5c39f8522b.jpg"
const snake = "https://images.wallpaperscraft.com/image/snake_reptile_wildlife_114252_168x300.jpg"

createPhone(container, lion, -20, 0, 0);
createPhone(container, mountain, 0, 1, -50);
createPhone(container, snake, 20, 0, 0);