import Link from 'next/link'
import React from 'react'

export default function Card({
    imageUrl, imageDescription, title, body, links
}) {
    return (
        <div className="card">
            {imageUrl && <CardImage imageUrl={imageUrl} />}
            <div className="card-body">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            {links && <CardLinks links={links} />}
        </div>
    )
}


function CardImage({ imageUrl, imageDescription }) {
    return (
        <div className="card-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
    )
}


function CardLinks({links = []}) {
    return (
        <ul className="card-links">
            {links.map(link => (
                <li key={link.href}><Link href={link.href}><a className={link.style}>{link.text}</a></Link></li>
            ))}
        </ul>
    )
}