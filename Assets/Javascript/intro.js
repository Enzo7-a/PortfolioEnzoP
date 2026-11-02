document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    if (!root.classList.contains('intro')) return;
    root.classList.add('intro-running');
    markSeen();

    const RAW = ['raw-bg-img', 'raw-bg-blur', 'raw-glass', 'raw-content', 'raw-chrome',
                 'raw-name-pos', 'raw-name-font', 'raw-name-size',
                 'raw-title-pos', 'raw-title-font', 'raw-title-size'];
    const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    const SNAP = 'cubic-bezier(0.22, 1, 0.36, 1)';
    const DRAG = 420;
    const isHome = !!document.querySelector('.welcome-section');
    const q = (ms) => (isHome ? ms : Math.round(ms * 0.65));
    const en = () => (root.lang || '').startsWith('en');
    const isPhone = () => window.innerWidth <= 600;

    const CREW = [
        { label: 'Enzo', color: '#4C8DFF', ink: '#ffffff' },
        { label: 'Design', color: '#FF5FA2', ink: '#ffffff' },
        { label: 'Dev', color: '#2FD18B', ink: '#08210f' },
        { label: 'Data', color: '#FFB547', ink: '#231503' },
        { label: 'Contenu', color: '#A78BFA', ink: '#ffffff' },
    ];
    const ARROW = '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M3 2 L3 21 L8 16.5 L11.5 24 L14.8 22.5 L11.4 15.2 L18 15.2 Z" style="fill:var(--c);stroke:#fff;stroke-width:1.6;stroke-linejoin:round"/></svg>';
    const IBEAM = '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M9 3.5h8M9 22.5h8M13 3.5v19" style="fill:none;stroke:#fff;stroke-width:3.8;stroke-linecap:round"/><path d="M9 3.5h8M9 22.5h8M13 3.5v19" style="fill:none;stroke:var(--c);stroke-width:1.9;stroke-linecap:round"/></svg>';
    const layer = el('div', 'intro-layer');
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    sizeLayer();
    const crew = CREW.slice(0, isPhone() ? 3 : 5).map((m, i) => {
        const n = el('div', 'intro-cursor');
        n.style.setProperty('--c', m.color);
        n.style.setProperty('--ink', m.ink);
        const label = m.label === 'Contenu' && en() ? 'Content' : m.label;
        n.innerHTML = `<span class="intro-cursor-icon">${ARROW}</span><span class="intro-cursor-label">${label}</span>`;
        layer.appendChild(n);
        const c = { el: n, icon: n.firstChild, color: m.color, shape: 'arrow', block: null, freeSince: 0,
                    x: window.scrollX + window.innerWidth * (0.15 + 0.17 * i), y: window.scrollY + window.innerHeight + 40 };
        n.style.transform = `translate(${c.x}px, ${c.y}px)`;
        return c;
    });
    const main = crew[0];
    const cursor = main.el;

    const panel = el('div', 'intro-panel');
    panel.innerHTML = '<div class="intro-panel-sel"></div><div class="intro-panel-rows"></div>';
    panel.setAttribute('aria-hidden', 'true');
    const skip = el('button', 'intro-skip');
    skip.type = 'button';
    skip.textContent = en() ? 'Skip' : 'Passer';
    document.body.append(panel, skip);

    let cancelled = false;
    let done = false;
    skip.addEventListener('click', () => {
        cancelled = true;
        try { sessionStorage.setItem('introSkipAll', '1'); } catch (e) {}
        finish(true);
    });
    window.addEventListener('pageshow', (e) => { if (e.persisted && !done) finish(true); });
    document.querySelectorAll('.lang-switcher a').forEach(a => a.addEventListener('click', () => finish(true)));

    let cx = main.x;
    let cy = main.y;
    let arcSide = 1;
    let cursorAnim = null;

    const KINDS = [
        { kind: 'box', sel: '.project-card, .cv-card, .project-sidebar-card, .project-carousel' },
        { kind: 'line', sel: '.cv-timeline' },
        { kind: 'dot', sel: '.cv-item' },
        { kind: 'wipe', sel: '.project-card-media, .carousel-slide:first-child, .search-bar', own: true },
        { kind: 'pop', sel: '.project-card-tags, .tech-tags-container, .skill-chips, .cv-defs, .project-filter-tags, .carousel-dots, .cv-header-actions, .hero-actions, .example-2', own: true, group: true },
        { kind: 'pop', sel: '.project-button, .cv-badge, .project-status, .project-category-badge, .btn-full-width', own: true },
        { kind: 'type', sel: 'h2, h3, h4, .project-card-title, .sidebar-title, .cv-skill-cat, .pre-title, .hero-role', own: true, plain: true },
        { kind: 'words', sel: 'p, li, h3, h4, dd, dt', own: true },
    ];
    const BLOCKS = '.cv-timeline, .project-card, .cv-item, .cv-card, .project-sidebar-card, .project-carousel, .cv-header, .project-page-header, .project-back, #project-filters, .cv-section, .project-info-section, .hero, .welcome-socials';
    const anims = [];
    const owned = new Set();
    const blocks = [];
    let onEngineDone = null;
    let panelKey = '';
    let lastNow = 0;
    let lastMeasure = 0;
    let lastScroll = window.scrollY;

    (isHome ? homeScene() : pageScene()).catch((e) => {
        if (!cancelled) {
            console.error('Intro :', e);
            finish(true);
        }
    });

    async function backgroundFirst() {
        const file = isHome ? 'FondAccueil.png' : (document.body.id === 'page-cv' ? 'FondAPropos.png' : 'FondProjets.png');
        showPanel(isHome ? '.overlay' : '.cv-wrapper::before', [['background', 'none'], ['filter', 'none']]);
        await typeRow(0, `url(${file})`, () => drop('raw-bg-img'));
        await wait(q(240));
        await typeRow(1, isHome ? 'blur(3px)' : 'blur(25px)', () => drop('raw-bg-blur'));
        await wait(q(300));
        drop('raw-glass');
        drop('raw-content');
        await wait(q(220));
    }

    async function homeScene() {
        const name = document.querySelector('.hero-name');
        if (!name) return finish(true);
        const scopes = [document.querySelector('.hero'), document.querySelector('.welcome-socials')];
        prepare(scopes);

        const nameSize = finalValue('raw-name-size', () => parseFloat(getComputedStyle(name).fontSize));
        const fonts = fontsReady();
        await wait(80);
        await backgroundFirst();
        await fonts;

        cursor.classList.add('is-visible');
        await moveToNode(name, 280);
        await press();
        select(name);
        showPanel('h1.hero-name', [['font-family', 'Times New Roman'], ['font-size', px(name)]]);
        await drag(name, 'raw-name-pos');
        unselect(name);
        await typeRow(0, 'Space Grotesk', () => drop('raw-name-font'));
        await countSize(1, 'raw-name-size', parseFloat(getComputedStyle(name).fontSize), nameSize, 380);
        await wait(120);

        onEngineDone = async () => {
            await chrome();
            finish(false);
        };
        startEngine(scopes);
    }

    async function pageScene() {
        const title = document.querySelector('.cv-header h1, .project-title');
        const scope = document.querySelector('.cv-content-wrapper');
        if (!title || !scope) return finish(true);
        prepare([scope]);

        const titleSize = finalValue('raw-title-size', () => parseFloat(getComputedStyle(title).fontSize));
        const fonts = fontsReady();
        await wait(80);
        await backgroundFirst();
        await fonts;

        cursor.classList.add('is-visible');
        await moveToNode(title, q(280));
        await press();
        select(title);
        showPanel('h1', [['font-family', 'Times New Roman'], ['font-size', px(title)]]);
        await drag(title, 'raw-title-pos');
        unselect(title);
        await typeRow(0, 'Space Grotesk', () => drop('raw-title-font'));
        await countSize(1, 'raw-title-size', parseFloat(getComputedStyle(title).fontSize), titleSize, q(360));
        await chrome();

        onEngineDone = () => finish(false);
        startEngine([scope]);
    }

    function prepare(scopes) {
        scopes.filter(Boolean).forEach(scope => {
            KINDS.forEach(({ kind, sel, own, group, plain }) => {
                scope.querySelectorAll(sel).forEach(n => {
                    if (own) {
                        if (owned.has(n) || insideOwned(n, scope)) return;
                        if (plain && n.children.length) return;
                        owned.add(n);
                    } else if (anims.some(a => a.el === n)) {
                        return;
                    }
                    anims.push(makeAnim(kind, n, group));
                });
            });
        });
    }

    function insideOwned(n, scope) {
        for (let p = n.parentElement; p && p !== scope; p = p.parentElement) {
            if (owned.has(p)) return true;
        }
        return false;
    }

    function byPage(a, b) {
        if (a === b) return 0;
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    }

    function makeAnim(kind, n, group) {
        const a = { kind, el: n, t: 0, done: false };
        if (kind === 'box') {
            a.radius = parseFloat(getComputedStyle(n).borderTopLeftRadius) || 0;
            n.classList.add('intro-anim');
            n.style.clipPath = 'inset(0 100% 100% 0)';
        } else if (kind === 'wipe') {
            n.classList.add('intro-anim');
            n.style.clipPath = 'inset(0 100% 0 0)';
        } else if (kind === 'pop') {
            a.items = group ? Array.from(n.children) : [n];
            a.lts = a.items.map(() => -1);
            a.items.forEach(it => {
                it.classList.add('intro-anim');
                it.style.opacity = '0';
                it.style.transform = 'translateY(-12px) scale(0.6)';
            });
        } else if (kind === 'type') {
            a.html = n.innerHTML;
            a.text = n.textContent.trim();
            a.n = 0;
            n.style.minHeight = `${n.getBoundingClientRect().height}px`;
            n.textContent = '';
            a.tn = document.createTextNode('');
            n.appendChild(a.tn);
            a.caret = el('span', 'intro-caret');
        } else if (kind === 'words') {
            a.spans = wrapWords(n);
            a.vals = a.spans.map(() => 0);
            a.spans.forEach(s => { s.style.opacity = '0'; });
        } else if (kind === 'line') {
            n.classList.add('intro-line');
            n.style.setProperty('--line', '0');
        } else if (kind === 'dot') {
            n.classList.add('intro-dot');
            n.style.setProperty('--dot', '0');
        }
        return a;
    }

    function wrapWords(n) {
        const nodes = [];
        const walker = document.createTreeWalker(n, NodeFilter.SHOW_TEXT, {
            acceptNode(t) {
                for (let p = t.parentElement; p && p !== n; p = p.parentElement) {
                    if (owned.has(p)) return NodeFilter.FILTER_REJECT;
                }
                return t.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            },
        });
        while (walker.nextNode()) nodes.push(walker.currentNode);
        const spans = [];
        nodes.forEach(t => {
            const frag = document.createDocumentFragment();
            t.data.split(/(\s+)/).forEach(part => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                    frag.appendChild(document.createTextNode(part));
                } else {
                    const s = el('span', 'intro-w');
                    s.textContent = part;
                    frag.appendChild(s);
                    spans.push(s);
                }
            });
            t.replaceWith(frag);
        });
        return spans;
    }

    function groupBlocks(scopes) {
        const byHost = new Map();
        anims.forEach(a => {
            let host = (a.kind === 'box' || a.kind === 'line' || a.kind === 'dot') ? a.el : a.el.closest(BLOCKS);
            if (!host || !scopes.some(s => s && s.contains(host))) host = a.el;
            if (!byHost.has(host)) byHost.set(host, []);
            byHost.get(host).push(a);
        });
        byHost.forEach((items, host) => {
            items.sort((x, y) => (x.el === host ? -1 : y.el === host ? 1 : byPage(x.el, y.el)));
            const durs = items.map(slowDuration);
            const total = durs.reduce((s, d) => s + d, 0);
            let acc = 0;
            const slots = durs.map(d => {
                const s = acc / total;
                acc += d;
                return [s, acc / total];
            });
            const line = items.length === 1 && items[0].kind === 'line';
            blocks.push({ el: host, items, slots, slow: total, line, P: 0, moved: 0, crew: null, done: false, ready: false });
        });
        blocks.sort((x, y) => byPage(x.el, y.el));
    }

    function slowDuration(a) {
        switch (a.kind) {
            case 'box': return 520;
            case 'wipe': return 650;
            case 'type': return clamp(a.text.length * 42, 380, 1400);
            case 'words': return clamp(a.spans.length * 48, 650, 2600);
            case 'pop': return clamp(220 + a.items.length * 130, 420, 1700);
            case 'line': return clamp(a.el.getBoundingClientRect().height * 3, 1200, 4000);
            default: return 260; // dot
        }
    }

    function measureAll() {
        sizeLayer();
        const sy = window.scrollY;
        blocks.forEach(b => {
            if (b.done) return;
            const r = b.el.getBoundingClientRect();
            b.top = r.top + sy;
            b.bottom = r.bottom + sy;
            b.hidden = !r.width && !r.height;
            b.items.forEach(a => {
                const ra = a.el.getBoundingClientRect();
                a.top = ra.top + sy;
            });
        });
        lastMeasure = performance.now();
    }
    window.addEventListener('resize', measureAll);
    window.addEventListener('load', measureAll);

    function startEngine(scopes) {
        if (cursorAnim) cursorAnim.cancel();
        main.x = cx;
        main.y = cy;
        groupBlocks(scopes);
        measureAll();
        requestAnimationFrame(tick);
    }

    function onScreen(b, vh) {
        const top = b.top - window.scrollY;
        const bottom = b.bottom - window.scrollY;
        return !b.hidden && top < 0.94 * vh && bottom > 0.06 * vh;
    }

    function tick(now) {
        if (done) return;
        const dt = lastNow ? Math.min(100, now - lastNow) : 16;
        lastNow = now;
        if (now - lastMeasure > 800) measureAll();
        const vh = window.innerHeight;
        const maxScroll = Math.max(0, root.scrollHeight - vh);
        const moved = Math.abs(window.scrollY - lastScroll);
        lastScroll = window.scrollY;

        crew.forEach(c => {
            const b = c.block;
            if (b && (b.done || !onScreen(b, vh))) {
                b.crew = null;
                c.block = null;
                c.freeSince = now;
            }
        });

        for (const b of blocks) {
            if (b.done || b.crew) continue;
            if (b.hidden) {
                b.done = true;
                b.items.forEach(finalize);
                continue;
            }
            if (!onScreen(b, vh)) continue;
            if (b.parkedY !== undefined && Math.abs(window.scrollY - b.parkedY) < 2) continue;
            const c = nearestFree(b);
            if (!c) break;
            claim(c, b, vh, maxScroll);
        }

        let pending = 0;
        let pendingOnScreen = 0;
        for (const b of blocks) {
            if (b.done) continue;
            pending++;
            if (onScreen(b, vh)) pendingOnScreen++;
            if (!b.crew) continue;
            b.moved += moved;
            const current = b.items.find(a => a.t < 1);
            const visible = !current || current.top - window.scrollY < 0.97 * vh;
            const slow = b.ready && visible ? dt / b.slow : 0;
            let P;
            let stalled = !visible;
            if (b.line) {
                const h = Math.max(1, b.bottom - b.top);
                const tip = Math.max(0.85 * vh, b.bottom - maxScroll);
                const cap = clamp((tip - (b.top - window.scrollY)) / h, 0, 1);
                P = Math.max(b.P, Math.min(cap, b.P + (b.ready ? dt / b.slow : 0) + 1.6 * moved / h));
                stalled = P >= cap - 1e-3 && cap < 1;
            } else {
                P = Math.max(b.P + slow, scrollProgress(b));
            }
            P = Math.min(1, P);
            if (stalled && !moved) {
                if (!b.stallSince) b.stallSince = now;
                if (now - b.stallSince > 700) {
                    b.parkedY = window.scrollY;
                    b.crew.block = null;
                    b.crew.freeSince = now;
                    b.crew = null;
                }
            } else {
                b.stallSince = 0;
            }
            if (!b.crew) continue;
            if (P > b.P) {
                b.P = P;
                b.items.forEach((a, i) => {
                    const [s, e] = b.slots[i];
                    const t = clamp((P - s) / Math.max(1e-6, e - s), 0, 1);
                    if (t > a.t) {
                        a.t = t;
                        apply(a);
                    }
                    if (a.t >= 1) finalize(a);
                });
            }
            if (b.P >= 1) {
                b.done = true;
                b.items.forEach(finalize);
            }
        }

        crew.forEach(c => steer(c, now));
        skip.classList.toggle('is-hidden', !pendingOnScreen);
        if (!pending) {
            crew.forEach(c => c.el.classList.remove('is-visible'));
            panel.classList.remove('is-visible');
            if (onEngineDone) onEngineDone();
            return;
        }
        requestAnimationFrame(tick);
    }

    function nearestFree(b) {
        let best = null;
        let bestD = Infinity;
        crew.forEach(c => {
            if (c.block) return;
            const d = Math.hypot(c.x - (b.el.getBoundingClientRect().left + window.scrollX), c.y - b.top);
            if (d < bestD) {
                bestD = d;
                best = c;
            }
        });
        return best;
    }

    function claim(c, b, vh, maxScroll) {
        c.block = b;
        b.crew = c;
        b.ready = false;
        b.moved = 0;
        b.stallSince = 0;
        b.parkedY = undefined;
        const sy = window.scrollY;
        const left = maxScroll - sy;
        b.items.forEach(a => {
            a.color = c.color;
            a.t0 = a.t;
            const want = Math.max(0.12 * vh, a.top - sy - 0.5 * vh);
            a.dist = Math.max(0.12 * vh, left > 4 ? Math.min(want, left) : want);
        });
    }

    function scrollProgress(b) {
        for (let i = 0; i < b.items.length; i++) {
            const a = b.items[i];
            if (a.t >= 1) continue;
            const u = clamp(b.moved / a.dist, 0, 1);
            if (u >= 1) continue;
            const [s, e] = b.slots[i];
            return s + (a.t0 + (1 - a.t0) * u) * (e - s);
        }
        return 1;
    }

    function apply(a) {
        const t = a.t;
        const n = a.el;
        if (a.kind === 'box') {
            const e = 100 * (1 - easeOut(t));
            n.style.clipPath = `inset(0 ${e}% ${e}% 0 round ${a.radius}px)`;
        } else if (a.kind === 'wipe') {
            n.style.clipPath = `inset(0 ${100 * (1 - easeOut(t))}% 0 0)`;
        } else if (a.kind === 'pop') {
            const count = a.items.length;
            const w = 1.4;
            a.items.forEach((it, k) => {
                const lt = clamp((t * (count - 1 + w) - k) / w, 0, 1);
                if (lt === a.lts[k]) return;
                if (a.lts[k] <= 0 && lt > 0) {
                    const r = it.getBoundingClientRect();
                    ripple(r.left + r.width / 2 + window.scrollX, r.top + r.height / 2 + window.scrollY, a.color);
                }
                a.lts[k] = lt;
                const s = easeOutBack(lt);
                it.style.opacity = `${Math.min(1, lt * 2.5)}`;
                it.style.transform = `translateY(${(1 - s) * -12}px) scale(${0.6 + 0.4 * s})`;
            });
        } else if (a.kind === 'type') {
            if (a.tn.parentNode !== n) return;
            const count = Math.round(t * a.text.length);
            if (count !== a.n) {
                a.n = count;
                a.tn.data = a.text.slice(0, count);
            }
            if (t > 0 && t < 1 && !a.caret.parentNode) n.appendChild(a.caret);
        } else if (a.kind === 'words') {
            const count = a.spans.length;
            const w = 3;
            a.spans.forEach((s, k) => {
                const o = Math.round(clamp((t * (count + w) - k) / w, 0, 1) * 100) / 100;
                if (o !== a.vals[k]) {
                    a.vals[k] = o;
                    s.style.opacity = `${o}`;
                }
            });
        } else if (a.kind === 'line') {
            n.style.setProperty('--line', `${t}`);
        } else if (a.kind === 'dot') {
            n.style.setProperty('--dot', `${easeOutBack(t)}`);
        }
    }

    function finalize(a) {
        if (a.done) return;
        a.done = true;
        const n = a.el;
        if (a.kind === 'box' || a.kind === 'wipe') {
            n.style.removeProperty('clip-path');
            n.classList.remove('intro-anim');
        } else if (a.kind === 'pop') {
            a.items.forEach(it => {
                it.style.removeProperty('opacity');
                it.style.removeProperty('transform');
                it.classList.remove('intro-anim');
            });
        } else if (a.kind === 'type') {
            n.style.removeProperty('min-height');
            if (a.caret.parentNode) a.caret.remove();
            if (a.tn.parentNode === n) n.innerHTML = a.html;
        } else if (a.kind === 'words') {
            a.spans.forEach(s => {
                if (s.parentNode) s.replaceWith(document.createTextNode(s.textContent));
            });
            n.normalize();
        } else if (a.kind === 'line') {
            n.classList.remove('intro-line');
            n.style.removeProperty('--line');
        } else if (a.kind === 'dot') {
            n.classList.remove('intro-dot');
            n.style.removeProperty('--dot');
        }
    }

    function steer(c, now) {
        const b = c.block;
        if (!b) {
            if (now - c.freeSince > 500) c.el.classList.remove('is-visible');
            if (c === main && now - c.freeSince > 500) panel.classList.remove('is-visible');
            return;
        }
        const a = b.items.find(x => x.t < 1) || b.items[b.items.length - 1];
        const p = cursorPoint(a);
        if (p.shape !== c.shape) {
            c.shape = p.shape;
            c.icon.innerHTML = p.shape === 'text' ? IBEAM : ARROW;
        }
        c.el.classList.toggle('is-pressed', !!p.pressed && a.t > 0);
        c.el.classList.add('is-visible');
        const tx = p.x + window.scrollX - (p.shape === 'text' ? 11 : 3);
        const ty = p.y + window.scrollY - (p.shape === 'text' ? 13 : 2);
        c.x += (tx - c.x) * 0.22;
        c.y += (ty - c.y) * 0.22;
        c.el.style.transform = `translate(${c.x}px, ${c.y}px)`;
        if (!b.ready && Math.hypot(tx - c.x, ty - c.y) < 40) b.ready = true;
        if (c === main) updatePanel(a);
        if (c === main) setCursorVars(c.x, c.y);
    }

    function cursorPoint(a) {
        const e = easeOut(a.t);
        if (a.kind === 'box') {
            const r = a.el.getBoundingClientRect();
            return { x: r.left + e * r.width, y: Math.min(r.top + e * r.height, window.innerHeight - 40), shape: 'arrow', pressed: true };
        }
        if (a.kind === 'wipe') {
            const r = a.el.getBoundingClientRect();
            return { x: r.left + e * r.width, y: r.top + r.height * 0.55, shape: 'arrow', pressed: true };
        }
        if (a.kind === 'pop') {
            let k = a.lts.findIndex(v => v < 1);
            if (k < 0) k = a.items.length - 1;
            const r = a.items[k].getBoundingClientRect();
            return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5, shape: 'arrow', pressed: a.lts[k] > 0 };
        }
        if (a.kind === 'type') {
            const r = (a.caret.parentNode ? a.caret : a.el).getBoundingClientRect();
            return { x: r.left, y: r.top + Math.min(r.height, 40) / 2, shape: 'text' };
        }
        if (a.kind === 'line') {
            const r = a.el.getBoundingClientRect();
            const y = r.top + 10 + a.t * Math.max(0, r.height - 20);
            return { x: r.left + 4, y: Math.min(y, window.innerHeight - 40), shape: 'arrow', pressed: true };
        }
        if (a.kind === 'dot') {
            const r = a.el.getBoundingClientRect();
            const ps = getComputedStyle(a.el, '::before');
            return { x: r.left + parseFloat(ps.left) + 4, y: r.top + parseFloat(ps.top) + 4, shape: 'arrow', pressed: true };
        }
        const count = a.spans.length;
        const k = clamp(Math.floor(a.t * (count + 3)) - 1, 0, count - 1);
        const r = a.spans[k].getBoundingClientRect();
        return { x: r.right + 2, y: r.top + r.height / 2, shape: 'text' };
    }

    function updatePanel(a) {
        if (isPhone()) {
            panel.classList.remove('is-visible');
            return;
        }
        const n = a.el;
        const sel = n.tagName.toLowerCase() + (n.classList[0] && !n.classList[0].startsWith('intro') ? '.' + n.classList[0] : '');
        let prop;
        let value;
        if (a.kind === 'box') {
            const e = Math.round(100 * (1 - easeOut(a.t)));
            prop = 'clip-path';
            value = `inset(0 ${e}% ${e}% 0)`;
        } else if (a.kind === 'wipe') {
            prop = 'clip-path';
            value = `inset(0 ${Math.round(100 * (1 - easeOut(a.t)))}% 0 0)`;
        } else if (a.kind === 'pop') {
            const k = a.lts.findIndex(v => v < 1);
            prop = 'transform';
            value = `scale(${(0.6 + 0.4 * easeOutBack(Math.max(0, a.lts[k < 0 ? a.lts.length - 1 : k]))).toFixed(2)})`;
        } else if (a.kind === 'type') {
            prop = 'content';
            const s = a.text.slice(0, a.n);
            value = `"${s.length > 18 ? '…' + s.slice(-17) : s}"`;
        } else if (a.kind === 'line') {
            prop = 'transform';
            value = `scaleY(${a.t.toFixed(2)})`;
        } else if (a.kind === 'dot') {
            prop = 'transform';
            value = `scale(${easeOutBack(a.t).toFixed(2)})`;
        } else {
            prop = 'opacity';
            value = a.t.toFixed(2);
        }
        const key = sel + prop;
        if (key !== panelKey) {
            panelKey = key;
            showPanel(sel, [[prop, value]]);
        } else {
            const row = panel.querySelector('.intro-row');
            if (row) writeValue(row.lastChild, value);
        }
        panel.classList.add('is-visible');
    }

    async function chrome() {
        panel.classList.remove('is-visible');
        drop('raw-chrome');
        moveTo(Math.min(cx + 60, window.scrollX + window.innerWidth - 30), window.scrollY + window.innerHeight + 40, 380).catch(() => {});
        await wait(240);
        cursor.classList.remove('is-visible');
    }

    function markSeen() {
        try { sessionStorage.setItem('introSeen:' + location.pathname.replace(/(index)?\.html?$/i, ''), '1'); } catch (e) {}
    }

    function finish(instant) {
        if (done) return;
        done = true;
        anims.forEach(finalize);
        if (instant) root.classList.add('intro-instant');
        RAW.forEach(drop);
        root.classList.add('intro-done');
        markSeen();
        document.querySelectorAll('.intro-selected').forEach(n => n.classList.remove('intro-selected'));

        const cleanup = () => {
            root.classList.remove('intro', 'intro-running', 'intro-instant');
            [layer, panel, skip].forEach(n => n.remove());
        };
        if (instant) {
            cleanup();
        } else {
            crew.forEach(c => c.el.classList.remove('is-visible'));
            panel.classList.remove('is-visible');
            skip.classList.add('is-hidden');
            setTimeout(cleanup, 900);
        }
    }

    function el(tag, cls) {
        const n = document.createElement(tag);
        n.className = cls;
        return n;
    }

    function drop(cls) {
        root.classList.remove(cls);
    }

    function clamp(v, lo, hi) {
        return Math.max(lo, Math.min(hi, v));
    }

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function easeOutBack(t) {
        return 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);
    }

    function wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => (cancelled ? reject(new Error('skip')) : resolve()), ms);
        });
    }

    function frame() {
        return new Promise(resolve => requestAnimationFrame(resolve));
    }

    function fontsReady() {
        if (!document.fonts || !document.fonts.load) return Promise.resolve();
        const loads = Promise.all([
            document.fonts.load('700 64px "Space Grotesk"'),
            document.fonts.load('500 20px "Space Grotesk"'),
            document.fonts.load('400 16px "Inter"'),
            document.fonts.load('600 16px "Inter"'),
        ]).catch(() => {});
        return Promise.race([loads, new Promise(r => setTimeout(r, 800))]);
    }

    function finalValue(cls, read) {
        root.classList.add('intro-instant');
        root.classList.remove(cls);
        const value = read();
        root.classList.add(cls);
        void root.offsetWidth;
        root.classList.remove('intro-instant');
        return value;
    }

    function grabPoint(node) {
        const r = node.getBoundingClientRect();
        const x = r.left + Math.min(r.width * 0.35, 120);
        const y = r.top + Math.min(r.height * 0.5, 120);
        return {
            x: window.scrollX + Math.max(20, Math.min(window.innerWidth - 30, x)),
            y: window.scrollY + Math.max(40, Math.min(window.innerHeight - 50, y)),
        };
    }

    function px(node) {
        return Math.round(parseFloat(getComputedStyle(node).fontSize)) + 'px';
    }

    function setCursorVars(x, y) {
        cx = x;
        cy = y;
    }

    function setCursor(x, y) {
        cx = x;
        cy = y;
        main.x = x;
        main.y = y;
        cursor.style.transform = `translate(${x}px, ${y}px)`;
    }

    async function moveTo(x, y, ms, easing = SNAP, arc = true) {
        const from = { x: cx, y: cy };
        const dist = Math.hypot(x - from.x, y - from.y);
        const bend = arc ? Math.min(dist * 0.18, 90) * (arcSide = -arcSide) : 0;
        const mx = (from.x + x) / 2 - ((y - from.y) / (dist || 1)) * bend;
        const my = (from.y + y) / 2 + ((x - from.x) / (dist || 1)) * bend;
        const frames = [0, 0.25, 0.5, 0.75, 1].map(t => {
            const a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t;
            return { transform: `translate(${a * from.x + b * mx + c * x}px, ${a * from.y + b * my + c * y}px)` };
        });
        if (cursorAnim) cursorAnim.cancel();
        setCursor(x, y);
        cursorAnim = cursor.animate(frames, { duration: Math.max(1, ms), easing });
        await wait(ms);
    }

    function moveToNode(node, ms) {
        const p = grabPoint(node);
        return moveTo(p.x, p.y, ms);
    }

    async function press() {
        cursor.classList.add('is-pressed');
        ripple(cx, cy, main.color);
        await wait(90);
        cursor.classList.remove('is-pressed');
    }

    function ripple(x, y, color) {
        if (done) return;
        const ring = el('span', 'intro-ripple');
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
        if (color) ring.style.setProperty('--c', color);
        layer.appendChild(ring);
        setTimeout(() => ring.remove(), 450);
    }

    function sizeLayer() {
        layer.style.height = '0px';
        layer.style.height = `${Math.max(root.scrollHeight, document.body.scrollHeight)}px`;
    }

    async function drag(node, rawClass) {
        const m = new DOMMatrix(getComputedStyle(node).transform);
        cursor.classList.add('is-pressed');
        await frame();
        const move = moveTo(cx - m.m41, cy - m.m42, DRAG, SPRING, false);
        drop(rawClass);
        await move;
        cursor.classList.remove('is-pressed');
    }

    function select(...nodes) {
        nodes.forEach(n => n.classList.add('intro-selected'));
    }

    function unselect(...nodes) {
        nodes.forEach(n => n.classList.remove('intro-selected'));
    }

    function showPanel(selector, rows) {
        panel.querySelector('.intro-panel-sel').textContent = selector;
        const box = panel.querySelector('.intro-panel-rows');
        box.innerHTML = '';
        rows.forEach(([prop, value, swatch]) => {
            const row = el('div', 'intro-row');
            const k = el('span', '');
            k.textContent = prop;
            const v = el('span', '');
            row.append(k, v);
            box.appendChild(row);
            writeValue(v, value, swatch);
        });
        panel.classList.add('is-visible');
    }

    function writeValue(span, value, swatch) {
        span.innerHTML = '';
        if (swatch) {
            const s = el('i', 'intro-swatch');
            s.style.background = swatch;
            span.appendChild(s);
        }
        span.appendChild(document.createTextNode(value));
    }

    async function typeRow(index, value, apply, swatch, stepMs) {
        const row = panel.querySelectorAll('.intro-row')[index];
        row.classList.add('is-changing');
        const step = stepMs || Math.max(8, Math.min(14, 160 / value.length));
        for (let i = 1; i <= value.length; i++) {
            writeValue(row.lastChild, value.slice(0, i), i === value.length ? swatch : null);
            await wait(step);
        }
        apply();
        await wait(60);
        row.classList.remove('is-changing');
    }

    async function countSize(index, rawClass, from, to, ms) {
        const row = panel.querySelectorAll('.intro-row')[index];
        row.classList.add('is-changing');
        drop(rawClass);
        const start = performance.now();
        await new Promise(resolve => {
            const tick2 = (now) => {
                const t = Math.min(1, (now - start) / ms);
                writeValue(row.lastChild, Math.round(from + (to - from) * easeOutBack(t)) + 'px');
                if (t < 1 && !cancelled) requestAnimationFrame(tick2); else resolve();
            };
            requestAnimationFrame(tick2);
        });
        if (cancelled) throw new Error('skip');
        row.classList.remove('is-changing');
    }
});
