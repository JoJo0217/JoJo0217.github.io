const content = window.siteContent;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function setText() {
  document.title =
    document.body.dataset.page === "home"
      ? content.basics.name
      : `${document.title.split("|")[0].trim()} | ${content.basics.name}`;

  document.querySelectorAll("[data-text]").forEach((node) => {
    node.textContent = content.basics[node.dataset.text] || "";
  });
}

function setImages() {
  document.querySelectorAll("[data-image]").forEach((image) => {
    const key = image.dataset.image;
    image.src = content.basics[key] || content.basics.visual;
  });
}

function appendRichText(target, contentParts) {
  if (typeof contentParts === "string") {
    target.append(contentParts);
    return;
  }

  contentParts.forEach((part) => {
    if (typeof part === "string") {
      target.append(part);
      return;
    }

    const anchor = createElement("a", "", part.label);
    anchor.href = part.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    target.appendChild(anchor);
  });
}

function renderBio(target, paragraphs) {
  paragraphs.forEach((paragraph) => {
    const node = createElement("p", "");
    appendRichText(node, paragraph);
    target.appendChild(node);
  });
}

function renderLinks(target, links) {
  target.appendChild(createElement("span", "contact-label", "Contact: "));
  links.forEach((link, index) => {
    const anchor = createElement("a", "", link.label);
    anchor.href = link.url;
    if (!link.url.startsWith("mailto:") && !link.url.startsWith("tel:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    target.appendChild(anchor);
    if (index < links.length - 1) target.append(" / ");
  });
}

function renderNews(target, items) {
  items.forEach((item) => {
    const row = createElement("p", "news-item");
    row.appendChild(createElement("span", "date", item.date));
    if (item.link) {
      row.append(item.textBefore || "");
      const anchor = createElement("a", "", item.link.label);
      anchor.href = item.link.url;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      row.appendChild(anchor);
      row.append(item.textAfter || "");
    } else {
      row.append(item.text);
    }
    target.appendChild(row);
  });
}

function renderPublications(target, publications) {
  publications.forEach((publication) => {
    const article = createElement("article", "publication");
    const marker = createElement("div", "pub-marker", publication.year);
    const body = createElement("div", "pub-body");
    const authors = createElement("p", "authors");

    body.appendChild(createElement("h2", "", publication.title));
    appendHighlightedName(authors, publication.authors, content.basics.name);
    body.appendChild(authors);
    body.appendChild(createElement("p", "venue", publication.venue));

    if (publication.links?.length) {
      const links = createElement("p", "pub-links");
      publication.links.forEach((link) => {
        const anchor = createElement("a", "", link.label);
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
        links.appendChild(anchor);
      });
      body.appendChild(links);
    }

    article.appendChild(marker);
    article.appendChild(body);
    target.appendChild(article);
  });
}

function appendHighlightedName(target, text, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pieces = text.split(new RegExp(`(${escapedName})`, "g"));

  pieces.forEach((piece) => {
    if (piece === name) {
      target.appendChild(createElement("span", "me", piece));
      return;
    }
    target.append(piece);
  });
}

function renderTimeline(target, entries) {
  entries.forEach((entry) => {
    const article = createElement("article", "timeline-item");
    const header = createElement("div", "item-header");
    const title = createElement("div", "");
    title.appendChild(createElement("h3", "", entry.title));
    title.appendChild(createElement("p", "place", entry.place));
    header.appendChild(title);
    if (entry.period) header.appendChild(createElement("span", "period", entry.period));
    article.appendChild(header);
    if (entry.meta) article.appendChild(createElement("p", "meta", entry.meta));
    if (entry.points?.length) {
      const list = createElement("ul", "bullets");
      entry.points.forEach((point) => list.appendChild(createElement("li", "", point)));
      article.appendChild(list);
    }
    target.appendChild(article);
  });
}

function renderSimpleList(target, items) {
  items.forEach((item) => {
    const row = createElement("article", "simple-item");
    if (typeof item === "string") {
      row.textContent = item;
    } else {
      row.appendChild(createElement("h3", "", item.title));
      row.appendChild(createElement("p", "place", item.period));
      if (item.detail) row.appendChild(createElement("p", "meta", item.detail));
    }
    target.appendChild(row);
  });
}

function renderSkills(target, groups) {
  groups.forEach((group) => {
    const block = createElement("div", "skill-group");
    block.appendChild(createElement("h3", "", group.name));
    const tags = createElement("div", "tag-row");
    group.items.forEach((item) => tags.appendChild(createElement("span", "tag", item)));
    block.appendChild(tags);
    target.appendChild(block);
  });
}

function renderInfoTable(target, rows) {
  rows.forEach((row) => {
    const label = createElement("div", "info-label", row.label);
    const value = createElement("div", "info-value");
    if (row.url) {
      const anchor = createElement("a", "", row.value);
      anchor.href = row.url;
      if (!row.url.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
      value.appendChild(anchor);
    } else {
      value.textContent = row.value;
    }
    target.appendChild(label);
    target.appendChild(value);
  });
}

function renderTags(target, items) {
  items.forEach((item) => target.appendChild(createElement("span", "tag", item)));
}

function renderLists() {
  const renderers = {
    bio: renderBio,
    links: renderLinks,
    news: renderNews,
    selectedPublications: renderPublications,
    publications: renderPublications,
    education: renderTimeline,
    experience: renderTimeline,
    activities: renderSimpleList,
    honors: renderSimpleList,
    military: renderSimpleList,
    skills: renderSkills,
    cvBasics: renderInfoTable,
    languages: renderInfoTable,
    interests: renderTags,
  };

  document.querySelectorAll("[data-list]").forEach((target) => {
    const key = target.dataset.list;
    const data =
      key === "selectedPublications"
        ? content.publications.filter((publication) => publication.selected)
        : content[key] || content.basics[key];
    renderers[key](target, data);
  });
}

setText();
setImages();
renderLists();
