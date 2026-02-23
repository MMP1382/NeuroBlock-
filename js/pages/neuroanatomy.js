function neuroanatomyPage() {

    if (!document.getElementById('cn5-styles')) {
        const cn5Style = document.createElement('style');
        cn5Style.id = 'cn5-styles';
        cn5Style.textContent = `
            .cn5-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 14px;
                margin-top: 16px;
            }
            @media (min-width: 820px) {
                .cn5-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
            .cn8-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 14px;
                margin-top: 16px;
            }
            @media (min-width: 820px) {
                .cn8-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            }
            .cn5-branch-btn {
                position: static;
                width: 100%;
                padding: 18px 16px;
                border-radius: 16px;
                border: 1px solid rgba(255,255,255,0.10);
                background: rgba(255,255,255,0.04);
                color: #e2e8f0;
                cursor: pointer;
                text-align: left;
                transition: transform .08s ease, background .12s ease, border-color .12s ease;
            }
            .cn5-branch-btn:hover {
                transform: translateY(-1px);
                background: rgba(255,255,255,0.06);
                border-color: rgba(255,255,255,0.16);
            }
            .cn5-branch-top {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 6px;
            }
            .cn5-branch-code {
                font-size: 1.15rem;
                font-weight: 800;
                letter-spacing: 0.5px;
            }
            .cn5-branch-name {
                font-size: 0.95rem;
                font-weight: 700;
                color: #cbd5e1;
            }
            .cn5-branch-desc {
                margin: 0;
                font-size: 0.92rem;
                color: #94a3b8;
                line-height: 1.5;
            }
            .cn5-back-mini {
                margin-top: 12px;
                display: none;
                align-items: center;
                gap: 10px;
                padding: 10px 12px;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.10);
                background: rgba(255,255,255,0.03);
                color: #e2e8f0;
                cursor: pointer;
                width: fit-content;
            }
            .cn5-back-mini:hover {
                background: rgba(255,255,255,0.05);
            }
        `;
        document.head.appendChild(cn5Style);
    }

    document.getElementById('app').innerHTML = `
        <button class="back-btn" onclick="navigate('home')">← Home</button>

        <div id="main-view">
            <div id="left-view">
                <iframe
                    id="sketchfab-frame"
                    title="Cranial Nerves"
                    frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                    style="width:100%; height:100%; border:0;"
                ></iframe>
            </div>
        </div>

        <div id="detail-page">
            <div class="detail-container">

                <!-- ══ CN V BRANCH SELECT ══ -->
                <div id="cn5-branch-page" style="display:none;">
                    <div class="detail-header">
                        <div>
                            <span id="cn5-badge" class="nerve-badge">Mixed</span>
                            <h1 id="cn5-title" class="detail-title">CN V: Trigeminal</h1>
                            <p style="margin:6px 0 0 0; color:#94a3b8; font-size:0.95rem;">Choose a branch:</p>
                        </div>
                        <button class="close-btn" onclick="closeDetail()"><span>✕</span> Close</button>
                    </div>
                    <div class="detail-card" style="margin-bottom:30px;">
                        <h3 style="border-color:#ffd166;">CN V Branches</h3>
                        <div class="cn5-grid">
                            <button class="cn5-branch-btn" onclick="openDetail('cn5_v1')">
                                <div class="cn5-branch-top"><div class="cn5-branch-code" style="color:#ffd166;">V1</div><div class="cn5-branch-name">Ophthalmic</div></div>
                                <p class="cn5-branch-desc">Pure sensory (forehead, cornea, upper eyelid).</p>
                            </button>
                            <button class="cn5-branch-btn" onclick="openDetail('cn5_v2')">
                                <div class="cn5-branch-top"><div class="cn5-branch-code" style="color:#ffd166;">V2</div><div class="cn5-branch-name">Maxillary</div></div>
                                <p class="cn5-branch-desc">Pure sensory (cheek, upper lip, maxillary teeth).</p>
                            </button>
                            <button class="cn5-branch-btn" onclick="openDetail('cn5_v3')">
                                <div class="cn5-branch-top"><div class="cn5-branch-code" style="color:#ffd166;">V3</div><div class="cn5-branch-name">Mandibular</div></div>
                                <p class="cn5-branch-desc">Mixed (lower face sensation + muscles of mastication).</p>
                            </button>
                        </div>
                    </div>
                    <div style="margin-bottom:60px;">
                        <h2 style="color:#a0aec0; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:20px; font-weight:700;">3D Viewer — Nerve Content of the IT &amp; PT Fossae</h2>
                        <div style="width:100%; height:550px; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.08);">
                            <iframe title="Nerve Content of the IT &amp; PT Fossae" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6cbe72f8e0fe4e9a9321fc6f81b2e46d/embed" style="width:100%; height:100%; border:0;"></iframe>
                        </div>
                        <p style="margin-top:10px; font-size:0.78rem; color:#64748b; text-align:center;">
                            <a href="https://sketchfab.com/3d-models/nerve-content-of-the-it-pt-fossae-6cbe72f8e0fe4e9a9321fc6f81b2e46d" target="_blank" rel="nofollow" style="color:#1CAAD9; font-weight:600;">Nerve Content of the IT &amp; PT Fossae</a>
                            by <a href="https://sketchfab.com/SGUMedArt" target="_blank" rel="nofollow" style="color:#1CAAD9; font-weight:600;">The Center for BioMedical Visualization at SGU</a> on Sketchfab
                        </p>
                    </div>
                </div>

                <!-- ══ CN VIII BRANCH SELECT ══ -->
                <div id="cn8-branch-page" style="display:none;">
                    <div class="detail-header">
                        <div>
                            <span id="cn8-badge" class="nerve-badge">Special Sensory</span>
                            <h1 id="cn8-title" class="detail-title">CN VIII: Vestibulocochlear</h1>
                            <p style="margin:6px 0 0 0; color:#94a3b8; font-size:0.95rem;">Choose a division:</p>
                        </div>
                        <button class="close-btn" onclick="closeDetail()"><span>✕</span> Close</button>
                    </div>
                    <div class="detail-card" style="margin-bottom:30px;">
                        <h3 style="border-color:#06d6a0;">Overview</h3>
                        <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                            <ul style="padding-left:18px; margin:0;">
                                <li>Type: <strong>Purely sensory</strong> — Special Somatic Afferent (SSA)</li>
                                <li>TWO distinct divisions sharing the same nerve trunk: <strong>Cochlear nerve</strong> (hearing) + <strong>Vestibular nerve</strong> (balance)</li>
                                <li>Originates in inner ear (cochlea + vestibular apparatus)</li>
                                <li>Travels through <strong>internal acoustic meatus (IAM)</strong> alongside CN VII (facial nerve)</li>
                                <li>Enters brainstem at <strong>pontomedullary junction</strong> (cerebellopontine angle, CPA)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="detail-card" style="margin-bottom:30px;">
                        <h3 style="border-color:#06d6a0;">CN VIII Divisions</h3>
                        <div class="cn8-grid">
                            <button class="cn5-branch-btn" onclick="openDetail('cn8_vestibular')">
                                <div class="cn5-branch-top"><div class="cn5-branch-code" style="color:#06d6a0;">Vestibular</div></div>
                                <p class="cn5-branch-desc">Balance, spatial orientation, vestibulo-ocular reflex (VOR).</p>
                            </button>
                            <button class="cn5-branch-btn" onclick="openDetail('cn8_cochlear')">
                                <div class="cn5-branch-top"><div class="cn5-branch-code" style="color:#06d6a0;">Cochlear</div></div>
                                <p class="cn5-branch-desc">Hearing, sound localization, tonotopic organization.</p>
                            </button>
                        </div>
                    </div>
                    <div style="margin-bottom:60px;">
                        <h2 style="color:#a0aec0; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:20px; font-weight:700;">3D Viewer — Vestibulocochlear Nerve</h2>
                        <div style="width:100%; height:550px; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.08);">
                            <iframe title="Vestibulocochlear nerve (Cranial nerve VIII)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/973c8b5171fa4d4eabd527f5f24957d7/embed" style="width:100%; height:100%; border:0;"></iframe>
                        </div>
                        <p style="margin-top:10px; font-size:0.78rem; color:#64748b; text-align:center;">
                            <a href="https://sketchfab.com/3d-models/vestibulocochlear-nerve-cranial-nerve-viii-973c8b5171fa4d4eabd527f5f24957d7" target="_blank" rel="nofollow" style="color:#1CAAD9; font-weight:600;">Vestibulocochlear nerve (Cranial nerve VIII)</a>
                            by <a href="https://sketchfab.com/ISMMS_students" target="_blank" rel="nofollow" style="color:#1CAAD9; font-weight:600;">ISMMS_students</a> on Sketchfab
                        </p>
                    </div>
                </div>

                <!-- ══ NORMAL DETAIL CONTENT ══ -->
                <div id="detail-content">
                    <div class="detail-header">
                        <div>
                            <span id="dt-badge" class="nerve-badge">Type</span>
                            <h1 id="dt-title" class="detail-title">Nerve Name</h1>
                            <button id="dt-branches-btn" class="cn5-back-mini">← Back</button>
                        </div>
                        <button class="close-btn" onclick="closeDetail()"><span>✕</span> Close</button>
                    </div>
                    <div class="detail-card" style="margin-bottom:30px;">
                        <h3 id="dt-anatomy-heading" style="border-color:#0ea5e9;">Anatomy & Pathway</h3>
                        <ul id="dt-anatomy"></ul>
                    </div>
                    <div id="pathway-section" style="display:none; margin-bottom:30px;">
                        <h2 style="color:#a0aec0; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:20px; font-weight:700;">3D Pathway Viewer</h2>
                        <div style="width:100%; height:550px; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.08);">
                            <iframe id="pathway-frame" title="Pathway 3D" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share style="width:100%; height:100%; border:0;"></iframe>
                        </div>
                    </div>
                    <div class="detail-card" style="margin-bottom:30px;">
                        <h3 style="border-color:#ffd166;">Physiology</h3>
                        <ul id="dt-func"></ul>
                    </div>
                    <div class="detail-card" style="margin-bottom:60px;">
                        <h3 style="border-color:#ff4d6d;">Clinical Relevance</h3>
                        <div id="dt-clinical" class="clinical-box"></div>
                        <p id="dt-mnemonic" style="margin-top:20px; font-style:italic; color:#94a3b8; font-size:1rem;"></p>
                    </div>
                </div>

            </div>
        </div>
    `;

    // ─────────────────────────────────────────
    // NERVE DATA
    // ─────────────────────────────────────────
    const db = {

        "cn1": {
            title: "CN I: Olfactory", type: "Special Sensory", color: "#06d6a0",
            pathwayUid: "fa5c3d97f99f40b3b9cef9fa07d8635c",
            anatomy: [
                "Origin: Olfactory Receptor Cells",
                "Passage: Cribriform Plate",
                "Synapse: Olfactory Bulb",
                "Path: Olfactory Tract",
                "Target: Primary Olfactory Cortex"
            ],
            func: ["Special Sense: Smell", "Direct connection to limbic system"],
            clinical: "<strong>Anosmia:</strong> Loss of smell due to fracture of ethmoid bone or viral infection.",
            mnemonic: "'Some Say Marry Money...'"
        },

        "cn2": {
            title: "CN II: Optic", type: "Special Sensory", color: "#06d6a0",
            pathwayUid: "455cac9756ed42458d33a0dad97b3512",
            detailedAnatomy: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">ORIGIN</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>~1.2 million Retinal Ganglion Cell (RGC) axons converge → Optic Disc</li>
                    <li>Classification: <strong>CNS white matter tract</strong>; myelinated by <strong>OLIGODENDROCYTES</strong>; enclosed in all 3 meningeal layers with CSF</li>
                    <li>Segments: Intraocular → Intraorbital → Intracanalicular → Intracranial</li>
                    <li>Passes through: <strong>Optic Canal</strong> (sphenoid bone), with ophthalmic artery</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">VISUAL FIELD LOGIC</p>
                <ul style="padding-left:18px; margin:0 0 10px 0;">
                    <li>Light from <strong>LEFT</strong> visual field → NASAL retina (Right eye) + TEMPORAL retina (Left eye)</li>
                    <li>Light from <strong>RIGHT</strong> visual field → NASAL retina (Left eye) + TEMPORAL retina (Right eye)</li>
                </ul>
                <div style="background:rgba(14,165,233,0.1); border-left:3px solid #0ea5e9; padding:10px 14px; border-radius:0 6px 6px 0; margin:0 0 16px 0; font-size:0.88rem;">
                    <strong>KEY RULE:</strong> Each hemisphere processes the <strong>CONTRALATERAL</strong> visual field.
                </div>
                <img src="assets/visual-field-defects.jpg" alt="Visual Field Defects Diagram" style="width:100%; max-width:600px; display:block; margin:0 auto 28px auto; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background:#fff; padding:12px;" />
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">OPTIC CHIASM — DECUSSATION</p>
                <ul style="padding-left:18px; margin:0 0 10px 0;">
                    <li><strong>NASAL</strong> retinal fibers → CROSS to contralateral optic tract</li>
                    <li><strong>TEMPORAL</strong> retinal fibers → stay IPSILATERAL</li>
                </ul>
                <div style="background:rgba(255,209,102,0.08); border-left:3px solid #ffd166; padding:10px 14px; border-radius:0 6px 6px 0; margin:0 0 20px 0; font-size:0.88rem;">
                    → RIGHT optic tract carries <strong>LEFT visual field</strong> from BOTH eyes<br>
                    → LEFT optic tract carries <strong>RIGHT visual field</strong> from BOTH eyes
                </div>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">PATHWAY — 3 STREAMS</p>
                <p style="color:#06d6a0; font-size:0.78rem; font-weight:700; margin:0 0 6px 0;">STREAM 1 — Geniculostriate (~90%) — Conscious Vision</p>
                <ul style="padding-left:18px; margin:0 0 10px 0;">
                    <li>Optic Tract → <strong>LGN</strong> → Optic Radiations → <strong>V1</strong> (Area 17, occipital lobe)</li>
                    <li><strong>Meyer's Loop</strong> (temporal) → upper visual field → lesion = <em>"Pie in the SKY"</em></li>
                    <li><strong>Baum's Loop</strong> (parietal) → lower visual field → lesion = <em>"Pie on the FLOOR"</em></li>
                </ul>
                <p style="color:#06d6a0; font-size:0.78rem; font-weight:700; margin:0 0 6px 0;">STREAM 2 — Tectopulvinar (~10%) — Reflexive Vision</p>
                <ul style="padding-left:18px; margin:0 0 10px 0;">
                    <li>Optic Tract → <strong>Superior Colliculus</strong> → <strong>Pulvinar</strong> → Visual Association Cortices</li>
                    <li>Basis of <strong>BLINDSIGHT</strong></li>
                </ul>
                <p style="color:#06d6a0; font-size:0.78rem; font-weight:700; margin:0 0 6px 0;">STREAM 3 — Retinohypothalamic Tract</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>→ <strong>Suprachiasmatic Nucleus (SCN)</strong> → Circadian rhythm entrainment</li>
                </ul>
            </div>`,
            detailedFunc: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li>Fiber type: <strong>Special Somatic Afferent (SSA)</strong> — purely sensory</li>
                    <li>Conscious vision: color, contrast, acuity, depth (via Stream 1 → V1)</li>
                    <li>Unconscious/reflexive vision (via Stream 2 → SC)</li>
                    <li><strong>Afferent limb</strong> — Pupillary Light Reflex (Efferent = CN III)</li>
                    <li><strong>Afferent limb</strong> — Accommodation Reflex</li>
                    <li>Circadian rhythm regulation (Stream 3 → SCN)</li>
                </ul>
            </div>`,
            clinical: `<div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">LESION MAP</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:20px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Lesion Location</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Visual Field Defect</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Optic Nerve (pre-chiasm)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Monocular blindness — ipsilateral eye</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Optic Chiasm (central)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Bitemporal hemianopsia</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Optic Tract (post-chiasm)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Contralateral homonymous hemianopsia</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Meyer's Loop (temporal)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">"Pie in the Sky" — superior quadrantanopsia</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Baum's Loop (parietal)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">"Pie on the Floor" — inferior quadrantanopsia</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Occipital Cortex (V1)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Contralateral homonymous hemianopsia WITH macular sparing</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">V1 bilateral + SC/Pulvinar intact</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">BLINDSIGHT</td></tr>
                </table>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ RAPD (Marcus Gunn Pupil)</span><br>Affected pupil paradoxically dilates on swinging flashlight. Pre-chiasmal only.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Optic Neuritis</span><br>Demyelination; painful unilateral vision loss + color desaturation. Classic MS presentation.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Papilledema</span><br>Raised ICP → bilateral optic disc swelling.</p>
                <p style="margin:0;"><span style="color:#ffd166; font-weight:700;">⚠ Optic Nerve Glioma</span> — associated with NF1.</p>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Nasal fibers cross, temporal stay" → Chiasm rule<br>
                💡 "Opposite hemisphere, same field" → Contralateral processing<br>
                💡 "Sky = Meyer's, Floor = Baum's" → Quadrantanopsia loops<br>
                💡 "SC reacts, V1 perceives" → Reflexive vs conscious vision
            </div>`
        },

        "cn3": {
            title: "CN III: Oculomotor", type: "Motor", color: "#ff4d6d",
            pathwayUid: "0c851cb429b94ae2834bfd1abc413d57",
            anatomy: [
                "Origin (motor): Oculomotor nucleus (midbrain)",
                "Origin (parasympathetic): Edinger–Westphal nucleus (midbrain)",
                "Level: Superior colliculus",
                "Course: Passes between PCA and SCA",
                "Course: Lateral wall of cavernous sinus",
                "Course: Enters orbit via superior orbital fissure"
            ],
            func: [
                "Somatic motor: Superior rectus, Medial rectus, Inferior rectus, Inferior oblique, Levator palpebrae superioris",
                "Parasympathetic: Edinger–Westphal → ciliary ganglion → Sphincter pupillae + Ciliary muscle"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>CN III lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Ipsilateral ptosis</li>
                    <li>"Down-and-out" eye position</li>
                    <li>Dilated, fixed pupil</li>
                    <li>Impaired accommodation</li>
                </ul>
            </div>`,
            mnemonic: "SO4 LR6 All Rest 3"
        },

        "cn4": {
            title: "CN IV: Trochlear", type: "Motor", color: "#ff4d6d",
            pathwayUid: "079edfa902834a959d5fa096d8bae86b",
            anatomy: [
                "Origin: Trochlear nucleus (midbrain)",
                "ONLY CN that exits brainstem dorsally",
                "Smallest cranial nerve",
                "Fibers decussate before exiting → each nucleus controls CONTRALATERAL superior oblique",
                "Course: Wraps around midbrain → lateral wall cavernous sinus → superior orbital fissure (above annulus of Zinn)"
            ],
            func: [
                "Somatic motor to ONE muscle: Superior oblique",
                "Actions: Intorsion; Depression of adducted eye (down-and-in)"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>CN IV lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Vertical diplopia (worse looking down)</li>
                    <li>Head tilt AWAY from affected side</li>
                    <li>Bielschowsky head tilt test positive</li>
                </ul>
            </div>`,
            mnemonic: "Trochlea = Pulley"
        },

        "cn5": {
            title: "CN V: Trigeminal", type: "Mixed", color: "#ffd166",
            pathwayUid: null,
            anatomy: ["Origin: Lateral Pons", "3 Branches: V1, V2, V3"],
            func: ["Sensory: Face, Cornea", "Motor: Mastication"],
            clinical: "<strong>Trigeminal Neuralgia:</strong> Severe lancinating facial pain.",
            mnemonic: "Tri = 3 Branches"
        },

        "cn5_v1": {
            title: "CN V1: Ophthalmic (Trigeminal)", type: "Sensory", color: "#06d6a0",
            pathwayUid: null,
            anatomy: [
                "Type: Purely sensory division of CN V",
                "Cell bodies: Trigeminal (Gasserian) ganglion",
                "Course: Trigeminal ganglion → lateral wall cavernous sinus → superior orbital fissure",
                "Branches: Frontal (supraorbital, supratrochlear), Lacrimal, Nasociliary",
                "Meningeal branch: Recurrent tentorial branch → anterior cranial fossa dura"
            ],
            func: [
                "GSA from: cornea, conjunctiva, upper eyelid, forehead, anterior scalp, dorsum/tip of nose, frontal/ethmoid sinuses, dura",
                "Corneal reflex AFFERENT limb (efferent = CN VII blink)"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>V1 lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Sensory loss: forehead, upper eyelid, cornea</li>
                    <li>Absent corneal reflex (afferent defect)</li>
                    <li>Neurotrophic keratitis risk</li>
                    <li>Herpes zoster ophthalmicus; Cavernous sinus syndrome</li>
                </ul>
            </div>`,
            mnemonic: ""
        },

        "cn5_v2": {
            title: "CN V2: Maxillary (Trigeminal)", type: "Sensory", color: "#06d6a0",
            pathwayUid: null,
            anatomy: [
                "Type: Purely sensory division of CN V",
                "Cell bodies: Trigeminal (Gasserian) ganglion",
                "Course: Foramen rotundum → pterygopalatine fossa → infraorbital canal → infraorbital foramen",
                "Branches: Infraorbital nerve (superior alveolar nerves), Zygomatic nerve, Pterygopalatine branches (greater/lesser palatine, nasal, pharyngeal)"
            ],
            func: [
                "GSA from: lower eyelid, cheek, upper lip, side of nose, upper teeth/gums, maxillary sinus, hard/soft palate, posterior nasal mucosa, nasopharynx, dura of middle cranial fossa"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>V2 lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Numbness over cheek, upper lip, upper teeth</li>
                    <li>Trigeminal neuralgia (V2+V3 most common) → carbamazepine</li>
                    <li>Orbital floor fracture → infraorbital nerve trapped</li>
                    <li>Herpes Zoster V2; Cavernous sinus syndrome</li>
                </ul>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Foramen Rotundum = Round = V2"<br>
                💡 "Foramen Ovale = Oval = V3"
            </div>`
        },

        "cn5_v3": {
            title: "CN V3: Mandibular (Trigeminal)", type: "Mixed", color: "#ffd166",
            pathwayUid: null,
            anatomy: [
                "Type: MIXED — only division of CN V with motor fibers",
                "Cell bodies (sensory): Trigeminal ganglion; Motor: Motor nucleus CN V (pons)",
                "Course: Foramen ovale → infratemporal fossa → anterior (motor) + posterior (sensory) divisions",
                "Anterior: Masseteric, deep temporal, pterygoid nerves, buccal nerve (sensory only branch)",
                "Posterior: Auriculotemporal, lingual nerve (+ chorda tympani for taste), inferior alveolar (+ mental), mylohyoid nerve",
                "Meningeal branch: Nervus spinosus → foramen spinosum → middle cranial fossa dura"
            ],
            func: [
                "GSA from: lower lip/chin, lower teeth/gums, anterior 2/3 tongue (touch), anterior ear/EAM/temporal scalp, buccal mucosa",
                "Motor: Masseter, Temporalis, Medial pterygoid, Lateral pterygoid, Mylohyoid, Anterior belly of digastric, Tensor veli palatini, Tensor tympani",
                "Jaw jerk reflex (afferent + efferent = V3) — only monosynaptic reflex of the head"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>V3 lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Numbness: lower lip, chin, lower teeth, anterior tongue</li>
                    <li>Jaw deviates TOWARD side of lesion on opening</li>
                    <li>Loss of jaw jerk reflex</li>
                    <li>Trigeminal neuralgia V2+V3; Mandibular fracture; Frey's syndrome</li>
                </ul>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Foramen Ovale = Oval jaw = V3 chews"<br>
                💡 "V3 = ONLY mixed division"<br>
                💡 "Lingual = touch; Chorda tympani hitchhikes = taste"
            </div>`
        },

        "cn6": {
            title: "CN VI: Abducens", type: "Motor", color: "#ff4d6d",
            pathwayUid: "08b639f5c73941ce82e9f80fdea3011e",
            anatomy: [
                "Origin: Abducens nucleus (dorsal pons, floor of 4th ventricle)",
                "Course: Exits pontomedullary junction → ascends along/over clivus (long intracranial course)",
                "Course: Cavernous sinus (adjacent to ICA) → superior orbital fissure (within annulus of Zinn)"
            ],
            func: [
                "Somatic motor to ONE muscle: Lateral rectus",
                "Action: Abduction of the eye"
            ],
            clinical: `<div style="font-size:0.95rem; line-height:1.7;">
                <strong>CN VI lesion:</strong>
                <ul style="margin:12px 0 0 18px;">
                    <li>Inability to abduct affected eye</li>
                    <li>Convergent strabismus (esotropia)</li>
                    <li>Horizontal diplopia, worse looking toward affected side</li>
                    <li>Patient turns head TOWARD affected side to compensate</li>
                </ul>
            </div>`,
            mnemonic: "Abducens = Abduct"
        },

        "cn7": {
            title: "CN VII: Facial", type: "Mixed", color: "#ffd166",
            pathwayUid: "56cd222e14e6462c95d65f339796b161",
            detailedAnatomy: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TYPE & NUCLEI</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Type: <strong>MIXED</strong> — motor, special sensory (taste), parasympathetic</li>
                    <li>Facial motor nucleus (pons) → muscles of facial expression</li>
                    <li>Superior salivatory nucleus (pons) → parasympathetic output</li>
                    <li>Nucleus tractus solitarius (NTS, medulla) → receives taste input</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">COURSE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Exits brainstem at pontomedullary junction (CPA) alongside CN VIII</li>
                    <li>Enters internal acoustic meatus (IAM) with CN VIII</li>
                    <li>Travels through facial canal within petrous temporal bone</li>
                    <li>Geniculate ganglion — sensory ganglion for taste + somatic sensation</li>
                    <li>Exits skull via stylomastoid foramen</li>
                    <li>Enters and passes through parotid gland → terminal branches</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">BRANCHES IN PETROUS BONE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li><strong>Greater petrosal nerve</strong> (at geniculate ganglion): parasympathetic → pterygopalatine ganglion → lacrimal gland + nasal/palatine mucous glands</li>
                    <li><strong>Nerve to stapedius:</strong> motor → stapedius muscle (dampens ossicular vibration)</li>
                    <li><strong>Chorda tympani:</strong> taste anterior 2/3 tongue; parasympathetic → submandibular + sublingual glands; hitchhikes on lingual nerve (V3)</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TERMINAL MOTOR BRANCHES (after stylomastoid foramen)</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Temporal | Zygomatic | Buccal | Marginal mandibular | Cervical</li>
                </ul>
            </div>`,
            detailedFunc: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Somatic motor:</strong> Frontalis, Orbicularis oculi, Orbicularis oris, Buccinator, Platysma; Stapedius, Stylohyoid, Posterior belly of digastric</li>
                    <li><strong>Special visceral afferent (taste):</strong> Anterior 2/3 of tongue (via chorda tympani)</li>
                    <li><strong>Parasympathetic:</strong> Lacrimal gland (greater petrosal nerve); Submandibular + sublingual glands (chorda tympani); Nasal + palatine mucous glands</li>
                    <li><strong>Somatic sensory:</strong> External auditory meatus + skin behind ear (Ramsay Hunt zone)</li>
                    <li><strong>Corneal reflex:</strong> EFFERENT limb (afferent = V1)</li>
                    <li><strong>Stapedial reflex:</strong> dampens loud sounds</li>
                </ul>
            </div>`,
            clinical: `<div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">UMN vs LMN LESION</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:20px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">UMN Lesion (e.g. stroke)</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">LMN Lesion (e.g. Bell's palsy)</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Contralateral lower face weakness ONLY</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Ipsilateral COMPLETE facial paralysis</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);"><strong>Forehead SPARED</strong></td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);"><strong>Forehead INVOLVED</strong></td></tr>
                </table>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Bell's Palsy</span><br>Idiopathic LMN palsy (HSV-1). Complete unilateral weakness + retroauricular pain. Rx: corticosteroids ± antivirals. Eye protection critical.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Ramsay Hunt Syndrome</span><br>VZV at geniculate ganglion. Triad: facial palsy + ear pain + vesicles in EAC. Worse prognosis; may involve CN VIII.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Hyperacusis</span><br>Stapedius branch damaged → sounds painfully loud.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Crocodile Tears (Bogorad Syndrome)</span><br>Aberrant regeneration → patient tears when eating.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ CPA Lesion (vestibular schwannoma)</span><br>CN VII + VIII compressed at IAM → facial weakness + hearing loss + vertigo.</p>
                <p style="margin:0 0 16px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Parotid Tumor/Surgery</span><br>Facial palsy = red flag for malignancy.</p>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">LOCALIZATION GUIDE</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Lesion Level</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Symptoms Present</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Motor cortex / internal capsule (UMN)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Contralateral lower face only (forehead spared)</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">CPA / IAM</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Facial palsy + hearing loss + vertigo</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Geniculate ganglion</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Palsy + dry eye + hyperacusis + taste loss</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">After greater petrosal nerve</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Palsy + hyperacusis + taste loss</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">After stapedius branch</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Palsy + taste loss (no hyperacusis)</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">After chorda tympani</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Palsy only (taste + lacrimation intact)</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Stylomastoid foramen</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Pure motor facial palsy</td></tr>
                </table>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Ten Zimbabweans Busted Making Coffee"<br>
                → Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical<br>
                💡 "Forehead spared = UMN; Forehead involved = LMN"<br>
                💡 "Geniculate = Genuine tears (lacrimal) + taste + hyperacusis"<br>
                💡 "Chorda tympani = Chord of taste (hitchhikes on lingual V3)"
            </div>`
        },

        "cn8": {
            title: "CN VIII: Vestibulocochlear", type: "Special Sensory", color: "#06d6a0",
            pathwayUid: null,
            anatomy: [
                "Type: Purely sensory — SSA",
                "Two divisions: Cochlear (hearing) + Vestibular (balance)",
                "Course: Inner ear → IAM → pontomedullary junction (CPA)"
            ],
            func: ["Hearing (Cochlear division)", "Balance & Spatial Orientation (Vestibular division)"],
            clinical: "See individual divisions for detailed clinical info.",
            mnemonic: "Vestibulo (Balance) Cochlear (Hearing)"
        },

        "cn8_vestibular": {
            title: "CN VIII: Vestibular Division", type: "Special Sensory", color: "#06d6a0",
            pathwayUid: null,
            detailedAnatomy: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">RECEPTORS</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li><strong>Semicircular canals (3) — angular acceleration:</strong> Horizontal, Anterior, Posterior; Ampullary crista + cupula detects rotational movement</li>
                    <li><strong>Utricle:</strong> linear acceleration (horizontal plane)</li>
                    <li><strong>Saccule:</strong> linear acceleration (vertical plane) + gravity</li>
                    <li>Utricle + Saccule contain <em>otolithic membrane (macula)</em></li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">PATHWAY</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>First-order neurons: <strong>Scarpa's ganglion</strong> (vestibular ganglion, in IAM)</li>
                    <li>Fibers → vestibular nerve → IAM → pontomedullary junction</li>
                    <li>Synapse: <strong>4 Vestibular Nuclei</strong> (pons/medulla): Superior (Bechterew), Medial (Schwalbe), Lateral (Deiters), Inferior (Roller)</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">OUTPUTS FROM VESTIBULAR NUCLEI</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>→ <strong>CN III, IV, VI nuclei via MLF</strong> — VOR, gaze stabilization</li>
                    <li>→ <strong>Spinal cord</strong> via vestibulospinal tracts — postural control</li>
                    <li>→ <strong>Cerebellum</strong> (flocculonodular lobe) — fine-tuning balance</li>
                    <li>→ <strong>Thalamus → cortex</strong> — conscious sense of motion/orientation</li>
                </ul>
            </div>`,
            detailedFunc: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Vestibulo-Ocular Reflex (VOR):</strong> Head moves right → eyes move equally left → gaze stays stable; mediated via MLF → CN III/IV/VI</li>
                    <li><strong>Vestibulospinal reflex:</strong> Maintains upright posture + prevents falls</li>
                    <li><strong>Vestibulocollic reflex:</strong> Head stabilization against neck movement</li>
                    <li><strong>Ocular tilt reaction:</strong> Utricle signals head tilt → compensatory eye counterroll</li>
                </ul>
            </div>`,
            clinical: `<div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">NYSTAGMUS — KEY VESTIBULAR SIGN</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li>Fast phase <strong>AWAY</strong> from lesion; Slow phase <strong>TOWARD</strong> lesion; Direction named by fast phase</li>
                </ul>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">PERIPHERAL vs CENTRAL VERTIGO</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:20px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Feature</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Peripheral</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Central</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Onset</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Sudden</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Gradual</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Severity</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Intense</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Mild-moderate</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Nystagmus</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Unidirectional, horizontal</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Direction-changing, vertical possible</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Fixation</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Suppresses nystagmus</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Does NOT suppress</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Hearing loss/tinnitus</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Often present</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Usually absent</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Neurological signs</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Absent</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Often present</td></tr>
                </table>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ BPPV</span><br>Most common cause of vertigo. Otoconia displaced into semicircular canal. Dix-Hallpike → upbeat-torsional nystagmus. Rx: Epley manoeuvre.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Vestibular Neuritis</span><br>Viral/post-viral. Sudden severe vertigo. <strong>NO hearing loss.</strong> HINTS exam to rule out central cause.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Ménière's Disease</span><br>Endolymphatic hydrops. Triad: episodic vertigo + fluctuating sensorineural hearing loss + tinnitus ± aural fullness.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Labyrinthitis</span><br>Vertigo + hearing loss (distinguishes from vestibular neuritis).</p>
                <p style="margin:0 0 16px 0;"><span style="color:#ffd166; font-weight:700;">⚠ MLF Lesion → INO</span><br>Ipsilateral adduction failure + contralateral nystagmus. <strong>Bilateral INO = MS until proven otherwise.</strong></p>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TESTS</p>
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>HIT:</strong> VOR pathway intact or broken</li>
                    <li><strong>HINTS exam:</strong> Head Impulse + Nystagmus + Test of Skew → rules out central cause</li>
                    <li><strong>Dix-Hallpike:</strong> diagnose BPPV</li>
                    <li><strong>Caloric testing:</strong> COWS — Cold Opposite, Warm Same</li>
                </ul>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "COWS = Cold Opposite, Warm Same"<br>
                💡 "Ménière's = Very Tired Humans" → Vertigo + Tinnitus + Hearing loss<br>
                💡 "HINTS beats DWI" → more sensitive than early MRI for posterior fossa stroke<br>
                💡 "Bilateral INO = MS until proven otherwise"<br>
                💡 "Vestibular neuritis = vertigo WITHOUT hearing loss; Labyrinthitis = WITH"
            </div>`
        },

        "cn8_cochlear": {
            title: "CN VIII: Cochlear Division", type: "Special Sensory", color: "#06d6a0",
            pathwayUid: null,
            detailedAnatomy: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">RECEPTOR & FIRST-ORDER NEURONS</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Receptor: <strong>Hair cells of the Organ of Corti</strong> (cochlea)</li>
                    <li>First-order neurons: <strong>Spiral ganglion</strong> (within cochlea modiolus)</li>
                    <li>Fibers → cochlear nerve → IAM → pontomedullary junction</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CENTRAL PATHWAY</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Synapse: <strong>Cochlear nuclei</strong> (dorsal + ventral, upper medulla)</li>
                    <li>Fibers <strong>CROSS</strong> (mostly) via trapezoid body</li>
                    <li>Ascend in <strong>lateral lemniscus</strong> → Inferior colliculus (midbrain)</li>
                    <li>→ <strong>Medial geniculate nucleus (MGN)</strong>, thalamus</li>
                    <li>→ <strong>Primary auditory cortex</strong> (Heschl's gyrus, temporal lobe, A1)</li>
                </ul>
                <div style="background:rgba(6,214,160,0.08); border-left:3px solid #06d6a0; padding:10px 14px; border-radius:0 6px 6px 0; margin:0; font-size:0.88rem;">
                    <strong>KEY RULE:</strong> Auditory pathway is <strong>BILATERAL</strong> after cochlear nuclei.<br>
                    → Unilateral cortical lesion does NOT cause deafness in either ear.<br>
                    → Deafness only occurs with cochlear/cochlear nerve lesions.
                </div>
            </div>`,
            detailedFunc: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Transduction:</strong> Hair cell movement → graded receptor potential → tonotopic coding along basilar membrane</li>
                    <li><strong>Tonotopy:</strong> Base of cochlea → high frequency; Apex → low frequency</li>
                    <li><strong>Stapedial (acoustic) reflex:</strong> Loud sound → bilateral stapedius contraction (CN VII efferent) → protects inner ear</li>
                    <li><strong>Otoacoustic emissions (OAEs):</strong> Outer hair cells amplify sound; tested in newborn hearing screening</li>
                </ul>
            </div>`,
            clinical: `<div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">SENSORINEURAL vs CONDUCTIVE HEARING LOSS</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:20px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Feature</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Conductive HL</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Sensorineural HL</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Weber test</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Lateralizes to <strong>AFFECTED</strong> ear</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Lateralizes to <strong>GOOD</strong> ear</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Rinne test</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">BC &gt; AC (abnormal)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">AC &gt; BC (normal pattern, quieter)</td></tr>
                </table>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Vestibular Schwannoma (Acoustic Neuroma)</span><br>Benign Schwann cell tumor of CN VIII. Grows in IAM/CPA → unilateral sensorineural hearing loss + tinnitus + unsteadiness. Facial weakness is a late sign. <strong>Bilateral = pathognomonic for NF2.</strong></p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Presbycusis</span><br>Age-related sensorineural hearing loss. High-frequency loss first (base of cochlea affected earliest).</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Noise-Induced Hearing Loss</span><br>4kHz notch on audiogram. Outer hair cells at cochlear base most vulnerable.</p>
                <p style="margin:0 0 16px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Ototoxicity</span><br>Aminoglycosides (cochleotoxic + vestibulotoxic); Cisplatin (cochleotoxic); Loop diuretics. Monitor with serial audiometry.</p>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TIP</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Weber + Rinne tests differentiate conductive vs sensorineural</li>
                    <li>OAEs absent → outer hair cell (cochlear) damage</li>
                </ul>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Weber goes to BAD ear in conductive, GOOD ear in sensorineural"<br>
                💡 "Rinne: BC > AC = Conductive"<br>
                💡 "Base = High frequency; Apex = Low frequency" → tonotopy<br>
                💡 "4kHz notch = noise-induced; High freq loss = presbycusis"<br>
                💡 "Bilateral schwannoma = NF2"
            </div>`
        },

        "cn9": {
            title: "CN IX: Glossopharyngeal", type: "Mixed", color: "#ffd166",
            pathwayUid: "a445977901d8491ea3ae35a66b9730ac",
            detailedAnatomy: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TYPE & NUCLEI</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Type: <strong>MIXED</strong> — most complex fiber composition of any cranial nerve</li>
                    <li>Nucleus ambiguus (medulla) → motor to stylopharyngeus</li>
                    <li>Inferior salivatory nucleus (medulla) → parasympathetic output</li>
                    <li>Nucleus tractus solitarius (NTS, medulla) → receives taste + visceral afferents</li>
                    <li>Spinal trigeminal nucleus → receives somatic sensation</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">COURSE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Exits medulla as rootlets at the lateral sulcus (post-olivary groove) alongside CN X and CN XI</li>
                    <li>Exits skull via <strong>jugular foramen</strong> (alongside CN X, CN XI + internal jugular vein)</li>
                    <li>Two sensory ganglia in jugular foramen:
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li><strong>Superior (jugular) ganglion</strong> → somatic sensation</li>
                            <li><strong>Inferior (petrosal) ganglion</strong> → taste + visceral afferents</li>
                        </ul>
                    </li>
                    <li>Descends between internal carotid artery + internal jugular vein</li>
                    <li>Curves around stylopharyngeus → enters pharynx</li>
                </ul>
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">MAJOR BRANCHES</p>
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Tympanic nerve (Jacobson's nerve):</strong> enters middle ear → tympanic plexus → lesser petrosal nerve → foramen ovale → otic ganglion → parotid parasympathetics</li>
                    <li><strong>Carotid sinus nerve:</strong> baroreceptors in carotid sinus (BP); chemoreceptors in carotid body (O₂/CO₂/pH)</li>
                    <li><strong>Branch to stylopharyngeus</strong> (only motor branch)</li>
                    <li><strong>Pharyngeal branches</strong> → pharyngeal plexus (with CN X)</li>
                    <li><strong>Tonsillar branches</strong> → palatine tonsil + soft palate sensation</li>
                    <li><strong>Lingual branches</strong> → posterior 1/3 of tongue (general sensation + taste)</li>
                </ul>
            </div>`,
            detailedFunc: `<div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Somatic motor (branchial efferent):</strong> Stylopharyngeus ONLY (elevates pharynx/larynx during swallowing)</li>
                    <li><strong>Special visceral afferent (taste):</strong> Posterior 1/3 of tongue</li>
                    <li><strong>General visceral afferent:</strong> Carotid sinus → baroreception (BP); Carotid body → chemoreception (O₂, CO₂, pH); Posterior 1/3 tongue, pharynx, middle ear, Eustachian tube</li>
                    <li><strong>General somatic afferent:</strong> Skin of external ear; internal surface of tympanic membrane</li>
                    <li><strong>Parasympathetic (secretomotor):</strong> Inferior salivatory nucleus → tympanic nerve → lesser petrosal nerve → otic ganglion → auriculotemporal nerve (V3) → parotid gland secretion</li>
                    <li><strong>Gag reflex:</strong> AFFERENT limb (posterior pharynx; efferent = CN X)</li>
                    <li><strong>Carotid sinus reflex:</strong> baroreceptor → vasodepressor response</li>
                    <li><strong>Swallowing reflex:</strong> afferent trigger from pharynx</li>
                </ul>
            </div>`,
            clinical: `<div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CN IX LESION EFFECTS</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li>Loss of taste — posterior 1/3 of tongue (ipsilateral)</li>
                    <li>Loss of general sensation — posterior tongue + pharynx</li>
                    <li>Absent gag reflex on affected side (afferent limb lost)</li>
                    <li>Dysphagia (mild — stylopharyngeus loss, compensated by CN X)</li>
                    <li>Reduced parotid secretion</li>
                </ul>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Glossopharyngeal Neuralgia</span><br>Severe lancinating pain triggered by swallowing, talking, yawning. Pain in posterior tongue, tonsil, pharynx, deep ear. May cause bradycardia/syncope via carotid sinus stimulation. Rx: carbamazepine.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Jugular Foramen Syndrome (Vernet Syndrome)</span><br>Simultaneous CN IX + CN X + CN XI palsy. Causes: glomus jugulare tumor, skull base fracture, thrombosis. Features: dysphagia, hoarseness, loss of gag reflex, ipsilateral trapezius/SCM weakness.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Carotid Sinus Hypersensitivity</span><br>Hypersensitive baroreceptors → excessive vagal response. Triggered by head turning, tight collar → bradycardia + syncope. CN IX afferent arc is responsible.</p>
                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Carotid Body Tumor (Paraganglioma)</span><br>Pulsatile neck mass at carotid bifurcation. Dysregulated blood pressure + chemoreceptor dysfunction.</p>
                <p style="margin:0 0 16px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Parotid Dysfunction</span><br>Proximal CN IX lesion (before otic ganglion) → reduced parotid secretion. Distinguish from CN VII chorda tympani lesion (submandibular/sublingual salivation).</p>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">GAG REFLEX — LOCALIZING VALUE</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:16px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Finding</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Interpretation</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Absent bilaterally</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Bilateral CN IX or X lesion; or sedation</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Absent unilaterally</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Ipsilateral CN IX lesion (afferent arc lost)</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Uvula deviates</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Uvula deviates AWAY from CN X lesion</td></tr>
                </table>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">LOCALIZATION GUIDE</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:16px;">
                    <tr style="background:rgba(255,255,255,0.07);"><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Level of Lesion</th><th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Findings</th></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Nucleus (medulla)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">+ adjacent CN X, XII involvement likely</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Jugular foramen</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">CN IX + X + XI (Vernet syndrome)</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Tympanic nerve</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Parotid secretion loss only</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Carotid sinus nerve</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Dysregulated BP + syncope</td></tr>
                    <tr><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Peripheral (pharynx)</td><td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Pharyngeal sensory loss + dysphagia</td></tr>
                </table>
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TIP</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Test CN IX: gag reflex (touch posterior pharyngeal wall ipsilaterally)</li>
                    <li>Test taste: bitter/sour on posterior tongue</li>
                    <li>Always test CN IX + CN X together — shared jugular foramen, rarely isolated clinically</li>
                </ul>
            </div>`,
            detailedMnemonic: `<div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "CN IX = 9 letters = Glossopharyngeal"<br>
                💡 "Gag = IX in, X out" → afferent CN IX, efferent CN X<br>
                💡 "Jacobson's nerve → parotid" (tympanic branch → lesser petrosal → otic ganglion)<br>
                💡 "Jugular foramen: 9, 10, 11 → Vernet if all three hit"<br>
                💡 "Carotid sinus = pressure sensor CN IX; Carotid body = chemical sensor CN IX"
            </div>`
        },

               "cn10": {
            title: "CN X: Vagus",
            type: "Mixed",
            color: "#ffd166",
            pathwayUid: null,

            // ANATOMY & PATHWAY
            detailedAnatomy: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TYPE & NUCLEI</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Type: <strong>MIXED</strong> — most extensive distribution of any cranial nerve (only CN to extend beyond head and neck into thorax and abdomen)</li>
                    <li>Nucleus ambiguus (medulla) → motor to pharynx, larynx, soft palate</li>
                    <li>Dorsal motor nucleus of vagus (medulla) → parasympathetic output</li>
                    <li>Nucleus tractus solitarius (NTS, medulla) → taste + visceral afferents</li>
                    <li>Spinal trigeminal nucleus → somatic sensation (small area)</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">COURSE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Exits medulla at lateral sulcus (post-olivary groove) alongside CN IX and CN XI</li>
                    <li>Exits skull via <strong>jugular foramen</strong> (alongside CN IX, CN XI + internal jugular vein)</li>
                    <li>Two sensory ganglia in jugular foramen:
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li><strong>Superior (jugular) ganglion</strong> → somatic sensation</li>
                            <li><strong>Inferior (nodose) ganglion</strong> → visceral + taste afferents</li>
                        </ul>
                    </li>
                    <li>Descends in <strong>carotid sheath</strong> (between common carotid artery + internal jugular vein)</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">BRANCHES IN THE NECK</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li><strong>Pharyngeal branches</strong> → pharyngeal plexus (motor to pharynx + soft palate)</li>
                    <li><strong>Superior laryngeal nerve:</strong>
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li>Internal laryngeal → sensory above vocal cords</li>
                            <li>External laryngeal → motor to cricothyroid muscle</li>
                        </ul>
                    </li>
                    <li><strong>Recurrent laryngeal nerve (RLN):</strong>
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li>RIGHT RLN: loops under right subclavian artery</li>
                            <li>LEFT RLN: loops under aortic arch (longer course → more vulnerable)</li>
                            <li>Motor to ALL intrinsic laryngeal muscles EXCEPT cricothyroid</li>
                            <li>Sensory below vocal cords</li>
                        </ul>
                    </li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">BRANCHES IN THE THORAX</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Cardiac branches (superior + inferior cervical cardiac, thoracic cardiac) → parasympathetic to SA node + AV node</li>
                    <li>Pulmonary branches → bronchial smooth muscle + secretions</li>
                    <li>Esophageal plexus → esophageal motility</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">BRANCHES IN THE ABDOMEN</p>
                <ul style="padding-left:18px; margin:0 0 24px 0;">
                    <li><strong>Anterior vagal trunk</strong> (mostly LEFT vagus) → gastric branches → stomach, liver, gallbladder</li>
                    <li><strong>Posterior vagal trunk</strong> (mostly RIGHT vagus) → celiac plexus → small intestine, ascending + transverse colon, pancreas, kidneys</li>
                    <li>Parasympathetic supply extends to the <strong>splenic flexure</strong> (hindgut supplied by pelvic splanchnic nerves S2–S4)</li>
                </ul>

                <img src="../assets/vagus.jpg" alt="Vagus Nerve Schema" style="width:100%; max-width:680px; display:block; margin:0 auto; border-radius:12px; border:1px solid rgba(255,255,255,0.08);" />
            </div>
            `,

            // PHYSIOLOGY
            detailedFunc: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <ul style="padding-left:18px; margin:0;">
                    <li><strong>Branchial motor (nucleus ambiguus):</strong> Soft palate (except tensor veli palatini = V3); pharyngeal constrictors (swallowing); intrinsic laryngeal muscles except cricothyroid; cricothyroid via external laryngeal nerve (pitch control)</li>
                    <li><strong>Special visceral afferent (taste):</strong> Epiglottis + vallecula</li>
                    <li><strong>General somatic afferent:</strong> Skin of external auditory meatus + posterior auricle (Arnold's nerve); dura of posterior cranial fossa</li>
                    <li><strong>General visceral afferent:</strong> Larynx, trachea, esophagus, aortic arch (baroreception); aortic bodies (chemoreception: O₂, CO₂, pH); thoracic + abdominal viscera (gut sensation, stretch, nausea)</li>
                    <li><strong>Parasympathetic (dorsal motor nucleus):</strong> Heart: ↓ heart rate &amp; AV conduction; Lungs: bronchoconstriction + mucus secretion; GI to splenic flexure: ↑ peristalsis &amp; secretion, relaxes sphincters</li>
                    <li><strong>Reflexes:</strong> Gag reflex EFFERENT limb (afferent = CN IX); cough reflex (afferent + efferent); vasovagal syncope; vomiting reflex; oculocardiac reflex (efferent = CN X); carotid sinus reflex (efferent = CN X)</li>
                </ul>
            </div>
            `,

            // CLINICAL
            clinical: `
            <div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CN X LESION EFFECTS</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li>Hoarseness / dysphonia (laryngeal muscle paralysis)</li>
                    <li>Dysphagia (pharyngeal weakness)</li>
                    <li>Uvula deviates <strong>AWAY</strong> from side of lesion</li>
                    <li>Absent gag reflex (efferent limb lost)</li>
                    <li>Loss of cough reflex → aspiration risk</li>
                    <li>Tachycardia (loss of parasympathetic brake on SA node)</li>
                    <li>Gastroparesis + GI dysmotility (bilateral lesion or vagotomy)</li>
                </ul>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Recurrent Laryngeal Nerve Palsy</span><br>LEFT RLN more commonly injured (longer thoracic course). Causes: thyroid surgery/cancer, aortic aneurysm, lung or mediastinal tumors, neck dissection. Unilateral: hoarseness, breathy voice. Bilateral: stridor, respiratory distress (emergency).</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Vagal Syncope (Vasovagal)</span><br>Excessive vagal tone → bradycardia + peripheral vasodilation → cerebral hypoperfusion → syncope. Triggers: pain, fear, prolonged standing, Valsalva.</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Oculocardiac Reflex</span><br>Pressure on globe (eye surgery, trauma) → CN V1 afferent → CN X efferent → bradycardia. Managed with atropine intra‑operatively.</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Jugular Foramen Syndrome (Vernet)</span><br>CN IX + CN X + CN XI palsy together (glomus jugulare tumor, skull base fracture, metastases) → dysphagia, hoarseness, absent gag, trapezius weakness.</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Arnold's Nerve Reflex</span><br>Stimulation of external ear canal → cough or syncope (auricular branch of vagus).</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Vagotomy Effects</span><br>Surgical vagotomy (historic peptic ulcer treatment): ↓ gastric acid secretion, but gastroparesis + diarrhea.</p>

                <p style="margin:0 0 10px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Diphtheria</span><br>Diphtheria toxin → CN X palsy with palatal weakness; early sign = nasal regurgitation of fluids + nasal voice.</p>

                <p style="margin:0 0 16px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Wallenberg (Lateral Medullary) Syndrome</span><br>PICA occlusion → lateral medulla infarct. Nucleus ambiguus involvement: ipsilateral palatal palsy, hoarseness, dysphagia; plus CN IX, XI, spinal trigeminal nucleus, Horner syndrome, spinothalamic tract.</p>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 10px 0;">LOCALIZATION GUIDE</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:16px;">
                    <tr style="background:rgba(255,255,255,0.07);">
                        <th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Level of lesion</th>
                        <th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">Findings</th>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Dorsal motor nucleus</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Visceral/autonomic effects dominate</td>
                    </tr>
                    <tr style="background:rgba(255,255,255,0.03);">
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Jugular foramen</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">CN IX + X + XI palsy (Vernet syndrome)</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Above superior laryngeal nerve</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">All CN X functions affected (voice + swallow)</td>
                    </tr>
                    <tr style="background:rgba(255,255,255,0.03);">
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Below superior laryngeal nerve</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Isolated RLN palsy → hoarseness, no swallowing loss</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Left thorax (RLN)</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Hoarseness from mediastinal/aortic pathology</td>
                    </tr>
                    <tr style="background:rgba(255,255,255,0.03);">
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Bilateral CN X</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Tachycardia, severe dysphagia, gastroparesis, bilateral vocal cord palsy</td>
                    </tr>
                </table>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TIP</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Inspect uvula at rest + on saying "Ahh" — it deviates away from the lesion</li>
                    <li>Listen for hoarseness; test cough and gag reflex</li>
                    <li>Always test CN IX + X + XI together (jugular foramen trio)</li>
                </ul>
            </div>
            `,

            // MNEMONIC
            detailedMnemonic: `
            <div style="font-size:0.9rem; color:#94a3b8; font-style:italic; line-height:2;">
                💡 "Vagus = Vague → wanders everywhere (neck, chest, abdomen)"<br>
                💡 "Left RLN loops under aorta = Left = Longer = more vulnerable"<br>
                💡 "Uvula flees the lesion" → deviates away from damaged CN X<br>
                💡 "Gag: IX in (afferent), X out (efferent)"<br>
                💡 "Vernet = 9, 10, 11 = jugular foramen trio"<br>
                💡 "Wallenberg = lateral medulla = PICA = hoarse + Horner + hemianalgesia"
            </div>
            `
        },


                "cn11": {
            title: "CN XI: Accessory",
            type: "Motor",
            color: "#ff4d6d",
            pathwayUid: null,

            // ANATOMY & PATHWAY
            detailedAnatomy: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TYPE & ORIGIN</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Type: <strong>PURELY MOTOR</strong> (somatic/branchial efferent)</li>
                    <li>Spinal root: Ventral horn of C1–C5/C6 segments (major component)</li>
                    <li>Cranial root: Nucleus ambiguus in medulla (often considered part of CN X)</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">SPINAL ROOT COURSE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Rootlets emerge from lateral cervical spinal cord</li>
                    <li>Ascend between dorsal and ventral roots</li>
                    <li>Enter cranial cavity via <strong>foramen magnum</strong></li>
                    <li>Join briefly with cranial root</li>
                    <li>Exit skull through <strong>jugular foramen</strong> (with CN IX &amp; CN X)</li>
                    <li>Descend in carotid sheath, then pass deep to <strong>SCM</strong></li>
                    <li>Cross posterior triangle of neck → deep surface of <strong>trapezius</strong></li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CRANIAL ROOT</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Exits medulla with CN IX and CN X</li>
                    <li>Joins spinal root briefly, then fibers effectively merge with CN X</li>
                    <li>Functionally behaves as part of vagus (motor to larynx/pharynx via pharyngeal plexus)</li>
                </ul>

                <img src="../assets/accessory nerve.jpg" alt="Accessory nerve course" style="width:100%; max-width:600px; display:block; margin:0 auto 8px auto; border-radius:12px; border:1px solid rgba(255,255,255,0.08);" />
            </div>
            `,

            // PHYSIOLOGY
            detailedFunc: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">SPINAL ACCESSORY (FUNCTIONAL CN XI)</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li><strong>Sternocleidomastoid (SCM):</strong>
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li>Rotates head to the <strong>OPPOSITE</strong> side</li>
                            <li>Flexes neck</li>
                        </ul>
                    </li>
                    <li><strong>Trapezius:</strong>
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li>Elevates shoulders (shrugging)</li>
                            <li>Assists scapular rotation / abduction of arm above horizontal</li>
                        </ul>
                    </li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CRANIAL ACCESSORY (VAGAL COMPONENT)</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Motor fibers that travel with vagus to:
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li>Laryngeal muscles</li>
                            <li>Pharyngeal constrictors</li>
                            <li>Soft palate muscles (via pharyngeal plexus)</li>
                        </ul>
                    </li>
                    <li>Often classified as part of CN X in modern schemes</li>
                </ul>
            </div>
            `,

            // CLINICAL
            clinical: `
            <div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CN XI LESION EFFECTS (SPINAL ROOT)</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li><strong>Ipsilateral SCM weakness:</strong> difficulty turning head to the <strong>OPPOSITE</strong> side (e.g. right CN XI lesion → weak left head turn); difficulty flexing neck against resistance</li>
                    <li><strong>Ipsilateral trapezius weakness:</strong> shoulder droop, weak shrug, difficulty abducting arm above horizontal (impaired scapular rotation), mild lateral scapular winging</li>
                </ul>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">COMMON SITES OF INJURY</p>
                <p style="margin:0 0 8px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Posterior Triangle Surgery / Trauma</span><br>Superficial course across posterior triangle → vulnerable in lymph node biopsies, neck dissections, stab wounds. Classic story: “neck lump removal” followed by shoulder droop.</p>
                <p style="margin:0 0 8px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Jugular Foramen Lesions (Vernet Syndrome)</span><br>CN IX, X, XI all affected → dysphagia, hoarseness, loss of gag reflex, plus SCM/trapezius weakness.</p>
                <p style="margin:0 0 12px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Iatrogenic Injury</span><br>Risk in carotid surgery, cervical spine operations, radical neck dissections.</p>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TIP</p>
                <ul style="padding-left:18px; margin:0 0 12px 0;">
                    <li><strong>Test SCM:</strong> ask patient to rotate head against resistance; compare bulk and strength bilaterally.</li>
                    <li><strong>Test trapezius:</strong> ask patient to shrug shoulders against resistance; look for asymmetry, droop, impaired scapular rotation.</li>
                </ul>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">MNEMONICS</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>💡 "<strong>XI = eXtra movement</strong>" → turns head (SCM) + elevates shoulders (trapezius)</li>
                    <li>💡 "CN XI crosses the X‑shaped posterior triangle" → think of 11 running across the back of the neck</li>
                    <li>💡 "Vernet = 9‑10‑11 (jugular foramen trio)" → if CN XI is out, always check IX and X</li>
                </ul>
            </div>
            `,

            detailedMnemonic: "" // using detailed text above
        },


                "cn12": {
            title: "CN XII: Hypoglossal",
            type: "Motor",
            color: "#ff4d6d",
            pathwayUid: null,

            // ANATOMY & PATHWAY
            detailedAnatomy: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">TYPE & NUCLEUS</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Type: <strong>PURELY MOTOR</strong> — innervates all intrinsic and most extrinsic tongue muscles</li>
                    <li>Nucleus: <strong>Hypoglossal nucleus</strong> in the medulla</li>
                    <li>Location: near midline, floor of 4th ventricle</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXIT & COURSE</p>
                <ul style="padding-left:18px; margin:0 0 20px 0;">
                    <li>Exit from brainstem: rootlets emerge between pyramid and olive (<strong>pre‑olivary sulcus</strong>)</li>
                    <li>Exit from skull: <strong>hypoglossal canal</strong> (occipital bone)</li>
                    <li>Neck course: descends briefly, then runs forward in carotid triangle (deep to posterior belly of digastric &amp; stylohyoid)</li>
                    <li>Crosses external carotid and lingual arteries</li>
                    <li>Enters tongue between <strong>mylohyoid</strong> and <strong>hyoglossus</strong> muscles</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">MUSCLES SUPPLIED (IPSILATERAL)</p>
                <ul style="padding-left:18px; margin:0 0 12px 0;">
                    <li>All <strong>intrinsic tongue muscles</strong> (shape the tongue)</li>
                    <li>Extrinsic:
                        <ul style="padding-left:16px; margin:4px 0 0 0;">
                            <li><strong>Genioglossus</strong> — protrudes tongue (main clinical muscle)</li>
                            <li><strong>Hyoglossus</strong> — depresses tongue</li>
                            <li><strong>Styloglossus</strong> — retracts &amp; elevates sides of tongue</li>
                        </ul>
                    </li>
                    <li><strong>Exception:</strong> Palatoglossus is NOT CN XII (it is CN X)</li>
                </ul>

                <img src="../assets/hypoglossal.jpg" alt="Hypoglossal nerve course" style="width:100%; max-width:600px; display:block; margin:0 auto 8px auto; border-radius:12px; border:1px solid rgba(255,255,255,0.08);" />
            </div>
            `,

            // PHYSIOLOGY
            detailedFunc: `
            <div style="font-size:0.92rem; line-height:1.8; color:#e2e8f0;">
                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">PRIMARY FUNCTIONS</p>
                <ul style="padding-left:18px; margin:0 0 16px 0;">
                    <li>Tongue protrusion (genioglossus)</li>
                    <li>Tongue retraction and elevation (styloglossus)</li>
                    <li>Tongue depression (hyoglossus)</li>
                    <li>Fine motor control of articulation &amp; food manipulation (intrinsic muscles)</li>
                </ul>

                <p style="color:#0ea5e9; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">ROLES</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>Speech articulation (consonants, lingual sounds)</li>
                    <li>Swallowing — forms and propels bolus posteriorly</li>
                    <li>Maintaining airway patency during sleep (genioglossus tone)</li>
                </ul>
            </div>
            `,

            // CLINICAL
            clinical: `
            <div style="font-size:0.88rem; line-height:1.7; color:#e2e8f0;">
                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">LMN vs UMN PATTERN</p>
                <table style="width:100%; border-collapse:collapse; font-size:0.83rem; margin-bottom:16px;">
                    <tr style="background:rgba(255,255,255,0.07);">
                        <th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">LMN (nucleus/nerve)</th>
                        <th style="text-align:left; padding:8px 10px; border:1px solid rgba(255,255,255,0.1); color:#a0aec0;">UMN (corticobulbar)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Ipsilateral tongue weakness</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Contralateral tongue weakness</td>
                    </tr>
                    <tr style="background:rgba(255,255,255,0.03);">
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Atrophy + fasciculations</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">No fasciculations; atrophy mild/late</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Tongue deviates <strong>toward</strong> lesion</td>
                        <td style="padding:8px 10px; border:1px solid rgba(255,255,255,0.08);">Tongue deviates <strong>away</strong> from lesion</td>
                    </tr>
                </table>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">CN XII LESION EFFECTS (LMN)</p>
                <ul style="padding-left:18px; margin:0 0 12px 0;">
                    <li>On protrusion, tongue deviates <strong>TOWARD</strong> side of lesion (intact genioglossus pushes it toward weak side)</li>
                    <li>Ipsilateral tongue atrophy and fasciculations</li>
                    <li>Dysarthria (slurred, imprecise speech)</li>
                    <li>Difficulty manipulating food; pooling of food in oral cavity</li>
                </ul>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">UMN (CORTICOBULBAR) LESIONS</p>
                <ul style="padding-left:18px; margin:0 0 12px 0;">
                    <li>Contralateral tongue weakness</li>
                    <li>Tongue deviates <strong>AWAY</strong> from lesion on protrusion</li>
                    <li>No fasciculations; atrophy minimal unless long‑standing</li>
                    <li>Often with other UMN signs (spasticity, brisk jaw jerk)</li>
                </ul>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">HIGH‑YIELD CONDITIONS</p>
                <p style="margin:0 0 8px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Medial Medullary Syndrome</span><br>Anterior spinal artery infarct → hypoglossal nucleus/nerve + corticospinal tract + medial lemniscus. Tongue deviation toward lesion, contralateral hemiparesis, contralateral loss of vibration/proprioception.</p>
                <p style="margin:0 0 8px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Bulbar vs Pseudobulbar Palsy</span><br>Bulbar (LMN IX/X/XII): wasted, fasciculating tongue, nasal speech, poor gag, aspiration. Pseudobulbar (bilateral UMN): spastic tongue, brisk jaw jerk, emotional lability.</p>
                <p style="margin:0 0 12px 0;"><span style="color:#ffd166; font-weight:700;">⚠ Motor Neuron Disease (ALS)</span><br>Combination of UMN + LMN signs; tongue atrophy + fasciculations with brisk jaw jerk is classic.</p>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">EXAM TIP</p>
                <ul style="padding-left:18px; margin:0 0 12px 0;">
                    <li>Ask patient to stick out tongue → note deviation, bulk, fasciculations.</li>
                    <li>Move tongue side‑to‑side quickly.</li>
                    <li>Push tongue into each cheek against resistance.</li>
                </ul>
                <p style="margin:0 0 12px 0;">Quick rule: <strong>"Tongue points to the lesion"</strong> in LMN CN XII palsy; <strong>"tongue points away"</strong> in UMN lesions.</p>

                <p style="color:#ff4d6d; font-size:0.75rem; text-transform:uppercase; letter-spacing:2px; font-weight:700; margin:0 0 8px 0;">MNEMONICS</p>
                <ul style="padding-left:18px; margin:0;">
                    <li>💡 "<strong>XII moves the tongue</strong>"</li>
                    <li>💡 "<strong>LMN lesion: tongue LURCHES toward the Lesion</strong>"</li>
                    <li>💡 "<strong>Palatoglossus is the odd one out</strong> — it’s Vagus (CN X), not Hypoglossal"</li>
                </ul>
            </div>
            `,

            detailedMnemonic: "" // included in clinical text
        },


    };

    // ─────────────────────────────────────────
    // SKETCHFAB 3D BRAIN VIEWER
    // ─────────────────────────────────────────
    const iframe = document.getElementById('sketchfab-frame');
    const uid = '82d87cb89d6c48f0984a59c4f2a4cf9a';
    const client = new Sketchfab('1.12.1', iframe);

    client.init(uid, {
        autostart: 1,
        annotations_visible: 1,
        ui_infos: 0,
        ui_stop: 0,
        ui_watermark: 0,
        ui_controls: 0,
        ui_hint: 0,
        ui_annotations_tooltip: 0,
        success: function(api) {
            api.start();
            api.addEventListener('viewerready', function() {
                api.getAnnotationList(function(err, annotations) {
                    if (!err) console.log('Annotations loaded:', annotations.length);
                });
            });
            api.addEventListener('annotationSelect', function(index) {
                if (index === -1) return;
                window.openDetail('cn' + (index + 1));
            });
        },
        error: function() { console.log('Sketchfab failed to load.'); }
    });

    // ─────────────────────────────────────────
    // HELPER: show the detail panel
    // ─────────────────────────────────────────
    function _showDetailPage() {
        document.getElementById('detail-page').classList.add('active');
        document.getElementById('main-view').classList.add('view-hidden');
        document.querySelector('.back-btn').style.display = 'none';
        document.getElementById('detail-page').scrollTop = 0;
    }

    // ─────────────────────────────────────────
    // openDetail — main router
    // ─────────────────────────────────────────
    window.openDetail = function(key) {
        const data = db[key];
        if (!data) return;

        const cn5BranchPage = document.getElementById('cn5-branch-page');
        const cn8BranchPage = document.getElementById('cn8-branch-page');
        const detailContent  = document.getElementById('detail-content');

        cn5BranchPage.style.display = 'none';
        cn8BranchPage.style.display = 'none';
        detailContent.style.display  = 'none';

        // ── CN V hub ──
        if (key === 'cn5') {
            document.getElementById('cn5-title').innerText = data.title;
            document.getElementById('cn5-badge').innerText = data.type;
            document.getElementById('cn5-badge').style.color = data.color;
            cn5BranchPage.style.display = 'block';
            _showDetailPage();
            return;
        }

        // ── CN VIII hub ──
        if (key === 'cn8') {
            document.getElementById('cn8-title').innerText = data.title;
            document.getElementById('cn8-badge').innerText = data.type;
            document.getElementById('cn8-badge').style.color = data.color;
            cn8BranchPage.style.display = 'block';
            _showDetailPage();
            return;
        }

        // ── normal detail view ──
        detailContent.style.display = 'block';

        document.getElementById('dt-title').innerText = data.title;
        document.getElementById('dt-badge').innerText  = data.type;
        document.getElementById('dt-badge').style.color = data.color;

        // back button
        const branchesBtn = document.getElementById('dt-branches-btn');
        if (key.startsWith('cn5_v')) {
            branchesBtn.style.display = 'inline-flex';
            branchesBtn.innerText = '← CN V branches';
            branchesBtn.onclick = () => openDetail('cn5');
        } else if (key.startsWith('cn8_')) {
            branchesBtn.style.display = 'inline-flex';
            branchesBtn.innerText = '← CN VIII divisions';
            branchesBtn.onclick = () => openDetail('cn8');
        } else {
            branchesBtn.style.display = 'none';
        }

        // ── ANATOMY ──
        const anatEl   = document.getElementById('dt-anatomy');
        const anatCard = anatEl.parentElement;

        // purge previously injected rich-content divs
        Array.from(anatCard.querySelectorAll(':scope > div')).forEach(el => el.remove());

        if (data.detailedAnatomy) {
            anatEl.style.display = 'none';
            anatEl.innerHTML = '';
            anatCard.insertAdjacentHTML('beforeend', data.detailedAnatomy);
        } else {
            anatEl.style.display = '';
            anatEl.innerHTML = data.anatomy
                ? data.anatomy.map(i => `<li>${i}</li>`).join('')
                : '<li>No data.</li>';
        }

        // ── PHYSIOLOGY ──
        const funcEl   = document.getElementById('dt-func');
        const funcCard = funcEl.parentElement;

        // purge previously injected rich-content divs
        Array.from(funcCard.querySelectorAll(':scope > div')).forEach(el => el.remove());

        if (data.detailedFunc) {
            funcEl.style.display = 'none';
            funcEl.innerHTML = '';
            funcCard.insertAdjacentHTML('beforeend', data.detailedFunc);
        } else {
            funcEl.style.display = '';
            funcEl.innerHTML = data.func
                ? data.func.map(i => `<li>${i}</li>`).join('')
                : '';
        }

        // ── CLINICAL ──
        document.getElementById('dt-clinical').innerHTML = data.clinical || 'No clinical data.';

        // ── MNEMONIC ──
        const mnemoEl = document.getElementById('dt-mnemonic');
        if (data.detailedMnemonic) {
            mnemoEl.innerHTML = data.detailedMnemonic;
        } else {
            mnemoEl.innerText = data.mnemonic ? `💡 Mnemonic: ${data.mnemonic}` : '';
        }

        // ── 3D PATHWAY VIEWER ──
        const pathwaySection = document.getElementById('pathway-section');
        const pathwayFrame   = document.getElementById('pathway-frame');
        if (data.pathwayUid) {
            pathwaySection.style.display = 'block';
            const pathwayClient = new Sketchfab('1.12.1', pathwayFrame);
            pathwayClient.init(data.pathwayUid, {
                autostart: 1,
                ui_infos: 0,
                ui_stop: 0,
                ui_watermark: 0,
                ui_controls: 1,
                ui_hint: 0,
                success: function(api) { api.start(); },
                error:   function() { console.log('Pathway viewer error.'); }
            });
        } else {
            pathwaySection.style.display = 'none';
            pathwayFrame.src = '';
        }

        _showDetailPage();
    };

    // ─────────────────────────────────────────
    // closeDetail
    // ─────────────────────────────────────────
    window.closeDetail = function() {
        document.getElementById('detail-page').classList.remove('active');
        document.getElementById('main-view').classList.remove('view-hidden');
        document.querySelector('.back-btn').style.display = 'block';

        document.getElementById('cn5-branch-page').style.display = 'none';
        document.getElementById('cn8-branch-page').style.display = 'none';
        document.getElementById('detail-content').style.display   = 'block';

        const pathwayFrame = document.getElementById('pathway-frame');
        if (pathwayFrame) pathwayFrame.src = '';
    };

}
