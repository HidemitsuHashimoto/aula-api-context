import { useCardListContext } from "../../../context/CardListProvider"

function CardItem({ name, type }) {
  const { addItem } = useCardListContext()

  return (
    <li>
      <p>Nome: {name}</p>
      <p>Tipo: {type}</p>
      <button onClick={() => addItem({ name, type })}>COPY</button>
    </li>
  )
}

export default CardItem