const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const soundCloudURL = "https://soundcloud.com/mczorro";

const tracks = [
  {
    label: "LATEST DROP",
    code: "TRACK_001",
    title: "Track 1",
    year: "2026",
    mood: "Basement pressure",
    description: "A raw SoundCloud cut with clipped delivery and a no-cleanup texture.",
    image: "images/photo_21_2026-06-15_00-11-00.jpg",
    webp: "images/photo_21_2026-06-15_00-11-00.webp",
    alt: "MC ZORRO in a green jacket",
    badge: "RAW DROP",
    primary: soundCloudURL,
  },
  {
    code: "TRACK_002",
    title: "Track 2",
    year: "2026",
    mood: "Locked-room bounce",
    description: "Short, weird, and direct. Built like a file that should not have leaked.",
    primary: soundCloudURL,
  },
  {
    code: "TRACK_003",
    title: "Track 3",
    year: "2026",
    mood: "Night archive",
    description: "Dark delivery, rough visuals, and bass pressure from the Bavovna side.",
    primary: soundCloudURL,
  },
  {
    code: "TRACK_004",
    title: "Track 4",
    year: "2026",
    mood: "After-midnight",
    description: "A pending transmission reserved for the next SoundCloud update.",
    primary: soundCloudURL,
  },
];

const events = [
  { date: "12 Jul", datetime: "2026-07-12", city: "Bavovna", venue: "Warehouse Stage", note: "Low ceiling. No bright lights. Entry list only.", action: "Notify me", href: "#signal", status: "RSVP", statusClass: "" },
  { date: "19 Jul", datetime: "2026-07-19", city: "Kyiv", venue: "Night Room", note: "Backroom set. Visual files recorded on site.", action: "Signal line", href: "#signal", status: "Sold out", statusClass: "sold" },
  { date: "03 Aug", datetime: "2026-08-03", city: "Lviv", venue: "Low Ceiling", note: "Rumored appearance. Confirmation pending.", action: "Track update", href: "#signal", status: "Rumored", statusClass: "rumor" },
  { date: "17 Aug", datetime: "2026-08-17", city: "Odesa", venue: "Black Pier", note: "Past file. Photos stored in the night archive.", action: "View archive", href: "#visuals", status: "Archived", statusClass: "archived" },
];

const clips = [
  { code: "CLIP_001", title: "Video file coming soon", image: "images/photo_19_2026-06-15_00-11-00.jpg", webp: "images/photo_19_2026-06-15_00-11-00.webp", status: "ACCESS DENIED", message: "FILE LOCKED. Video file coming soon.", available: false },
  { code: "LIVE_002", title: "Backroom audio locked", image: "images/photo_24_2026-06-15_00-11-00.jpg", webp: "images/photo_24_2026-06-15_00-11-00.webp", status: "ACCESS DENIED", message: "FILE LOCKED. Backroom audio has not been cleared.", available: false },
  { code: "TEASER_003", title: "Playable signal fragment", image: "images/archive_06_night_smoke.jpg", webp: "images/archive_06_night_smoke.webp", status: "SIGNAL READY", message: "A short visual fragment is live. Bass line simulated from the archive pulse.", available: true },
];

