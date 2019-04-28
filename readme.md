# storybook-react-omit

Small utility that allows you to omit code from the source generated by [@storybook/addon-info](https://github.com/storybooks/storybook/tree/next/addons/info).

## Usage

Install it using yarn or npm

```bash
yarn add storybook-react-omit
```

then add its parameters

```diff
// .storybook/config.js

import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withOmission } from 'storybook-react-omit'

addDecorator(withInfo({ header: false, inline: true }))
+ addParameters(withOmission())

// ...
```
