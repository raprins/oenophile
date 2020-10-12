import React, {forwardRef} from 'react'
import Link from 'next/link'
import Icons from './Icons'

const Menu = forwardRef(({className = ''}, ref) => {
    return (
        <header className={`menu ${className}`} ref={ref}>
            <div>
                <Icons.Logo />
            </div>
            <ul>
                <li><Link href="/"><a className="color-primary">Home</a></Link> </li>
                <li><Link href="/articles"><a className="color-primary">Articles</a></Link> </li>
                <li><Link href="/contact"><a className="color-primary">Contact</a></Link> </li>
            </ul>
        </header>
    )
})

export default Menu
