// add delete functionality
//get shoes data for props
function ShoesList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Shoe Brand</th>
          <th>Shoe Name</th>
          <th>Shoe Color</th>
        </tr>
      </thead>
      <tbody>
        {props.shoes.map(shoe => {
          return (
            <tr key={shoe.href}>
            <td> shoe.shoeBrand </td>
            <td> shoe.shoeShoeName </td>
            <td> shoe.shoeColor </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default ShoesList;
