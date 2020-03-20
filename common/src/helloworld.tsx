import * as React from 'react'

interface HelloWorldProps {
    name?: string
}

export const HelloWorld = ({name} : {name?: string}) => (
<p>Hello {name}</p>)

export default HelloWorld