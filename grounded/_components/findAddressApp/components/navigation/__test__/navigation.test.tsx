// import React from 'react';
import {render, screen} from '@testing-library/react'
import Navigation from '../Navigation'

test('it renders navigation on the dom', () => {
  render(<Navigation />)
  const linkElement = screen.getByText(/Life insurance/i)
  expect(linkElement).toBeInTheDocument()
})

test('Navigation has Claim and Contact tabs', async () => {
  render(<Navigation />)

  // Wait for page to update with query text
  const items = await screen.findAllByText(/C/)
  expect(items).toHaveLength(2)
})

test('Navigation has Wills tab', async () => {
  render(<Navigation />)
  const items = await screen.findAllByText('Wills')
  expect(items).toHaveLength(1)
})
test('Navigation has Sign now button', () => {
  render(<Navigation />)
  const linkElement = screen.getByText(/Apply Now/i)
  expect(linkElement).toBeInTheDocument()
})

test('Navigation has About tab', () => {
  render(<Navigation />)
  const linkElement = screen.getByText(/About/i)
  expect(linkElement).toBeInTheDocument()
})
