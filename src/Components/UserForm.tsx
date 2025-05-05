import React, {useState} from "react";


const UserForm = () => { 
    const [name, setName] = useState("");
    const [parcelType, setParcelType] = useState("");
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={() => {
                        setName(name);
                    }} value={name}/>
                </label>
                <label>
                    Type of parcel:
                    <input type="text" name="parcel type" />
                </label>
                <label>Phone Number: <input type="tel" name="Enter conctact phone number" placeholder="Enter conctact phone number"/></label>
                <input type="submit" value="Submit" />
            </form>
        );
}

export default UserForm;