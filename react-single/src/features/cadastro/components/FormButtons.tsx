// @flow
import { Box } from '@material-ui/system'
import * as React from 'react'
import { Button } from '../../../styles/global'

type Props = {
  back: Function
  onSubmit: any
  hideBack?: boolean
  labelSubmit?: string
  isSubmit?: boolean
}
export const FormButtons = ({
  back,
  labelSubmit,
  hideBack,
  isSubmit,
  onSubmit,
}: Props) => {
  return (
    <Box
      className="btn-acoes"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        pt: 2,
        position: 'relative',
      }}
    >
      <Button
        color="inherit"
        type="button"
        hidden={hideBack}
        onClick={async () => await back()}
      >
        Voltar
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button type="button" onClick={onSubmit}>
        {isSubmit ? labelSubmit : 'Avançar'}
      </Button>
    </Box>
  )
}
