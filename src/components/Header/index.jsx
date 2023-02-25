import { useCardListContext } from "../../context/CardListProvider"

function Header() {
  const { list } = useCardListContext()

  return (
    <section>
      <h1>Header</h1>
      <h2>Tem {list.length} itens</h2>
    </section>
  )
}

export default Header