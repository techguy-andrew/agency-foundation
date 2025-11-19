'use client'

import { Button } from '@/app/components/Button'
import { Input, Textarea } from '@/app/components/Input'

export function SettingsForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Display Name</label>
        <Input
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Bio</label>
        <Textarea
          placeholder="Tell us about yourself"
          rows={4}
        />
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}