const photos = [
  { code: "FILE_005A", title: "Night Smoke", location: "Night street", mood: "Raw", meta: "Night / Street / Raw", tags: ["Night", "Street", "Portrait"], src: "images/archive_06_night_smoke.jpg", webp: "images/archive_06_night_smoke.webp", alt: "MC ZORRO in a black hooded jacket at night", width: 768, height: 1024, layout: "feature" },
  { code: "FILE_005B", title: "Car Flash", location: "Parking line", mood: "Night", meta: "Night / Parking", tags: ["Night", "Street"], src: "images/archive_07_car_flash.jpg", webp: "images/archive_07_car_flash.webp", alt: "MC ZORRO standing near a car at night", width: 768, height: 1024 },
  { code: "FILE_005C", title: "Club Mirror", location: "Interior", mood: "Purple", meta: "Indoor / Purple", tags: ["Backroom", "Portrait"], src: "images/photo_17_2026-06-15_00-11-00.jpg", webp: "images/photo_17_2026-06-15_00-11-00.webp", alt: "MC ZORRO in purple stage light", width: 1920, height: 2560 },
  { code: "FILE_005D", title: "Crowd File", location: "Festival crowd", mood: "Flash", meta: "Festival / Flash", tags: ["Festival", "Group"], src: "images/archive_04_clout_crowd.jpg", webp: "images/archive_04_clout_crowd.webp", alt: "MC ZORRO with a crowd at a night festival", width: 1024, height: 768, layout: "wide" },
  { code: "FILE_005E", title: "Stage Field", location: "Open field", mood: "Cold", meta: "Day / Festival", tags: ["Festival", "Portrait"], src: "images/archive_05_stage_field.jpg", webp: "images/archive_05_stage_field.webp", alt: "MC ZORRO in front of a festival stage", width: 768, height: 1024 },
  { code: "FILE_005F", title: "Festival Signal", location: "Night field", mood: "Signal", meta: "Night / Field", tags: ["Festival", "Night", "Portrait"], src: "images/archive_03_festival_selfie.jpg", webp: "images/archive_03_festival_selfie.webp", alt: "MC ZORRO at a night festival", width: 768, height: 1024 },
  { code: "FILE_005G", title: "Bavovna Night", location: "Mall frame", mood: "Green", meta: "Mall / Green", tags: ["Portrait"], src: "images/photo_21_2026-06-15_00-11-00.jpg", webp: "images/photo_21_2026-06-15_00-11-00.webp", alt: "MC ZORRO in a green jacket", width: 960, height: 1280 },
  { code: "FILE_005H", title: "Window File", location: "Interior window", mood: "Cold", meta: "Indoor / Cold", tags: ["Backroom", "Portrait"], src: "images/archive_01_suit_window.jpg", webp: "images/archive_01_suit_window.webp", alt: "MC ZORRO standing near a window with another person", width: 768, height: 1024 },
  { code: "FILE_005I", title: "Parking Lot Signal", location: "Street side", mood: "Group", meta: "Street / Group", tags: ["Street", "Group"], src: "images/photo_24_2026-06-15_00-11-00.jpg", webp: "images/photo_24_2026-06-15_00-11-00.webp", alt: "MC ZORRO and a friend near a car", width: 1920, height: 2560, layout: "wide" },
  { code: "FILE_005J", title: "After Midnight", location: "Club light", mood: "Handheld", meta: "Club / Handheld", tags: ["Backroom", "Night"], src: "images/photo_19_2026-06-15_00-11-00.jpg", webp: "images/photo_19_2026-06-15_00-11-00.webp", alt: "MC ZORRO holding a phone near club lights", width: 1920, height: 2560 },
  { code: "FILE_005K", title: "Street Frame", location: "Outdoor path", mood: "Open", meta: "Outdoor / Smile", tags: ["Street", "Portrait"], src: "images/photo_5_2026-06-15_00-11-00.jpg", webp: "images/photo_5_2026-06-15_00-11-00.webp", alt: "MC ZORRO smiling outdoors", width: 1920, height: 2560 },
  { code: "FILE_005L", title: "Lost Photo", location: "Sunset street", mood: "Soft", meta: "Sunset / Street", tags: ["Street", "Portrait"], src: "images/photo_3_2026-06-15_00-11-00.jpg", webp: "images/photo_3_2026-06-15_00-11-00.webp", alt: "MC ZORRO standing outdoors at sunset", width: 960, height: 1280 },
  { code: "FILE_005M", title: "Backroom Flash", location: "Backroom", mood: "Locked", meta: "Interior / Flash", tags: ["Backroom"], src: "images/archive_02_backroom_flash.jpg", webp: "images/archive_02_backroom_flash.webp", alt: "MC ZORRO in a dark backroom flash photo", width: 768, height: 1024 },
];

const archiveFilters = ["All", "Night", "Festival", "Portrait", "Backroom", "Street", "Group"];

const socials = [
  { label: "SoundCloud", status: "active", href: soundCloudURL, external: true },
  { label: "Booking Email", status: "copy", href: "mailto:booking@mczorro.world" },
  { label: "Instagram", status: "pending", href: "#signal" },
  { label: "TikTok", status: "pending", href: "#signal" },
  { label: "YouTube", status: "pending", href: "#signal" },
  { label: "Spotify", status: "pending", href: "#signal" },
];

const archiveLog = [
  { date: "15 Jun 2026", code: "LOG_001", title: "Archive rebuilt", text: "Photo files sorted, lightbox unlocked, signal preview stabilized." },
  { date: "14 Jun 2026", code: "LOG_002", title: "SoundCloud feed pinned", text: "Official source routed to the live player and track board." },
  { date: "13 Jun 2026", code: "LOG_003", title: "Night frames recovered", text: "Street, festival, backroom, and portrait files added to visual evidence." },
];

const bookingFacts = [
  { label: "Set type", value: "Underground rap / trap" },
  { label: "Set length", value: "20-35 min / flexible" },
  { label: "Needs", value: "DJ line, one mic, low light" },
  { label: "Files", value: "Photos, clips, raw drops" },
];

let activeArchiveFilter = "All";

