//import useState
import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { cardAtom, cardType } from '../store/CardAtoms'

const CARD_BOX = {
  width: 60,
  height: 100
}

export default function Map() {
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [cards] = useAtom(cardAtom)

  const handleScroll = (e: any) => {
    console.log('handleScroll', e)
  }
  console.log('Map.tsx - cards', cards)

  return (
    <div className="card-world">
      <div className="card-view" onScroll={handleScroll}>
        <div className="card-wrapper" style={{ transform: `translate(${currentX}px, ${currentY}px)` }}>
          {renderCards(cards)}
        </div>
      </div>
    </div>
  )
}

// 渲染卡片
function renderCards(cards: cardType[]) {
  console.log('renderCards', cards)
  //取得x,y整數
  let maxX = -Infinity
  let minX = Infinity
  let maxY = -Infinity
  let minY = Infinity
  let totalX = 0
  let totalY = 0

  for (const card of cards) {
    maxX = Math.max(maxX, card.x)
    minX = Math.min(minX, card.x)
    maxY = Math.max(maxY, card.y)
    minY = Math.min(minY, card.y)
    totalX += Math.abs(card.x)
    totalY += Math.abs(card.y)
  }

  totalX = Math.abs(maxX) + Math.abs(minX)
  totalY = Math.abs(maxY) + Math.abs(minY)

  console.log({ totalX, totalY })

  return cards?.map((card, index) => (
    <div
      key={'card' + index}
      style={{
        gridColumn: `${card.x + totalY / 2} / ${card.x + totalY / 2 + 1}`,
        gridRow: `${card.y + totalX / 2} / ${card.y + totalX / 2 + 1}`,
        width: CARD_BOX.width + 'px',
        height: CARD_BOX.height + 'px',
        margin: '10px',
        backgroundColor: card.color
      }}>
      <h4>{card.name}</h4>
    </div>
  ))
}
