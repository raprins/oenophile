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
                <li><Link href="/"><a>Home</a></Link> </li>
                <li><Link href="/articles"><a>Articles</a></Link> </li>
                <li><Link href="/contact"><a>Contact</a></Link> </li>
            </ul>
        </header>
    )
})

export default Menu
