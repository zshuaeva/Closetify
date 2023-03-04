
// add delete functionality

function ShoesList(props) {

  async function handleDelete (shoeId){
    console.log(shoeId)
    const shoeUrl = `http://localhost:8080/api/shoes/${shoeId}/`
    const fetchConfig = {
    method: "delete",
    }
  const response = await fetch(shoeUrl, fetchConfig)

  }

  // // const [shoes, setShoes] = useState('')
  // async function fetchData() {
  // const shoesUrl ='http://localhost:8080/api/shoes/';
  // const shoesResponse = await fetch(shoesUrl);
  //   if (shoesResponse.ok) {
  //     const shoesData = await shoesResponse.json();
  //     console.log(shoesData)
  //   } else {
  //   console.log("bad shoes response")
  //   }
  // }
  // // useEffect(() => {
  // fetchData();
  // // }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Shoe Brand</th>
          <th>Shoe Name</th>
          <th>Shoe Color</th>
          <th>Shoe Photo</th>
          <th>Delete Shoe</th>
        </tr>
      </thead>
      <tbody>
        {props.shoes.map(shoe => {
          return (
            <tr key={shoe.id}>
            <td>{ shoe.shoe_brand}</td>
            <td>{ shoe.shoe_name }</td>
            <td>{ shoe.shoe_color }</td>
            <td><img src={ shoe.shoe_picture_url } className="img-fluid" alt="Responsive image"></img></td>
            <td><button onClick={() =>handleDelete(shoe.id)} type="button" className="btn btn-outline-danger">Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
export default ShoesList;
