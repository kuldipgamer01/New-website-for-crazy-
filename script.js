// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Stats counter (for subscribers)
window.onload = function() {
    const subscriberCount = document.createElement('p');
    subscriberCount.className = 'section-title';
    subscriberCount.innerText = 'Subscribers: 0';
    document.querySelector('.content').prepend(subscriberCount);

    let count = 0;
    const target = 200000;
    const speed = 50;
    const counter = setInterval(() => {
        if (count >= target) {
            clearInterval(counter);
            subscriberCount.innerText = `Subscribers: ${target}+`;
        } else {
            count += 1000;
            subscriberCount.innerText = `Subscribers: ${count}`;
        }
    }, speed);
};

// Initialize Swiper for video carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

// Background music toggle
const music = document.createElement('audio');
music.id = 'bg-music';
music.loop = true;
music.innerHTML = '<source src="https://www.mfiles.co.uk/mp3-downloads/ehren-matthes-calm-guitar-1085.mp3" type="audio/mp3">';
document.body.appendChild(music);

const musicToggle = document.createElement('button');
musicToggle.innerText = 'Music: Off';
musicToggle.style.position = 'fixed';
musicToggle.style.bottom = '20px';
musicToggle.style.right = '20px';
musicToggle.style.background = '#00ffcc';
musicToggle.style.padding = '10px';
musicToggle.style.borderRadius = '5px';
musicToggle.style.cursor = 'pointer';
musicToggle.style.color = '#0d1b2a';
musicToggle.style.fontFamily = 'Roboto, sans-serif';
musicToggle.style.fontWeight = '700';
document.body.appendChild(musicToggle);

let isPlaying = false;
musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        this.innerText = 'Music: Off';
    } else {
        music.play();
        isPlaying = true;
        this.innerText = 'Music: On';
    }
});

// Dark mode toggle
const themeToggle = document.createElement('button');
themeToggle.innerText = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.background = '#00ffcc';
themeToggle.style.padding = '10px';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.color = '#0d1b2a';
themeToggle.style.fontFamily = 'Roboto, sans-serif';
themeToggle.style.fontWeight = '700';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

// Newsletter form submission (using Formspree as an example)
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://formspree.io/f/your-formspree-id', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for subscribing!');
            this.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    }).catch(error => {
        alert('Error: ' + error.message);
    });
});