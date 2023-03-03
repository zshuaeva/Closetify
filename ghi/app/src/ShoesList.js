
// add delete functionality

function ShoesList(props) {
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
  console.log(props)
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
            <td><img src={ shoe.shoe_picture_url } class="img-fluid" alt="Responsive image"></img></td>
            <td><button type="button" class="btn btn-outline-danger">Delete Shoe</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
export default ShoesList;
