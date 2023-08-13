import { Alert, Typography } from '@/components'
import { ErrorIcon } from './ErrorIcon'

interface Props {
    title: string,
    description: string
    isOpen: boolean,
    close: () => void
}
export function ErrorAlert ({ close, description, isOpen, title }: Props) {
  return (
        <>
            <Alert
                open={isOpen}
                className="max-w-screen-md"
                icon={<ErrorIcon />}
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
