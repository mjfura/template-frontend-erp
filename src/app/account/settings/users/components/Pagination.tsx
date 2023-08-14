import { Button, IconButton } from '@/components'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
interface Props{
    pages:Array<{
        label:string,
        active:boolean
    }>,
    indexActive:number,
    nextPage:()=>void,
    prevPage:()=>void,
    setActive:(index:number)=>void
}
export function Pagination ({ pages, indexActive, nextPage, prevPage, setActive }:Props) {
  return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={prevPage}
                disabled={indexActive === 0}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                {
                    pages.map((page, index) => (
                        <IconButton
                            key={index}
                            onClick={() => setActive(index)}
                            variant={page.active ? 'filled' : 'text'}
                            color='gray'
                            className='rounded-full'
                        >
                            {page.label}
                        </IconButton>
                    ))
                }
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={nextPage}
                disabled={indexActive === pages.length - 1}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
  )
}
