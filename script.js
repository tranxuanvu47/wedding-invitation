// ===== Configuration =====
const WEDDING_DATE = new Date("2026-03-08T17:00:00+07:00"); // March 8, 2026, 5:00 PM Vietnam time
const TOTAL_IMAGES = 32;
const GALLERY_PATH = "images/";

// Google Sheets Web App URL - Paste your URL here after deployment
// Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbza8HK44EVeOtv2Ro-QxuNyKHdUfWJ4Y7JNPkYcZFHpBuqoF610oB7IzWZswLpEflD0/exec"; // TODO: Paste URL from Google Apps Script deployment

// Wedding photo filenames
const imageFiles = [
  "LONG8785.jpg",
  "LONG8819.jpg",
  "LONG8830.jpg",
  "LONG8858.jpg",
  "LONG8877.jpg",
  "LONG8887.jpg",
  "LONG8896.jpg",
  "LONG8931.jpg",
  "LONG8979.jpg",
  "LONG9017.jpg",
  "LONG9029.jpg",
  "LONG9047.jpg",
  "LONG9081.jpg",
  "LONG9087.jpg",
  "LONG9093.jpg",
  "LONG9142.jpg",
  "LONG9171.jpg",
  "LONG9215.jpg",
  "LONG9228.jpg",
  "LONG9230.jpg",
  "LONG9234.jpg",
  "LONG9245.jpg",
  "LONG9255.jpg",
  "LONG9263.jpg",
  "LONG9303.jpg",
  "LONG9341.jpg",
  "LONG9349.jpg",
  "LONG9352.jpg",
  "LONG9357.jpg",
  "LONG9362.jpg",
  "LONG9374.jpg",
  "LONG9410.jpg",
];

