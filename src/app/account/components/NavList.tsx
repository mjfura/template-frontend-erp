import { MenuNested } from './MenuNested'
import { MenuItem, Typography } from '@/components'
import React from 'react'
import { MenuItemNav } from '../types/menu'
import Link from 'next/link'

interface Props{
    menuList:MenuItemNav[]
}
export function NavList ({ menuList }:Props) {
  return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {menuList.map(({ label, icon, submenu, href }) => (
              submenu
                ? <MenuNested key={label} listSubMenu={submenu} label={label} href={href} />
                : <Link key={label} href={href}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
                        {label}
                    </MenuItem>
                </Typography>
                </Link>

            ))}
        </ul>
  )
}
