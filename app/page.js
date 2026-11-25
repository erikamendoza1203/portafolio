"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Pasaporte del terror",
    category: "Diseno editorial",
    year: "2026",
    description:
      "Diseno editorial inspirado en relatos de terror. El proyecto reune portadas, sinopsis y recursos graficos en una publicacion con una direccion visual comun.",
    palette: ["#493326", "#596447", "#d99a8c"],
    motif: "book"
  },
  {
    title: "Mapa de Huilango 1590",
    category: "Vectorizacion - Desarrollo cultural",
    year: "2026",
    description:
      "Vectorizacion de un mapa historico. El trabajo conserva irregularidades y detalles del original mientras explora como traducir una imagen de baja resolucion a un lenguaje vectorial.",
    palette: ["#596447", "#e5d5c9", "#c85f3c"],
    motif: "map"
  },
  {
    title: "Canalizacion de perros",
    category: "Investigacion - Experiencia",
    year: "2026",
    description:
      "Proyecto de diseno centrado en ayudar a las personas a tomar decisiones informadas al encontrar un perro en situacion de calle y canalizarlo con opciones adecuadas.",
    palette: ["#d99a8c", "#493326", "#e5d5c9"],
    motif: "route"
  },
  {
    title: "Mision internacional",
    category: "Comunicacion - Motion",
    year: "2026",
    description:
      "Pieza audiovisual para comunicar una mision internacional en Kenia mediante narracion, mapas, fotografias y recursos animados de tono calido.",
    palette: ["#c85f3c", "#e5d5c9", "#596447"],
    motif: "sun"
  },
  {
    title: "Dia del Padrino",
    category: "Campana - Diseno grafico",
    year: "2026",
    description:
      "Piezas de comunicacion para una venta de aguas frescas. La jerarquia prioriza los sabores, tamanos y precios para facilitar su lectura en pantalla e impresion.",
    palette: ["#596447", "#e5d5c9", "#d99a8c"],
    motif: "menu"
  },
  {
    title: "Moda Viva",
    category: "Diseno web - Prototipo",
    year: "2026",
    description:
      "Exploracion de una tienda digital para una marca de moda sustentable, con navegacion de productos, tallas y contenido editorial.",
    palette: ["#e83f6f", "#161616", "#e5d5c9"],
    motif: "fashion"
  },
  {
    title: "PetLovers MX",
    category: "Diseno web - Prototipo",
    year: "2026",
    description:
      "Propuesta de sitio para una tienda y clinica veterinaria, con informacion de servicios y agenda de citas presenciales.",
    palette: ["#2874a6", "#f3ce49", "#f7f4ec"],
    motif: "pet"
  },
  {
    title: "Identidad ERAZ",
    category: "Branding - Identidad visual",
    year: "2026",
    description:
      "Construccion de la marca personal ERAZ: un estudio creativo de comunicacion visual con una identidad calida, versatil e intencional.",
    palette: ["#493326", "#d99a8c", "#c85f3c"],
    motif: "eraz"
  }
];

