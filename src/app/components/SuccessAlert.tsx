import { Alert, Typography } from '@/components'
import { SuccessIcon } from './SuccessIcon'

interface Props{
    title:string,
    description:string
    isOpen:boolean,
    close:()=>void
}
export function SuccessAlert ({ close, description, isOpen, title }:Props) {
  return (
        <>
            <Alert
                open={isOpen}
                color='green'
                className="max-w-screen-md fixed top-0 right-0 z-50"
                icon={<SuccessIcon />}
                onClose={() => close()}
            >
                <Typography variant="h5" color="white">
                    {title}
                </Typography>
                <Typography color="white" className="mt-2 font-normal">
                    {description}
                </Typography>
            </Alert>
        </>
  )
}
