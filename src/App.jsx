import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import GeneralSection from './components/GeneralSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Preview from './components/preview';



function App(){

    const [general,setGeneral] = useState(
        {
            name:"",
            email:"",
            phone:"",
        }
    );

    const [education,setEducation] = useState([
        {

            school:"",
            degree:"",
            from:"",
            to:"",
        }]
    );

    const [experience,setExperience] = useState([
        {

            company:"",
            position:"",
            info:"",
            from:"",
            to:"",
        }]
    );


    const [finalGeneral,setFinalGeneral] = useState(null);
    const [finalExperience,setFinalExperience] = useState(null);
    const [finalEducation,setFinalEducation] = useState(null);


    const prevref = useRef();

    const handleDownload = () => {
    const element = prevref.current; // this is the actual DOM element
    if (!element) return;

  html2pdf().from(element).save();
};

    

    return (






        <div className= "app-container">
            
            
            <div className = "form-section">

                <div className='one'>

                <GeneralSection  general = {general} setGeneral = {setGeneral} setFinalGeneral = {setFinalGeneral} onSubmit = {()=>setFinalGeneral(general)}/>

                </div>
                
                <div className='two'>

                <EducationSection education = {education} setEducation = {setEducation} setFinalEducation = {setFinalEducation} onSubmit = {()=>setFinalEducation(education)}/>

                </div>

                <div className='three'>

                <ExperienceSection experience = {experience} setExperience = {setExperience} setFinalExperience = {setFinalExperience} onSubmit = {()=>setFinalExperience(experience)}/>
                </div>

            </div>

            



            <div className = "preview">  

                <div className = "download-section">

                 <button className="download" onClick={handleDownload}>
                        Download PDF
                </button>

                </div>


                <div className = "resume">

                <Preview
                    ref = {prevref}
                    general = {finalGeneral}
                    education = {finalEducation}
                    experience = {finalExperience}

                />

                </div>


            </div>

            
        </div>
  );
}

export default App;