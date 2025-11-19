import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/app/components/Card'

export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Signup form placeholder - implement with your authentication provider
        </p>
      </CardContent>
    </Card>
  )
}
