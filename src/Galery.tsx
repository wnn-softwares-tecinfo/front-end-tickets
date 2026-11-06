import { useState} from 'react'
import { sculptureList } from './data'

interface GalerryProps {
  handleText?: (value: string) => void
  name?: string
}

export const Gallery = ({ handleText, name }: GalerryProps) => {
  const [index, setIndex] = useState<number>(0)

  const handleClick = (): void => {
    setIndex((prevIndex) =>
      prevIndex + 1 < sculptureList.length ? prevIndex + 1 : 0
    )
  }

  const sculpture = sculptureList[index]

  return (
    <>
      <button onClick={handleClick}>Next</button>

      <p>{name}</p>
      <input type="text" onChange={(e) => handleText?.(e.target.value)}  />
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img src={sculpture.url} alt={sculpture.alt} />

      <p>{sculpture.description}</p>
    </>
  )
}