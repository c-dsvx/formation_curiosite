// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║  MOTEUR DE RENDU — Ne pas modifier en dessous de cette ligne                 ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// State
let currentModuleId = 0;
let currentSlide = 0;
let answers = {};
let moduleProgress = {};

function loadState() {
  try { const s = localStorage.getItem('fp'); if (s) moduleProgress = JSON.parse(s); } catch(e) {}
  try { const a = localStorage.getItem('fa'); if (a) answers = JSON.parse(a); } catch(e) {}
}
function saveState() {
  try { localStorage.setItem('fp', JSON.stringify(moduleProgress)); } catch(e) {}
  try { localStorage.setItem('fa', JSON.stringify(answers)); } catch(e) {}
}

function getCurrentData() { return FORMATION['module_' + currentModuleId]; }

function tagLabel(t) {
  return { intro:'Introduction', contenu:'Contenu', activite:'Activité', evaluation:'Évaluation', synthese:'Synthèse' }[t] || t;
}

// ── Rendu des blocs ──────────────────────────────────────────────────────────

function renderBlock(b, slideId) {
  switch(b.type) {

    case 'text':
      return '<div class="block-text">' + b.content.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('') + '</div>';

    case 'key_points': {
      const kpTitle = b.title != null ? `<div class="bk-title">${b.title||'Points clés'}</div>` : '';
      return `<div class="block-kp">${kpTitle}<ul>${(b.items||[]).map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    }

    case 'recap_box':
      return `<div class="block-recap"><div class="rc2-label">💡 Rappel des points clés</div><p>${b.content}</p></div>`;

    case 'class_box':
      return `<div class="block-class"><div class="cb-label">🏫 En classe</div>${b.content.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div>`;

    case 'hotspot_image': {
      const hid = slideId+'_'+b.id;
      const spots = (b.hotspots||[]).map(h => `
        <button class="hs-dot" id="hsdot_${hid}_${h.id}"
          style="left:${h.x}%;top:${h.y}%"
          onclick="toggleHotspot(event,'${hid}','${h.id}')">
          <span class="hs-inner" style="background:${h.color}"></span>
        </button>
        <div class="hs-popup" id="hspop_${hid}_${h.id}">
          <div class="hs-popup-label" style="color:${h.color}">${h.label}</div>
          <div class="hs-popup-text">${h.content}</div>
        </div>`).join('');
      return `<div class="block-hs" onclick="closeAllHotspots(event,'${hid}')">
        ${b.instruction ? `<p class="hs-instruction">${b.instruction}</p>` : ''}
        <div class="hs-wrap" id="hswrap_${hid}" style="overflow:visible">
          <img src="${b.src}" alt="${b.alt||''}" class="hs-img" style="border-radius:10px">
          ${spots}
        </div>
      </div>`;
    }

    case 'example_box':
      return `<div class="block-example"><div class="ex-label">💡 Illustration</div><p>${b.content}</p></div>`;

    case 'activity_intro':
      return `<div class="block-actintro">
        <div class="ai-title">${b.title}</div>
        ${b.content.split('\n\n').map(p=>`<p>${p}</p>`).join('')}
      </div>`;

    case 'intervention_box': {
      const items = (b.items||[]).map(i=>`<li>${i}</li>`).join('');
      const footer = b.footer ? `<p class="intv-footer">${b.footer}</p>` : '';
      return `<div class="block-intv"><div class="intv-label">🧩 L'intervention</div><p>${b.content}</p>${items?`<ul class="intv-list">${items}</ul>`:''}${footer}</div>`;
    }

    case 'process_flow': {
      const steps = b.steps || [];
      const stepsHtml = steps.map((s, i) => {
        const arrow = i < steps.length - 1
          ? `<div class="pf-arrow">→</div>`
          : '';
        return `<div class="pf-step-wrap">
          <div class="pf-step" style="border-color:${s.color};background:${s.bg}">
            <div class="pf-tag" style="color:${s.color}">${s.tag}</div>
            <div class="pf-behavior">${s.behavior}</div>
            <div class="pf-label" style="color:${s.color}">${s.label}</div>
          </div>
          ${arrow}
        </div>`;
      }).join('');
      return `<div class="block-pf"><div class="pf-row">${stepsHtml}</div></div>`;
    }

    case 'spectrum': {
      const sid = slideId + '_' + b.id;
      const steps = b.steps || [];
      const cols = steps.map((s, i) => `
        <div class="spec-col" id="spec_col_${sid}_${i}" style="display:${i===0?'flex':'none'};flex-direction:column;border:2px solid ${s.color};border-radius:10px;overflow:hidden;flex:1;min-width:0">
          <div class="spec-col-header" style="background:${s.bg};border-bottom:2px solid ${s.color};padding:10px 14px">
            <span style="font-size:13px;font-weight:700;color:${s.color}">${s.label}</span>
          </div>
          <div class="spec-col-body" style="padding:12px 14px;font-size:13px;line-height:1.7;color:#2C2C2A;flex:1">${s.content}</div>
        </div>`).join('');
      return `<div class="block-spectrum">
        <div class="spec-wrap" id="spec_wrap_${sid}" style="display:flex;gap:10px;align-items:stretch;margin-bottom:.75rem">${cols}</div>
        <div style="display:flex;gap:8px;align-items:center">
          <button class="btn btn-sec btn-sm" id="spec_back_${sid}" onclick="specBack('${sid}',${steps.length})" style="display:none">← Retour</button>
          <button class="btn btn-p btn-sm" id="spec_next_${sid}" onclick="specNext('${sid}',${steps.length})">Afficher la suite →</button>
          <span class="spec-counter" id="spec_count_${sid}" style="font-size:12px;color:#B4B2A9">1 / ${steps.length}</span>
        </div>
      </div>`;
    }

    case 'research_box':
      return `<div class="block-research"><div class="br-label">🔬 Données de la recherche</div>${b.title?`<div class="br-title">${b.title}</div>`:''}<p>${b.content}</p>${b.reference?`<div class="br-ref">${b.reference}</div>`:''}</div>`;

    case 'warning_box':
      return `<div class="block-warning"><div class="bw-label">⚠ Note</div><p>${b.content}</p></div>`;

    case 'illustration':
      return `<div class="block-illus"><div class="bi-label">Illustration</div><div class="bi-ph">${b.label||'[Illustration à insérer]'}</div></div>`;

    case 'image':
      return `<div class="block-image"><img src="${b.src}" alt="${b.caption||''}" onerror="this.style.display='none'">${b.caption?`<div class="img-cap">${b.caption}</div>`:''}</div>`;

    case 'reveal_trigger': {
      const rid = 'reveal_' + slideId + '_' + Math.random().toString(36).slice(2,7);
      return `<div class="reveal-trigger-wrap" data-rid="${rid}">
        <button class="btn btn-sec reveal-btn" onclick="revealBlocks('${rid}',this)">
          ${b.label || 'VALIDER'}
        </button>
      </div>`;
    }

    case 'table': {
      const hdrs = (b.headers||[]).map(h=>`<th>${h}</th>`).join('');
      const rows = (b.rows||[]).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
      return `<div class="block-table"><table><thead><tr>${hdrs}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    case 'scenario':
      return `<div class="block-scenario"><div class="sc-label">📋 Mise en situation</div>${b.content}</div>`;

    case 'recall': {
      const ans = answers[b.recall_id];
      const header = b.hide_label ? '' : '<div class="rc-label">📌 Votre réponse initiale</div>';
      return `<div class="block-recall">${header}<p>${b.label}</p>${ans?`<div class="rc-ans">${ans.text||''}</div>`:'<div class="rc-ans rc-empty">(aucune réponse enregistrée)</div>'}</div>`;
    }

    case 'qcm_annotated': {
      const aid = slideId+'_'+b.id;
      const done = answers[aid]?.done;
      const isSingle = b.single === true;
      const sel = answers[aid]?.selected || [];
      const label = isSingle ? 'Exercice' : 'Exercice — plusieurs réponses possibles';
      return `<div class="act-shell" id="act_${aid}">
        <div class="act-label act-qcm">${label}</div>
        <div class="act-q">${b.question}</div>
        <div class="qcm-opts" id="opts_${aid}">
          ${(b.options||[]).map(opt => {
            const isSelected = sel.includes(opt.id);
            let cls = '';
            if (done) {
              if (opt.correct === true) cls = 'correct';
              else if (opt.correct === false) cls = 'wrong';
              else if (opt.correct === 'neutral') cls = 'neutral-opt';
            } else if (isSelected) cls = 'selected';
            const icon = done
              ? (opt.correct === true ? '✓' : opt.correct === false ? '✗' : '~')
              : (isSelected ? (isSingle ? '●' : '☑') : '○');
            const fbClass = opt.correct === true ? 'ann-ok' : opt.correct === false ? 'ann-wrong' : 'ann-neutral';
            const fbHtml = done
              ? `<div class="ann-feedback ${fbClass}">
                  <span class="ann-arrow">↳</span> ${opt.feedback}
                </div>`
              : `<div class="ann-feedback-ph" id="annfb_${aid}_${opt.id}"></div>`;
            const clickFn = isSingle ? `selectSingle('${aid}','${opt.id}')` : `toggleAnnotated('${aid}','${opt.id}')`;
            return `<div class="qcm-ann-wrap">
              <button class="qcm-opt ${cls}" onclick="${clickFn}" ${done?'disabled':''} data-id="${opt.id}">
                <span class="opt-l opt-check">${icon}</span><span>${opt.text}</span>
              </button>
              ${fbHtml}
            </div>`;
          }).join('')}
        </div>
        ${!done ? `<div style="margin-top:.75rem">
          <button class="btn btn-p btn-sm" id="val_ann_${aid}" onclick="valAnnotated('${aid}')" disabled>Valider</button>
        </div>` : ''}
      </div>`;
    }

    case 'qcm_multi': {
      const aid = slideId+'_'+b.id;
      const done = answers[aid]?.done;
      const sel = answers[aid]?.selected || [];
      return `<div class="act-shell" id="act_${aid}">
        <div class="act-label act-qcm">Exercice — plusieurs réponses possibles</div>
        <div class="act-q">${b.question}</div>
        <div class="qcm-opts" id="opts_${aid}">
          ${(b.options||[]).map((opt,i)=>{
            const isSelected = sel.includes(opt.id);
            let cls = isSelected && !done ? 'selected' : '';
            if (done) { cls = opt.correct ? 'correct' : isSelected ? 'wrong' : ''; }
            return `<div class="qcm-multi-opt-wrap">
              <button class="qcm-opt ${cls}" onclick="toggleMulti('${aid}','${opt.id}')" ${done?'disabled':''} data-id="${opt.id}">
                <span class="opt-l opt-check">${done ? (opt.correct ? '✓' : isSelected ? '✗' : '○') : (isSelected ? '☑' : '○')}</span>
                <span>${opt.text}</span>
              </button>
              ${done ? `<div class="qcm-fb ${opt.correct ? 'fb-ok' : 'fb-ko'}" style="margin-top:4px">
                <strong>${opt.correct ? '✓' : '✗'} Option ${opt.id}</strong> ${opt.feedback}
              </div>` : `<div class="qcm-fb-placeholder" id="fb_${aid}_${opt.id}"></div>`}
            </div>`;
          }).join('')}
        </div>
        ${!done ? `<div style="margin-top:.75rem">
          <button class="btn btn-p btn-sm" id="val_${aid}" onclick="valMulti('${aid}')" disabled>Valider</button>
        </div>` : ''}
      </div>`;
    }

    case 'qcm': {
      const aid = slideId+'_'+b.id;
      const done = answers[aid]?.done;
      const sel = answers[aid]?.selected;
      return `<div class="act-shell" id="act_${aid}">
        <div class="act-label act-qcm">Question</div>
        <div class="act-q">${b.question}</div>
        <div class="qcm-opts" id="opts_${aid}">
          ${(b.options||[]).map((opt,i)=>{
            let cls=''; if(done){cls=i===b.correct?'correct':i===sel&&i!==b.correct?'wrong':''} else if(i===sel)cls='selected';
            const icon=done&&i===b.correct?'✓':done&&i===sel&&i!==b.correct?'✗':String.fromCharCode(65+i);
            return `<button class="qcm-opt ${cls}" onclick="selQCM('${aid}',${i},${b.correct})" ${done?'disabled':''} data-i="${i}"><span class="opt-l">${icon}</span>${opt}</button>`;
          }).join('')}
        </div>
        <div id="fb_${aid}" class="qcm-fb" style="display:none"></div>
        ${!done?`<div style="margin-top:.75rem"><button class="btn btn-p btn-sm" id="val_${aid}" onclick="valQCM('${aid}',${b.correct},'${(b.feedback_correct||'').replace(/'/g,"\\'")}','${(b.feedback_incorrect||'').replace(/'/g,"\\'")}')">Valider</button></div>`:''}
      </div>`;
    }

    case 'sort': {
      const aid = slideId+'_'+b.id;
      const placed = answers[aid]?.placed||{};
      const done = answers[aid]?.done;
      const unplaced = (b.items||[]).filter(it=>placed[it.id]===undefined);
      const cols = Math.min((b.categories||[]).length, 3);
      const ansStr = JSON.stringify(b.answers||{}).replace(/"/g,'&quot;');
      return `<div class="act-shell" id="act_${aid}">
        <div class="act-label act-sort">Exercice</div>
        <div class="act-q">${b.instruction}</div>
        ${unplaced.length?`<div class="sort-pool" id="pool_${aid}">${unplaced.map(it=>`<div class="sort-item" draggable="true" data-id="${it.id}" data-aid="${aid}" ondragstart="onDS(event)">${it.text}</div>`).join('')}</div>`:''}
        <div class="sort-cols" style="grid-template-columns:repeat(${cols},1fr)" id="cols_${aid}">
          ${(b.categories||[]).map((cat,ci)=>{
            const its=(b.items||[]).filter(it=>placed[it.id]===ci);
            return `<div class="sort-zone" id="zone_${aid}_${ci}" ondragover="event.preventDefault()" ondrop="onDP(event,'${aid}',${ci},'${ansStr}',${(b.items||[]).length})">
              <div class="sort-zlabel">${cat}</div>
              ${its.map(it=>{
                const c=done&&(b.answers||{})[it.id]===ci,w=done&&(b.answers||{})[it.id]!==ci;
                const fb=done&&it.feedback?`<div class="sort-item-fb ${c?'fb-ok':'fb-ko'}">${it.feedback}</div>`:'';
                return`<div class="sort-placed-wrap"><div class="sort-placed ${c?'correct':w?'wrong':''}" data-id="${it.id}">${c?'✓ ':w?'✗ ':''}${it.text}</div>${fb}</div>`;
              }).join('')}
            </div>`;
          }).join('')}
        </div>
        <div id="sort_sc_${aid}">${done?buildSortScore(placed,b.answers||{},b.items.length):''}</div>
        ${!done?`<div style="margin-top:.5rem;display:flex;gap:8px">
          <button class="btn btn-p btn-sm" id="val_s_${aid}" onclick="valSort('${aid}','${ansStr}',${(b.items||[]).length})" disabled>Valider</button>
          <button class="btn btn-sec btn-sm" onclick="resetSort('${aid}')">Recommencer</button>
        </div>`:''}
      </div>`;
    }

    case 'reflection': {
      const aid = slideId+'_'+b.id;
      const saved = answers[aid]?.text||'';
      return `<div class="act-shell">
        <div class="act-label act-ref">Réflexion</div>
        <div class="act-q">${b.question}</div>
        ${b.hint?`<div class="ref-hint">${b.hint}</div>`:''}
        <textarea class="ref-ta" id="ta_${aid}" placeholder="${b.placeholder||'Votre réflexion...'}" oninput="onRI('${aid}')">${saved}</textarea>
        <div style="margin-top:.5rem;display:flex;align-items:center;gap:10px">
          <button class="btn btn-sec btn-sm" onclick="saveRef('${aid}')" id="btn_r_${aid}">${saved?'✓ Enregistré':'Enregistrer'}</button>
          ${saved?`<span class="saved-ok">✓ Sauvegardé</span>`:`<span class="saved-ok" id="sv_${aid}" style="display:none">✓ Sauvegardé</span>`}
        </div>
      </div>`;
    }

    default:
      return `<div class="block-unknown">[Bloc : ${b.type}]</div>`;
  }
}

// ── Rendu d'une slide ────────────────────────────────────────────────────────

function renderSlide(slide, idx, total) {
  const isLast = idx === total-1;
  const tag = ''; // tags masqués

  // Rendu des blocs avec gestion du reveal_trigger (séquentiel)
  let revealId = null;
  const blocks = (slide.blocks||[]).map(b => {
    if (b.type === 'reveal_trigger') {
      const prevRevealId = revealId;
      revealId = 'reveal_' + slide.id + '_' + Math.random().toString(36).slice(2,7);
      const btnHtml = `<div class="reveal-trigger-wrap" data-rid="${revealId}">
        <button class="btn btn-sec reveal-btn" onclick="revealBlocks('${revealId}',this)">${b.label||'VALIDER'}</button>
      </div>`;
      // Si un trigger précédent est actif, ce bouton est lui-même masqué
      if (prevRevealId) {
        return `<div data-hidden="${prevRevealId}" style="display:none">${btnHtml}</div>`;
      }
      return btnHtml;
    }
    const html = renderBlock(b, slide.id);
    if (revealId) {
      return `<div data-hidden="${revealId}" style="display:none">${html}</div>`;
    }
    return html;
  }).join('');
  const back = idx > 0 ? `<button class="btn btn-sec" onclick="goTo(${idx-1})">← Retour</button>` : '<span></span>';
  const nextLabel = slide.next_label || (isLast ? 'Terminer le module ✓' : 'Continuer →');

  // Vérifier si la slide a des activités ou reveals obligatoires
  const hasRequired = (slide.blocks||[]).some(b =>
    ['qcm','qcm_multi','qcm_annotated','sort','reflection'].includes(b.type) ||
    b.type === 'reveal_trigger'
  );
  const isAlreadyDone = !hasRequired || (slide.blocks||[]).every(b => {
    if (['qcm','qcm_multi','qcm_annotated','sort'].includes(b.type)) return answers[slide.id+'_'+b.id]?.done;
    if (b.type === 'reflection') return !!answers[slide.id+'_'+b.id]?.text;
    return true; // reveal_triggers vérifiés dynamiquement
  });
  // Si des reveals sont présents, on ne peut pas savoir à la compilation si tous sont déclenchés
  const hasReveal = (slide.blocks||[]).some(b => b.type === 'reveal_trigger');
  const nextDisabled = hasRequired && (!isAlreadyDone || hasReveal) ? 'disabled style="opacity:.4;cursor:not-allowed"' : '';

  return `<div class="slide" id="slide_${idx}">
    <div class="card">${tag}<h2>${slide.title||''}</h2>${blocks}</div>
    <div class="nav-row">
      ${back}
      <div style="display:flex;align-items:center;gap:10px">
        <span class="nav-info">${idx+1} / ${total}</span>
        <button class="btn btn-p" id="btn_next_${idx}" onclick="goTo(${idx+1})" ${nextDisabled}>${nextLabel}</button>
      </div>
    </div>
  </div>`;
}

function renderEnd(mod) {
  const col = FORMATION.modules.find(m=>m.id===mod.id);
  const next = FORMATION.modules.find(m=>m.id===mod.id+1);
  const modLabel = mod.id === 0 ? 'Introduction' : (col?.label || 'Module '+mod.id);
  return `<div class="slide" id="slide_end">
    <div class="end-card" style="text-align:center;padding:2.5rem 2rem">
      <div style="font-size:52px;margin-bottom:1rem">✅</div>
      <h2 style="margin-bottom:.5rem">${modLabel} terminé${modLabel==='Synthèse'?'e':''} !</h2>
      <p style="color:#5F5E5A;margin-bottom:1.5rem">${mod.end_message||''}</p>
      ${next
        ? `<button class="btn btn-p" onclick="switchModule(${next.id})">Passer ${next.id===4?'à la Synthèse':'au Module '+next.id} →</button>`
        : `<p style="font-weight:600;color:${(col&&col.color)||'#26215C'};margin-bottom:1.5rem">🎉 Félicitations, vous avez terminé la formation !</p>`
      }
      <div style="margin-top:1rem">
        <button class="btn btn-sec" onclick="goHome()">← Retour à l'accueil</button>
      </div>
    </div>
  </div>`;
}

// ── Navigation ───────────────────────────────────────────────────────────────

function goTo(idx) {
  const mod = getCurrentData();
  const total = mod.slides.length;
  document.querySelectorAll('.slide').forEach(s=>s.classList.remove('active'));

  if (idx >= total) {
    moduleProgress[currentModuleId] = total;
    currentSlide = total;
    saveState();
    buildNav();
    document.getElementById('slide_end')?.classList.add('active');
    updateProgress();
    window.scrollTo(0,0); return;
  }
  if (idx < 0) return;

  const el = document.getElementById('slide_'+idx);
  if (el) el.classList.add('active');
  currentSlide = idx;
  if (idx > (moduleProgress[currentModuleId]||0)) {
    moduleProgress[currentModuleId] = idx; saveState();
  }
  updateProgress(); window.scrollTo(0,0);
}

function updateProgress() {
  const mod = getCurrentData();
  const total = mod.slides.length;
  const done = Math.min(currentSlide, total);
  const pct = total > 0 ? Math.round((done/total)*100) : 0;
  const col = FORMATION.modules.find(m=>m.id===currentModuleId);
  document.getElementById('p-fill').style.width = pct+'%';
  document.getElementById('p-fill').style.background = col?.color||'#534AB7';
  document.getElementById('p-count').textContent = done+' / '+total;
}

function switchModule(id) {
  currentModuleId = id;
  currentSlide = 0;
  const mod = getCurrentData();
  if (!mod) return;

  const col = FORMATION.modules.find(m=>m.id===id);

  document.getElementById('mod-header').innerHTML = `
    <div class="mod-header" style="background:${col?.bg||'#EEEDFE'}">
      <div class="mod-label" style="color:${col?.color||'#534AB7'}">${id===0?'Introduction':'Module '+id}</div>
      <div class="mod-title" style="color:${id===0?'#26215C':col?.color||'#534AB7'}">${mod.title}</div>
      <div class="mod-meta" style="color:${col?.color||'#534AB7'}">⏱ ${mod.duration||''}</div>
    </div>`;
  const modLabel2 = id===0 ? 'Introduction' : (FORMATION.modules.find(m=>m.id===id)?.label || 'Module '+id);
  document.getElementById('p-label').textContent = modLabel2;

  const container = document.getElementById('slides-container');
  container.innerHTML = mod.slides.map((s,i)=>renderSlide(s,i,mod.slides.length)).join('') + renderEnd(mod);

  buildNav();
  const savedSlide = Math.min(moduleProgress[id]||0, mod.slides.length-1);
  goTo(savedSlide);
}

function buildNav() {
  const nav = document.getElementById('mod-nav');
  nav.innerHTML = FORMATION.modules.map(m => {
    const done = (moduleProgress[m.id]||0) >= (FORMATION['module_'+m.id]?.slides?.length||999);
    const active = m.id === currentModuleId;
    const locked = m.id > 0 && !(moduleProgress[m.id-1] >= (FORMATION['module_'+(m.id-1)]?.slides?.length||999));
    return `<button onclick="switchModule(${m.id})" class="nav-btn ${active?'nav-active':done?'nav-done':''}" ${locked?'disabled':''}>
      ${done?'✓ ':''}${m.label}
    </button>`;
  }).join('');
}

// ── Interactivité QCM annoté ─────────────────────────────────────────────────

function selectSingle(aid, optId) {
  // Désélectionne tout, sélectionne uniquement optId
  const opts = document.querySelectorAll(`#opts_${aid} .qcm-opt`);
  opts.forEach(b => { b.classList.remove('selected'); const l=b.querySelector('.opt-l'); if(l)l.textContent='○'; });
  const btn = document.querySelector(`#opts_${aid} [data-id="${optId}"]`);
  if (btn) { btn.classList.add('selected'); const l=btn.querySelector('.opt-l'); if(l)l.textContent='●'; }
  answers[aid] = { selected: [optId] };
  document.getElementById('val_ann_'+aid).disabled = false;
}

function toggleAnnotated(aid, optId) {
  const sel = answers[aid]?.selected || [];
  const idx = sel.indexOf(optId);
  if (idx >= 0) sel.splice(idx, 1); else sel.push(optId);
  answers[aid] = { selected: sel };
  const btn = document.querySelector(`#opts_${aid} [data-id="${optId}"]`);
  if (btn) {
    const lbl = btn.querySelector('.opt-l');
    if (idx >= 0) { btn.classList.remove('selected'); if(lbl) lbl.textContent='○'; }
    else { btn.classList.add('selected'); if(lbl) lbl.textContent='☑'; }
  }
  document.getElementById('val_ann_'+aid).disabled = sel.length === 0;
}

function valAnnotated(aid) {
  const sel = answers[aid]?.selected || [];
  answers[aid] = { selected: sel, done: true }; saveState();
  let opts = [];
  const mod = getCurrentData();
  for (const s of mod.slides) for (const b of (s.blocks||[])) if (b.type==='qcm_annotated' && s.id+'_'+b.id===aid) opts = b.options||[];
  opts.forEach(opt => {
    const isSelected = sel.includes(opt.id);
    const btn = document.querySelector(`#opts_${aid} [data-id="${opt.id}"]`);
    if (btn) {
      btn.disabled = true; btn.classList.remove('selected');
      if (opt.correct === true) btn.classList.add('correct');
      else if (opt.correct === false) btn.classList.add('wrong');
      else if (opt.correct === 'neutral') btn.classList.add('neutral-opt');
      const lbl = btn.querySelector('.opt-l');
      if (lbl) lbl.textContent = opt.correct === true ? '✓' : opt.correct === false ? '✗' : '~';
    }
    const ph = document.getElementById(`annfb_${aid}_${opt.id}`);
    if (ph) {
      const fc = opt.correct === true ? 'ann-ok' : opt.correct === false ? 'ann-wrong' : 'ann-neutral';
      ph.className = `ann-feedback ${fc}`;
      ph.innerHTML = `<span class="ann-arrow">↳</span> ${opt.feedback}`;
    }
  });
  document.getElementById('val_ann_'+aid)?.parentElement?.remove();
  checkSlideComplete(currentSlide);
}

// ── Interactivité QCM multi ──────────────────────────────────────────────────

function toggleMulti(aid, optId) {
  const sel = answers[aid]?.selected || [];
  const idx = sel.indexOf(optId);
  if (idx >= 0) sel.splice(idx, 1); else sel.push(optId);
  answers[aid] = { selected: sel };
  // Mettre à jour l'apparence
  const btn = document.querySelector(`#opts_${aid} [data-id="${optId}"]`);
  if (btn) {
    const lbl = btn.querySelector('.opt-l');
    if (idx >= 0) { btn.classList.remove('selected'); if(lbl) lbl.textContent='○'; }
    else { btn.classList.add('selected'); if(lbl) lbl.textContent='☑'; }
  }
  document.getElementById('val_'+aid).disabled = sel.length === 0;
}

function valMulti(aid) {
  const sel = answers[aid]?.selected || [];
  answers[aid] = { selected: sel, done: true }; saveState();
  // Chercher les options dans les données
  let opts = [];
  const mod = getCurrentData();
  for (const s of mod.slides) for (const b of (s.blocks||[])) if (b.type==='qcm_multi' && s.id+'_'+b.id===aid) opts = b.options||[];
  // Mettre à jour l'affichage
  opts.forEach(opt => {
    const isSelected = sel.includes(opt.id);
    const btn = document.querySelector(`#opts_${aid} [data-id="${opt.id}"]`);
    if (btn) {
      btn.disabled = true; btn.classList.remove('selected');
      if (opt.correct) btn.classList.add('correct'); else if (isSelected) btn.classList.add('wrong');
      const lbl = btn.querySelector('.opt-l');
      if (lbl) lbl.textContent = opt.correct ? '✓' : isSelected ? '✗' : '○';
    }
    const fbEl = document.getElementById(`fb_${aid}_${opt.id}`);
    if (fbEl) {
      fbEl.className = `qcm-fb ${opt.correct ? 'fb-ok' : 'fb-ko'}`;
      fbEl.innerHTML = `<strong>${opt.correct ? '✓' : '✗'} Option ${opt.id}</strong> ${opt.feedback}`;
    }
  });
  document.getElementById('val_'+aid)?.parentElement?.remove();
  checkSlideComplete(currentSlide);
}

// ── Interactivité QCM ────────────────────────────────────────────────────────

function selQCM(aid, idx, correct) {
  document.querySelectorAll(`#opts_${aid} .qcm-opt`).forEach(b=>b.classList.remove('selected'));
  document.querySelector(`#opts_${aid} .qcm-opt[data-i="${idx}"]`)?.classList.add('selected');
  answers[aid] = {...(answers[aid]||{}), selected: idx};
  document.getElementById('val_'+aid).disabled = false;
}

function valQCM(aid, correct, fb_ok, fb_ko) {
  const sel = answers[aid]?.selected; if (sel===undefined) return;
  answers[aid] = {selected:sel, done:true}; saveState();
  document.querySelectorAll(`#opts_${aid} .qcm-opt`).forEach((b,i)=>{
    b.disabled=true; b.classList.remove('selected');
    if(i===correct) b.classList.add('correct');
    else if(i===sel&&i!==correct) b.classList.add('wrong');
    const l=b.querySelector('.opt-l'); if(l){if(i===correct)l.textContent='✓';else if(i===sel&&i!==correct)l.textContent='✗';}
  });
  const fb=document.getElementById('fb_'+aid);
  const ok=sel===correct;
  if(fb){fb.className='qcm-fb '+(ok?'fb-ok':'fb-ko');fb.innerHTML=`<strong>${ok?'✓ Bonne réponse !':'Pas tout à fait.'}</strong> ${ok?fb_ok:fb_ko}`;fb.style.display='block';}
  document.getElementById('val_'+aid)?.parentElement?.remove();
  checkSlideComplete(currentSlide);
}

// ── Interactivité Sort ───────────────────────────────────────────────────────

let dragId=null;
function onDS(e){dragId=e.target.dataset.id;}

function onDP(e, aid, ci, ansStr, total) {
  e.preventDefault(); if(!dragId) return;
  const ans=JSON.parse(ansStr.replace(/&quot;/g,'"'));
  const placed={...(answers[aid]?.placed||{})}; placed[dragId]=ci;
  answers[aid]={placed}; saveState();

  document.getElementById('pool_'+aid)?.querySelector(`[data-id="${dragId}"]`)?.remove();
  const zone=document.getElementById(`zone_${aid}_${ci}`);
  if(zone){const d=document.createElement('div');d.className='sort-placed';d.dataset.id=dragId;d.textContent=getSortText(aid,dragId);zone.appendChild(d);}
  dragId=null;
  const allPlaced=Object.keys(placed).length>=total;
  const vb=document.getElementById('val_s_'+aid); if(vb)vb.disabled=!allPlaced;
}

function getSortText(aid, itemId) {
  const mod=getCurrentData();
  for(const s of mod.slides) for(const b of (s.blocks||[])) if(b.type==='sort'&&s.id+'_'+b.id===aid){const it=(b.items||[]).find(i=>i.id===itemId);return it?it.text:itemId;}
  return itemId;
}

function valSort(aid, ansStr, total) {
  const ans=JSON.parse(ansStr.replace(/&quot;/g,'"'));
  const placed=answers[aid]?.placed||{};
  answers[aid]={placed,done:true}; saveState();
  document.querySelectorAll(`[id^="zone_${aid}_"] .sort-placed`).forEach(el=>{
    const id=el.dataset.id; if(!id)return;
    const ci=parseInt(el.closest('[id^="zone_"]').id.split('_').pop());
    if(ans[id]===ci){el.classList.add('correct');el.textContent='✓ '+el.textContent;}
    else{el.classList.add('wrong');el.textContent='✗ '+el.textContent;}
    // Feedback par item
    const mod=getCurrentData();
    for(const s of mod.slides) for(const b of (s.blocks||[])) if(b.type==='sort'&&s.id+'_'+b.id===aid){
      const it=(b.items||[]).find(i=>i.id===id);
      if(it?.feedback){
        const fbDiv=document.createElement('div');
        fbDiv.className='sort-item-fb '+(ans[id]===ci?'fb-ok':'fb-ko');
        fbDiv.textContent=it.feedback;
        el.parentElement?.appendChild(fbDiv);
      }
    }
  });
  document.getElementById('val_s_'+aid)?.parentElement?.remove();
  const sc=document.getElementById('sort_sc_'+aid); if(sc)sc.innerHTML=buildSortScore(placed,ans,total);
  checkSlideComplete(currentSlide);
}

function buildSortScore(placed,ans,total){
  const score=Object.entries(placed).filter(([k,v])=>ans[k]===v).length;
  return `<div class="sort-score">${score}/${total} correct${score>1?'s':''}.</div>`;
}

function resetSort(aid){
  delete answers[aid]; saveState();
  const idx=parseInt(document.querySelector('.slide.active')?.id.replace('slide_','')||'0');
  const mod=getCurrentData();
  const container=document.getElementById('slides-container');
  container.innerHTML=mod.slides.map((s,i)=>renderSlide(s,i,mod.slides.length)).join('')+renderEnd(mod);
  goTo(idx);
}

// ── Hotspot image ────────────────────────────────────────────────────────────

function toggleHotspot(e, hid, spotId) {
  e.stopPropagation();
  const pop = document.getElementById(`hspop_${hid}_${spotId}`);
  const dot = document.getElementById(`hsdot_${hid}_${spotId}`);
  if (!pop) return;
  const isOpen = pop.classList.contains('hs-popup-open');
  // Fermer tous
  document.querySelectorAll(`[id^="hspop_${hid}_"]`).forEach(p => p.classList.remove('hs-popup-open'));
  document.querySelectorAll(`[id^="hsdot_${hid}_"]`).forEach(d => d.classList.remove('hs-dot-active'));
  if (!isOpen) {
    pop.classList.add('hs-popup-open');
    dot.classList.add('hs-dot-active');
    // Positionnement : éviter débordement
    const x = parseFloat(dot.style.left);
    const y = parseFloat(dot.style.top);
    // Horizontal
    if (x > 60) { pop.style.left='auto'; pop.style.right=(100-x+3)+'%'; }
    else { pop.style.left=(x+3)+'%'; pop.style.right='auto'; }
    // Vertical
    if (y > 60) { pop.style.top='auto'; pop.style.bottom=(100-y+4)+'%'; }
    else { pop.style.top=(y+4)+'%'; pop.style.bottom='auto'; }
  }
}

function closeAllHotspots(e, hid) {
  // Clic sur le fond (pas sur un dot ou popup) ferme tout
  if (e.target.closest('.hs-dot') || e.target.closest('.hs-popup')) return;
  document.querySelectorAll(`[id^="hspop_${hid}_"]`).forEach(p => p.classList.remove('hs-popup-open'));
  document.querySelectorAll(`[id^="hsdot_${hid}_"]`).forEach(d => d.classList.remove('hs-dot-active'));
}

// ── Spectrum (tableau progressif) ────────────────────────────────────────────

function specNext(sid, total) {
  let current = parseInt(document.getElementById('spec_count_'+sid).dataset.step || '0');
  if (current >= total - 1) return;
  current++;
  document.getElementById('spec_col_'+sid+'_'+current).style.display = 'flex';
  document.getElementById('spec_count_'+sid).textContent = (current+1)+' / '+total;
  document.getElementById('spec_count_'+sid).dataset.step = current;
  document.getElementById('spec_back_'+sid).style.display = 'inline-block';
  if (current >= total - 1) {
    const nb = document.getElementById('spec_next_'+sid);
    if (nb) nb.style.display = 'none';
  }
}

function specBack(sid, total) {
  let current = parseInt(document.getElementById('spec_count_'+sid).dataset.step || '0');
  if (current <= 0) return;
  document.getElementById('spec_col_'+sid+'_'+current).style.display = 'none';
  current--;
  document.getElementById('spec_count_'+sid).textContent = (current+1)+' / '+total;
  document.getElementById('spec_count_'+sid).dataset.step = current;
  document.getElementById('spec_next_'+sid).style.display = 'inline-block';
  if (current <= 0) {
    const bb = document.getElementById('spec_back_'+sid);
    if (bb) bb.style.display = 'none';
  }
}

// ── Révélation progressive ───────────────────────────────────────────────────

function revealBlocks(rid, btn) {
  const wrap = btn.closest('[data-rid]');
  if (!wrap) return;
  const card = wrap.closest('.card');
  if (!card) return;
  card.querySelectorAll('[data-hidden]').forEach(el => {
    if (el.dataset.hidden === rid) { el.style.display = ''; el.removeAttribute('data-hidden'); }
  });
  wrap.remove();
  // Marquer ce trigger comme révélé
  if (!answers['__reveals__']) answers['__reveals__'] = {};
  answers['__reveals__'][rid] = true;
  checkSlideComplete(currentSlide);
}

function checkSlideComplete(idx) {
  const mod = getCurrentData();
  const slide = mod.slides[idx];
  if (!slide) return;
  const nextBtn = document.getElementById('btn_next_'+idx);
  if (!nextBtn) return;

  let complete = true;

  // Vérifier les activités
  for (const b of (slide.blocks||[])) {
    if (['qcm','qcm_multi','qcm_annotated','sort'].includes(b.type)) {
      const aid = slide.id+'_'+b.id;
      if (!answers[aid]?.done) { complete = false; break; }
    }
    if (b.type === 'reflection') {
      const aid = slide.id+'_'+b.id;
      if (!answers[aid]?.text) { complete = false; break; }
    }
  }

  // Vérifier les reveal_triggers non encore révélés
  if (complete) {
    const card = document.getElementById('slide_'+idx)?.querySelector('.card');
    if (card && card.querySelector('[data-rid]')) { complete = false; }
  }

  if (complete) {
    nextBtn.disabled = false;
    nextBtn.style.opacity = '';
    nextBtn.style.cursor = '';
  }
}

// ── Interactivité Réflexion ──────────────────────────────────────────────────

function onRI(aid){
  const btn=document.getElementById('btn_r_'+aid); if(btn)btn.textContent='Enregistrer';
  const sv=document.getElementById('sv_'+aid); if(sv)sv.style.display='none';
}

function saveRef(aid){
  const ta=document.getElementById('ta_'+aid); if(!ta||!ta.value.trim())return;
  answers[aid]={text:ta.value.trim()}; saveState();
  const btn=document.getElementById('btn_r_'+aid); if(btn)btn.textContent='✓ Enregistré';
  const sv=document.getElementById('sv_'+aid); if(sv)sv.style.display='inline';
  checkSlideComplete(currentSlide);
}

// ── Accueil ──────────────────────────────────────────────────────────────────

function showAccueil() {
  const a = FORMATION.accueil;
  document.getElementById('accueil-screen').style.display = 'block';
  document.getElementById('formation-shell').style.display = 'none';
  document.getElementById('acc-title').textContent = a.title;
  document.getElementById('acc-subtitle').textContent = a.subtitle;
  document.getElementById('acc-desc').textContent = a.description;
  document.getElementById('acc-details').innerHTML = a.details;
  document.getElementById('acc-audience').innerHTML = a.audience;
  document.getElementById('acc-cta').textContent = a.cta || 'COMMENCER';
}

function startFormation() {
  document.getElementById('accueil-screen').style.display = 'none';
  document.getElementById('formation-shell').style.display = 'block';
  switchModule(0);
}

function goHome() {
  document.getElementById('formation-shell').style.display = 'none';
  document.getElementById('accueil-screen').style.display = 'block';
  window.scrollTo(0, 0);
}

// ── Init ─────────────────────────────────────────────────────────────────────

loadState();
document.addEventListener('DOMContentLoaded', ()=>{ showAccueil(); });