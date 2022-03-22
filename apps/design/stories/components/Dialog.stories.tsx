import Dialog from 'ui/dialog'
import { useState } from 'react'

export default {
  title: 'Dialog',
  component: Dialog,
}

export const Basic = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Content>
          <Dialog.Header title="Create task" onClose={() => setOpen(false)} />
          <div className="flex flex-col gap-4">
            <input className="hidden" />
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-600">Title*</label>
              <input className="border border-neutral-300 rounded bg-neutral-100 p-2 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-600">Description*</label>
              <textarea className="border border-neutral-300 rounded bg-neutral-100 p-2 text-sm" />
            </div>
            <Dialog.Actions>
              <button
                onClick={() => setOpen(false)}
                className="font-medium bg-blue-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-600"
              >
                Create Task
              </button>
              <button type="submit" className="font-medium text-sm px-3 py-2 text-neutral-600 hover:text-neutral-900">
                Cancel
              </button>
            </Dialog.Actions>
          </div>
        </Dialog.Content>
      </Dialog>
    </>
  )
}
