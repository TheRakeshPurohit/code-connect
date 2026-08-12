import figma from '../index_react'
import { Button } from './components/TestComponents'

figma.connect(Button, 'ui/button', {
  example: () => (
    <Button
      onClick={(e) => {
        console.log('clicked', e)
        return true
      }}
    >
      Submit
    </Button>
  ),
})
