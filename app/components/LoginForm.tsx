'use client'

import { Button } from '@/app/components/Button'
import { Input } from '@/app/components/Input'

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
        />
      </div>
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  )
}