// ===== Translations =====
const translations = {
  vi: {
    saveTheDate: "Save The Date",
    coupleNames:
      '<span class="groom-name">Xuân Vũ</span><span class="ampersand">&</span><span class="bride-name">Như Hảo</span>',
    weddingDay: "Chủ Nhật",
    weddingMonth: "Tháng 3, 2026",
    ceremonyTitle: "Lễ Vows",
    venueName: "LaAn Garden",
    invitationText: "Kính mời",
    btnCountdown: "Đếm Ngược",
    btnLocation: "Xem Địa Điểm",
    btnRSVP: "Xác Nhận Tham Dự",
    btnWishes: "Gửi Lời Chúc",
    countdownTitle: "🎉 Hôm nay chúng mình cưới nhau rồi! 🎉",
    countdownSubtitle: "Khoảnh khắc mà chúng mình đã chờ đợi đã đến!",
    labelDays: "Ngày",
    labelHours: "Giờ",
    labelMinutes: "Phút",
    labelSeconds: "Giây",
    loveQuote: "💕 Today is the beginning of forever! 💕",
    introTitle: "Giới thiệu",
    groomName: "Xuân Vũ",
    groomRole: "Chú rể",
    groomQuote: "Anh hứa sẽ luôn bên em, yêu thương và che chở em trọn đời.",
    brideName: "Như Hảo",
    brideRole: "Cô dâu",
    brideQuote:
      "Tình yêu của em dành cho anh, như ánh sáng mặt trời, luôn tỏa sáng và ấm áp.",
    introFooterQuote:
      "We may not have it all together, but together, we have it all.",
    timelineTitle: "Lịch Trình Đám Cưới",
    timelineSubtitle:
      "Hành trình lịch và tháng gìa cùng chúng mình trong những khoảnh khắc đặc biệt này",
    galleryTitle: "Ảnh Cưới Của Chúng Mình",
    locationTitle: "Địa Điểm Tổ Chức",
    locationSubtitle:
      "Hãy tham gia cùng chúng mình tại đây trong ngày đặc biệt này",
    venueSubtitle:
      "Hãy tham gia cùng chúng mình tại đây trong ngày đặc biệt này",
    addressLabel: "Địa Chỉ",
    scheduleLabel: "Lịch Trình",
    ceremonyTime: "Lễ Vows: 17:00 PM\nTiệc: 18:00 PM",
    btnDirection: "Chỉ Đường",
    wishesTitle: "Lời Chúc",
    wishesSubtitle:
      "Chia sẻ tình cảm và những lời chúc tốt đẹp nhất cho chúng mình",
    wishesFormTitle: "💕 Chia Sẻ Lời Chúc",
    wishNamePlaceholder: "Tên Của Bạn",
    wishMessagePlaceholder: "Lời Chúc Của Bạn",
    btnSendWish: "Gửi Lời Chúc",
    wishesListTitle: "Lời Chúc Từ Mọi Người",
    thankYouTitle: "Thank You!",
    thankYouText1:
      "Cảm ơn bạn đã dành thời gian quý báu tham dự và chia sẻ niềm vui cùng với chúng mình trong ngày đặc biệt này!",
    thankYouText2:
      "Chúng mình biết ai cũng rất bận rộn với công việc, cuộc sống và những lo toan riêng. Vậy nên, sẽ rất tuyệt vời nếu như bạn có thể dành thời gian cho chúng mình. Hạnh Phúc của chúng mình có thêm một đóng góp nhỏ của bạn, cùng chung ý kiến, cùng cười và cùng lưu giữ những khoảnh khắc đáng nhớ.",
    thankYouSignature: "Một lần nữa, chân thành cảm ơn bạn 💕",
    thankYouTextEn1:
      "Thank you for taking the time to share in our special day!",
    thankYouTextEn2:
      "We know everyone is busy with work, life, and family commitments. But it would truly be wonderful to have you present on our Happy Day. We really hope you can join us on this important day to witness and share this happiness with us.",
    thankYouSignatureEn: "Once again, sincerely thank you 💕",
    thankYouFooter: '"The best is yet to come"',
    rsvpTitle: "Xác Nhận Tham Dự",
    rsvpSubtitle:
      "Hy vọng sẽ được đón tiếp bạn – vui lòng cho chúng tôi biết nếu bạn có thể tham dự nhé",
    labelName: "Tên của bạn",
    labelAttendance: "Bạn có tham dự không?",
    optionYes: "✨ Có, tôi sẽ có mặt!",
    optionNo: "💔 Xin lỗi, tôi không thể tham dự",
    labelGuests: "Số lượng khách",
    labelPhone: "Số điện thoại",
    labelMessage: "Message & Wishes",
    btnSubmit: "Gửi xác nhận",
    footerText: "Cảm ơn bạn đã là một phần trong ngày đặc biệt của chúng tôi",
    formSuccess: "Cảm ơn bạn đã xác nhận! Chúng tôi rất mong được gặp bạn.",
    formError:
      "Đã có lỗi xảy ra. Vui lòng thử lại hoặc báo cho CR, CR sẽ giải quyết trong vòng 1 nốt nhạc.",
    wishSuccess: "Cảm ơn bạn đã gửi lời chúc! 💕",
    dateTimeRow: "17:00, Chủ Nhật, 08 Tháng 3, 2026",
  },
  en: {
    saveTheDate: "Save The Date",
    coupleNames:
      '<span class="bride-name">Xuân Vũ</span><span class="ampersand">&</span><span class="groom-name">Như Hảo</span>',
    weddingDay: "Sunday",
    weddingMonth: "March, 2026",
    ceremonyTitle: "Wedding Vows",
    venueName: "LaAn Garden",
    invitationText: "Cordially Invites",
    btnCountdown: "Countdown",
    btnLocation: "View Location",
    btnRSVP: "RSVP",
    btnWishes: "Send Wishes",
    countdownTitle: "🎉 Today is our wedding day! 🎉",
    countdownSubtitle: "The moment we've been waiting for has arrived!",
    labelDays: "Days",
    labelHours: "Hours",
    labelMinutes: "Minutes",
    labelSeconds: "Seconds",
    loveQuote: "💕 Today is the beginning of forever! 💕",
    introTitle: "Introduction",
    groomName: "Xuân Vũ",
    groomRole: "Groom",
    groomQuote:
      "I promise to always be by your side, loving and protecting you forever.",
    brideName: "Như Hảo",
    brideRole: "Bride",
    brideQuote: "My love for you is like the sunshine, always bright and warm.",
    introFooterQuote:
      "We may not have it all together, but together, we have it all.",
    timelineTitle: "Wedding Timeline",
    timelineSubtitle: "Join us in celebrating these special moments",
    galleryTitle: "Our Wedding Photos",
    locationTitle: "Venue Location",
    locationSubtitle: "Join us at this special place on our big day",
    venueSubtitle: "Join us at this special place on our big day",
    addressLabel: "Address",
    scheduleLabel: "Schedule",
    ceremonyTime: "Wedding Vows: 5:00 PM\nReception: 6:00 PM",
    btnDirection: "Get Directions",
    wishesTitle: "Wishes",
    wishesSubtitle: "Share your love and best wishes with us",
    wishesFormTitle: "💕 Share Your Wishes",
    wishNamePlaceholder: "Your Name",
    wishMessagePlaceholder: "Your Wishes",
    btnSendWish: "Send Wishes",
    wishesListTitle: "Wishes From Everyone",
    thankYouTitle: "Thank You!",
    thankYouText1: "Thank you for taking the time to share in our special day!",
    thankYouText2:
      "We know everyone is busy with work, life, and family commitments. But it would truly be wonderful to have you present on our Happy Day. We really hope you can join us on this important day to witness and share this happiness with us.",
    thankYouSignature: "Once again, sincerely thank you 💕",
    thankYouTextEn1:
      "Thank you for taking the time to share in our special day!",
    thankYouTextEn2:
      "We know everyone is busy with work, life, and family commitments. But it would truly be wonderful to have you present on our Happy Day. We really hope you can join us on this important day to witness and share this happiness with us.",
    thankYouSignatureEn: "Once again, sincerely thank you 💕",
    thankYouTextEn2:
      "We know everyone is busy with work, life, and family commitments. But it would truly be wonderful to have you present on our Happy Day. We really hope you can join us on this important day to witness and share this happiness with us.",
    thankYouSignatureEn: "Once again, sincerely thank you 💕",
    thankYouFooter: '"The best is yet to come"',
    rsvpTitle: "RSVP",
    rsvpSubtitle:
      "We hope to celebrate with you — please let us know if you’ll be able to join us",
    labelName: "Your Name",
    labelAttendance: "Will you attend?",
    optionYes: "✨ Yes, I will attend!",
    optionNo: "💔 No, I cannot attend",
    labelGuests: "Number of Guests",
    labelPhone: "Phone Number",
    labelMessage: "Message & Wishes",
    btnSubmit: "Send RSVP",
    footerText: "Thank you for being part of our special day",
    formSuccess: "Thank you for your RSVP! We look forward to seeing you.",
    formError: "An error occurred. Please try again.",
    wishSuccess: "Thank you for your wishes! 💕",
    dateTimeRow: "5:00 PM, Sunday, March 8, 2026",
  },
};

