'use client'
import { useBoolean } from '@/components/hooks'
import { Button, Dialog } from '@/components'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { FormCreateUser } from './FormCreateUser'

export const ButtonModalCreateUser = () => {
  const { value: isOpen, toggle } = useBoolean(false)

  return (
        <>
          <Button onClick={toggle} className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Agregar Usuario
          </Button>
            <Dialog
                size="xs"
                open={isOpen}
                handler={toggle}
                className="bg-transparent shadow-none"
            >
                <FormCreateUser doAfter={toggle} />
            </Dialog>
        </>
  )
}
