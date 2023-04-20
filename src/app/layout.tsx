import './globals.css'

export const metadata = {
  title: 'Diponegoro Chemistry Fair 2023',
  description: 'Diponegoro Chemistry Fair 2023 Landing Page',
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
