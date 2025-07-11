import './GeneralSection.css';

function GeneralSection({ general, setGeneral, onSubmit }) {
  const handleChange = (field, value) => {
    setGeneral({
      ...general,
      [field]: value,
    });
  };

  return (
    <div className="general-form">
      <h2 className="form-title">Personal Details</h2>

      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter full name"
          value={general.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={general.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          value={general.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>

      <button className="submit-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default GeneralSection;