const responsiveWidths = {
  "images/photo_16_2026-06-15_00-11-00.jpg": [960, 1440],
  "images/archive_06_night_smoke.jpg": [480, 768],
  "images/archive_07_car_flash.jpg": [480, 768],
  "images/photo_17_2026-06-15_00-11-00.jpg": [480, 960],
  "images/archive_04_clout_crowd.jpg": [640, 1024],
  "images/archive_05_stage_field.jpg": [480, 768],
  "images/archive_03_festival_selfie.jpg": [480, 768],
  "images/photo_21_2026-06-15_00-11-00.jpg": [480, 768],
  "images/archive_01_suit_window.jpg": [480, 768],
  "images/photo_24_2026-06-15_00-11-00.jpg": [640, 960],
  "images/photo_19_2026-06-15_00-11-00.jpg": [480, 960],
  "images/photo_5_2026-06-15_00-11-00.jpg": [480, 960],
  "images/photo_3_2026-06-15_00-11-00.jpg": [480, 768],
  "images/archive_02_backroom_flash.jpg": [480, 768],
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function imageVariant(filename, width, format) {
  return `${filename.replace(/\.[^.]+$/, "")}-${width}.${format}`;
}

function responsiveSrcset(filename, format, fallback) {
  const widths = responsiveWidths[filename];
  if (!widths) return fallback || "";
  return widths.map((width) => `${imageVariant(filename, width, format)} ${width}w`).join(", ");
}

function sizedImage(filename, width, format = "webp") {
  const widths = responsiveWidths[filename];
  if (!widths) return filename.replace(/\.[^.]+$/, `.${format}`);
  const best = widths.find((candidate) => candidate >= width) || widths[widths.length - 1];
  return imageVariant(filename, best, format);
}

function pictureHTML(item, sizes) {
  const sourceFile = item.src || item.image;
  const webp = item.srcset || responsiveSrcset(sourceFile, "webp", item.webp);
  const avif = responsiveSrcset(sourceFile, "avif");
  return `
    <picture>
      ${avif ? `<source srcset="${escapeHTML(avif)}" type="image/avif" sizes="${escapeHTML(sizes)}">` : ""}
      <source srcset="${escapeHTML(webp)}" type="image/webp" sizes="${escapeHTML(sizes)}">
      <img src="${escapeHTML(item.src || item.image)}" alt="${escapeHTML(item.alt)}" width="${item.width || 768}" height="${item.height || 1024}" loading="lazy" decoding="async" sizes="${escapeHTML(sizes)}">
    </picture>
  `;
}

function filteredPhotos() {
  if (activeArchiveFilter === "All") return photos;
  return photos.filter((photo) => photo.tags.includes(activeArchiveFilter));
}

function renderPhotos(revealNow = false) {
  const photoGrid = document.getElementById("photo-grid");
  if (!photoGrid) return;
  const visiblePhotos = filteredPhotos();
  photoGrid.innerHTML = visiblePhotos.map((photo, index) => {
    const originalIndex = photos.indexOf(photo);
    const visibleClass = revealNow ? " visible" : "";
    return `
      <button class="photo-tile ${escapeHTML(photo.layout || "")} reveal${visibleClass}" type="button" data-photo-index="${originalIndex}" style="--delay: ${index * 35}ms" aria-label="Open photo file ${escapeHTML(photo.code)}: ${escapeHTML(photo.title)}">
        ${pictureHTML(photo, "(max-width: 430px) 100vw, (max-width: 780px) 50vw, 25vw")}
        <span class="archive-code">${escapeHTML(photo.code)}</span>
        <span class="archive-title">${escapeHTML(photo.title)}</span>
        <span class="archive-meta">${escapeHTML(photo.meta)}</span>
      </button>
    `;
  }).join("");
  const archiveCount = document.getElementById("archive-count");
  if (archiveCount) {
    archiveCount.textContent = activeArchiveFilter === "All"
      ? `${photos.length} files`
      : `${visiblePhotos.length} ${activeArchiveFilter.toLowerCase()} files`;
  }
}

function renderContent() {
  const latestTrack = document.getElementById("latest-track");
  if (latestTrack && tracks[0]) {
    const track = tracks[0];
    latestTrack.innerHTML = `
      <article class="release-card reveal reveal-delay-1" aria-labelledby="release-title">
        <div class="release-art">
          ${pictureHTML({ src: track.image, webp: track.webp, alt: track.alt, width: 960, height: 1280 }, "(max-width: 780px) 100vw, 24vw")}
          <span>${escapeHTML(track.badge)}</span>
        </div>
        <div class="release-copy">
          <p class="file-label">${escapeHTML(track.label)}</p>
          <h3 id="release-title">${escapeHTML(track.title)}</h3>
          <p>${escapeHTML(track.description)}</p>
          <div class="release-actions">
            <button class="button button-primary" type="button" data-play-track="0">▶ Play</button>
            <a class="button button-ghost" href="${escapeHTML(track.primary)}" target="_blank" rel="noreferrer">SoundCloud</a>
          </div>
        </div>
      </article>
    `;
  }

  const trackList = document.getElementById("track-list");
  if (trackList) {
    trackList.innerHTML = tracks.map((track, index) => `
      <article class="track-row reveal" style="--delay: ${index * 45}ms" data-play-track="${index}" role="button" tabindex="0" aria-label="Play ${escapeHTML(track.title)}">
        <span>${escapeHTML(track.code)}</span>
        <strong>${escapeHTML(track.title)}</strong>
        <p>${escapeHTML(track.mood)} / ${escapeHTML(track.year)}</p>
        <span class="track-play-icon">▶</span>
      </article>
    `).join("");
  }

  const eventsList = document.getElementById("events-list");
  if (eventsList) {
    eventsList.innerHTML = events.map((event, index) => `
      <article class="tour-row reveal" style="--delay: ${index * 55}ms">
        <time datetime="${escapeHTML(event.datetime)}">${escapeHTML(event.date)}</time>
        <span class="tour-city">${escapeHTML(event.city)}</span>
        <strong>${escapeHTML(event.venue)}</strong>
        <p>${escapeHTML(event.note)}</p>
        <a href="${escapeHTML(event.href)}">${escapeHTML(event.action)}</a>
        <mark class="${escapeHTML(event.statusClass)}">${escapeHTML(event.status)}</mark>
      </article>
    `).join("");
  }

  const clipsGrid = document.getElementById("clips-grid");
  if (clipsGrid) {
    clipsGrid.innerHTML = clips.map((clip, index) => `
      <button class="clip-card ${clip.available ? "clip-card-live" : ""} reveal" type="button" data-clip-index="${index}" style="--delay: ${index * 70}ms; background-image: linear-gradient(145deg, rgba(5,5,5,0.2), rgba(5,5,5,0.9)), image-set(url('${escapeHTML(clip.webp)}') type('image/webp'), url('${escapeHTML(clip.image)}') type('image/jpeg'));" aria-label="Open clip file ${escapeHTML(clip.code)}">
        <span class="play-mark" aria-hidden="true"></span>
        <strong>${escapeHTML(clip.code)}</strong>
        <p>${escapeHTML(clip.title)}</p>
      </button>
    `).join("");
  }

  const filters = document.getElementById("archive-filters");
  if (filters) {
    filters.innerHTML = archiveFilters.map((filter) => `
      <button type="button" class="${filter === activeArchiveFilter ? "active" : ""}" data-filter="${escapeHTML(filter)}" aria-pressed="${filter === activeArchiveFilter}">
        ${escapeHTML(filter)}
      </button>
    `).join("");
  }
  renderPhotos();

  const socialGrid = document.getElementById("social-grid");
  if (socialGrid) {
    socialGrid.innerHTML = socials.map((social, index) => `
      <a class="reveal" style="--delay: ${index * 45}ms" href="${escapeHTML(social.href)}" ${social.external ? 'target="_blank" rel="noreferrer"' : ""}>
        ${escapeHTML(social.label)}
        <span>${escapeHTML(social.status)}</span>
      </a>
    `).join("");
  }

  const archiveLogNode = document.getElementById("archive-log");
  if (archiveLogNode) {
    archiveLogNode.innerHTML = archiveLog.map((entry, index) => `
      <article class="log-row reveal" style="--delay: ${index * 55}ms">
        <time>${escapeHTML(entry.date)}</time>
        <span>${escapeHTML(entry.code)}</span>
        <strong>${escapeHTML(entry.title)}</strong>
        <p>${escapeHTML(entry.text)}</p>
      </article>
    `).join("");
  }

  const bookingDossier = document.getElementById("booking-dossier");
  if (bookingDossier) {
    bookingDossier.innerHTML = `
      <p class="file-label">BOOKING DOSSIER</p>
      <dl>
        ${bookingFacts.map((fact) => `<div><dt>${escapeHTML(fact.label)}</dt><dd>${escapeHTML(fact.value)}</dd></div>`).join("")}
      </dl>
    `;
  }
}

function setupLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const delay = prefersReducedMotion ? 100 : 1200;
  window.setTimeout(() => {
    loader.classList.add("hidden");
    loader.setAttribute("aria-hidden", "true");
  }, delay);
}

