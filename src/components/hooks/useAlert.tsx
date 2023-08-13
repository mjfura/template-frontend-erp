import { SuccessAlert } from '@/app/components/SuccessAlert'
import { useState } from 'react'
import { useBoolean } from './useBoolean'
import { ErrorAlert } from '@/app/components'

export const useAlert = () => {
  const [alert, setAlert] = useState({
    title: '',
    onClose: () => {},
    description: ''
  })

  const { value: isOpenSuccess, off: offSuccess, on: onSuccess } = useBoolean(false)
  const { value: isOpenError, off: offError, on: onError } = useBoolean(false)
  const launchSuccessAlert = ({ title, description, onClose }:{title:string, description:string, onClose:()=>void}) => {
    setAlert({
      title,
      description,
      onClose: () => {
        offSuccess()
        onClose()
      }
    })
    onSuccess()
  }
  const launchErrorAlert = ({ title, description, onClose }:{title:string, description:string, onClose:()=>void}) => {
    setAlert({
      title,
      description,
      onClose: () => {
        offError()
        onClose()
      }
    })
    onError()
  }
  return {
    launchSuccessAlert,
    launchErrorAlert,
    successAlert: <SuccessAlert close={alert.onClose} isOpen={isOpenSuccess} title={alert.title} description={alert.description} />,
    errorAlert: <ErrorAlert close={alert.onClose} description={alert.description} isOpen={isOpenError} title={alert.title} />

  }
}
