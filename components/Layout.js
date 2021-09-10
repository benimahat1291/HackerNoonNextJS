import React from 'react'
import Head from "next/head"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>#Hackernoon</title>
                <meta name="hackernoonStrories" content="allStroies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            {children}
        </div>
    )
}

export default Layout
