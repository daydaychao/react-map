import { atom, useAtom } from 'jotai'

export type cardType = {
  x: number
  y: number
  color: string
  name: string
}

export const cardAtom = atom([
  { x: 0, y: 0, color: 'red', name: '1' },
  { x: -1, y: 1, color: 'red', name: '2' },
  { x: 2, y: 2, color: 'blue', name: '3' },
  { x: 3, y: 0, color: 'blue', name: '4' }
])

export default function CardAtoms() {
  const [card, setCard] = useAtom(cardAtom)

  let maxX = 3
  setInterval(() => {
    maxX++
    const newCard: cardType = { x: maxX, y: 0, color: 'red', name: '1' }
    setCard([...card, newCard])
    console.log('components atom.tsx - cardAtom', cardAtom)
  }, 2000)

  return <>atom</>
}
