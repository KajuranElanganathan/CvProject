import './Preview.css';

function Preview({ general, education, experience }) {
  if (!general || !education || !experience) {
    return <p className="no-preview">Submit to see your preview</p>;
  }

  return (
    <div className="resume-preview">
      <header className="resume-header">
        <h1>{general.name}</h1>
        <p>{general.email} | {general.phone}</p>
      </header>

      {education && education.length > 0 && (
        <section className="resume-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="resume-item">
              <div className="item-header">
                <strong>{edu.school}</strong> — {edu.degree}
              </div>
              <div className="item-dates">
                {edu.from} - {edu.to}
              </div>
            </div>
          ))}
        </section>
      )}

      {experience && experience.length > 0 && (
        <section className="resume-section">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="resume-item">
              <div className="item-header">
                <strong>{exp.company}</strong> — {exp.position}
              </div>
              <div className="item-dates">
                {exp.from} - {exp.to}
              </div>

              {exp.info && (
                <ul className="item-description">
                  {exp.info
                    .split('\n')
                    .filter(line => line.trim() !== '')
                    .map((line, pt) => (
                      <li key={pt}>{line}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Preview;
