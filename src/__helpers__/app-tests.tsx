import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { ReactElement, ReactNode } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

type Options = {
  initialRoute?: string
  routePath?: string
}

type Props = {
  children?: ReactNode
}

function render(ui: ReactElement, { initialRoute = '/', routePath = '/' }: Options = {}) {
  function Wrapper({ children }: Props) {
    return (
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path={routePath} element={children} />
        </Routes>
      </MemoryRouter>
    )
  }

  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
    }),
  }
}

export * from '@testing-library/react'
export { render, userEvent, nock }
