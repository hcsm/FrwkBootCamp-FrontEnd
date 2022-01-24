// @flow
import * as React from 'react'
import { useDropzone } from 'react-dropzone'
import { FileCard } from '../../../../components/FileCard'
import { Zone } from './styles'
import Loader from '../../../Admin/components/Loader'
type Props = {}
export const DropZone = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitedFile, setSubmitedFile] = React.useState<
    { name: string; type: string; data: string } | undefined
  >(undefined)

  const onDrop = React.useCallback(acceptedFiles => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()
      const thisSetFile = setSubmitedFile
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onloadstart = () => setIsLoading(true)
      reader.onloadend = () => {
        const base64Str = reader.result
        const obj = {
          type: base64Str!.toString().split(';')[0].split(':')[1],
          name: file.name,
          data: base64Str!.toString()
        }
        thisSetFile(obj)
        setIsLoading(false)
      }
      reader.readAsDataURL(file)
    })
  }, [])
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
    accept: '.doc, .docx, .pdf',
    maxFiles: 1
  })
  return (
    <>
      {submitedFile ? (
        <FileCard
          id={submitedFile.name}
          name={submitedFile.name}
          type={submitedFile.type}
          data={submitedFile.data}
          isEdit={true}
        />
      ) : (
        <Zone {...getRootProps()}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <input {...getInputProps()} />
              <div className="col-12 text-center m-0">
                Arraste ou clique para enviar seu curriculo
                {isDragAccept && 'Solte para enviar'}
              </div>
              <div className="col-12 text-center mt-1">
                ( .doc, .docx, .pdf )
              </div>
            </>
          )}
        </Zone>
      )}
    </>
  )
}
