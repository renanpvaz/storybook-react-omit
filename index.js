import React from 'react'

const Omitted = Object.assign(props => props._, {
  displayName: '...',
})

export const withOmission = exclude => exclude.concat(Omitted)

export const setDisplayName = name => (Omitted.displayName = name)

const omit = omitted => React.createElement(Omitted, { _: omitted }) // addon-info ignores props that start with "_"

export default omit
