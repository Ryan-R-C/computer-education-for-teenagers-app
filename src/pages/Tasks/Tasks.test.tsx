import { render, screen, userEvent } from '../../__helpers__/app-tests'
import LandingPage from '.'

describe('Sign in screen', () => {
  it('Checks if the sign in screen loads correctly', () => {
    render(<LandingPage />)

    expect(screen.getByText(/Login/)).toBeInTheDocument()
    expect(screen.getByLabelText(/E-mail/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Senha/)).toBeInTheDocument()

    const button = screen.getByText(/Entrar/)

    expect(button).toBeInTheDocument()

    userEvent.click(button)
  })
})
