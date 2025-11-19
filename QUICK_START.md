# ItemCard Demo - Quick Start Guide

## 🚀 Access the Demo

**The demo is live at:** [http://localhost:3000/demo](http://localhost:3000/demo)

The development server is currently running. Open this URL in your browser!

## ⚡ Quick Actions

### Add a Card
1. Click the **"Add Item"** button
2. Type a title and description
3. Press **Enter** or click **Save**

### Reorder Cards
1. Grab any card by the **grip handle** (≡) on the left
2. Drag it up or down
3. Release to drop in new position
4. Order updates automatically!

### Upload Files
1. Click the **file badge** at the bottom of any card to expand
2. Drag files into the **upload zone** OR click to select
3. View previews in the gallery
4. Click any file to see full-size preview
5. Hover over files and click **X** to remove

### Edit a Card
**Option 1:** Double-click the card
**Option 2:** Click the **three-dot menu** (⋮) → **Edit**

### Duplicate a Card
Click the **three-dot menu** (⋮) → **Duplicate**

### Delete a Card
Click the **three-dot menu** (⋮) → **Delete** → Confirm

## ⌨️ Keyboard Shortcuts

- **Enter** - Save changes
- **Escape** - Cancel editing

## 📱 Features

- ✅ **Instant feedback** - Changes happen immediately
- ✅ **Persistent data** - Refresh the page, data stays!
- ✅ **Smooth animations** - Powered by Framer Motion
- ✅ **Toast notifications** - See feedback for every action
- ✅ **Dark mode support** - Matches your system theme
- ✅ **Mobile friendly** - Works on phones and tablets

## 📚 Documentation

- **Full documentation:** `app/demo/README.md`
- **Summary:** `DEMO_SUMMARY.md`
- **Database sync info:** See the two paragraphs in `app/demo/README.md`

## 🎯 What You're Seeing

This demo reproduces the **exact functionality** from the original claims app:
- Adding cards (with temporary IDs)
- Inline editing with contentEditable
- Drag-and-drop reordering via Framer Motion
- File upload with react-dropzone
- All the same state management patterns
- All the same design patterns

**The only difference:** Uses localStorage instead of a database (easy to change!)

## 🔧 For Developers

### Key Files
- **Demo page:** `app/demo/page.tsx` - Main demo logic
- **ItemCard:** `app/components/ItemCard.tsx` - The card component
- **FileGallery:** `app/components/FileGallery.tsx` - File management
- **Types:** `app/types/index.ts` - TypeScript definitions

### To Connect Your Backend
Replace the localStorage logic in `app/demo/page.tsx` with API calls:
```typescript
// Instead of:
setItems([...])
localStorage.setItem('demo-items', ...)

// Do:
const response = await fetch('/api/items', {
  method: 'POST',
  body: JSON.stringify(newItem)
})
const saved = await response.json()
setItems(prev => [...prev, saved])
```

See `app/demo/README.md` for complete backend integration guide!

## ✨ Try These Scenarios

1. **Create multiple cards** - Add 5-10 items
2. **Reorder them** - Drag them into different positions
3. **Add files** - Upload some images or documents
4. **Edit content** - Change titles and descriptions
5. **Duplicate a card** - Create copies
6. **Delete some cards** - Clean up
7. **Refresh the page** - Everything persists!

## 🎉 Enjoy!

You have a fully functional card management system ready to go. Have fun exploring!

**Questions?** Check `DEMO_SUMMARY.md` or `app/demo/README.md`
