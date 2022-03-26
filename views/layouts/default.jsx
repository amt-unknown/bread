const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || 'Default'}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/images/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/main.css"/>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/breads">BreadCRUD</a></h1>
          </header>
          <div className="container">
            {html.children}
          </div>
        </div>
      </body>
    </html>
  )
}

module.exports = Default