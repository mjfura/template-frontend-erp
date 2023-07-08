'use client'
import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogHeader, DialogBody } from '../../components'
import Link from 'next/link'
function PanelError ({ data }:PropTypes.InferProps<typeof PanelError.propTypes>) {
  const handler = () => {

  }
  return (
      <Dialog open={true} handler={handler} >
          <DialogHeader>{data.title}</DialogHeader>
          <DialogBody divider>
              {data.message}
          </DialogBody>
          {data.code === 400 && <Link href={'/'} rel='_blank' >Contactar</Link> }

      </Dialog>
  )
}
PanelError.propTypes = {
  data: PropTypes.shape({
    code: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export { PanelError }
