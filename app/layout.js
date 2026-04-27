import './globals.css'

export const metadata = {
  title: 'Royal Track Building & Contracting L.L.C',
  description: 'Premium construction and contracting services across the United Arab Emirates. Where vision meets precision.',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
