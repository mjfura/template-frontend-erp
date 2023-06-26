import { headers } from 'next/headers'

export const getSubdominio = ():string => {
  const { get } = headers()
  const subdominio = get('host')?.split('.')[0]
  return subdominio ?? ''
}
