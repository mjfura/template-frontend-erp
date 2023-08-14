'use client'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Tooltip } from '@/components'
import { useBoolean } from '@/components/hooks'
import { useAlert } from '@/components/hooks/useAlert'
import { userUseCase } from '@/core/Users/dependencies'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useSWRConfig } from 'swr'

interface Props {
    idUser: string
}
export const ButtonModalDeleteUser = ({ idUser }: Props) => {
  const { value: isOpen, toggle } = useBoolean(false)
  const { errorAlert, launchErrorAlert, launchSuccessAlert, successAlert } = useAlert()
  const { mutate } = useSWRConfig()
  const handleDelete = async () => {
    try {
      const response = await userUseCase.deleteUser(idUser)
      if (response.status) {
        mutate('/users/getUsersByEmpresa')
        return launchSuccessAlert({
          title: response.title,
          description: response.message,
          onClose: () => {
            toggle()
          }
        })
      }
      return launchErrorAlert({
        title: response.title,
        description: response.message,
        onClose: () => {
        }
      })
    } catch (e) {
      launchErrorAlert({
        title: 'Error',
        description: 'Error al eliminar el usuario',
        onClose: () => {
        }
      })
    }
  }
  return (
        <>
        {successAlert}
        {errorAlert}
          <Tooltip content="Eliminar">
              <IconButton onClick={toggle} variant="text" color='red' >
                  <TrashIcon className="h-4 w-4" />
              </IconButton>
          </Tooltip>
            <Dialog
                size="xs"
                open={isOpen}
                handler={toggle}
                className=" "
            >
              <DialogHeader>Eliminar Usuario</DialogHeader>
              <DialogBody divider>
                  Estás seguro de eliminar este usuario?
              </DialogBody>
              <DialogFooter>
                  <Button
                      variant="text"
                      color="red"
                      onClick={toggle}
                      className="mr-1"
                  >
                      <span>Cancelar</span>
                  </Button>
                  <Button
                      variant="gradient"
                      color="green"
                      onClick={handleDelete}
                  >
                      <span>Confirmar</span>
                  </Button>
              </DialogFooter>
            </Dialog>
        </>
  )
}
