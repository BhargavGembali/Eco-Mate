const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach((el) => {
        let speedx = parseFloat(el.dataset.speedx);
        let speedy = parseFloat(el.dataset.speedy);
        let speedz = parseFloat(el.dataset.speedz);
        let rotateSpeed = parseFloat(el.dataset.rotation);

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))
        rotateY(${rotateDegree * rotateSpeed}deg)
        perspective(2300px)
        translateZ(${zValue * speedz}px)`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);
});

const menu_btn= document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to your navigation links
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            var href = this.getAttribute('href');

            // Fade out the current page
            document.body.style.opacity = 0;

            // After a short delay, navigate to the new page
            setTimeout(function() {
                window.location.href = href;
            }, 500); // 500 milliseconds, which is the duration of the transition
        });
    });
});
