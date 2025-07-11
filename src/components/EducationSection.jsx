function EducationSection({education,setEducation,onSubmit}){

    const handleChange = (index,field,value) =>{

        const updated = [...education];
            updated[index] = {
                ...updated[index],
                [field]:value,
            };

            setEducation(updated);

    };


    const addEntry = () => {
        setEducation([

            ...education,
            {school:"",degree:"",from:"",to:""
            }




        ]);

    }
    const removeEntry = (index) => {
        const updated = education.filter((_, i) => i !== index);
        setEducation(updated);
        };



return (
    <div>
      <h2>Education</h2>

      {education.map((entry, index) => (
        <div key={index}>
          <label>
            School:
            <input
              type="text"
              value={entry.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            />
          </label>

          <label>
            Degree:
            <input
              type="text"
              value={entry.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
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

          <button onClick = {onSubmit}>Submit</button>
          <button onClick={() => removeEntry(index)}>Remove</button>
          <hr />
          
        </div>
      ))}

      <button onClick={addEntry}>Add Education</button>
    </div>
  );
}

export default EducationSection;