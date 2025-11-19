'use client'

import { Button } from '@/app/components/Button'
import { Input, Textarea } from '@/app/components/Input'

export function ItemForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Title</label>
        <Input
          type="text"
          placeholder="Enter item title"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          placeholder="Enter item description"
          rows={4}
        />
      </div>
      <Button type="submit">Save Item</Button>
    </form>
  )
}
