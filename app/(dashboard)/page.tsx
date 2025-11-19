import { PageHeader } from '@/app/components/PageHeader'
import { EmptyState } from '@/app/components/EmptyState'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Track your business metrics and recent activity"
      />
      <EmptyState
        title="Welcome to Your Dashboard"
        description="Your business overview will appear here once you add data"
      />
    </div>
  )
}
