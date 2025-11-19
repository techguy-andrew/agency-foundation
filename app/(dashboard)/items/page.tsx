import { PageHeader } from '@/app/components/PageHeader'
import { EmptyState } from '@/app/components/EmptyState'

export default function ItemsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Items"
        description="Manage your items and attachments"
      />
      <EmptyState
        title="No Items Yet"
        description="See /demo for a working example with full optimistic update functionality"
      />
    </div>
  )
}
