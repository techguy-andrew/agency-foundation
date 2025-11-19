import Link from "next/link"
import { PageHeader } from "@/app/components/PageHeader"
import { PageSection } from "@/app/components/PageSection"
import { Button } from "@/app/components/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/Card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <PageHeader
          title="Agency Foundation"
          description="A production-ready Next.js template built on a flat, portable component architecture."
        />

        <PageSection title="Quick Links">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Demo</CardTitle>
                <CardDescription>
                  See optimistic updates in action with drag-and-drop, inline editing, and file uploads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/demo">View Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>
                  Access the main dashboard with items, properties, and settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/items">Go to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection
          title="Core Philosophy"
          description="Build once, reuse everywhere. Own your foundation."
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Complete Ownership</CardTitle>
                <CardDescription>
                  No dependency on third-party UI libraries. We own every component.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Instant Theming</CardTitle>
                <CardDescription>
                  Rebrand for any client by swapping a single CSS file.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Optimistic Updates</CardTitle>
                <CardDescription>
                  Every interaction feels instant. Professional software standard.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </PageSection>

        <div className="text-xs text-muted-foreground border-t pt-4">
          <p>
            <strong>Tech Stack:</strong> Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, React Query
          </p>
        </div>
      </div>
    </div>
  )
}
