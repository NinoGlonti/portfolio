import './globals.css'

export const metadata = {
  title: 'Nino Glonti',
  description: 'Nino Glonti portfolio web-site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
