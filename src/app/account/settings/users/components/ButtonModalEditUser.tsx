'use client'
import { useBoolean } from '@/components/hooks'
import { Dialog, IconButton, Spinner, Tooltip, Typography } from '@/components'
import { PencilIcon } from '@heroicons/react/24/outline'
import { FormEditUser } from './FormEditUser'
import useSWR from 'swr'
import { userUseCase } from '@/core/Users/dependencies'
interface Props{
    idUser:string
}
export const ButtonModalEditUser = ({ idUser }:Props) => {
  const { value: isOpen, toggle } = useBoolean(false)
  const { data } = useSWR('/users/getUserById/' + idUser, () => userUseCase.getUserById(idUser))

  return (
        <>
          <Tooltip content="Editar">
              <IconButton onClick={toggle} variant="text">
                  <PencilIcon className="h-4 w-4" />
              </IconButton>
          </Tooltip>
            <Dialog
                size="xs"
                open={isOpen}
                handler={toggle}
                className="bg-transparent shadow-none"
            >
                {
                    !data
                      ? <Spinner />
                      : !data.status
                          ? <div>
                        <Typography color='red' variant="h6" className="text-center">
                          {data.title}
                        </Typography>
                        <Typography color='red' variant="small" className="text-center">
                          {data.message}
                        </Typography>
                      </div>
                          : <FormEditUser formValues={
                    {
                      apellidos: data.data.apellido,
                      idUser,
                      correo: data.data.correo,
                      nombres: data.data.nombre,
                      permiso: data.data.permiso
                    }
                } doAfter={toggle} />
                }
            </Dialog>
        </>
  )
}
