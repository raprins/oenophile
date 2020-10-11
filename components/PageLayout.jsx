import React, { useEffect } from 'react'
import Head from 'next/head'
import Menu from './Menu'

function PageLayout({ className = '', withMenu = true, children }) {

    return (
        <>
            <Head>
                <title>Oenophile</title>
            </Head>
            <div className={`page-layout ${className}`}>
                {withMenu && <Menu />}
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}


export default PageLayout
