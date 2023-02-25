import { useCardListContext } from "../../../context/CardListProvider"
import CardItem from "../CardItem"

function CardListView() {
  const { list } = useCardListContext()

  return (
    <ul>
      {list.map((item, index) => (
        <CardItem key={`${index}-${item.name}`} {...item} />
      ))}
    </ul>
  )
}

export default CardListView