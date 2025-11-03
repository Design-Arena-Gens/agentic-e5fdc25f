import { CSSProperties } from "react";

const experienceHighlights = [
  {
    title: "Symphonic Intelligence",
    description:
      "AIWINER orchestrates analytical precision with emotive resonance, turning raw data into intuitive narratives that spark decisive action.",
    metrics: ["Predictive frequency mapping", "Emotion-weighted signal sculpting"],
  },
  {
    title: "Luminous Workflows",
    description:
      "Design and deploy cognitive journeys that adapt in real-time, glowing brighter as your teams collaborate and iterate ideas.",
    metrics: ["Modular orchestration layers", "Aura-based collaboration trails"],
  },
  {
    title: "Harmonic Guardianship",
    description:
      "A lattice of encrypted neural beacons protects every insight, balancing openness with vigilant, compassionate security.",
    metrics: ["Quantum-tuned observation", "Compliant by composition"],
  },
];

const capabilityPillars = [
  {
    label: "AION Vision Engine",
    blurb: "Vectorial perception modeling with neon-lit clarity across multimodal streams.",
  },
  {
    label: "Flux Resonance Studio",
    blurb: "Blueprint emergent brand voices guided by spectral prompt choreography.",
  },
  {
    label: "Celestial Governance Mesh",
    blurb: "Transparent oversight with traceable, human-affirming guardrails.",
  },
];

