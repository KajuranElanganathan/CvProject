import React, { useState } from "react";



function Generalinfo (){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [editing, setediting] = useState(true);

    let content;


    function handleSubmit(e){

        e.preventDefault();
        setediting(false);
    }

    function handleEdit(){

        setediting(true);
    }



    if (editing){

        content = (
        
        <form >

            <input type = "text" placeholder = "Full-Name" value ={name} onChange = {(e)=> setName(e.target.value)}/>

            <input type = "email" placeholder = "Email" value ={email} onChange = {(e)=> setEmail(e.target.value)}/>

            <input type = "tel" placeholder = "Phone-Number" value ={phone} onChange = {(e)=> setPhone(e.target.value)}/>

            <button onSubmit = {handleSubmit}>Submit</button>


        </form>
        );

    }else{

        content = (

                <div>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <button onClick = {handleEdit}>Edit</button>
                </div>

            );

        }
    return (

        <div>
            {content}
        </div>
    );

}

export default Generalinfo