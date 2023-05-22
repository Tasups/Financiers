
const PokemonRow = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.id}</td>
      <td>{props.types}</td>
      <td><img src={props.sprite} alt={props.name}/></td>
    </tr>
    )
}

export default PokemonRow;