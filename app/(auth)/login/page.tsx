import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/app/components/Card'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Login form placeholder - implement with your authentication provider
        </p>
      </CardContent>
    </Card>
  )
}
