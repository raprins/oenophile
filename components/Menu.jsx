import React from 'react'
import Link from 'next/link'

export default function Menu() {
    return (
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link> </li>
                <li><Link href="/articles"><a>Articles</a></Link> </li>
                <li><Link href="/contact"><a>Contact</a></Link> </li>
            </ul>
        </header>
    )
}
