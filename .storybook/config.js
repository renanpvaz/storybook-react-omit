import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withOmission } from '../'

addDecorator(
  withInfo({
    header: false,
    inline: true,
    propTablesExclude: withOmission([]),
  }),
)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
