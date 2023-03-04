import React, { useEffect, useState } from 'react';

function HatForm () {

    const [locations, setLocations] = useState([]);
    const [fabric, setFabric] = useState('');
    const [style, setStyle] = useState('');
    const [color, setColor] = useState('');
    const [picture, setPicture] = useState('');
    const [location, setLocation] = useState('');

    const handleFabricChange = (event) => {
        const value = event.target.value;
        setFabric(value);
    }

    const handleStyleChange = (event) => {
        const value = event.target.value;
        setStyle(value);
    }

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }

    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.fabric = fabric;
        data.style = style;
        data.color = color;
        data.picture = picture;
        data.location = location;

        console.log(data);

        const hatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
          const newHat = await response.json();
          console.log(newHat);

          setFabric('');
          setStyle('');
          setColor('');
          setPicture('');
          setLocation('');

        }
    }

    const fetchData = async () => {
        const locationUrl = 'http://localhost:8100/api/locations/';
        const response = await fetch(locationUrl);

        if(response.ok){
            const data = await response.json();
            setLocations(data.locations);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Log a new hat to Your Collection!</h1>
            <form onSubmit={handleSubmit} id="create-hat-form">


              <div className="form-floating mb-3">
                <input value={fabric} onChange={handleFabricChange} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
                <label htmlFor="fabric">Fabric</label>
              </div>



              <div className="form-floating mb-3">
                <input value={style} onChange={handleStyleChange} placeholder="Style" required type="text" name="style" id="style" className="form-control"   />
                <label htmlFor="style">Style</label>
              </div>



              <div className="form-floating mb-3">
                <input value={color} onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control"   />
                <label htmlFor="color">Color</label>
              </div>



              <div className="form-floating mb-3">
                <input value={picture} onChange={handlePictureChange} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control"   />
                <label htmlFor="picture">Picture</label>
              </div>



              <div className="mb-3">
                <select value={location} onChange={handleLocationChange} required id="location" name="location" className="form-select">
                  <option value="">Choose a location</option>
                  {locations.map(location => {
                            return (
                                <option value={location.href} key={location.href}>
                                    {location.closet_name}
                                </option>
                            );
                        })};
                </select>
              </div>



              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default HatForm;