// ===== State =====
let currentLang = localStorage.getItem("language") || "vi";
let currentImageIndex = 0;

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  initThiepCover();
  initLanguage();
  initGuestName();
  initCountdown();
  init3PhotoGallery();
  initLightbox();
  initWishesForm();
  initRSVPForm();
  initScrollReveal();
  initFallingHearts();
  initFloatingChibi();
  initFAB();
});

// ===== Thiepopen Cover =====
function initThiepCover() {
  const cover = document.getElementById("thiepCover");
  if (!cover) return;

  // Lock scroll
  document.body.classList.add("cover-active");

  // After delay, open the cover
  setTimeout(() => {
    cover.classList.add("open");

    // Spawn falling roses & hearts
    spawnCoverPetals();

    // After the opacity fade-out completes, hide completely and unlock scroll
    cover.addEventListener("transitionend", function handler(e) {
      if (e.target === cover && e.propertyName === "opacity") {
        cover.classList.add("done");
        document.body.classList.remove("cover-active");
        cover.removeEventListener("transitionend", handler);
      }
    });
  }, 1200);
}

function spawnCoverPetals() {
  const emojis = ['🌹', '💕', '🩷', '🌸', '💗', '🪻', '❤️', '🌷'];
  const count = 40;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'cover-petal';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random horizontal position
    el.style.left = Math.random() * 100 + 'vw';
    // Start above the viewport at random heights
    el.style.top = -(Math.random() * 20 + 5) + '%';
    // Random size
    const size = Math.random() * 20 + 14;
    el.style.fontSize = size + 'px';
    // Random animation duration & delay
    const duration = Math.random() * 2.5 + 2.5;
    const delay = Math.random() * 1.5;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';

    document.body.appendChild(el);

    // Remove after animation ends
    setTimeout(() => {
      el.remove();
    }, (duration + delay) * 1000 + 500);
  }
}

