import { HomeIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { MenuItemNav } from '../types/menu'

export const menu:MenuItemNav[] = [
  {
    label: 'Inicio',
    icon: HomeIcon,
    href: '/account'
  },
  {
    label: 'Inventario',
    icon: BuildingStorefrontIcon,
    href: '/account/inventario',
    submenu: [
      {
        label: 'Productos',
        href: '/account/inventario/productos',
        icon: BuildingStorefrontIcon
      },
      {
        label: 'Categorías',
        href: '/account/inventario/categories',
        icon: BuildingStorefrontIcon
      }
    ]
  },
  {
    label: 'Ventas',
    href: '/account/ventas',
    icon: BuildingStorefrontIcon
  },
  {
    label: 'Configuración',
    href: '/account/settings',
    icon: BuildingStorefrontIcon,
    submenu: [
      {
        label: 'Usuarios',
        href: '/account/settings/users',
        icon: BuildingStorefrontIcon
      }
    ]

  }
]