function setupHeader() {
  const header = document.getElementById("site-header");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  const closeMenu = () => {
    navLinks?.classList.remove("open");
    hamburger?.classList.remove("active");
    hamburger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  hamburger?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open");
    hamburger.classList.toggle("active", Boolean(isOpen));
    hamburger.setAttribute("aria-expanded", String(Boolean(isOpen)));
    document.body.classList.toggle("menu-open", Boolean(isOpen));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      const target = hash && hash.length > 1 ? document.querySelector(hash) : null;
      if (!target) return;
      event.preventDefault();
      closeMenu();
      triggerRouteScan();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      if (history.pushState) history.pushState(null, "", hash);
    });
  });

  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 48);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupSoundCloudLoader() {
  const frame = document.getElementById("soundcloud-frame");
  const button = document.getElementById("soundcloud-loader");
  if (!frame || !button) return;

  const loadPlayer = () => {
    if (frame.querySelector("iframe")) return;
    const iframe = document.createElement("iframe");
    iframe.title = "MC ZORRO on SoundCloud";
    iframe.width = "100%";
    iframe.height = "420";
    iframe.loading = "lazy";
    iframe.scrolling = "no";
    iframe.frameBorder = "no";
    iframe.allow = "autoplay; encrypted-media";
    iframe.src = frame.dataset.src || "";
    frame.classList.add("loaded");
    frame.replaceChildren(iframe);
  };

  button.addEventListener("click", loadPlayer);
}

function triggerRouteScan() {
  if (prefersReducedMotion) return;
  const scan = document.getElementById("route-scan");
  if (!scan) return;
  scan.classList.remove("active");
  void scan.offsetWidth;
  scan.classList.add("active");
}

function setupReveals() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -44px 0px" }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupHeroParallax() {
  const heroImage = document.querySelector(".hero-image");
  if (!heroImage || prefersReducedMotion) return;
  const parallaxHero = () => {
    const scrollY = window.scrollY;
    const limit = window.innerHeight * 1.1;
    if (scrollY > limit) return;
    heroImage.style.transform = `translateY(${scrollY * 0.16}px) scale(1.05)`;
  };
  parallaxHero();
  window.addEventListener("scroll", parallaxHero, { passive: true });
}

