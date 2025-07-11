function Preview({ general,education,experience}) {





  console.log (general)  

  if (!general) {
    return <p>Submit to see your preview</p>;
  }else {

    return (
        <div>
        <h2>Preview</h2>
        <p><strong>Name:</strong> {general.name}</p>
        <p><strong>Email:</strong> {general.email}</p>
        <p><strong>Phone:</strong> {general.phone}</p>
        </div>
    );
    }}


export default Preview;