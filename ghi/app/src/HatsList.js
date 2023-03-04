import React, { useState, useEffect } from "react";


function HatsList(props) {
    const [hats, setHats] = useState(props.hats);

    async function handleDelete (hatId){
        const hatUrl = `http://localhost:8090/api/hats/${hatId}/`
        const fetchConfig = {
            method: "delete",
        }
        const response = await fetch(hatUrl, fetchConfig);
        const updatedHats = hats.filter(hat => hat.id !== hatId);
        console.log(updatedHats);
        setHats(updatedHats);

        window.location.reload();
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Fabric</th>
                <th>Style</th>
                <th>Color</th>
                <th>Picture</th>
                <th>location</th>
                <th>Delete Hat</th>
                </tr>
            </thead>
            <tbody>
                {props.hats.map(hat => {
                    return (
                    <tr key={ hat.id }>
                        <td>{ hat.fabric }</td>
                        <td>{ hat.style }</td>
                        <td>{ hat.color }</td>
                        <td>
                            <img src={hat.picture} className="img-fluid" alt="Responsive image"/>
                        </td>
                        <td>{ hat.location }</td>
                        <td>
                            <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(hat.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
)}

export default HatsList;
