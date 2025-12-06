import { projects } from './data/projects.js';
import { posts } from './data/posts.js';

const slugFromPath = () => {
  const [, folder, slug] = window.location.pathname.split('/').filter(Boolean);
  return slug || folder || '';
};

const setActiveNav = () => {
  const current = window.location.pathname.replace(/index.html$/, '') || '/';
  document.querySelectorAll('[data-nav]')?.forEach((link) => {
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.replace(/index.html$/, '');
    if (current === target) {
      link.classList.add('active');
    }
  });
};

const renderProjects = () => {
  const grid = document.querySelector('[data-project-list]');
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="panel card">
        <div class="tagline" style="margin-bottom:0.8rem;">
          <span>Lab: ${project.status}</span>
        </div>
        <h3><a href="/projects/${project.slug}/index.html">${project.name}</a></h3>
        <p>${project.summary}</p>
        <div class="badges">
          ${project.tech.map((t) => `<span class="badge">${t}</span>`).join('')}
        </div>
      </article>
    `,
    )
    .join('');
};

const renderPosts = () => {
  const list = document.querySelector('[data-post-list]');
  if (!list) return;
  list.innerHTML = posts
    .map(
      (post) => `
      <article class="panel card">
        <div class="section-header" style="margin-bottom:0.5rem;">
          <div>
            <p class="tagline" style="padding:0.3rem 0.65rem;">${post.date}</p>
            <h3 style="margin-top:0.4rem;">
              <a href="/blog/${post.slug}/index.html">${post.title}</a>
            </h3>
          </div>
          <div class="badges" style="justify-content:flex-end;">
            ${post.tags.map((t) => `<span class="badge">${t}</span>`).join('')}
          </div>
        </div>
        <p>${post.summary}</p>
      </article>
    `,
    )
    .join('');
};

const renderProjectDetail = () => {
  const target = document.querySelector('[data-project-detail]');
  if (!target) return;
  const slug = slugFromPath();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return;
  target.querySelector('[data-title]').textContent = project.name;
  target.querySelector('[data-status]').textContent = `${project.status} • ${project.tech.join(' · ')}`;
  target.querySelector('[data-summary]').textContent = project.summary;
  const outcomeList = target.querySelector('[data-outcomes]');
  if (outcomeList) {
    outcomeList.innerHTML = project.outcomes.map((item) => `<li class="list-item">${item}</li>`).join('');
  }
};

const renderPostDetail = () => {
  const target = document.querySelector('[data-post-detail]');
  if (!target) return;
  const slug = slugFromPath();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return;
  target.querySelector('[data-title]').textContent = post.title;
  target.querySelector('[data-date]').textContent = post.date;
  target.querySelector('[data-summary]').textContent = post.summary;
};

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  renderProjects();
  renderPosts();
  renderProjectDetail();
  renderPostDetail();
});
