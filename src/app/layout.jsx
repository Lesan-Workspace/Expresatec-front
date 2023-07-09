import "./globals.css";

export default function RootLayout({ children }) {
  
  return (
    <html >
      <head >
        <title>ExpresaTec</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>

      </head>
      <body >
        
          {children}
        

      </body>
    </html>
  )
}
