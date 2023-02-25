import { createContext, useContext, useState } from "react";

const CardListContext = createContext()

function CardListProvider({ children }) {
  const [list, setList] = useState([
    { name: 'batata', type: 'legume' },
    { name: 'maça', type: 'fruta' },
  ])

  function addItem(item) {
    setList([...list, item])
  }

  return (
    <CardListContext.Provider value={{ list, addItem }}>
      {children}
    </CardListContext.Provider>
  )
}

export default CardListProvider

export const useCardListContext = () => useContext(CardListContext)