function setupScrollState() {
  const progressBar = document.getElementById("scroll-progress-bar");
  const previewFile = document.getElementById("preview-file");
  const previewTitle = document.getElementById("preview-title");
  const previewStatus = document.getElementById("preview-status");
  const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const trackedSections = [...document.querySelectorAll("section[data-file]")];
  let ticking = false;

  const update = () => {
    ticking = false;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;

    const headerOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 74;
    const line = headerOffset + window.innerHeight * 0.28;
    let current = trackedSections[0];
    trackedSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) current = section;
    });

    if (current) {
      const id = current.id;
      navAnchors.forEach((anchor) => {
        const active = anchor.getAttribute("href") === `#${id}`;
        anchor.classList.toggle("active", active);
        if (active) anchor.setAttribute("aria-current", "page");
        else anchor.removeAttribute("aria-current");
      });
      if (previewFile) previewFile.textContent = current.dataset.file || "FILE_000";
      if (previewTitle) previewTitle.textContent = current.dataset.preview || "Live Signal";
      if (previewStatus) previewStatus.textContent = `SIGNAL ${Math.round(progress * 100)}%`;
    }
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function setupArchiveFilters() {
  const filters = document.getElementById("archive-filters");
  if (!filters) return;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeArchiveFilter = button.dataset.filter || "All";
    filters.querySelectorAll("button").forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });
    renderPhotos(true);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const image = lightbox?.querySelector("img");
  const closeButton = lightbox?.querySelector(".lightbox-close");
  const prevButton = lightbox?.querySelector(".lightbox-prev");
  const nextButton = lightbox?.querySelector(".lightbox-next");
  const copyButton = document.getElementById("copy-file-link");
  const thumbRail = document.getElementById("lightbox-thumbs");
  const status = document.getElementById("lightbox-status");
  const count = document.getElementById("lightbox-count");
  const code = document.getElementById("lightbox-code");
  const title = document.getElementById("lightbox-title");
  const location = document.getElementById("lightbox-location");
  const mood = document.getElementById("lightbox-mood");
  let currentPhotoIndex = 0;
  let lastTrigger = null;

  if (thumbRail) {
    thumbRail.innerHTML = photos.map((photo, index) => `
      <button type="button" data-thumb-index="${index}" aria-label="Open thumbnail ${escapeHTML(photo.code)}">
        <img src="${escapeHTML(sizedImage(photo.src, 480, "webp"))}" alt="" loading="lazy" width="72" height="96">
      </button>
    `).join("");
  }

  const setPhoto = (index) => {
    const photo = photos[index];
    if (!photo || !image) return;
    currentPhotoIndex = index;
    image.style.opacity = prefersReducedMotion ? "1" : "0";
    window.setTimeout(() => {
      image.src = sizedImage(photo.src, 960, "webp");
      image.alt = photo.alt;
      if (code) code.textContent = photo.code;
      if (title) title.textContent = photo.title;
      if (location) location.textContent = photo.location;
      if (mood) mood.textContent = photo.mood;
      if (count) count.textContent = `FILE ${String(index + 1).padStart(2, "0")} / ${photos.length}`;
      if (status) status.textContent = `${photo.code}: ${photo.title}. File ${index + 1} of ${photos.length}.`;
      thumbRail?.querySelectorAll("button").forEach((button) => {
        const active = Number(button.dataset.thumbIndex) === index;
        button.classList.toggle("active", active);
        button.setAttribute("aria-current", active ? "true" : "false");
      });
      image.style.opacity = "1";
    }, prefersReducedMotion ? 0 : 100);
  };

  const open = (index, trigger) => {
    if (!lightbox) return;
    lastTrigger = trigger || null;
    setPhoto(index);
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
    closeButton?.focus();
  };

  const close = () => {
    if (!lightbox) return;
    if (typeof lightbox.close === "function") lightbox.close();
    else lightbox.removeAttribute("open");
    lastTrigger?.focus();
  };

  const navigate = (direction) => {
    const nextIndex = (currentPhotoIndex + direction + photos.length) % photos.length;
    setPhoto(nextIndex);
  };

  document.getElementById("photo-grid")?.addEventListener("click", (event) => {
    const button = event.target.closest(".photo-tile");
    if (!button) return;
    open(Number(button.dataset.photoIndex || 0), button);
  });
  thumbRail?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-thumb-index]");
    if (!button) return;
    setPhoto(Number(button.dataset.thumbIndex || 0));
  });
  copyButton?.addEventListener("click", async () => {
    const photo = photos[currentPhotoIndex];
    const fileURL = `${window.location.origin}${window.location.pathname}#${photo.code}`;
    const copied = await copyText(fileURL);
    copyButton.textContent = copied ? "File link copied" : "Copy failed";
    window.setTimeout(() => { copyButton.textContent = "Copy file link"; }, 1400);
  });
  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => navigate(-1));
  nextButton?.addEventListener("click", () => navigate(1));
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  window.addEventListener("keydown", (event) => {
    if (!lightbox?.open) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") navigate(-1);
    if (event.key === "ArrowRight") navigate(1);
  });
}

