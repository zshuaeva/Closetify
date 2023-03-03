import React, { useEffect, useState} from 'react';

  function ShoesForm(){
    const [shoe_brand, setShoeBrand] = useState('');
    const [shoe_name, setShoeName] = useState('');
    const [shoe_color, setShoeColor] = useState('');
    const [shoe_picture_url, setShoePictureUrl] = useState('');
    const [bin, setBin] = useState('');
    const [bins, setBins] = useState([]);

    const handleShoeBrandChange = event => {
      const value = event.target.value
      setShoeBrand(value)
    }

    const handleShoeNameChange = event => {
      const value = event.target.value
      setShoeName(value)
    }

    const handleShoeColorChange = event => {
      const value = event.target.value
      setShoeColor(value)
    }

    const handleShoePictureUrlChange = event => {
      const value = event.target.value
      setShoePictureUrl(value)
    }

    const handleBinChange = event => {
      const value = event.target.value
      setBin(value)
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};

      data.shoe_brand = shoe_brand;
      data.shoe_name = shoe_name;
      data.shoe_color = shoe_color;
      data.shoe_picture_url = shoe_picture_url;
      data.bin = bin;
      console.log(data)

      const shoesUrl ='http://localhost:8080/api/shoes/';
      const fetchConfig = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await fetch(shoesUrl, fetchConfig);
      if (response.ok) {
        const newShoe = await response.json();
        console.log(newShoe)

        setShoeBrand('');
        setShoeName('');
        setShoeColor('');
        setShoePictureUrl('');
        setBin('');
      }
    }

    const fetchData = async () => {
      const binsUrl ='http://localhost:8100/api/bins/';
      const binsResponse = await fetch(binsUrl);
      if (binsResponse.ok) {
        const binsData = await binsResponse.json();
        console.log(binsData)
        setBins(binsData.bins);
      } else {
        console.log("bad response")
      }
    }
    useEffect(() => {
      fetchData();
    }, []);

  return(
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new shoe</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input value={shoe_brand} onChange={handleShoeBrandChange} placeholder="Name" required type="text" className="form-control"/>
                <label>Shoe Manufacturer</label>
              </div>

              <div className="form-floating mb-3">
                <input value={shoe_name} onChange={handleShoeNameChange} placeholder="Name" required type="text" className="form-control"/>
                <label>Shoe Name</label>
              </div>

              <div className="form-floating mb-3">
                <input value={shoe_color} onChange={handleShoeColorChange} placeholder="Name" required type="text" className="form-control"/>
                <label>Shoe Color</label>
              </div>

              <div className="form-floating mb-3">
                <input value={shoe_picture_url} onChange={handleShoePictureUrlChange} placeholder="Name" required type="text" className="form-control"/>
                <label>URL for Shoe Photo</label>
              </div>

              <div className="mb-3">
              <select className="form-select" required alue={bins} onChange={handleBinChange} name="bin"  >
                <option key="" value="">Select a bin</option>
                {bins.map(bin => {
                  return (
                    <option key={bin.href} value={bin.href}>{bin.closet_name}</option>
                  );
                })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>

  );
  }

  export default ShoesForm;
