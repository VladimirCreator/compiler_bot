import React, { forwardRef } from 'react'

import type { ComponentProps } from '../Prop/ComponentProp'

/* Props
*/
export type CardProps = ComponentProps;

/* Component
*/
export const Card: React.FC<CardProps> = (props) => {
    const {
        component: Component = 'div',
        ...rest
    } = props

    return (
        <Component {...rest}
            className='p-4 bg-white rounded-xl'
        />
    )
}
