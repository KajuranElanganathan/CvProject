import { useState } from 'react';
import './App.css';
import GeneralSection from './components/GeneralSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import Preview from './components/preview.jsx';

function App(){

    const [general,setGeneral] = useState(
        {
            name:"",
            email:"",
            phone:"",
        }
    );

    const [education,setEducation] = useState(
        {

            school:"",
            degree:"",
            from:"",
            to:"",
        }
    );

    const [experience,setExperience] = useState(
        {

            company:"",
            position:"",
            info:"",
            from:"",
            to:"",
        }
    );

    return (

        <div class = "app-contianer">
            <h1>CV-Builder</h1>
            <div class = "form-section">

                <GeneralSection  general = {general} setGeneral = {setGeneral} />
                <ExperienceSection education = {education} setEducation = {setEducation} />
                <EducationSection experience = {experience} setExperience = {setExperience} />


            </div>

            <div class = "preview-section">

            <Preview
            general = {general}
            education = {education}
            experience = {experience}
            />
            </div>
        </div>
  );
}

export default App;