function initFAB() {
  const fabPhone = document.getElementById("fabPhone");
  const fabSubmenu = document.getElementById("fabSubmenu");
  if (!fabPhone || !fabSubmenu) return;

  fabPhone.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = fabSubmenu.classList.contains("open");
    if (isOpen) {
      fabSubmenu.classList.remove("open");
      fabPhone.classList.remove("active");
    } else {
      fabSubmenu.classList.add("open");
      fabPhone.classList.add("active");
    }
  });

  // Close submenu when clicking outside
  document.addEventListener("click", () => {
    fabSubmenu.classList.remove("open");
    fabPhone.classList.remove("active");
  });
}

function initLanguage() {
  updateLanguage(currentLang);

  const desktopToggle = document.getElementById("languageToggle");
  const mobileToggle = document.getElementById("languageToggleMobile");

  if (desktopToggle) desktopToggle.addEventListener("click", toggleLanguage);
  if (mobileToggle) mobileToggle.addEventListener("click", toggleLanguage);

  // Close Bootstrap navbar when a link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    });
  });
}

function toggleLanguage() {
  currentLang = currentLang === "vi" ? "en" : "vi";
  localStorage.setItem("language", currentLang);
  updateLanguage(currentLang);
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      if (key === "coupleNames") {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll(
    "[data-translate-placeholder]",
  );
  placeholderElements.forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const toggleBtn = document.getElementById("currentLang");
  toggleBtn.textContent = lang === "vi" ? "English" : "Tiếng Việt";
  document.documentElement.lang = lang;

  // Update wishes count
  updateWishesCount();
}

// ===== Guest Name from URL =====
function initGuestName() {
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get("guest");

  const guestNameDisplay = document.getElementById("guestNameDisplay");
  const rsvpNameInput = document.getElementById("guestName");

  if (guest) {
    const decoded = decodeURIComponent(guest).trim();
    if (guestNameDisplay) {
      guestNameDisplay.textContent = decoded;
    }
    if (rsvpNameInput) {
      rsvpNameInput.value = decoded;
    }
  } else {
    if (guestNameDisplay) {
      guestNameDisplay.textContent =
        currentLang === "vi" ? "Quý khách" : "Dear Guest";
    }
  }
}

// ===== Countdown Timer =====
function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = WEDDING_DATE.getTime() - now;

  if (distance < 0) {
    // Wedding day has passed
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

// ===== 3-Photo Gallery =====
function init3PhotoGallery() {
  updateGallery3Photos();

  let autoplayInterval;

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
      updateGallery3Photos();
    }, 3000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    stopAutoplay();
    currentImageIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
    updateGallery3Photos();
    startAutoplay();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    stopAutoplay();
    currentImageIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
    updateGallery3Photos();
    startAutoplay();
  });

  // Click to open lightbox
  document.getElementById("leftPhoto").addEventListener("click", () => {
    stopAutoplay(); // Stop when viewing lightbox
    const leftIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
    openLightbox(leftIndex);
  });

  document.getElementById("centerPhoto").addEventListener("click", () => {
    stopAutoplay(); // Stop when viewing lightbox
    openLightbox(currentImageIndex);
  });

  document.getElementById("rightPhoto").addEventListener("click", () => {
    stopAutoplay(); // Stop when viewing lightbox
    const rightIndex = (currentImageIndex + 1) % TOTAL_IMAGES;
    openLightbox(rightIndex);
  });

  // Start auto-play
  startAutoplay();
}

