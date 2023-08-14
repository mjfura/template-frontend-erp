'use client'
import { Card, CardBody, CardFooter, CardHeader, Input, Spinner, Typography } from '@/components'
import { UserValue } from '@/core/Users/domain'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ButtonModalCreateUser } from './ButtonModalCreateUser'
import { TableUsers } from './TableUsers'
import useSwr from 'swr'
import { userUseCase } from '@/core/Users/dependencies'
import { useEffect, useState } from 'react'
import { Pagination } from './Pagination'
interface Props {
    idEmpresa:string
}
export function SectionTableUsers ({ idEmpresa }:Props) {
  const { data, isLoading } = useSwr('/users/getUsersByEmpresa', () => userUseCase.getUsersByEmpresa(idEmpresa), {
    revalidateOnFocus: true
  })
  const [listUsers, setListUsers] = useState<UserValue[]>([])
  const [pagination, setPagination] = useState<Array<{
    label: string
    active: boolean
  }>>([])
  useEffect(() => {
    if (data && data.status) {
      const length = Math.ceil(data.data.length / 10)
      const arrayPagination = []
      for (let i = 0; i < length; i++) {
        arrayPagination.push({
          label: `${i + 1}`,
          active: i === 0 && pagination.length === 0
        })
      }
      setPagination(arrayPagination)
      setListUsers([...data.data])
    }
  }, [data])
  const setActivePage = (index:number) => {
    const array = [...pagination]
    array.forEach(item => { item.active = false })
    array[index].active = true
    setPagination(array)
  }
  const nextPage = () => {
    const index = pagination.findIndex(item => item.active)
    if (index < pagination.length - 1) {
      const array = [...pagination]
      array[index].active = false
      array[index + 1].active = true
      setPagination(array)
    }
  }
  const prevPage = () => {
    const index = pagination.findIndex(item => item.active)
    if (index > 0) {
      const array = [...pagination]
      array[index].active = false
      array[index - 1].active = true
      setPagination(array)
    }
  }
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
                        <ButtonModalCreateUser />
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
                {isLoading
                  ? <div className='flex justify-center w-full' >
                      <Spinner className="h-16 w-16 text-gray-900/50" />
                  </div>
                  : <TableUsers listUsers={listUsers} />
                }
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                {
                    pagination.length === 0
                      ? <div className='flex justify-center w-full' >
                        <Spinner className="h-16 w-16 text-gray-900/50" />
                    </div>

                      : <Pagination nextPage={nextPage} prevPage={prevPage} setActive={setActivePage} indexActive={pagination.findIndex(item => item.active)} pages={pagination} />
                }
            </CardFooter>
        </Card>
  )
}
