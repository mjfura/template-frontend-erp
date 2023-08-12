import { useBoolean } from '@/components/hooks'
import { Menu, MenuHandler, MenuItem, MenuList, Typography } from '@/components'
import React from 'react'
import { ChevronDownIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { MenuItemNav } from '../types/menu'
import Link from 'next/link'

interface Props{
    listSubMenu:MenuItemNav[],
    label:string,
    href:string
}
export function MenuNested ({ listSubMenu, label, href }:Props) {
  const { value: isMenuOpen, toggle } = useBoolean(false)

  const renderItems = listSubMenu.map(({ label, href, icon }) => (
        <Link href={href} key={label}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {label}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {'Description'}
                </Typography>
            </MenuItem>
        </Link>
  ))

  return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={toggle}>
                <MenuHandler>
                    <Typography as="a" href='#' variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {label}{' '}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem]  overflow-visible lg:grid">

                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {label}{' '}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
  )
}
