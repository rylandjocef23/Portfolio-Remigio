export default function Teaser() {
  return (
    <section id="home" className="section teaser" aria-label="Introduction">
      <div className="container teaser-inner">
        <div className="teaser-body">
          <p className="teaser-title">
            <span className="teaser-line">Every website starts with someone asking how it works.</span>
            <span className="teaser-line gradient-text">I never stopped asking.</span>
          </p>

          <p className="teaser-copy">
            I'm curious about how things work, and I like turning that curiosity into websites
            and systems people can actually use.
          </p>
        </div>

        <a href="#meet" className="scroll-cue">
          <span>Scroll to meet me</span>
          <span className="cue-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
