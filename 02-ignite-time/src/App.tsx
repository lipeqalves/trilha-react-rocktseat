import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaulTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
