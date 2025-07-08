function EducationSection({education,setEducation}){



return (

    <div>


    <h2>Education</h2>

    {education.map((entry,index)=>(

        <div key = {index}>
            <label>
                School:
                <input 
                type="text"
                value = {entry.school}
                onchange={(e)=>handleChange(index,"school",e.target.value)}
                />

            </label>



            <label>
                Degree:
                <input 
                type="text"
                value = {entry.degree}
                onchange={(e)=>handleChange(index,"degree",e.target.value)}
                />

            </label>

            <label>
                From:
                <input 
                type="text"
                value = {entry.from}
                onchange={(e)=>handleChange(index,"from",e.target.value)}
                />

            </label>

            <label>
                To:
                <input 
                type="text"
                value = {entry.to}
                onchange={(e)=>handleChange(index,"to",e.target.value)}
                />

            </label>
    


























        </div>














    )};












  














)


}

export default EducationSection