function updateGallery3Photos() {
  const images = document.querySelectorAll(".gallery-3photos img");

  // Add fade-out class to start transition
  images.forEach((img) => img.classList.add("fade-out"));

  // Wait for opacity transition (300ms) then swap source
  setTimeout(() => {
    const leftIndex = (currentImageIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
    const rightIndex = (currentImageIndex + 1) % TOTAL_IMAGES;

    const leftImg = document.querySelector("#leftPhoto img");
    const centerImg = document.querySelector("#centerPhoto img");
    const rightImg = document.querySelector("#rightPhoto img");

    if (leftImg) leftImg.src = `${GALLERY_PATH}${imageFiles[leftIndex]}`;
    if (centerImg)
      centerImg.src = `${GALLERY_PATH}${imageFiles[currentImageIndex]}`;
    if (rightImg) rightImg.src = `${GALLERY_PATH}${imageFiles[rightIndex]}`;

    // Remove fade-out class to fade back in
    images.forEach((img) => img.classList.remove("fade-out"));
  }, 300);
}

// ===== Lightbox =====
function initLightbox() {
  document.getElementById("lightboxPrev").addEventListener("click", (e) => {
    e.stopPropagation();
    changeLightboxImage(-1);
  });

  document.getElementById("lightboxNext").addEventListener("click", (e) => {
    e.stopPropagation();
    changeLightboxImage(1);
  });

  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") changeLightboxImage(-1);
    if (e.key === "ArrowRight") changeLightboxImage(1);
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");

  img.src = `${GALLERY_PATH}${imageFiles[index]}`;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function changeLightboxImage(direction) {
  currentImageIndex =
    (currentImageIndex + direction + TOTAL_IMAGES) % TOTAL_IMAGES;

  const img = document.getElementById("lightboxImage");
  img.src = `${GALLERY_PATH}${imageFiles[currentImageIndex]}`;

  // Update gallery too
  updateGallery3Photos();
}

// ===== Wishes Form =====
function initWishesForm() {
  const form = document.getElementById("wishesForm");
  if (form) {
    form.addEventListener("submit", handleWishSubmit);
  }
  loadWishes();
}

function handleWishSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("wishName").value.trim();
  const message = document.getElementById("wishMessage").value.trim();

  if (!name || !message) return;

  const wish = {
    type: "wish",
    name: name,
    message: message,
    timestamp: new Date().toISOString(),
  };

  // Show loading
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span style="opacity: 0.7">⏳ Đang gửi...</span>';

  // Save to localStorage (fallback)
  const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");
  wishes.unshift(wish);
  localStorage.setItem("wishes", JSON.stringify(wishes));

  // Send to Google Sheets
  if (GOOGLE_SHEETS_URL) {
    fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    })
      .then(() => {
        console.log("Wish sent to Google Sheets");
        showWishMessage(
          "success",
          translations[currentLang].wishSuccess ||
            "Cảm ơn bạn đã gửi lời chúc! 💕",
        );
      })
      .catch((error) => {
        console.error("Error sending to Google Sheets:", error);
        showWishMessage(
          "error",
          translations[currentLang].formError ||
            "Đã có lỗi xảy ra. Vui lòng thử lại hoặc báo cho CR, CR sẽ giải quyết trong vòng 1 nốt nhạc.",
        );
      })
      .finally(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
  } else {
    // No Google Sheets URL, just show success
    showWishMessage(
      "success",
      translations[currentLang].wishSuccess || "Lời chúc đã được lưu! 💕",
    );
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }

  // Reset form
  e.target.reset();

  // Reload wishes from Sheets after a short delay (POST is no-cors, give Sheets time to save)
  setTimeout(() => loadWishes(), 2000);
}

