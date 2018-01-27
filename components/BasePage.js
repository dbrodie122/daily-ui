import React from 'react';
import Head from 'next/head';


export default ({ children }) => {
	return (
		<div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      { children }
      <style jsx global>{`
        body {
          margin: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
	)
}