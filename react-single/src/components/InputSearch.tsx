import React, { Dispatch, SetStateAction } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

type Props = {
  value: String
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#213054',
    },
  },
})

const Input = (props: Props) => {
  const backgroundColor = '#0B0C22'
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="input-with-icon-textfield"
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        variant="outlined"
        fullWidth={true}
        sx={{
          '& .MuiInputBase-root': {
            border: '1px solid #213054',
            boxSizing: 'border-box',
            borderRadius: '12px',
          },
          '& input': {
            backgroundColor: `${backgroundColor}!important`,
          },
          '& .MuiInputBase-input': {
            padding: '11px 14px',
            borderRadius: '12px',
          },
          '& .Mui-focused': {
            border: 'none',
          },
          backgroundColor: `${backgroundColor}`,
          width: '100%',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              disablePointerEvents={true}
              sx={{
                backgroundColor: `${backgroundColor}!important`,
                height: '48px',
              }}
            >
              <SearchIcon
                sx={{
                  backgroundColor: `${backgroundColor}!important`,
                  color: 'white',
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  )
}

export default Input
