import './globals.css'

export const metadata = {
  title: 'Arnub Datta | Portfolio',
  description: 'Software Engineer | AI/ML Engineer | Research Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