function setupClipModal() {
  const modal = document.getElementById("clip-modal");
  const closeButton = modal?.querySelector(".clip-modal-close");
  const code = document.getElementById("clip-modal-code");
  const title = document.getElementById("clip-modal-title");
  const copy = document.getElementById("clip-modal-copy");
  const visualizer = document.getElementById("clip-visualizer");
  const action = document.getElementById("clip-modal-action");
  const output = document.getElementById("clip-output");
  let lastTrigger = null;

  const close = () => {
    if (!modal) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
    lastTrigger?.focus();
  };

  document.querySelectorAll(".clip-card").forEach((button) => {
    button.addEventListener("click", () => {
      const clip = clips[Number(button.dataset.clipIndex || 0)];
      if (!clip || !modal) return;
      lastTrigger = button;
      if (code) code.textContent = clip.code;
      if (title) title.textContent = clip.status;
      if (copy) copy.textContent = clip.message;
      if (visualizer) visualizer.hidden = !clip.available;
      if (action) {
        action.textContent = clip.available ? "Open SoundCloud" : "Request access";
        action.href = clip.available ? soundCloudURL : "#signal";
        if (clip.available) {
          action.target = "_blank";
          action.rel = "noreferrer";
        } else {
          action.removeAttribute("target");
          action.removeAttribute("rel");
        }
      }
      if (output) output.textContent = `${clip.code} / ${clip.available ? "SIGNAL READY" : "FILE LOCKED"}`;
      if (typeof modal.showModal === "function") modal.showModal();
      else modal.setAttribute("open", "");
      closeButton?.focus();
    });
  });
  closeButton?.addEventListener("click", close);
  action?.addEventListener("click", () => {
    if (action.getAttribute("href") === "#signal") close();
  });
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
}

function copyWithSelection(text) {
  const input = document.createElement("input");
  input.value = text;
  input.setAttribute("readonly", "");
  input.setAttribute("aria-hidden", "true");
  input.style.position = "fixed";
  input.style.top = "0";
  input.style.left = "0";
  input.style.width = "1px";
  input.style.height = "1px";
  input.style.padding = "0";
  input.style.border = "0";
  input.style.opacity = "0.01";
  document.body.appendChild(input);
  input.focus({ preventScroll: true });
  input.select();
  input.setSelectionRange(0, input.value.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  input.remove();
  return copied;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // Fallback below
    }
  }
  return copyWithSelection(text);
}

function setupContactCopy() {
  const button = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  if (!button) return;
  button.addEventListener("click", async () => {
    const email = button.dataset.email || button.textContent.trim();
    const copied = await copyText(email);
    if (status) status.textContent = copied ? "CONTACT FILE COPIED" : "COPY FAILED. OPEN EMAIL INSTEAD.";
    button.classList.toggle("copied", copied);
    window.setTimeout(() => button.classList.remove("copied"), 1200);
  });
}

/* 1. Hero Waveform Signal Monitor Animator */
function setupHeroWaveform() {
  const container = document.getElementById("hero-waveform");
  if (!container) return;

  const barCount = 36;
  const bars = [];
  const phases = [];

  // Generate bars
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("div");
    bar.className = "waveform-bar";
    container.appendChild(bar);
    bars.push(bar);
    phases.push(Math.random() * Math.PI * 2);
  }

  let speed = 0.04;
  let targetSpeed = 0.04;
  let modulation = 1.0;
  let targetModulation = 1.0;

  // Modulate signal speed/amplitude on mouse move over the hero area
  const heroSection = document.getElementById("top");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const relY = (e.clientY - rect.top) / rect.height;
      const relX = (e.clientX - rect.left) / rect.width;
      
      // Control waveform properties dynamically
      targetSpeed = 0.02 + relX * 0.07;
      targetModulation = 0.5 + (1 - relY) * 1.5;
    });

    heroSection.addEventListener("mouseleave", () => {
      targetSpeed = 0.04;
      targetModulation = 1.0;
    });
  }

  let globalPhase = 0;
  let isWaveformVisible = true;
  let animFrameId = null;

  function animateWaveform() {
    if (!isWaveformVisible) return;
    
    if (prefersReducedMotion) {
      // static/calm state for reduced motion
      bars.forEach((bar, index) => {
        const val = Math.sin(index * 0.3) * 20 + 40;
        bar.style.height = `${val}%`;
      });
      return;
    }

    // Interpolate towards target speed and modulation
    speed += (targetSpeed - speed) * 0.1;
    modulation += (targetModulation - modulation) * 0.1;
    globalPhase += speed;

    bars.forEach((bar, index) => {
      const personalPhase = phases[index] + globalPhase;
      // Combine multiple frequencies for a natural organic synth analyzer look
      const signalValue = 
        Math.sin(personalPhase) * 0.5 + 
        Math.sin(personalPhase * 2.3 + index * 0.1) * 0.3 + 
        Math.cos(personalPhase * 0.7 - index * 0.2) * 0.2;
      
      // Map to 10% - 95% range
      let height = (signalValue * 40 + 55) * modulation;
      height = Math.max(10, Math.min(95, height));
      
      bar.style.height = `${height}%`;
    });

    animFrameId = requestAnimationFrame(animateWaveform);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isWaveformVisible = entry.isIntersecting;
      if (isWaveformVisible) {
        if (!animFrameId) animateWaveform();
      } else {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }
      }
    });
  });
  
  if (heroSection) {
    observer.observe(heroSection);
  } else {
    animateWaveform();
  }
}



