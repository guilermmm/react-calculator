import styled from '@emotion/styled'
import * as math from 'mathjs'
import { useState } from 'react'

export const Calculator = () => {
  const [input, setInput] = useState('')

  const addToInput = (val: string) => {
    setInput(input + val)
  }

  const handleEqual = () => {
    setInput(math.evaluate(input))
  }

  const clearInput = () => {
    setInput('')
  }

  return (
    <Container>
      <Grid>
        <Input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="row">
          <Button onClick={() => addToInput('7')}>7</Button>
          <Button onClick={() => addToInput('8')}>8</Button>
          <Button onClick={() => addToInput('9')}>9</Button>
          <Button onClick={() => addToInput('/')}>/</Button>
        </div>
        <div className="row">
          <Button onClick={() => addToInput('4')}>4</Button>
          <Button onClick={() => addToInput('5')}>5</Button>
          <Button onClick={() => addToInput('6')}>6</Button>
          <Button onClick={() => addToInput('*')}>*</Button>
        </div>
        <div className="row">
          <Button onClick={() => addToInput('1')}>1</Button>
          <Button onClick={() => addToInput('2')}>2</Button>
          <Button onClick={() => addToInput('3')}>3</Button>
          <Button onClick={() => addToInput('+')}>+</Button>
        </div>
        <div className="row">
          <Button onClick={() => addToInput('.')}>.</Button>
          <Button onClick={() => addToInput('0')}>0</Button>
          <Button onClick={() => handleEqual()}>=</Button>
          <Button onClick={() => addToInput('-')}>-</Button>
        </div>
        <Button onClick={() => setInput('')}>Clear</Button>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Grid = styled.div`
  width: 15rem;
  display: grid;
  grid-gap: 10px;

  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  text-align: right;
  padding: 0 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #1f2126;
  color: white;
`

const Button = styled.button`
  background: #333;
  color: #fff;
  border: 2px solid #555;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #555;
  }
`