const signatureBursts = [
  {
    metric: "4.2x",
    text: "Ideation velocity uplift across product and strategy teams.",
  },
  {
    metric: "98%",
    text: "Signal fidelity maintained through adaptive resonance filters.",
  },
  {
    metric: "12min",
    text: "Average time from concept to deployable experience shard.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="noise-overlay" />
      <span className="radial-highlight radial-highlight--right" />
      <span className="radial-highlight radial-highlight--left" />

      <header className="glass" style={headerStyle}>
        <div style={brandStyle}>
          <span style={sparkStyle} />
          <span>AIWINER</span>
        </div>

        <nav style={navStyle}>
          <a className="nav-link" style={navLinkStyle} href="#experience">
            Experience
          </a>
          <a className="nav-link" style={navLinkStyle} href="#capabilities">
            Capabilities
          </a>
          <a className="nav-link" style={navLinkStyle} href="#insights">
            Insights
          </a>
        </nav>

        <div style={ctaWrapStyle}>
          <a className="btn secondary" href="#connect">
            Request a Luminary Demo
          </a>
        </div>
      </header>

      <section style={heroSectionStyle}>
        <div style={heroGridStyle}>
          <div style={heroTextStyle}>
            <p style={badgeStyle}>Neo-futuristic cognition suite</p>
            <h1 className="glow-text" style={heroTitleStyle}>
              Illuminate the next cadence of
              <span style={accentGradientStyle}> intelligent creation.</span>
            </h1>
            <p style={heroDescriptionStyle}>
              AIWINER merges spectral analytics with human-centered artistry. Craft living
              journeys that pulse with blue-fire clarity, transforming intuition into luminous
              momentum.
            </p>
            <div style={heroActionsStyle}>
              <a className="btn" href="#experience">
                Enter the Resonance
              </a>
              <a className="btn secondary" href="#capabilities">
                Explore the Mesh
              </a>
            </div>
            <div style={heroStatsStyle}>
              {signatureBursts.map((burst) => (
                <div key={burst.metric} className="hero-stat-card" style={heroStatCardStyle}>
                  <span style={heroStatMetricStyle}>{burst.metric}</span>
                  <span style={heroStatTextStyle}>{burst.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={heroVisualStyle}>
            <div style={orbitalShellStyle}>
              <div style={orbitalGlowStyle} />
              <div style={orbitalCoreStyle}>
                <span style={corePulseStyle} />
                <span style={coreRingStyle} />
                <span style={coreInnerRingStyle} />
              </div>
            </div>
            <div style={orbitalCaptionStyle}>
              <h2 style={orbitalTitleStyle}>Luminous Convergence</h2>
              <p style={orbitalTextStyle}>
                Every interaction transfigures into radiant knowledge through our phase-shift
                intelligence lattice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" style={experienceSectionStyle}>
        <div style={sectionHeaderStyle}>
          <h2 className="glow-text" style={sectionTitleStyle}>
            Experience architecture
          </h2>
          <p style={sectionSubtitleStyle}>
            Decode strategy, emotion, and ambition through a single pane of luminous synthesis.
          </p>
        </div>
        <div style={experienceGridStyle}>
          {experienceHighlights.map((highlight) => (
            <article key={highlight.title} className="glass" style={experienceCardStyle}>
              <div style={cardHaloStyle} />
              <h3 style={experienceTitleStyle}>{highlight.title}</h3>
              <p style={experienceTextStyle}>{highlight.description}</p>
              <ul style={experienceListStyle}>
                {highlight.metrics.map((metric) => (
                  <li key={metric} style={experienceListItemStyle}>
                    {metric}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" style={capabilitiesSectionStyle}>
        <div style={capabilitiesGridStyle}>
          <div className="glass" style={capabilitiesIntroStyle}>
            <h2 className="glow-text" style={capabilitiesTitleStyle}>
              Capabilities lattice
            </h2>
            <p style={capabilitiesTextStyle}>
              Activate spectral toolsets that bend perception, orchestrate dynamic rituals, and
              embed governance with luminous precision.
            </p>
            <a className="btn" href="#insights">
              See luminous playbooks
            </a>
          </div>
          <div style={capabilityListStyle}>
            {capabilityPillars.map((pillar) => (
              <div key={pillar.label} className="glass" style={capabilityCardStyle}>
                <span style={capabilityGlowStyle} />
                <div style={capabilityLabelStyle}>{pillar.label}</div>
                <p style={capabilityBlurbStyle}>{pillar.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" style={insightsSectionStyle}>
        <div style={insightsWrapperStyle}>
          <div style={insightsContentStyle}>
            <h2 className="glow-text" style={insightsTitleStyle}>
              Living insight corridors
            </h2>
            <p style={insightsTextStyle}>
              Observe telemetry as luminous ribbons. Predictive auroras guide each decision while
              the AIWINER conscience keeps every trajectory grounded in purpose.
            </p>
          </div>
          <div style={insightsPanelStyle}>
            <div style={timelineStyle}>
              {["Signal Capture", "Rhythmic Fusion", "Luminary Delivery"].map((phase, index) => (
                <div key={phase} style={timelineItemStyle}>
                  <span style={timelineDotStyle} />
                  <div style={timelineLineStyle} />
                  <div style={timelineContentStyle}>
                    <span style={timelineBadgeStyle}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 style={timelineTitleStyle}>{phase}</h3>
                    <p style={timelineBlurbStyle}>
                      {index === 0 &&
                        "Gather multimodal whispers across markets, culture, and intuition in one crystalline pulse."}
                      {index === 1 &&
                        "Fuse structured knowledge with ambient patterns through resonance-driven synthesis."}
                      {index === 2 &&
                        "Deliver choreographed activations that shimmer across touchpoints with measurable uplift."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="connect" style={ctaSectionStyle}>
        <div className="glass" style={ctaCardStyle}>
          <h2 className="glow-text" style={ctaTitleStyle}>
            Ignite your luminous cadence
          </h2>
          <p style={ctaTextStyle}>
            Arrange a private immersion with our orchestrators. Feel the resonance of AIWINER in
            your strategy, culture, and craft.
          </p>
          <form style={ctaFormStyle}>
            <div style={inputRowStyle}>
              <label style={inputLabelStyle}>
                Name
                <input style={inputStyle} type="text" name="name" placeholder="Nova Industries" />
              </label>
              <label style={inputLabelStyle}>
                Work Email
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  placeholder="you@futurebrand.com"
                />
              </label>
            </div>
            <label style={inputLabelStyle}>
              What should we illuminate?
              <textarea
                style={textareaStyle}
                name="message"
                placeholder="Blueprint the luminous canvas you seek."
                rows={4}
              />
            </label>
            <button className="btn" type="submit">
              Initiate Resonance Call
            </button>
          </form>
        </div>
      </section>

      <footer style={footerStyle}>
        <div style={footerGridStyle}>
          <div>
            <div style={brandFooterStyle}>
              <span style={sparkStyle} />
              <span>AIWINER</span>
            </div>
            <p style={footerTextStyle}>
              Crafting luminous futures through compassionate intelligence and neo-futuristic
              design.
            </p>
          </div>
          <div style={footerLinksStyle}>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#insights">Insights</a>
            <a href="#connect">Connect</a>
          </div>
          <div style={footerBadgeStyle}>
            <span style={badgeHaloStyle} />
            <span>Made for the radiant now.</span>
          </div>
        </div>
        <p style={footerFineStyle}>© {new Date().getFullYear()} AIWINER. All luminous rights reserved.</p>
      </footer>
    </main>
  );
}

const headerStyle: CSSProperties = {
  position: "sticky",
  top: "2rem",
  margin: "1.5rem auto",
  maxWidth: "1200px",
  padding: "0.85rem 1.6rem",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  zIndex: 5,
};

const brandStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.05rem",
  letterSpacing: "0.32em",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.75rem",
  textTransform: "uppercase",
  color: "var(--text-bright)",
};

const brandFooterStyle: CSSProperties = {
  ...brandStyle,
  justifyContent: "flex-start",
};

const sparkStyle: CSSProperties = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #1b92ff 15%, #00dfff 85%)",
  boxShadow: "0 0 18px rgba(0, 212, 255, 0.8)",
  display: "inline-block",
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: "1.1rem",
  alignItems: "center",
};

const navLinkStyle: CSSProperties = {
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(225, 240, 255, 0.75)",
  transition: "color 0.3s ease, text-shadow 0.3s ease",
};

const ctaWrapStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const heroSectionStyle: CSSProperties = {
  marginTop: "4rem",
  padding: "4rem 1.5rem 6rem",
  display: "flex",
  justifyContent: "center",
};

const heroGridStyle: CSSProperties = {
  maxWidth: "1180px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "3.5rem",
  alignItems: "center",
};

const heroTextStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  padding: "0.45rem 0.9rem",
  borderRadius: "999px",
  border: "1px solid rgba(74, 201, 255, 0.4)",
  background: "rgba(12, 20, 45, 0.7)",
  color: "var(--text-muted)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
};

const heroTitleStyle: CSSProperties = {
  fontSize: "clamp(2.8rem, 4vw + 1rem, 4.5rem)",
  lineHeight: 1.05,
  fontWeight: 600,
};

const accentGradientStyle: CSSProperties = {
  display: "block",
  background: "linear-gradient(120deg, rgba(70, 165, 255, 0.95), rgba(0, 223, 255, 0.6))",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const heroDescriptionStyle: CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: 1.7,
  maxWidth: "580px",
};

const heroActionsStyle: CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
};

const heroStatsStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "1rem",
};

const heroStatCardStyle: CSSProperties = {
  background: "rgba(7, 12, 26, 0.75)",
  borderRadius: "18px",
  padding: "1.35rem",
  border: "1px solid rgba(74, 201, 255, 0.25)",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  boxShadow: "0 10px 25px rgba(0, 167, 255, 0.18)",
};

const heroStatMetricStyle: CSSProperties = {
  fontSize: "2rem",
  fontWeight: 600,
  color: "rgba(111, 226, 255, 1)",
  letterSpacing: "-0.02em",
};

const heroStatTextStyle: CSSProperties = {
  fontSize: "0.9rem",
  color: "var(--text-muted)",
  lineHeight: 1.6,
};

const heroVisualStyle: CSSProperties = {
  position: "relative",
  minHeight: "420px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
};

const orbitalShellStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: "420px",
  aspectRatio: "1",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(15, 35, 70, 0.85) 0%, rgba(5, 10, 25, 0) 70%)",
  border: "1px solid rgba(74, 201, 255, 0.25)",
  boxShadow: "0 0 65px rgba(0, 205, 255, 0.25)",
  display: "grid",
  placeItems: "center",
};

const orbitalGlowStyle: CSSProperties = {
  position: "absolute",
  inset: "12%",
  borderRadius: "50%",
  background:
    "conic-gradient(from 140deg, rgba(0, 214, 255, 0.65), rgba(24, 74, 255, 0.35), rgba(0, 214, 255, 0.65))",
  opacity: 0.75,
  filter: "blur(12px)",
  animation: "orbitalPulse 11s ease-in-out infinite",
};

const orbitalCoreStyle: CSSProperties = {
  position: "relative",
  width: "64%",
  aspectRatio: "1",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(67, 198, 255, 0.75), rgba(5, 10, 25, 0.9))",
  display: "grid",
  placeItems: "center",
  overflow: "hidden",
};

const corePulseStyle: CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background:
    "radial-gradient(circle, rgba(0, 200, 255, 0.6) 0%, rgba(0, 200, 255, 0.1) 45%, transparent 70%)",
  animation: "corePulse 6s ease-in-out infinite",
};

const coreRingStyle: CSSProperties = {
  position: "absolute",
  width: "78%",
  height: "78%",
  borderRadius: "50%",
  border: "1px solid rgba(0, 194, 255, 0.65)",
  opacity: 0.6,
  animation: "ringRotate 12s linear infinite",
};

const coreInnerRingStyle: CSSProperties = {
  position: "absolute",
  width: "40%",
  height: "40%",
  borderRadius: "50%",
  border: "1px dashed rgba(0, 194, 255, 0.55)",
  animation: "ringRotateAlt 9s linear infinite",
};

const orbitalCaptionStyle: CSSProperties = {
  textAlign: "center",
  maxWidth: "420px",
  display: "grid",
  gap: "0.5rem",
};

const orbitalTitleStyle: CSSProperties = {
  fontSize: "1.35rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const orbitalTextStyle: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
};

const experienceSectionStyle: CSSProperties = {
  padding: "4.5rem 1.5rem 5rem",
  display: "flex",
  justifyContent: "center",
};

const sectionHeaderStyle: CSSProperties = {
  maxWidth: "1080px",
  width: "100%",
  marginBottom: "3rem",
  display: "grid",
  gap: "0.75rem",
  justifyItems: "center",
  textAlign: "center",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: "2.4rem",
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
};

const sectionSubtitleStyle: CSSProperties = {
  maxWidth: "720px",
  lineHeight: 1.7,
  color: "var(--text-muted)",
};

const experienceGridStyle: CSSProperties = {
  maxWidth: "1080px",
  width: "100%",
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
};

const experienceCardStyle: CSSProperties = {
  position: "relative",
  padding: "2.2rem",
  borderRadius: "22px",
  overflow: "hidden",
  display: "grid",
  gap: "1rem",
};

const cardHaloStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at top right, rgba(74, 201, 255, 0.35), transparent 60%)",
  opacity: 0.65,
  pointerEvents: "none",
};

const experienceTitleStyle: CSSProperties = {
  fontSize: "1.35rem",
  zIndex: 1,
};

const experienceTextStyle: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  zIndex: 1,
};

const experienceListStyle: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: "0.6rem",
  zIndex: 1,
};

const experienceListItemStyle: CSSProperties = {
  fontSize: "0.85rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(180, 220, 255, 0.75)",
};

const capabilitiesSectionStyle: CSSProperties = {
  padding: "4rem 1.5rem 5rem",
  display: "flex",
  justifyContent: "center",
};

const capabilitiesGridStyle: CSSProperties = {
  maxWidth: "1100px",
  width: "100%",
  display: "grid",
  gap: "2.5rem",
};

const capabilitiesIntroStyle: CSSProperties = {
  padding: "2.5rem",
  borderRadius: "28px",
  display: "grid",
  gap: "1.4rem",
};

const capabilitiesTitleStyle: CSSProperties = {
  fontSize: "2rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const capabilitiesTextStyle: CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "var(--text-muted)",
};

const capabilityListStyle: CSSProperties = {
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
};

const capabilityCardStyle: CSSProperties = {
  position: "relative",
  padding: "1.8rem",
  borderRadius: "22px",
  overflow: "hidden",
  display: "grid",
  gap: "0.8rem",
};

const capabilityGlowStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(circle at top left, rgba(0, 223, 255, 0.35), transparent 70%)",
  opacity: 0.75,
  pointerEvents: "none",
};

const capabilityLabelStyle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  zIndex: 1,
};

const capabilityBlurbStyle: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: "var(--text-muted)",
  zIndex: 1,
};

const insightsSectionStyle: CSSProperties = {
  padding: "5rem 1.5rem 6rem",
  display: "flex",
  justifyContent: "center",
};

const insightsWrapperStyle: CSSProperties = {
  maxWidth: "1120px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2.5rem",
  alignItems: "start",
};

const insightsContentStyle: CSSProperties = {
  display: "grid",
  gap: "1.4rem",
};

const insightsTitleStyle: CSSProperties = {
  fontSize: "2.2rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const insightsTextStyle: CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "var(--text-muted)",
};

const insightsPanelStyle: CSSProperties = {
  padding: "2.5rem",
  borderRadius: "28px",
  border: "1px solid rgba(70, 165, 255, 0.25)",
  background:
    "linear-gradient(180deg, rgba(12, 22, 45, 0.92) 0%, rgba(4, 10, 25, 0.82) 80%, rgba(4, 10, 25, 0.65) 100%)",
  boxShadow: "0 20px 45px rgba(0, 163, 255, 0.25)",
};

const timelineStyle: CSSProperties = {
  display: "grid",
  gap: "1.8rem",
};

const timelineItemStyle: CSSProperties = {
  display: "flex",
  gap: "1.4rem",
  position: "relative",
};

const timelineDotStyle: CSSProperties = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  background: "rgba(0, 214, 255, 0.9)",
  boxShadow: "0 0 18px rgba(0, 214, 255, 0.8)",
  marginTop: "0.3rem",
};

const timelineLineStyle: CSSProperties = {
  position: "absolute",
  left: "6px",
  top: "1.5rem",
  bottom: "-1.2rem",
  width: "1px",
  background: "linear-gradient(180deg, rgba(0, 214, 255, 0.5), transparent)",
};

const timelineContentStyle: CSSProperties = {
  flex: 1,
  display: "grid",
  gap: "0.6rem",
};

const timelineBadgeStyle: CSSProperties = {
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(111, 226, 255, 0.85)",
};

const timelineTitleStyle: CSSProperties = {
  fontSize: "1.2rem",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const timelineBlurbStyle: CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "var(--text-muted)",
};

const ctaSectionStyle: CSSProperties = {
  padding: "5rem 1.5rem 7rem",
  display: "flex",
  justifyContent: "center",
};

const ctaCardStyle: CSSProperties = {
  maxWidth: "980px",
  width: "100%",
  padding: "3rem",
  borderRadius: "32px",
  display: "grid",
  gap: "1.5rem",
};

const ctaTitleStyle: CSSProperties = {
  fontSize: "2.1rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textAlign: "center",
};

const ctaTextStyle: CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "var(--text-muted)",
  textAlign: "center",
  maxWidth: "640px",
  margin: "0 auto",
};

