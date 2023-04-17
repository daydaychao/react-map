import { atom } from 'jotai'

export type cardType = {
  x: number
  y: number
  color: string
  name: string
}

const initCard = [
  { x: 0, y: 0, color: 'red', name: '1' },
  { x: -1, y: 1, color: 'red', name: '2' },
  { x: 2, y: 2, color: 'blue', name: '3' },
  { x: 3, y: 0, color: 'blue', name: '4' }
]
export const cardAtom = atom(initCard)
