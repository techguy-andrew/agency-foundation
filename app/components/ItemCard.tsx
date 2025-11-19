'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MenuIcon } from '@/app/icons/MenuIcon'
import { LoadingIcon } from '@/app/icons/LoadingIcon'
import { SaveIcon } from '@/app/icons/SaveIcon'
import { CancelIcon } from '@/app/icons/CancelIcon'
import { GripVerticalIcon } from '@/app/icons/GripVerticalIcon'
import { FileIcon } from '@/app/icons/FileIcon'
import type { Attachment } from '@/types'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Inline utility for merging Tailwind classes - makes component portable
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ItemCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  itemId?: string
  title?: string | null
  description?: string | null
  editable?: boolean
  onSave?: (data: { title: string; description: string }) => void
  onEdit?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
  onCancel?: () => void
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>
  isDragging?: boolean
  autoFocus?: boolean
  titlePlaceholder?: string
  descriptionPlaceholder?: string
  attachments?: Attachment[]
  onFilesAdded?: (files: File[]) => void
  onFileRemove?: (attachmentId: string) => void
  isSaving?: boolean
}

export function ItemCard({
  itemId,
  title: initialTitle,
  description: initialDescription,
  className,
  children,
  editable = false,
  onSave,
  onEdit,
  onDelete,
  onDuplicate,
  onCancel,
  dragHandleProps,
  isDragging = false,
  autoFocus = false,
  titlePlaceholder = 'Item title',
  descriptionPlaceholder = 'Item description',
  attachments: initialAttachments = [],
  onFilesAdded,
  onFileRemove,
  isSaving = false,
  ...props
}: ItemCardProps) {
  // Handle null/undefined values with proper defaults
  const safeTitle = initialTitle || ''
  const safeDescription = initialDescription || ''
  const [isEditing, setIsEditing] = React.useState(autoFocus)
  const [tempTitle, setTempTitle] = React.useState(safeTitle)
  const [tempDescription, setTempDescription] = React.useState(safeDescription)
  const [originalTitle, setOriginalTitle] = React.useState(safeTitle)
  const [originalDescription, setOriginalDescription] = React.useState(safeDescription)
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [attachments, setAttachments] = React.useState<Attachment[]>(initialAttachments)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const titleRef = React.useRef<HTMLDivElement>(null)
  const descriptionRef = React.useRef<HTMLDivElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    setTempTitle(safeTitle)
    setTempDescription(safeDescription)
    setOriginalTitle(safeTitle)
    setOriginalDescription(safeDescription)
  }, [safeTitle, safeDescription])

  React.useEffect(() => {
    setAttachments(initialAttachments)
  }, [initialAttachments])

  // Auto-focus title ONLY on initial mount when autoFocus is true (for new items)
  React.useEffect(() => {
    if (autoFocus && titleRef.current) {
      setTimeout(() => {
        titleRef.current?.focus()
      }, 50)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Run only once on mount

  // Handle click outside for dropdown menu
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuTriggerRef.current &&
        !menuTriggerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuTriggerRef.current?.focus()
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const handleEdit = () => {
    setIsEditing(true)
    setOriginalTitle(titleRef.current?.textContent || safeTitle)
    setOriginalDescription(descriptionRef.current?.textContent || safeDescription)
    onEdit?.()
  }

  const handleSave = () => {
    if (titleRef.current && descriptionRef.current) {
      const newTitle = titleRef.current.textContent || ''
      const newDescription = descriptionRef.current.textContent || ''
      onSave?.({ title: newTitle, description: newDescription })
      setTempTitle(newTitle)
      setTempDescription(newDescription)
      // Clear cursor position memory
      titleRef.current.blur()
      descriptionRef.current.blur()
    }
    setIsEditing(false)
  }

  const checkForChanges = () => {
    const currentTitle = titleRef.current?.textContent || ''
    const currentDescription = descriptionRef.current?.textContent || ''
    return currentTitle !== originalTitle || currentDescription !== originalDescription
  }

  const handleCancel = () => {
    // For new empty items, remove immediately without confirmation
    if (onCancel && !safeTitle && !safeDescription) {
      onCancel()
      return
    }

    // If onCancel is provided (for items being tracked by parent)
    if (onCancel) {
      // Check if user wants to discard changes
      if (checkForChanges()) {
        if (!window.confirm('You have unsaved changes. Are you sure you want to cancel? Your changes will be lost.')) {
          return
        }
      }
      // Restore content before calling onCancel
      if (titleRef.current && descriptionRef.current) {
        titleRef.current.textContent = originalTitle
        descriptionRef.current.textContent = originalDescription
        titleRef.current.blur()
        descriptionRef.current.blur()
      }
      setIsEditing(false)
      onCancel()
      return
    }

    // For existing items without onCancel prop (standalone usage)
    if (checkForChanges()) {
      if (!window.confirm('You have unsaved changes. Are you sure you want to cancel? Your changes will be lost.')) {
        return
      }
    }

    // Restore original content
    if (titleRef.current && descriptionRef.current) {
      titleRef.current.textContent = originalTitle
      descriptionRef.current.textContent = originalDescription
      titleRef.current.blur()
      descriptionRef.current.blur()
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (isEditing) {
        handleSave()
      }
    }
    if (e.key === 'Escape' && isEditing) {
      e.preventDefault()
      handleCancel()
    }
  }

  const handleMenuItemClick = (action: () => void) => {
    setMenuOpen(false)
    action()
  }

  const isImage = (type: string) => type.startsWith('image/')

  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm w-full h-full transition-shadow',
        isDragging && 'shadow-lg',
        className
      )}
      {...props}
    >
      {/* Card Header */}
      <div className="flex flex-col gap-2 p-4 sm:p-6 relative">
        <div className={cn(
          "grid gap-4 sm:gap-6 items-start w-full",
          dragHandleProps ? "grid-cols-[auto,1fr]" : "grid-cols-[1fr]"
        )}>
          {dragHandleProps && (
            <div
              {...dragHandleProps}
              onContextMenu={(e) => e.preventDefault()}
              className={cn(
                "cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground transition-colors pt-1 select-none touch-none",
                dragHandleProps.className
              )}
            >
              <GripVerticalIcon className="h-5 w-5" />
            </div>
          )}

          <div className={cn(
            "flex flex-col gap-2 sm:gap-3 min-w-0 flex-1 select-none cursor-default"
          )}
            onDoubleClick={() => editable && !isEditing && handleEdit()}
          >
            {/* Title */}
            <div
              ref={titleRef}
              contentEditable={isEditing}
              suppressContentEditableWarning
              onKeyDown={handleKeyDown}
              data-placeholder={isEditing ? titlePlaceholder : undefined}
              className={cn(
                "text-2xl font-semibold leading-none tracking-tight outline-none",
                "min-h-[1.75rem]",
                "leading-7",
                "text-base sm:text-lg lg:text-xl",
                "break-words w-full",
                isEditing ? "cursor-text" : "select-text",
                isEditing && "empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/50",
                !safeTitle && !isEditing && "text-muted-foreground italic"
              )}
            >
              {safeTitle || (isEditing ? '' : 'N/A')}
            </div>

            {/* Description */}
            <div
              ref={descriptionRef}
              contentEditable={isEditing}
              suppressContentEditableWarning
              onKeyDown={handleKeyDown}
              data-placeholder={isEditing ? descriptionPlaceholder : undefined}
              className={cn(
                "text-sm text-muted-foreground outline-none",
                "min-h-[1.25rem]",
                "leading-5",
                "text-sm sm:text-base",
                "break-words w-full",
                isEditing ? "cursor-text" : "select-text",
                isEditing && "empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/50",
                !safeDescription && !isEditing && "text-muted-foreground italic"
              )}
            >
              {safeDescription || (isEditing ? '' : 'N/A')}
            </div>
          </div>
        </div>

        {/* Menu button - absolutely positioned in top right corner */}
        {(editable || onEdit || onDelete || onDuplicate) && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[150px] flex justify-end">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <button
                  className="p-0 m-0 border-0 bg-transparent cursor-pointer outline-none focus:outline-none text-success hover:text-success/80 hover:opacity-80 transition-opacity"
                  onClick={handleSave}
                  aria-label="Save changes"
                >
                  <SaveIcon className="h-8 w-8" />
                </button>

                <button
                  className="p-0 m-0 border-0 bg-transparent cursor-pointer outline-none focus:outline-none text-destructive hover:text-destructive/80 hover:opacity-80 transition-opacity"
                  onClick={handleCancel}
                  aria-label="Cancel changes"
                >
                  <CancelIcon className="h-8 w-8" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  ref={menuTriggerRef}
                  className="p-0 m-0 border-0 bg-transparent cursor-pointer outline-none focus:outline-none hover:opacity-80 transition-opacity"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="More options"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <LoadingIcon className="h-8 w-8" />
                    </motion.div>
                  ) : (
                    <MenuIcon className="h-8 w-8" />
                  )}
                </button>

                {/* Inline Dropdown Menu */}
                {menuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-full mt-1 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
                  >
                    {(editable || onEdit) && (
                      <button
                        className="relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleMenuItemClick(editable ? handleEdit : onEdit!)}
                      >
                        Edit
                      </button>
                    )}

                    {onDuplicate && (
                      <button
                        className="relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => handleMenuItemClick(onDuplicate)}
                      >
                        Duplicate
                      </button>
                    )}

                    {onDelete && (
                      <button
                        className="relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-destructive"
                        onClick={() => handleMenuItemClick(onDelete)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* File count badge and accordion toggle */}
      {itemId && (
        <div className="px-4 sm:px-6 pb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground"
          >
            <span className="border border-border rounded-sm px-2 py-0.5 text-sm sm:text-base flex items-center gap-1">
              <Image
                src="/icons/carrot-icon.svg"
                alt="Toggle"
                width={24}
                height={24}
                className={cn(
                  "transition-transform duration-200",
                  isExpanded ? "rotate-0" : "-rotate-90"
                )}
              />
              Files ({attachments.length})
            </span>
          </button>
        </div>
      )}

      {/* Inline File Grid (when expanded) or children */}
      {((itemId && isExpanded) || children) && (
        <div className="p-4 sm:p-6 pt-0 w-full">
          {itemId && isExpanded && attachments.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="relative group"
                >
                  <div className="aspect-square rounded-lg border bg-muted overflow-hidden">
                    {isImage(attachment.type) ? (
                      <img
                        src={attachment.url}
                        alt={attachment.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2">
                        <FileIcon className="h-8 w-8 text-muted-foreground mb-1" />
                        <p className="text-xs text-center text-muted-foreground truncate w-full">
                          {attachment.name}
                        </p>
                      </div>
                    )}
                  </div>
                  {editable && onFileRemove && (
                    <button
                      className="absolute top-1 right-1 h-5 w-5 rounded-sm bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                      onClick={() => onFileRemove(attachment.id)}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          {itemId && isExpanded && attachments.length === 0 && (
            <p className="text-sm text-muted-foreground">No files attached</p>
          )}
          {children}
        </div>
      )}
    </div>
  )
}

export function ItemCardGrid({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ItemCardStack({
  children,
  className,
  direction = 'vertical',
  spacing = 'normal',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  direction?: 'vertical' | 'horizontal'
  spacing?: 'tight' | 'normal' | 'loose'
}) {
  const spacingClasses = {
    tight: 'gap-2',
    normal: 'gap-4',
    loose: 'gap-6',
  }

  return (
    <div
      className={cn(
        'flex w-full',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