function showWishMessage(type, text) {
  // Create or get message element
  let messageEl = document.getElementById("wishFormMessage");
  if (!messageEl) {
    messageEl = document.createElement("div");
    messageEl.id = "wishFormMessage";
    messageEl.style.cssText =
      "margin-top: 15px; padding: 15px; border-radius: 8px; text-align: center; font-weight: 500;";
    document.querySelector(".wishes-form").appendChild(messageEl);
  }

  if (type === "success") {
    messageEl.style.background = "#d4edda";
    messageEl.style.color = "#155724";
    messageEl.textContent = text;
  } else {
    messageEl.style.background = "#f8d7da";
    messageEl.style.color = "#721c24";
    messageEl.textContent = text;
  }

  messageEl.style.display = "block";

  // Hide after 5 seconds
  setTimeout(() => {
    messageEl.style.display = "none";
  }, 5000);
}

function loadWishes() {
  const wishesItems = document.getElementById("wishesItems");
  if (!wishesItems) return;

  // Show loading state
  wishesItems.innerHTML =
    '<p style="text-align:center;color:var(--text-light);padding:40px;">⏳ Đang tải lời chúc...</p>';

  if (GOOGLE_SHEETS_URL) {
    fetch(`${GOOGLE_SHEETS_URL}?type=wishes`)
      .then((res) => res.json())
      .then((data) => {
        const wishes = Array.isArray(data) ? data : data.wishes || [];
        renderWishes(wishes);
        updateWishesCount(wishes.length);
      })
      .catch(() => {
        // Fallback to localStorage
        const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");
        renderWishes(wishes);
        updateWishesCount(wishes.length);
      });
  } else {
    const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");
    renderWishes(wishes);
    updateWishesCount(wishes.length);
  }
}

function renderWishes(wishes) {
  const wishesItems = document.getElementById("wishesItems");
  if (!wishesItems) return;

  if (wishes.length === 0) {
    wishesItems.innerHTML =
      '<p style="text-align:center;color:var(--text-light);padding:40px;">Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>';
    return;
  }

  wishesItems.innerHTML = wishes
    .map((wish) => {
      const date = new Date(wish.timestamp);
      const dateStr = isNaN(date)
        ? ""
        : date.toLocaleDateString(currentLang === "vi" ? "vi-VN" : "en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
      return `
            <div class="wish-item">
                <div class="wish-header">
                    <span class="wish-icon">💕</span>
                    <span class="wish-name">${escapeHtml(wish.name)}</span>
                    <span class="wish-date">${dateStr}</span>
                </div>
                <p class="wish-message">${escapeHtml(wish.message)}</p>
            </div>
        `;
    })
    .join("");
}

function updateWishesCount(count) {
  const titleEl = document.querySelector('[data-translate="wishesListTitle"]');
  if (titleEl) {
    const baseText = translations[currentLang].wishesListTitle;
    if (count === undefined) {
      // fallback: read from localStorage length
      count = JSON.parse(localStorage.getItem("wishes") || "[]").length;
    }
    titleEl.textContent = `${baseText} (${count})`;
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ===== RSVP Form =====
function initRSVPForm() {
  const form = document.getElementById("rsvpForm");
  if (form) {
    form.addEventListener("submit", handleRSVPSubmit);
  }
}

function handleRSVPSubmit(e) {
  e.preventDefault();

  const formData = {
    type: "rsvp",
    name: document.getElementById("guestName")?.value || "",
    attendance:
      document.querySelector('input[name="attendance"]:checked')?.value || "",
    guestCount: document.getElementById("guestCount")?.value || "",
    phone: document.getElementById("phone")?.value || "",
    message: document.getElementById("message")?.value || "",
    timestamp: new Date().toISOString(),
  };

  // Show loading
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span style="opacity: 0.7">⏳ Đang gửi...</span>';

  // Store in localStorage (fallback)
  const rsvps = JSON.parse(localStorage.getItem("rsvps") || "[]");
  rsvps.push(formData);
  localStorage.setItem("rsvps", JSON.stringify(rsvps));

  // Send to Google Sheets
  if (GOOGLE_SHEETS_URL) {
    fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        console.log("RSVP sent to Google Sheets");
        showRSVPMessage("success", translations[currentLang].formSuccess);
      })
      .catch((error) => {
        console.error("Error sending to Google Sheets:", error);
        showRSVPMessage("error", translations[currentLang].formError);
      })
      .finally(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Reset form
        e.target.reset();
      });
  } else {
    // No Google Sheets URL, just show success
    showRSVPMessage("success", translations[currentLang].formSuccess);
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    e.target.reset();
  }

  console.log("RSVP Submitted:", formData);
}

