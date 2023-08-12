'use client'
import React, { useEffect } from 'react'
import { IconButton, MobileNav, Navbar, Typography } from '@/components'
import { useBoolean } from '@/components/hooks'
import {
  Bars2Icon
} from '@heroicons/react/24/outline'
import { ProfileMenu } from './ProfileMenu'
import { NavList } from './NavList'
import { menu } from '../constants'
interface Props{
    nombre:string
    basepath:string
}
export const NavLayout = ({ nombre, basepath }:Props) => {
  const { value: isOpen, off: close, toggle } = useBoolean(false)
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && close()
    )
  }, [])

  return (
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
          <div className="relative mx-auto flex items-center text-blue-gray-900">
              <Typography
                  as="a"
                  href="#"
                  className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
              >
                  {nombre}
              </Typography>
              <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
                  <NavList menuList={menu} />
              </div>
              <IconButton
                  size="sm"
                  color="blue-gray"
                  variant="text"
                  onClick={toggle}
                  className="ml-auto mr-2 lg:hidden"
              >
                  <Bars2Icon className="h-6 w-6" />
              </IconButton>
              <ProfileMenu basepath={basepath} />
          </div>
          <MobileNav open={isOpen} className="overflow-scroll">
              <NavList menuList={menu} />
          </MobileNav>
      </Navbar>
  )
}
