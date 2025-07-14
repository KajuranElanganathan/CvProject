import './ExperienceSection.css';

function ExperienceSection({ experience, setExperience, onSubmit }) {
  const handleChange = (index, field, value) => {
    const updated = [...experience];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setExperience(updated);
  };

  const addEntry = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        info: "", 
        from: "",
        to: "",
      },
    ]);
  };

  const removeEntry = (index) => {
    const updated = experience.filter((_, i) => i !== index);
    setExperience(updated);
  };

  return (
    <div className="experience-form">
      <h2>Experience</h2>

      {experience.map((entry, index) => (
        <div className="experience-entry" key={index}>
          <label>
            Company:
            <input
              type="text"
              value={entry.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              value={entry.position}
              onChange={(e) => handleChange(index, "position", e.target.value)}
            />
          </label>

          <label>
            Responsibilities:
            <input
              type="text"
              value={entry.info} // fixed key
              onChange={(e) => handleChange(index, "info", e.target.value)} // fixed key
            />
          </label>

          <label>
            From:
            <input
              type="text"
              value={entry.from}
              onChange={(e) => handleChange(index, "from", e.target.value)}
            />
          </label>

          <label>
            To:
            <input
              type="text"
              value={entry.to}
              onChange={(e) => handleChange(index, "to", e.target.value)}
            />
          </label>

          <div className="experience-buttons">
            <button onClick={onSubmit}>Submit</button>
            <button onClick={() => removeEntry(index)}>Remove</button>
          </div>

          <hr />
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        Add Experience
      </button>
    </div>
  );
}

export default ExperienceSection;
