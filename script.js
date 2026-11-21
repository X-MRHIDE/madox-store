// ===== SETTINGS: only change this =====
// Put your Telegram username here (without @). Example: "MadoxStore"
const TELEGRAM_USERNAME = "ofcyasin";
// ======================================

// Every link with data-telegram opens your Telegram chat.
// If the link has data-product, the message is filled in automatically.
document.querySelectorAll("[data-telegram]").forEach((link) => {
  const product = link.dataset.product;
  const text = product
    ? `Hi, I want to order: ${product}`
    : "Hi, I want to order from Madox Store";
  link.href = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();