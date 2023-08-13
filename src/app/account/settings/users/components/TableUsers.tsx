import { defaultValues } from '@/app/account/constants'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Input, Tooltip, Typography } from '@/components'
import { UserValue } from '@/core/Users/domain'
import { ChevronUpDownIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ButtonModalCreateUser } from './ButtonModalCreateUser'

const TABLE_HEAD = ['Nombres', 'Tipo', 'Último Inicio de Sesión', 'Creado', 'Opciones']

interface Props{
    listUsers:UserValue[]
}
export function TableUsers ({ listUsers }:Props) {
  return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Lista de Usuarios
                        </Typography>

                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <ButtonModalCreateUser/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

                    <div className="w-full md:w-72">
                        <Input
                            label="Buscar"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{' '}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.map(
                          ({ correo, creado, id, lastLogin, nombres, permiso, photo }, index) => {
                            const isLast = index === listUsers.length - 1
                            const classes = isLast
                              ? 'p-4'
                              : 'p-4 border-b border-blue-gray-50'

                            return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={photo ?? defaultValues.PHOTO} alt={nombres} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {nombres}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {correo}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={permiso === '1' ? 'Administrador' : 'Trabajador'}
                                                    color={permiso === '1' ? 'green' : 'blue-gray'}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                            {typeof lastLogin === 'string' ? lastLogin : lastLogin.toLocaleDateString('es-ES')}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                            {creado.toLocaleDateString('es-ES')}
                                            </Typography>
                                        </td>
                                        <td className={classes + ' flex justify-center'}>
                                            <Tooltip content="Editar">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip content="Eliminar">
                                                <IconButton variant="text" color='red' >
                                                    <TrashIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                            )
                          }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
  )
}