const ctaFormStyle: CSSProperties = {
  display: "grid",
  gap: "1.5rem",
};

const inputRowStyle: CSSProperties = {
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

const inputLabelStyle: CSSProperties = {
  display: "grid",
  gap: "0.4rem",
  fontSize: "0.85rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(180, 220, 255, 0.8)",
};

const inputStyle: CSSProperties = {
  borderRadius: "14px",
  border: "1px solid rgba(74, 201, 255, 0.3)",
  padding: "0.9rem 1rem",
  background: "rgba(8, 15, 35, 0.85)",
  color: "var(--text-bright)",
  fontSize: "1rem",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  resize: "vertical",
};

const footerStyle: CSSProperties = {
  padding: "3rem 1.5rem 4rem",
  borderTop: "1px solid rgba(74, 201, 255, 0.2)",
  background: "rgba(3, 8, 18, 0.9)",
};

const footerGridStyle: CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  alignItems: "start",
};

const footerTextStyle: CSSProperties = {
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "var(--text-muted)",
};

const footerLinksStyle: CSSProperties = {
  display: "grid",
  gap: "0.75rem",
  fontSize: "0.9rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(180, 220, 255, 0.75)",
};

const footerBadgeStyle: CSSProperties = {
  position: "relative",
  padding: "1.2rem",
  borderRadius: "18px",
  border: "1px solid rgba(74, 201, 255, 0.25)",
  background: "rgba(7, 12, 26, 0.75)",
  display: "grid",
  placeItems: "center",
  color: "rgba(200, 235, 255, 0.85)",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontSize: "0.75rem",
};

const badgeHaloStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: "18px",
  background: "radial-gradient(circle, rgba(74, 201, 255, 0.32), transparent 70%)",
  pointerEvents: "none",
};

const footerFineStyle: CSSProperties = {
  marginTop: "2.5rem",
  textAlign: "center",
  fontSize: "0.75rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(140, 185, 220, 0.7)",
};