function makeArt(project, w = 720, h = 500) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const x = canvas.getContext("2d");
  if (!x) return canvas;

  const [a, b, d] = project.palette;
  x.fillStyle = a;
  x.fillRect(0, 0, w, h);

  const grad = x.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "rgba(255,255,255,.16)");
  grad.addColorStop(1, "rgba(0,0,0,.12)");
  x.fillStyle = grad;
  x.fillRect(0, 0, w, h);

  x.save();
  x.globalAlpha = 0.85;

  if (project.motif === "book") {
    x.fillStyle = "#e5d5c9";
    x.translate(w * 0.5, h * 0.52);
    x.rotate(-0.08);
    x.fillRect(-w * 0.22, -h * 0.31, w * 0.43, h * 0.62);
    x.fillStyle = b;
    x.fillRect(-w * 0.19, -h * 0.28, w * 0.37, h * 0.18);
    x.fillStyle = d;
    x.beginPath();
    x.arc(w * 0.05, h * 0.02, Math.min(w, h) * 0.12, 0, 7);
    x.fill();
    x.restore();
    x.save();
  }

  if (project.motif === "map") {
    x.strokeStyle = "#e5d5c9";
    x.lineWidth = 2;
    x.beginPath();
    for (let i = 0; i < 18; i += 1) {
      const xx = w * (0.22 + Math.sin(i * 1.8) * 0.2 + i * 0.018);
      const yy = h * (0.14 + i * 0.045);
      if (i) x.lineTo(xx, yy);
      else x.moveTo(xx, yy);
    }
    x.stroke();
    x.fillStyle = d;
    for (let i = 0; i < 14; i += 1) {
      x.beginPath();
      x.arc(w * (0.2 + (i % 5) * 0.13), h * (0.18 + Math.floor(i / 5) * 0.2), 3 + (i % 3), 0, 7);
      x.fill();
    }
    x.restore();
    x.save();
  }

  if (project.motif === "route") {
    x.strokeStyle = "#493326";
    x.lineWidth = 11;
    x.lineCap = "round";
    x.beginPath();
    x.moveTo(w * 0.18, h * 0.75);
    x.bezierCurveTo(w * 0.4, h * 0.12, w * 0.62, h * 0.94, w * 0.83, h * 0.28);
    x.stroke();
    x.fillStyle = "#f4ece5";
    [
      [0.18, 0.75],
      [0.83, 0.28]
    ].forEach((p) => {
      x.beginPath();
      x.arc(w * p[0], h * p[1], 14, 0, 7);
      x.fill();
    });
    x.restore();
    x.save();
  }

  if (project.motif === "sun") {
    x.fillStyle = "#e5d5c9";
    x.beginPath();
    x.arc(w * 0.72, h * 0.3, h * 0.18, 0, 7);
    x.fill();
    x.strokeStyle = "rgba(244,236,229,.8)";
    x.lineWidth = 2;
    for (let i = 0; i < 4; i += 1) {
      x.beginPath();
      x.moveTo(w * 0.1, h * (0.3 + i * 0.13));
      x.quadraticCurveTo(w * 0.5, h * (0.2 + i * 0.14), w * 0.9, h * (0.45 + i * 0.07));
      x.stroke();
    }
    x.restore();
    x.save();
  }

  if (project.motif === "menu") {
    x.fillStyle = "#f4ece5";
    x.fillRect(w * 0.15, h * 0.17, w * 0.7, h * 0.66);
    x.fillStyle = a;
    x.fillRect(w * 0.21, h * 0.23, w * 0.58, h * 0.09);
    x.fillStyle = d;
    for (let i = 0; i < 3; i += 1) {
      x.beginPath();
      x.arc(w * (0.28 + i * 0.22), h * 0.52, 22, 0, 7);
      x.fill();
    }
    x.fillStyle = b;
    x.fillRect(w * 0.22, h * 0.71, w * 0.56, h * 0.035);
    x.restore();
    x.save();
  }

  if (project.motif === "fashion") {
    x.fillStyle = "#f4ece5";
    x.beginPath();
    x.moveTo(w * 0.48, h * 0.18);
    x.lineTo(w * 0.36, h * 0.31);
    x.lineTo(w * 0.42, h * 0.44);
    x.lineTo(w * 0.34, h * 0.79);
    x.lineTo(w * 0.67, h * 0.79);
    x.lineTo(w * 0.58, h * 0.44);
    x.lineTo(w * 0.65, h * 0.31);
    x.lineTo(w * 0.53, h * 0.18);
    x.closePath();
    x.fill();
    x.strokeStyle = b;
    x.lineWidth = 3;
    x.stroke();
    x.restore();
    x.save();
  }

  if (project.motif === "pet") {
    x.fillStyle = "#f7f4ec";
    x.beginPath();
    x.arc(w * 0.5, h * 0.52, h * 0.25, 0, 7);
    x.fill();
    x.fillStyle = d;
    [-0.13, 0.13].forEach((v) => {
      x.beginPath();
      x.arc(w * (0.5 + v), h * 0.48, 6, 0, 7);
      x.fill();
    });
    x.beginPath();
    x.arc(w * 0.5, h * 0.58, 8, 0, 7);
    x.fill();
    x.restore();
    x.save();
  }

  if (project.motif === "eraz") {
    x.strokeStyle = "#f4ece5";
    x.lineWidth = 4;
    x.beginPath();
    x.arc(w * 0.5, h * 0.5, h * 0.28, 0, 7);
    x.stroke();
    x.strokeStyle = d;
    x.beginPath();
    x.arc(w * 0.5, h * 0.5, h * 0.19, 0, 7);
    x.stroke();
    x.restore();
    x.save();
  }

  x.globalAlpha = 1;
  x.fillStyle = "rgba(244,236,229,.72)";
  x.font = "600 13px Poppins, sans-serif";
  x.fillText(project.category.toUpperCase(), 30, h - 60);
  x.fillStyle = "#f4ece5";
  x.font = "500 30px Poppins, sans-serif";
  x.fillText(project.title, 30, h - 27);
  x.restore();

  return canvas;
}

