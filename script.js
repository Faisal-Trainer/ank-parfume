/* =====================================================
   ANK PARFUME — script.js
   ===================================================== */

"use strict";

/* ---------- DATA PRODUK (dari Price List resmi) ---------- */
const products = [
  // WOMEN
  {
    name: "Gucci Bloom",
    cat: "women",
    desc: "Floral putih yang murni & feminim. Dipakai sekali, diingat selamanya.",
    p30: 83000,
    p50: 130000,
    p100: 185000,
  },
  {
    name: "YSL Libre",
    cat: "women",
    desc: "Sensual dan berani. Lavender bertemu vanilla — ikon kemandirian wanita modern.",
    p30: 85000,
    p50: 135000,
    p100: 190000,
  },
  {
    name: "Dior J'Adore",
    cat: "women",
    desc: "Aroma floral mewah yang tak lekang waktu. Klasik sejati untuk hari istimewa.",
    p30: 70000,
    p50: 110000,
    p100: 170000,
  },
  {
    name: "Armani My Way",
    cat: "women",
    desc: "Woody floral yang hangat. Terinspirasi perjalanan dunia, cocok untuk petualang.",
    p30: 78000,
    p50: 125000,
    p100: 180000,
  },
  {
    name: "Jo Malone Peony",
    cat: "women",
    desc: "Segar dan elegan. Bunga peoni yang mekar lembut di kulitmu sepanjang hari.",
    p30: 75000,
    p50: 120000,
    p100: 175000,
  },
  {
    name: "Gucci F. Gardenia",
    cat: "women",
    desc: "Perpaduan gardenia dan bergamot yang sensual. Feminitas dalam bentuk botol.",
    p30: 80000,
    p50: 127000,
    p100: 182000,
  },
  {
    name: "D&G Light Blue",
    cat: "women",
    desc: "Citrus segar khas Mediterania. Ringan, menyenangkan, cocok untuk daily wear.",
    p30: 75000,
    p50: 120000,
    p100: 170000,
  },
  {
    name: "Prada Paradoxe",
    cat: "women",
    desc: "Floral musky modern. Kontradiksi yang memikat — dinamis namun tetap feminin.",
    p30: 81000,
    p50: 130000,
    p100: 185000,
  },
  {
    name: "Pink Chiffon",
    cat: "women",
    desc: "Manis & playful. Aroma buah dan bunga ringan yang cocok untuk wanita energik.",
    p30: 85000,
    p50: 153000,
    p100: 190000,
  },
  {
    name: "Miss Dior",
    cat: "women",
    desc: "Rosy chypre yang romantis. Ungkapan cinta dari Dior untuk jiwa yang bebas.",
    p30: 70000,
    p50: 110000,
    p100: 170000,
  },
  {
    name: "Escada Cherry",
    cat: "women",
    desc: "Fruity floral ceria. Cherry yang meledak di kulit, ceria sepanjang hari.",
    p30: 78000,
    p50: 125000,
    p100: 180000,
  },
  {
    name: "Alien Goddes",
    cat: "women",
    desc: "Woody amber yang misterius. Kekuatan dan keanggunan dalam satu semprot.",
    p30: 75000,
    p50: 120000,
    p100: 175000,
  },

  // MEN
  {
    name: "Dior Sauvage",
    cat: "men",
    desc: "Segar ambisius. Lavender & bergamot — parfum paling ikonik & terlaris di Bukittinggi.",
    p30: 80000,
    p50: 125000,
    p100: 180000,
  },
  {
    name: "One Million Lucky",
    cat: "men",
    desc: "Woody spicy yang bold. Keberuntungan dalam botol berbentuk batangan emas.",
    p30: 85000,
    p50: 135000,
    p100: 190000,
  },
  {
    name: "Creet Aventus",
    cat: "men",
    desc: 'Fruity chypre premium. Dikenal sebagai "raja parfum" dunia — berasa eksklusif.',
    p30: 70000,
    p50: 110000,
    p100: 165000,
  },
  {
    name: "Mont Blanc Legent",
    cat: "men",
    desc: "Lavender fougère yang bersih. Elegan tanpa berlebihan, cocok untuk kantor.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "Dunhill Blue",
    cat: "men",
    desc: "Aquatic woody yang segar. Teman setia pria aktif dari pagi hingga malam.",
    p30: 78000,
    p50: 125000,
    p100: 180000,
  },
  {
    name: "Afnan GPM",
    cat: "men",
    desc: "Oriental woody yang kaya. Terinspirasi keanggunan Timur Tengah, super longlast.",
    p30: 80000,
    p50: 127000,
    p100: 182000,
  },
  {
    name: "Bulgari Extream",
    cat: "men",
    desc: "Citrus woody yang tajam. Ketegasan yang bersih — first impression terbaik.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "Armani SWY",
    cat: "men",
    desc: "Aromatic fougère yang elegan. Si Armani tapi lebih berani dan maskulin.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "212 VIP Men",
    cat: "men",
    desc: "Woody musky urban. Untuk pria kota yang percaya diri dan penuh karisma.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "Versace Erios",
    cat: "men",
    desc: "Aquatic ambergris segar. Semangat Mediterania yang selalu relevan.",
    p30: 70000,
    p50: 110000,
    p100: 165000,
  },

  // UNISEX
  {
    name: "YSL Black Opium",
    cat: "unisex",
    desc: "Kopi & vanilla yang menggoda. Gelap, sensual, dan bikin ketagihan.",
    p30: 80000,
    p50: 125000,
    p100: 180000,
  },
  {
    name: "Baccarat",
    cat: "unisex",
    desc: "Oud rose yang mewah. Aroma yang biasanya hanya ditemukan di parfum jutaan.",
    p30: 70000,
    p50: 110000,
    p100: 165000,
  },
  {
    name: "LV Ombre Nomade",
    cat: "unisex",
    desc: "Smoky oud amber. Petualangan gurun dalam semprot — statement parfum sejati.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "Tamburins Chamo",
    cat: "unisex",
    desc: "Aquatic floral yang unik. K-beauty vibes, digemari gen-Z dari Seoul ke Bukittinggi.",
    p30: 70000,
    p50: 110000,
    p100: 165000,
  },
  {
    name: "maccera L. Vanilla",
    cat: "unisex",
    desc: "Vanilla musked yang hangat. Nyaman seperti pelukan — cocok untuk semua musim.",
    p30: 75000,
    p50: 115000,
    p100: 170000,
  },
  {
    name: "SOTB",
    cat: "unisex",
    desc: "Sillage kuat, daya tahan luar biasa. Favorit pelanggan yang sering sold-out di Bukittinggi.",
    p30: 70000,
    p50: 110000,
    p100: 165000,
  },
];

