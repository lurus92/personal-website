function toggleNav() {
  const nav = document.querySelector('.nav-links');
  if (nav) nav.classList.toggle('open');
}

function highlightActiveNav() {
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && (path.endsWith(href) || (href === '/' && path === '/'))) {
      link.classList.add('active');
    }
  });
}

function renderProjects(containerSelector, limit) {
  const container = document.querySelector(containerSelector);
  if (!container || !window.projectsData) return;
  const items = limit ? window.projectsData.slice(0, limit) : window.projectsData;
  container.innerHTML = items
    .map(
      (project) => `
        <article class="card">
          <div class="tag-grid">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <h3>${project.name}</h3>
          <p class="muted">${project.summary}</p>
          <div class="tag-grid">
            ${project.techStack.map((tech) => `<span class="badge">${tech}</span>`).join('')}
          </div>
          <div class="btn-row">
            <a class="btn secondary" href="project.html?slug=${project.slug}">View detail</a>
            <a class="btn" href="${project.cta}" target="_blank" rel="noreferrer">Live / Demo</a>
          </div>
        </article>
      `
    )
    .join('');
}

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const container = document.querySelector('#project-detail');
  if (!slug || !container || !window.projectsData) return;
  const project = window.projectsData.find((p) => p.slug === slug);
  if (!project) {
    container.innerHTML = '<p class="muted">Project not found.</p>';
    return;
  }
  container.innerHTML = `
    <div class="card">
      <div class="tag-grid">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      <h2>${project.name}</h2>
      <p class="muted">${project.summary}</p>
      <div class="list">${project.highlights.map((item) => `<div>• ${item}</div>`).join('')}</div>
      <h3>Tech stack</h3>
      <div class="tag-grid">${project.techStack.map((tech) => `<span class="badge">${tech}</span>`).join('')}</div>
      <h3>Outcomes</h3>
      <div class="stat-grid">${project.metrics.map((metric) => `<div class="stat"><strong>${metric.label}</strong><p class="muted">${metric.value}</p></div>`).join('')}</div>
      <div class="btn-row">
        <a class="btn" href="${project.cta}" target="_blank" rel="noreferrer">Open project</a>
        <a class="btn secondary" href="projects.html">Back to projects</a>
      </div>
    </div>
  `;
}

function renderBlogList(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container || !window.blogPosts) return;
  container.innerHTML = window.blogPosts
    .map(
      (post) => `
      <article class="card">
        <div class="tag-grid">${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
        <h3>${post.title}</h3>
        <p class="muted">${post.summary}</p>
        <div class="muted">${post.date}</div>
        <div class="btn-row">
          <a class="btn secondary" href="blog/post.html?slug=${post.slug}">Read article</a>
        </div>
      </article>
    `
    )
    .join('');
}

function renderBlogPost() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const container = document.querySelector('#blog-post');
  if (!container || !window.blogPosts) return;
  const post = window.blogPosts.find((p) => p.slug === slug);
  if (!post) {
    container.innerHTML = '<p class="muted">Article not found.</p>';
    return;
  }
  container.innerHTML = `
    <article class="card">
      <div class="tag-grid">${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      <h1>${post.title}</h1>
      <p class="muted">${post.date}</p>
      <div class="list">${post.content.map((block) => `<p>${block}</p>`).join('')}</div>
      <div class="alert">Want to discuss this topic? <a href="../contact.html">Get in touch</a>.</div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  renderProjects('#projects-grid', 3);
  renderProjects('#projects-all');
  renderProjectDetail();
  renderBlogList('#blog-grid');
  renderBlogList('#blog-all');
  renderBlogPost();
});