export default function Home() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let active = true;
    let raf = null;
    let renderer = null;
    let scene = null;
    let camera = null;
    let group = null;
    let raycaster = null;
    let mouse = null;
    const meshes = [];
    let dragging = false;
    let moved = false;
    let prev = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let downAt = null;
    let startRender = () => {};
    let stopRender = () => {};

    const listeners = [];
    const addListener = (el, type, fn, options) => {
      el.addEventListener(type, fn, options);
      listeners.push(() => el.removeEventListener(type, fn, options));
    };

    const addGrid = (openDetail) => {
      const grid = document.getElementById("projectGrid");
      if (!grid) return;

      projects.forEach((p, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "project-card";
        btn.innerHTML =
          '<span class="project-visual"><canvas></canvas><span class="card-index">0' +
          (i + 1) +
          '</span><span class="view-pill">Ver</span></span><span class="card-meta"><span class="card-title"></span><span class="card-category"></span></span>';
        const title = btn.querySelector(".card-title");
        const category = btn.querySelector(".card-category");
        const can = btn.querySelector("canvas");
        if (!title || !category || !can) return;

        title.textContent = p.title;
        category.textContent = p.category;

        const ctx = can.getContext("2d");
        const art = makeArt(p);
        can.width = art.width;
        can.height = art.height;
        if (ctx) ctx.drawImage(art, 0, 0);

        addListener(btn, "click", () => openDetail(i));
        grid.appendChild(btn);
      });
    };

    const menuPanel = document.getElementById("menuPanel");
    const menuToggle = document.getElementById("menuToggle");
    const backdrop = document.getElementById("detailBackdrop");
    const detailMeta = document.getElementById("detailMeta");
    const detailTitle = document.getElementById("detailTitle");
    const detailText = document.getElementById("detailText");
    const detailCover = document.getElementById("detailCover");
    const detailClose = document.getElementById("detailClose");
    const gallery = document.getElementById("gallery");
    const canvas = document.getElementById("sphere");
    if (!menuPanel || !menuToggle || !backdrop || !detailMeta || !detailTitle || !detailText || !detailCover || !detailClose || !gallery || !canvas) {
      return undefined;
    }

    const openDetail = (i) => {
      const p = projects[i];
      if (!p) return;
      detailMeta.textContent = `${p.category} - ${p.year}`;
      detailTitle.textContent = p.title;
      detailText.textContent = p.description;
      detailCover.replaceChildren();
      detailCover.appendChild(makeArt(p, 900, 380));
      backdrop.classList.add("open");
    };

    const closeDetail = () => {
      backdrop.classList.remove("open");
    };

    const views = ["gallery", "projects", "about"];
    const switchView = (name) => {
      let target = name;
      if (!views.includes(target)) target = "gallery";
      document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === target));
      document.querySelectorAll(".dock [data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === target));
      menuPanel.classList.remove("open");

      if (window.location.hash !== `#${target}`) {
        window.history.replaceState(null, "", `#${target}`);
      }
      if (target === "gallery") {
        startRender();
      } else {
        stopRender();
      }
    };

    addGrid(openDetail);

    addListener(detailClose, "click", closeDetail);
    addListener(backdrop, "click", (e) => {
      if (e.target === backdrop) closeDetail();
    });
    addListener(window, "keydown", (e) => {
      if (e.key === "Escape") {
        closeDetail();
        menuPanel.classList.remove("open");
      }
    });
    addListener(menuToggle, "click", () => menuPanel.classList.toggle("open"));
    document.querySelectorAll("[data-view]").forEach((btn) => {
      addListener(btn, "click", () => switchView(btn.dataset.view));
    });
    addListener(window, "hashchange", () => switchView(window.location.hash.slice(1)));

    if (window.location.hash && views.includes(window.location.hash.slice(1))) {
      switchView(window.location.hash.slice(1));
    }

    const initThree = async () => {
      try {
        const THREE = await import("three");
        if (!active) return;

        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !window.matchMedia("(pointer: coarse)").matches
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xe5d5c9, 0);

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 10;
        group = new THREE.Group();
        scene.add(group);
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        projects.forEach((p, i) => {
          const tex = new THREE.CanvasTexture(makeArt(p, 720, 500));
          tex.colorSpace = THREE.SRGBColorSpace;
          const mat = new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            side: THREE.DoubleSide
          });
          const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 1.22), mat);
          const n = projects.length;
          const y = 1 - (2 * (i + 0.5)) / n;
          const r = Math.sqrt(1 - y * y);
          const a = Math.PI * (3 - Math.sqrt(5)) * i;
          mesh.position.set(Math.cos(a) * r * 3.75, y * 3.75, Math.sin(a) * r * 3.75);
          mesh.userData.index = i;
          group.add(mesh);
          meshes.push(mesh);
        });

        const resize = () => {
          if (!renderer || !camera) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.position.z = window.innerWidth < 600 ? 11.7 : 10;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        addListener(window, "resize", resize);

        const setMouse = (e) => {
          const rect = canvas.getBoundingClientRect();
          mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        };

        function renderLoop() {
          if (!renderer || !group || !camera || !gallery.classList.contains("active")) return;
          raf = requestAnimationFrame(renderLoop);
          if (!dragging) {
            group.rotation.y += velocity.x;
            group.rotation.x += velocity.y;
            velocity.x *= 0.96;
            velocity.y *= 0.96;
            if (Math.abs(velocity.x) + Math.abs(velocity.y) < 0.0005) group.rotation.y += 0.0005;
          }
          meshes.forEach((m) => m.quaternion.copy(camera.quaternion));
          renderer.render(scene, camera);
        }

        startRender = () => {
          if (!raf) renderLoop();
        };
        stopRender = () => {
          if (raf) {
            cancelAnimationFrame(raf);
            raf = null;
          }
        };

        addListener(canvas, "pointerdown", (e) => {
          dragging = true;
          moved = false;
          prev = { x: e.clientX, y: e.clientY };
          downAt = { x: e.clientX, y: e.clientY };
          canvas.setPointerCapture(e.pointerId);
        });

        addListener(canvas, "pointermove", (e) => {
          if (!group || !mouse) return;
          setMouse(e);
          if (!dragging) return;
          const dx = e.clientX - prev.x;
          const dy = e.clientY - prev.y;
          if (Math.abs(e.clientX - downAt.x) + Math.abs(e.clientY - downAt.y) > 5) moved = true;
          group.rotation.y += dx * 0.006;
          group.rotation.x += dy * 0.006;
          velocity = { x: dx * 0.0007, y: dy * 0.0007 };
          prev = { x: e.clientX, y: e.clientY };
        });

        addListener(canvas, "pointerup", (e) => {
          if (!camera || !raycaster || !mouse) return;
          dragging = false;
          if (!moved) {
            setMouse(e);
            raycaster.setFromCamera(mouse, camera);
            const hits = raycaster.intersectObjects(meshes);
            if (hits.length) openDetail(hits[0].object.userData.index);
          }
        });

        addListener(
          canvas,
          "wheel",
          (e) => {
            if (!group) return;
            group.rotation.y += e.deltaY * 0.0005;
          },
          { passive: true }
        );

        startRender();
      } catch (_error) {
        canvas.style.display = "none";
      }
    };

    initThree();

    return () => {
      active = false;
      stopRender();
      listeners.forEach((dispose) => dispose());
      if (renderer) renderer.dispose();
      initialized.current = false;
    };
  }, []);

  return (
    <div id="app">
      <div className="grain" />

      <header>
        <a className="brand" href="#gallery" aria-label="ERAZ, inicio">
          <span className="brandmark">E</span>
          <span className="brand-text">
            <span className="brand-name">ERAZ</span>
            <span className="brand-caption">estudio creativo</span>
          </span>
        </a>
        <div className="top-note">Diseno con intencion - Mexico</div>
      </header>

      <main>
        <section id="gallery" className="view active" aria-label="Galeria de proyectos">
          <canvas id="sphere" />
          <div className="hero-copy">
            <div className="eyebrow">Estudio creativo - Comunicacion visual</div>
            <h1>
              Diseno que <em>conecta</em>
              <br />y diferencia.
            </h1>
            <p>Ideas, proyectos y exploraciones visuales de ERAZ. Gira la esfera y descubre el trabajo.</p>
          </div>
          <div className="sphere-hint">
            <i /> arrastra para explorar <i />
          </div>
        </section>

        <section id="projects" className="view" aria-label="Indice de proyectos">
          <div className="section-head">
            <div>
              <div className="eyebrow">Seleccion de proyectos</div>
              <h2>
                Hecho con
                <br />
                intencion.
              </h2>
            </div>
            <p>
              Una seleccion de trabajos academicos y exploraciones de comunicacion visual. Cada proyecto parte de un contexto y una necesidad distinta.
            </p>
          </div>
          <div className="project-grid" id="projectGrid" />
        </section>

        <section id="about" className="view" aria-label="Acerca de ERAZ">
          <div className="about-wrap">
            <div className="about-intro">
              <div className="eyebrow">ERAZ - Estudio creativo</div>
              <h2>
                Entender primero.
                <br />
                <span>Disenar con intencion.</span>
              </h2>
              <p>
                ERAZ transforma ideas de emprendimientos y marcas en propuestas visuales estrategicas, versatiles y sensibles. El proceso empieza por comprender que necesita comunicar cada proyecto.
              </p>
            </div>

            <div className="orbit-stage" aria-hidden="true">
              <div className="orb">ERAZ</div>
            </div>

            <div className="about-details">
              <div className="about-block">
                <h3>Enfoque</h3>
                <p>
                  Creatividad con direccion, atencion al detalle y soluciones que equilibran lo visual con lo funcional. Cada decision responde a una necesidad concreta.
                </p>
              </div>
              <div className="about-block">
                <h3>Servicios</h3>
                <div className="services">
                  <span>Identidad</span>
                  <span>Editorial</span>
                  <span>Digital</span>
                  <span>Web</span>
                  <span>Fotografia</span>
                  <span>Publicidad</span>
                </div>
              </div>
              <div className="contact-row" id="contacto">
                <strong>Tienes una idea en mente?</strong>
                <span>Hablemos de lo que necesitas comunicar.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="menu-panel" id="menuPanel">
        <p>Soluciones visuales para ideas que quieren tomar forma.</p>
        <button type="button" data-view="about">
          Conoce ERAZ <small>03</small>
        </button>
        <button type="button" data-view="projects">
          Ver proyectos <small>02</small>
        </button>
        <button type="button" data-view="gallery">
          Explorar galeria <small>01</small>
        </button>
      </div>

      <nav className="dock" aria-label="Navegacion principal">
        <button type="button" className="wordmark" data-view="gallery" aria-label="Ir al inicio">
          ERAZ
        </button>
        <span className="divider" />
        <button type="button" className="active" data-view="gallery">
          <span>Galeria</span>
          <span className="num">01</span>
        </button>
        <button type="button" data-view="projects">
          <span>Proyectos</span>
          <span className="num">02</span>
        </button>
        <button type="button" data-view="about">
          <span>Estudio</span>
          <span className="num">03</span>
        </button>
        <span className="divider" />
        <button type="button" id="menuToggle" aria-label="Abrir menu">
          .
        </button>
      </nav>

      <div className="footer-note">ERAZ - Diseno que conecta y diferencia</div>

      <div className="detail-backdrop" id="detailBackdrop" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <article className="detail">
          <button type="button" className="detail-close" id="detailClose" aria-label="Cerrar">
            x
          </button>
          <div className="detail-cover" id="detailCover" />
          <div className="eyebrow" id="detailMeta" />
          <h3 id="detailTitle" />
          <p id="detailText" />
          <div className="detail-tags">
            <span>Proyecto academico</span>
            <span>Portafolio ERAZ</span>
          </div>
        </article>
      </div>
    </div>
  );
}
