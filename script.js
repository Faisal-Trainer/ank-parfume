/* =====================================================
   ANK PARFUME — script.js
   ===================================================== */

"use strict";

/* ---------- UTILS ---------- */
function formatRupiah(n) {
  if (!n) return "Rp -";
  return "Rp " + n.toLocaleString("id-ID");
}

function buildWALink(productName) {
  const msg = encodeURIComponent(
    `Halo ANK Parfume, saya tertarik dengan ${productName} 😊 Boleh info ketersediaan & ukurannya?`,
  );
  return `https://wa.me/6282169856049?text=${msg}`;
}

/* ---------- GLOBAL STATE ---------- */
let activeFilter = "all";
let activeSearch = "";
let currentPage = 1;
const itemsPerPage = 12;

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  const grid = document.getElementById("produkGrid");
  if (!grid) return;

  // 1. Filtering & Searching
  let filtered = products;
  if (activeFilter !== "all") {
    filtered = filtered.filter((p) => p.cat === activeFilter);
  }
  if (activeSearch) {
    const q = activeSearch.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(q));
  }

  // 2. Pagination Logic
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  // Special Home Page Behavior:
  // Initially show only 6 products without pagination.
  // BUT if a filter is active or search is active, show full pagination.
  const isIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || !window.location.pathname.includes("produk.html");
  let pagedData = filtered;
  
  const isInitialHome = isIndex && activeFilter === "all" && !activeSearch && currentPage === 1;

  if (isInitialHome) {
     // Show 6 featured items for the clean "Hero" look
     pagedData = filtered.slice(0, 6);
     togglePaginationVisibility(false);
  } else {
     // Normal Paginated View (10 per page)
     const start = (currentPage - 1) * itemsPerPage;
     const end = start + itemsPerPage;
     pagedData = filtered.slice(start, end);
     togglePaginationVisibility(true);
     renderPagination(totalItems);
  }

  // 3. Render Grid
  grid.innerHTML = "";
  if (pagedData.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--white-mute);">Maaf, parfum "${activeSearch}" tidak ditemukan.</div>`;
    togglePaginationVisibility(false);
    return;
  }

  pagedData.forEach((p, i) => {
    const badgeClass = `badge-${p.cat}`;
    const badgeLabel = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
    const card = document.createElement("article");
    card.className = "produk-card reveal";
    card.style.animationDelay = `${(i % 10) * 0.05}s`;
    
    card.innerHTML = `
      <div class="produk-card-img-wrapper">
        <img src="${p.image}" alt="${p.altimg || p.name}" class="produk-img" onerror="this.src='img/ankparfume.webp'" loading="lazy" decoding="async">
      </div>
      <div class="produk-card-header">
        <h3 class="produk-name">${p.name}</h3>
        <span class="produk-badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <p class="produk-desc">${p.desc || "Wewangian premium dengan kualitas terbaik."}</p>
      <div class="produk-prices">
        <span class="price-pill">30ml <strong>${formatRupiah(p.prices.p30)}</strong></span>
        <span class="price-pill">50ml <strong>${formatRupiah(p.prices.p50)}</strong></span>
        <span class="price-pill">100ml <strong>${formatRupiah(p.prices.p100)}</strong></span>
      </div>
      <a href="${buildWALink(p.name)}" target="_blank" class="btn-wa-card">Pesan Sekarang</a>
    `;
    grid.appendChild(card);
  });

  if (typeof initReveal === "function") initReveal();
}

/* ---------- PAGINATION RENDERER ---------- */
function togglePaginationVisibility(visible) {
  const containers = document.querySelectorAll(".pagination-container");
  containers.forEach(container => {
    container.style.display = visible ? "flex" : "none";
  });
}

function renderPagination(totalItems) {
  const containers = document.querySelectorAll(".pagination-container");
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) {
    containers.forEach(c => c.innerHTML = "");
    return;
  }

  let html = "";
  html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&laquo;</button>`;
  
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }

  html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>&raquo;</button>`;

  containers.forEach(c => c.innerHTML = html);
}

window.changePage = function(page) {
  currentPage = page;
  renderProducts();
  const grid = document.getElementById("produkGrid");
  if (grid) {
    const offset = 100;
    window.scrollTo({
      top: grid.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth"
    });
  }
};

window.filterProducts = function(cat) {
  activeFilter = cat;
  currentPage = 1; 
  renderProducts();
  
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.filter === cat);
    t.setAttribute("aria-selected", t.dataset.filter === cat ? "true" : "false");
  });
};

/* ---------- SEARCH LOGIC ---------- */
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    activeSearch = e.target.value;
    currentPage = 1;
    renderProducts();
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

/* ---------- URL PARAMS ---------- */
function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  if (filter) {
    filterProducts(filter);
  }
}

/* ---------- NAVBAR & OTHER UI ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

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

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("active-nav", href === `#${id}` || href.includes(`#${id}`));
          });
        }
      });
    },
    { rootMargin: "-40% 0px -40% 0px" },
  );
  sections.forEach((s) => observer.observe(s));
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initYear();
  
  // High Priority: Render initial view immediately
  if (typeof products !== "undefined") {
    renderProducts();
  }

  // Stagger non-critical tasks to reduce TBT
  setTimeout(() => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    
    if (typeof products !== "undefined") {
      initTabs();
      initSearch();
      handleUrlParams();
    }
  }, 50);

  setTimeout(() => {
    initReveal();
    initActiveNav();
  }, 150);
});
