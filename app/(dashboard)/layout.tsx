export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Add Header/Sidebar components here when ready */}
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  )
}
