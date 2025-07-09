function GeneralSection({general,setGeneral}){


    const helperfunction = (field,value) => {

        setGeneral({
            ...general,
            [field]:value,


        }
        );
    };


    return (

        <div className="general-form">

            <h2>General Information</h2>



            <label>
                Name:
                <input type="text"
                placeholder= "enter full name"
                value={general.name}
                onChange={(e) => helperfunction('name',e.target.value)}
                
                />
            </label>

            <label>
                Email:
                <input type="text"
                placeholder= "enter your email"
                value={general.email}
                onChange={(e) => helperfunction('email',e.target.value)}
                
                
                
                />
            </label>


            <label>
                Phone:
                <input type="text"
                placeholder= "enter your phone number"
                value={general.phone}
                onChange={(e) => helperfunction('phone',e.target.value)}
                
                
                
                />
            </label>
        </div>

    );

}

export default GeneralSection;