function showRSVPMessage(type, text) {
  const messageEl = document.getElementById("formMessage");
  messageEl.textContent = text;
  messageEl.className = `form-message ${type}`;

  // Hide after 5 seconds
  setTimeout(() => {
    messageEl.className = "form-message";
  }, 5000);
}

// ===== Falling Hearts Animation =====
// ===== Falling Hearts & Fireworks Animation =====
function initFallingHearts() {
  const canvas = document.getElementById("heartsCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const hearts = [];
  const heartCount = 15;
  const fireworks = [];

  class Heart {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 15 + 10;
      this.speed = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.swing = Math.random() * 2 - 1;
    }

    update() {
      this.y += this.speed;
      this.x += Math.sin(this.y / 50) * this.swing;

      if (this.y > canvas.height + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = "#FFB38A";
      ctx.font = `${this.size}px Arial`;
      ctx.fillText("💕", this.x, this.y);
      ctx.restore();
    }
  }

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // Increased size for bigger particles
      this.size = Math.random() * 5 + 4;
      // Increased speed for wider spread
      this.speedX = Math.random() * 10 - 5;
      this.speedY = Math.random() * 10 - 5;
      this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      this.life = 100;
      this.opacity = 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= 1; // Decay
      this.opacity = this.life / 100;
      this.size *= 0.95; // Shrink
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Expose function to create fireworks
  window.createFirework = function (x, y) {
    for (let i = 0; i < 30; i++) {
      fireworks.push(new Particle(x, y));
    }
  };

  // Create hearts
  for (let i = 0; i < heartCount; i++) {
    hearts.push(new Heart());
    hearts[i].y = Math.random() * canvas.height;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw hearts
    hearts.forEach((heart) => {
      heart.update();
      heart.draw();
    });

    // Draw fireworks
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const fw = fireworks[i];
      fw.update();
      fw.draw();
      if (fw.life <= 0) {
        fireworks.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
}

// ===== Utility Functions =====
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Floating Chibi Animation =====
function initFloatingChibi() {
  const chibiImages = [
    "sao_roi_1.png",
    "sao_roi_2.png",
    "sao_roi_3.png",
    "sao_roi_4.png",
    "sao_roi_5.png",
    "sao_roi_6.png",
    "sao_roi_7.png",
  ];

  const container = document.createElement("div");
  container.className = "chibi-container";
  document.body.appendChild(container);

  function createChibi() {
    const img = document.createElement("img");
    const randomImage =
      chibiImages[Math.floor(Math.random() * chibiImages.length)];

    img.src = `images/${randomImage}`;
    img.className = "chibi-item";

    // Random start position (10% to 90%)
    img.style.left = Math.random() * 80 + 10 + "%";
    img.style.top = Math.random() * 80 + 10 + "%";

    // Random size (between 80px and 150px width)
    const size = Math.random() * 70 + 80;
    img.style.width = size + "px";
    img.style.height = "auto"; // Maintain aspect ratio

    // Random movement vector (-200px to +200px)
    const tx = (Math.random() - 0.5) * 400;
    const ty = (Math.random() - 0.5) * 400;

    // Set custom properties for the animation
    img.style.setProperty("--tx", `${tx}px`);
    img.style.setProperty("--ty", `${ty}px`);

    // Duration 10 seconds (User requested)
    const duration = 10;
    img.style.animationDuration = duration + "s";

    // --- Interaction Logic (Drag & Firework) ---
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    let animationStopped = false;
    let driftRafId = null;
    let driftSpeedX = (Math.random() - 0.5) * 1; // Random horizontal drift
    let driftSpeedY = Math.random() * 0.5 + 0.5; // Slow downward drift

    function stopAnimation() {
      if (!animationStopped) {
        const style = window.getComputedStyle(img);

        // Get current 'left' and 'top'
        const rect = img.getBoundingClientRect();

        // Remove animation class/style to stop it moving
        img.style.animation = "none";
        img.style.transform = "none";
        img.style.transition = "none";

        // Position it absolutely where it visibly was
        // Assuming the container is relative to viewport or body.
        // Since 'chibi-container' is appended to body, likely fixed/absolute.
        // We'll use viewport coordinates + scroll if needed, but likely fixed.
        // Let's assume fixed or absolute to document.
        img.style.position = "fixed";
        img.style.left = rect.left + "px";
        img.style.top = rect.top + "px";

        // CRITICAL FIX: Ensure opacity is 1, otherwise it inherits 0 from CSS
        img.style.opacity = "1";

        animationStopped = true;
      }
      if (driftRafId) {
        cancelAnimationFrame(driftRafId);
        driftRafId = null;
      }
    }

    function startDrift() {
      if (isDragging) return;

      let currentLeft = parseFloat(img.style.left);
      let currentTop = parseFloat(img.style.top);

      if (!isNaN(currentLeft) && !isNaN(currentTop)) {
        img.style.left = currentLeft + driftSpeedX + "px";
        img.style.top = currentTop + driftSpeedY + "px";

        // Remove if out of bounds (optional cleanup)
        if (currentTop > window.innerHeight + 100) {
          if (driftRafId) {
            cancelAnimationFrame(driftRafId);
            driftRafId = null;
          }
          img.remove();
          return;
        }
      }

      driftRafId = requestAnimationFrame(startDrift);
    }

    function onStart(e) {
      e.preventDefault(); // Prevent default touch/click behavior
      isDragging = true;

      // Trigger Firework
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;

      if (window.createFirework) {
        window.createFirework(clientX, clientY);
      }

      stopAnimation();

      startX = clientX;
      startY = clientY;
      initialLeft = parseFloat(img.style.left) || 0;
      initialTop = parseFloat(img.style.top) || 0;

      img.style.cursor = "grabbing";

      // Clear the 10s removal timer if interacted, or keep it running?
      // "khoảng 10s rồi mới biến mất" -> Let's respect the 10s total life, or extend it?
      // If user is playing with it, let's extend life or remove the timer?
      // Let's remove the timer so they can play with it indefinitely until it drifts off screen.
      clearTimeout(removalTimer);
    }

    function onMove(e) {
      if (!isDragging) return;

      const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
      const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

      const dx = clientX - startX;
      const dy = clientY - startY;

      img.style.left = `${initialLeft + dx}px`;
      img.style.top = `${initialTop + dy}px`;
    }

    function onEnd() {
      if (isDragging) {
        isDragging = false;
        img.style.cursor = "grab";
        startDrift();
      }
    }

    // Add events
    img.addEventListener("mousedown", onStart);
    img.addEventListener("touchstart", onStart, { passive: false });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });

    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);

    container.appendChild(img);

    // Remove after animation completes (only if not interacted)
    // If user drags it, extend life slightly or remove?
    // Let's just remove based on original timer to keep performance in check,
    // but since 10s is long, maybe clear timeout if dragged?
    // Requirement: "khoảng 10s rồi mới biến mất" (about 10s then disappear).
    // I will stick to 10s timer.

    let removalTimer = setTimeout(() => {
      // If currently dragging, wait a bit? No, just poof.
      if (!isDragging && !animationStopped) {
        if (driftRafId) {
          cancelAnimationFrame(driftRafId);
          driftRafId = null;
        }
        img.remove();
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchend", onEnd);
      }
    }, duration * 1000);
  }

  // Create a new chibi every 15 seconds
  setInterval(createChibi, 15000);

  // Create one immediately
  createChibi();
}