/* Audio Player System */
function setupAudioPlayer() {
  const playerBar = document.getElementById("player-bar");
  const playBtn = document.getElementById("player-play");
  const prevBtn = document.getElementById("player-prev");
  const nextBtn = document.getElementById("player-next");
  const volBtn = document.getElementById("player-vol-btn");
  const volSlider = document.getElementById("player-vol-slider");
  const progressWrap = document.getElementById("player-progress-wrap");
  const progressFill = document.getElementById("player-progress-fill");
  const timeDisplay = document.getElementById("player-time");
  const titleDisplay = document.getElementById("player-title");
  const codeDisplay = document.getElementById("player-code");
  const moodDisplay = document.getElementById("player-mood");
  const vizContainer = document.getElementById("player-viz");
  const iconPlay = playBtn?.querySelector(".icon-play");
  const iconPause = playBtn?.querySelector(".icon-pause");
  const iconVol = volBtn?.querySelector(".icon-vol");
  const iconMute = volBtn?.querySelector(".icon-mute");

  if (!playerBar || !playBtn) return;

  // Map track data to actual music files
  const playlist = [
    { ...tracks[0], file: "music/mczorronusicweb.mp3" },
    { ...tracks[1], file: "music/mczorronusicweb2.mp3" },
    { ...tracks[2], file: "music/mczorronusicweb3.mp3" },
    { ...tracks[3], file: "music/mczorronusicweb4.mp3" },
  ];

  const audio = new Audio();
  audio.preload = "metadata";
  audio.volume = 0.8;
  let currentIndex = 0;
  let isPlaying = false;
  let lastVolume = 0.8;
  let vizBars = [];
  let vizPhases = [];
  let vizAnimId = null;

  // Build mini waveform bars
  if (vizContainer) {
    const barCount = 48;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("div");
      bar.className = "player-viz-bar";
      vizContainer.appendChild(bar);
      vizBars.push(bar);
      vizPhases.push(Math.random() * Math.PI * 2);
    }
  }

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  const blobCache = {};

  function loadTrack(index) {
    currentIndex = index;
    const track = playlist[index];
    
    if (titleDisplay) titleDisplay.textContent = track.title;
    if (codeDisplay) codeDisplay.textContent = track.code;
    if (moodDisplay) moodDisplay.textContent = `${track.mood} / ${track.year}`;
    if (progressFill) progressFill.style.width = "0%";
    if (timeDisplay) timeDisplay.textContent = "0:00 / 0:00";
    if (progressWrap) progressWrap.setAttribute("aria-valuenow", 0);

    if (blobCache[track.file]) {
      audio.src = blobCache[track.file];
      audio.load();
    } else {
      audio.src = track.file;
      audio.load();
      
      // Background fetch to fix seeking on basic local servers that don't support Range requests
      fetch(track.file).then(res => res.blob()).then(blob => {
        const url = URL.createObjectURL(blob);
        blobCache[track.file] = url;
        
        // If still on the same track, hot-swap to the blob to enable seeking
        if (currentIndex === index && !audio.src.startsWith('blob:')) {
          const wasPlaying = !audio.paused;
          const time = audio.currentTime;
          audio.src = url;
          audio.addEventListener("loadedmetadata", function onMeta() {
            audio.currentTime = time;
            if (wasPlaying) audio.play();
            audio.removeEventListener("loadedmetadata", onMeta);
          });
          audio.load();
        }
      }).catch(() => { /* Ignore fetch errors */ });
    }
  }

  function showPlayer() {
    playerBar.classList.add("player-visible");
  }

  function updatePlayState() {
    if (isPlaying) {
      iconPlay && (iconPlay.style.display = "none");
      iconPause && (iconPause.style.display = "");
      playBtn.classList.add("is-playing");
      playBtn.setAttribute("aria-label", "Pause music");
      startViz();
    } else {
      iconPlay && (iconPlay.style.display = "");
      iconPause && (iconPause.style.display = "none");
      playBtn.classList.remove("is-playing");
      playBtn.setAttribute("aria-label", "Play music");
      stopViz();
    }
  }

  async function play() {
    try {
      await audio.play();
      isPlaying = true;
      updatePlayState();
    } catch {
      isPlaying = false;
      updatePlayState();
    }
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    updatePlayState();
  }

  function togglePlay() {
    showPlayer();
    if (isPlaying) {
      pause();
    } else {
      if (!audio.src || audio.src === window.location.href) {
        loadTrack(0);
      }
      play();
    }
  }

  function prevTrack() {
    const newIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(newIndex);
    if (isPlaying) play();
  }

  function nextTrack() {
    const newIndex = (currentIndex + 1) % playlist.length;
    loadTrack(newIndex);
    if (isPlaying) play();
  }

  // Progress bar seeking
  function seek(event) {
    if (!progressWrap) return;
    const rect = progressWrap.getBoundingClientRect();
    let clientX = event.clientX;
    if (clientX === undefined && event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
    }
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    
    // Instantly update UI for immediate feedback
    if (progressFill) progressFill.style.width = `${percent * 100}%`;

    const duration = audio.duration;
    if (duration && isFinite(duration) && !isNaN(duration)) {
      try {
        audio.currentTime = percent * duration;
        if (timeDisplay) timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(duration)}`;
      } catch (err) {
        // Audio might not be ready yet
      }
    }
  }

  // Volume controls
  function setVolume(value) {
    audio.volume = value;
    volSlider.value = Math.round(value * 100);
    updateVolIcon();
  }

  function updateVolIcon() {
    const muted = audio.volume === 0;
    iconVol && (iconVol.style.display = muted ? "none" : "");
    iconMute && (iconMute.style.display = muted ? "" : "none");
  }

  function toggleMute() {
    if (audio.volume > 0) {
      lastVolume = audio.volume;
      setVolume(0);
    } else {
      setVolume(lastVolume || 0.8);
    }
  }

  // Mini waveform visualizer animation
  let vizGlobalPhase = 0;

  function animateViz() {
    if (prefersReducedMotion) return;
    vizGlobalPhase += 0.06;
    vizBars.forEach((bar, i) => {
      const phase = vizPhases[i] + vizGlobalPhase;
      const signal =
        Math.sin(phase) * 0.4 +
        Math.sin(phase * 2.1 + i * 0.08) * 0.35 +
        Math.cos(phase * 0.6 - i * 0.15) * 0.25;
      let height = (signal * 35 + 50);
      height = Math.max(3, Math.min(95, height));
      bar.style.height = `${height}%`;
    });
    vizAnimId = requestAnimationFrame(animateViz);
  }

  function startViz() {
    if (vizAnimId || prefersReducedMotion) return;
    vizContainer && (vizContainer.style.opacity = "0.1");
    animateViz();
  }

  function stopViz() {
    if (vizAnimId) {
      cancelAnimationFrame(vizAnimId);
      vizAnimId = null;
    }
    if (vizContainer) {
      vizContainer.style.opacity = "0.04";
      vizBars.forEach((bar) => { bar.style.height = "3%"; });
    }
  }

  // Time update handler
  audio.addEventListener("timeupdate", () => {
    if (!isFinite(audio.duration)) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (timeDisplay) timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    if (progressWrap) progressWrap.setAttribute("aria-valuenow", Math.round(percent));
  });

  // Auto-advance on track end
  audio.addEventListener("ended", () => {
    nextTrack();
  });

  // Audio metadata loaded
  audio.addEventListener("loadedmetadata", () => {
    if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  // Bind UI events
  playBtn.addEventListener("click", togglePlay);
  prevBtn?.addEventListener("click", prevTrack);
  nextBtn?.addEventListener("click", nextTrack);
  volBtn?.addEventListener("click", toggleMute);

  volSlider?.addEventListener("input", () => {
    const value = Number(volSlider.value) / 100;
    audio.volume = value;
    lastVolume = value > 0 ? value : lastVolume;
    updateVolIcon();
  });

  // Progress seeking — both click and drag
  let isSeeking = false;

  progressWrap?.addEventListener("mousedown", (e) => {
    isSeeking = true;
    seek(e);
  });

  document.addEventListener("mousemove", (e) => {
    if (isSeeking) seek(e);
  });

  document.addEventListener("mouseup", () => {
    isSeeking = false;
  });

  progressWrap?.addEventListener("touchstart", (e) => {
    isSeeking = true;
    seek(e.touches[0]);
  }, { passive: true });

  progressWrap?.addEventListener("touchmove", (e) => {
    if (isSeeking) seek(e.touches[0]);
  }, { passive: true });

  progressWrap?.addEventListener("touchend", () => {
    isSeeking = false;
  });

  // Keyboard support on progress bar
  progressWrap?.addEventListener("keydown", (e) => {
    if (!isFinite(audio.duration)) return;
    const step = audio.duration * 0.05;
    if (e.key === "ArrowRight") audio.currentTime = Math.min(audio.duration, audio.currentTime + step);
    if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - step);
  });

  // Load first track and attempt autoplay immediately on load or first interaction
  loadTrack(0);
  showPlayer();

  async function attemptAutoplay() {
    try {
      await audio.play();
      isPlaying = true;
      updatePlayState();
    } catch (err) {
      // Autoplay blocked by browser policy - wait for user interaction.
      // Removed the aggressive loop as it degrades user experience.
    }
  }
  attemptAutoplay();

  // Global click delegation: any [data-play-track] triggers playback
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-play-track]");
    if (!trigger) return;
    const index = Number(trigger.dataset.playTrack);
    if (index >= 0 && index < playlist.length) {
      loadTrack(index);
      showPlayer();
      play();
    }
  });

  // Keyboard support (Enter/Space) on track rows
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const trigger = e.target.closest("[data-play-track]");
    if (!trigger) return;
    e.preventDefault();
    const index = Number(trigger.dataset.playTrack);
    if (index >= 0 && index < playlist.length) {
      loadTrack(index);
      showPlayer();
      play();
    }
  });
}

renderContent();
setupLoader();
setupHeader();
setupSoundCloudLoader();
setupReveals();
setupHeroParallax();
setupScrollState();
setupArchiveFilters();
setupLightbox();
setupClipModal();
setupContactCopy();
setupHeroWaveform();
setupAudioPlayer();

