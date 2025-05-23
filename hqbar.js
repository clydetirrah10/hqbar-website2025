//Simple mobile menu toggle(placeholder for future features)
document.addEventListener('DOMContentLoaded',() => {
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
        }
    });
    // script.js - Basic interactivity and enhancements

document.addEventListener("DOMContentLoaded", () => { const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("fade-in"); } }); }, { threshold: 0.1, });
    
    sections.forEach(section => { observer.observe(section); }); });
    
    // Add fade-in animation via class
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 1s ease, transform 1s ease;
        }
        section {
            opacity: 0;
            transform: translateY(50px);
        }
    `;
    document.head.appendChild(style);
    // script.js - Interactivity with gallery and social media

document.addEventListener("DOMContentLoaded", () => { const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("fade-in"); } }); }, { threshold: 0.1, });
    
    sections.forEach(section => { observer.observe(section); });
    
    // Sample gallery interaction (click to enlarge)
    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.className = "image-overlay";
            overlay.innerHTML = `<img src="${image.src}" alt="Expanded" /><span class="close-btn">&times;</span>`;
            document.body.appendChild(overlay);

            overlay.querySelector(".close-btn").addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });
    
    const style = document.createElement('style'); style.innerHTML = ` .fade-in { opacity: 1; transform: translateY(0); transition: opacity 1s ease, transform 1s ease; }
    
    section { opacity: 0; transform: translateY(50px); }
    
    .image-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    
    .image-overlay img { max-width: 90%; max-height: 80vh; border: 4px solid #f1c40f; border-radius: 10px; }
    
        .close-btn { position: absolute; top: 20px; right: 30px; font-size: 3rem; color: #fff; cursor: pointer; } `;
        document.head.appendChild(style);
    });
    // script.js - Interactivity with gallery and social media

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sample gallery interaction (click to enlarge)
    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.className = "image-overlay";
            overlay.innerHTML = `
                <img src="${image.src}" alt="Expanded" />
                <span class="close-btn">&times;</span>
            `;
            document.body.appendChild(overlay);

            overlay.querySelector(".close-btn").addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });

    // Social media buttons open links
    document.getElementById("instagram-btn").addEventListener("click", () => {
        window.open("https://instagram.com", "_blank"); // Replace with actual link
    });

    document.getElementById("twitter-btn").addEventListener("click", () => {
        window.open("https://twitter.com", "_blank"); // Replace with actual link
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 1s ease, transform 1s ease;
        }

        section {
            opacity: 0;
            transform: translateY(50px);
        }

        .image-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .image-overlay img {
            max-width: 90%;
            max-height: 80vh;
            border: 4px solid #f1c40f;
            border-radius: 10px;
        }

        .close-btn {
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 3rem;
            color: #fff;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
// Smooth scroll for nav links
document.querySelectorAll('nav ul.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 150; // offset for header height

  document.querySelectorAll('nav ul.nav-links a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section &&
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupPrice = document.getElementById('popup-price');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.getElementById('close-popup');
const orderBtn = document.getElementById('order-button');
const mpesaInfo = document.getElementById('mpesa-info');
const copyBtn = document.getElementById('copy-till');

// Add click event to close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  if (mpesaInfo) mpesaInfo.style.display = 'none'; // hide M-Pesa info when popup closes
});

// Close popup if clicking outside content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    if (mpesaInfo) mpesaInfo.style.display = 'none';
  }
});

// Attach click events to menu items
document.querySelectorAll('.menu-item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    // Get dish name and price from clicked item
    const dishName = item.childNodes[0].nodeValue.trim();
    const price = item.querySelector('span').textContent;

    // Set popup content
    popupTitle.textContent = dishName;
    popupPrice.textContent = price;
    popupDesc.textContent = `Delicious ${dishName.toLowerCase()} prepared fresh at HQ Bar & Restaurant. Would you like to purchase?`;

    if (mpesaInfo) mpesaInfo.style.display = 'none'; // hide M-Pesa info initially

    // Show popup
    popup.style.display = 'flex';
    orderBtn.style.display = 'inline-block';
  });
});

// Order button action
orderBtn.addEventListener('click', () => {
  // Show the M-Pesa till info and hide the order button
  if (mpesaInfo) mpesaInfo.style.display = 'block';
  orderBtn.style.display = 'none';
});

// Copy M-Pesa till number to clipboard
copyBtn.addEventListener('click', () => {
  const tillNumber = '705787';
  navigator.clipboard.writeText(tillNumber).then(() => {
    alert('Till number copied to clipboard!');
  }).catch(() => {
    alert('Failed to copy. Please copy manually.');
  });
});