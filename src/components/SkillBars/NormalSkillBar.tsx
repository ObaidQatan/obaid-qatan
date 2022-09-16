const NormaSkillBar = () => {
  return (
    <div className="skillbar clearfix " data-percent="90%">
      <div className="skillbar-title" style={{ background: "#d35400" }}>
        <span>HTML5</span>
      </div>
      <div
        className="skillbar-bar"
        style={{ background: "#e67e22", width: "90%" }}
      ></div>
      <div className="skill-bar-percent">90%</div>
    </div>
  );
};

export default NormaSkillBar;
