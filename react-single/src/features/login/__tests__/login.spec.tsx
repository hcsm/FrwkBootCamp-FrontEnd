import { render, screen } from '@testing-library/react'
import React from 'react'
import { Login } from '../login'

describe('Login', () => {
  test('should be login', () => {
    render(<Login />)
    const linkElement = screen.getByText(/login/i)
    expect(linkElement).toBeInTheDocument()
  })
})
