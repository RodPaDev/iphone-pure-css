const container = document.querySelector('.container')

function createPhone(parent) {
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

    parent.appendChild(frame);
    frame.append(screen);
    screen.append(notchSection);
    notchSection.append(notch);
    notch.append(speaker);
    notch.append(camera);
}

createPhone(container);