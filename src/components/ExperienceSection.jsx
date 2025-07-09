function ExperienceSection({experience,setExperience}){


    const handleChange= (index,value,field)=> {
        const updated = [...experience];
        updated[index] = {

            ...updated[index],
            [field]:value

        
        }

        setExperience(updated);
    };




    const addEntry = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        responsibilities: "",
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
    <div>
      <h2>Experience</h2>

      {experience.map((entry, index) => (
        <div key={index}>
          <label>
            Company:
            <input
              type="text"
              value={entry.company}
              onChange={(e) =>
                handleChange(index, "company", e.target.value)
              }
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              value={entry.position}
              onChange={(e) =>
                handleChange(index, "position", e.target.value)
              }
            />
          </label>

          <label>
            Responsibilities:
            <textarea
              value={entry.responsibilities}
              onChange={(e) =>
                handleChange(index, "responsibilities", e.target.value)
              }
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

          <button onClick={() => removeEntry(index)}>Remove</button>
          <hr />
        </div>
      ))}

      <button onClick={addEntry}>Add Experience</button>
    </div>
  );
}

export default ExperienceSection;