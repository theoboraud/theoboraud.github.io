const cube = document.getElementById("cube");

const clickOnSide = (side) => {
  const activeSide = cube.dataset.side;
  cube.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube.setAttribute("data-side", side);
};

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const sideToTurn = e.target.dataset.side;
    clickOnSide(sideToTurn);
  });
});

// ── Project data ──────────────────────────────────────────────
const projects = [
  {
    title: "Medical VR Training",
    description: "A virtual reality training simulation for medical professionals, designed to provide immersive, risk-free practice environments for complex procedures.",
    stack: "C#, Unity, VR (Meta Quest)",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "VR Serious Games",
    description: "A series of serious games built in VR to deliver educational and training content in engaging, interactive environments.",
    stack: "C#, Unity, OpenXR",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "Funding Gamification App",
    description: "A gamified application designed to engage users in funding and investment workflows through game mechanics and reward systems.",
    stack: "C#, Unity, Java",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "Serious Game – CASDEN",
    description: "A serious game developed for CASDEN Banque Populaire to educate users on financial products through interactive gameplay.",
    stack: "C#, Unity",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "Working Memory Model",
    description: "A research prototype modelling working memory processes, developed during an internship at INRIA. Published on Zenodo.",
    stack: "Python, C++",
    link: "https://doi.org/10.5281/zenodo.4655870",
    img: "",
    youtube: ""
  },
  {
    title: "Edmond",
    description: "Placeholder description for Edmond.",
    stack: "Placeholder stack",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: "https://www.youtube.com/embed/6oFZJsjmdZs?start=138"
  },
  {
    title: "Portfolio Website",
    description: "This interactive 3D cube portfolio, built with vanilla HTML, CSS and JavaScript. No frameworks, no dependencies.",
    stack: "HTML, CSS, JavaScript",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "Project 8",
    description: "Placeholder description.",
    stack: "Placeholder stack",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  },
  {
    title: "Project 9",
    description: "Placeholder description.",
    stack: "Placeholder stack",
    link: "https://theoboraud.github.io/#/",
    img: "",
    youtube: ""
  }
];

// ── Modal logic ───────────────────────────────────────────────
const modal               = document.getElementById("projectModal");
const modalClose          = document.getElementById("modalClose");
const modalImg            = document.getElementById("modalImg");
const modalImgPlaceholder = document.getElementById("modalImgPlaceholder");
const modalYoutube        = document.getElementById("modalYoutube");
const modalTitle          = document.getElementById("modalTitle");
const modalDesc           = document.getElementById("modalDescription");
const modalStack          = document.getElementById("modalStack");
const modalLink           = document.getElementById("modalLink");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const p = projects[card.dataset.index];
    modalTitle.textContent = p.title;
    modalDesc.textContent  = p.description;
    modalStack.innerHTML   = `<span class="modal-stack-label">Stack: </span>${p.stack}`;
    modalLink.href         = p.link;
    modalLink.innerHTML    = `View project <i class="fas fa-link"></i>`;

    // Reset all media
    modalImg.classList.remove("has-src");
    modalImg.src = "";
    modalYoutube.style.display = "none";
    modalYoutube.src = "";
    modalImgPlaceholder.style.display = "none";

    if (p.youtube) {
      modalYoutube.src = p.youtube;
      modalYoutube.style.display = "block";
    } else if (p.img) {
      modalImg.src = p.img;
      modalImg.classList.add("has-src");
    } else {
      modalImgPlaceholder.style.display = "block";
    }

    modal.classList.add("active");
  });
});

const closeModal = () => {
  modal.classList.remove("active");
  modalYoutube.src = ""; // stops video playback
};

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});