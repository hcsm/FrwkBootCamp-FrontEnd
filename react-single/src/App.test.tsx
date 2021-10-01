import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello wolrd', () => {
  render(<App />)
  const helloElement = screen.getByText(/Hello World/i)
  expect(helloElement).toBeInTheDocument()
})
