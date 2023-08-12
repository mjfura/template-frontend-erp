import { BASE_PATH, DOMINIO } from '@/config'

export const generateBasepath = (subdominio:string):string => {
  let basepath = `http://${subdominio}.${DOMINIO}/`
  if (BASE_PATH.includes('https')) {
    basepath = `https://${subdominio}.${DOMINIO}/`
  }
  return basepath
}