/* ---------- RENDER PRODUCTS ---------- */
let activeFilter = "all";

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

function buildWALink(productName) {
  const msg = encodeURIComponent(
    `Halo ANK Parfume, saya tertarik dengan ${productName} 😊 Boleh info ketersediaan & ukurannya?`,
  );
  return `https://wa.me/6282169856049?text=${msg}`;
}

function renderProducts(filter) {
  const grid = document.getElementById("produkGrid");
  if (!grid) return;
  const filtered =
    filter === "all" ? products : products.filter((p) => p.cat === filter);
  grid.innerHTML = "";

  filtered.forEach((p, i) => {
    const badgeClass = `badge-${p.cat}`;
    const badgeLabel =
      p.cat === "women" ? "Women" : p.cat === "men" ? "Men" : "Unisex";
    const card = document.createElement("article");
    card.className = "produk-card";
    card.style.animationDelay = `${(i % 6) * 0.06}s`;
    card.innerHTML = `
      <div class="produk-card-header">
        <h3 class="produk-name">${p.name}</h3>
        <span class="produk-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <p class="produk-desc">${p.desc}</p>
      <div class="produk-prices">
        <span class="price-pill">30ml <strong>${formatRupiah(p.p30)}</strong></span>
        <span class="price-pill">50ml <strong>${formatRupiah(p.p50)}</strong></span>
        <span class="price-pill">100ml <strong>${formatRupiah(p.p100)}</strong></span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* exposed globally for footer links */
function filterProducts(cat) {
  activeFilter = cat;
  renderProducts(cat);
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.filter === cat);
    t.setAttribute(
      "aria-selected",
      t.dataset.filter === cat ? "true" : "false",
    );
  });
}

/* ---------- FILTER TABS ---------- */
function initTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const f = tab.dataset.filter;
      filterProducts(f);
    });
  });
}

/* ---------- NAVBAR SCROLL EFFECT ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- HAMBURGER MENU ---------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ---------- SMOOTH SCROLL ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ),
        ) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------- SCROLL REVEAL (Intersection Observer) ---------- */
function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Stagger delay for grid items
          const delay = entry.target.closest(
            ".usp-grid, .produk-grid, .testi-grid",
          )
            ? Array.from(entry.target.parentElement.children).indexOf(
                entry.target,
              ) * 80
            : 0;
          setTimeout(() => entry.target.classList.add("visible"), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------- ACTIVE NAV LINK on SCROLL ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active-nav",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        }
      });
    },
    {
      rootMargin: `-${(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 72) + 20}px 0px -60% 0px`,
    },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------- AUTO COPYRIGHT YEAR ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initYear();
  renderProducts("all");
  initTabs();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initReveal();
  initActiveNav();
});
