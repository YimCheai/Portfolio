const content = "Hello, I’m Cheaiy!";
const text = document.querySelector(".title h1");
let textIdx = 0;

function typing() {
    if (textIdx < content.length) {
        text.innerHTML += content[textIdx++];
    } else {
        text.textContent = ""; // 리셋 효과
        textIdx = 0;
    }
}

setInterval(typing, 200); // 타이핑 속도 조정
