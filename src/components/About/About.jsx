import "./About.css";

function TextContainer({ title }) {
  return (
    <section id="about-section">
      <div className="text-container">
        <h2 className="section-heading">{title}</h2>
        <p className="section-content">
          Although there is no formal requirement for a celebrant to undertake accredited training,
          it was really important to me, as a lifelong learner, to hone my craft and be able to
          carry out ceremonies to the absolute best of my ability. I want my families and couples to
          feel that they are in safe hands. I trained with the only OFSTED accredited provider Civil
          Ceremonies Limited and am fully insured.
        </p>
        <p className="section-content">
          I only book one ceremony per day, so I will be dedicated just to you and your ceremony.
          This means that your ceremony can bey out ceremonies to any day of the week and it can be
          at any time of the day!
        </p>
      </div>
    </section>
  );
}

export default TextContainer;