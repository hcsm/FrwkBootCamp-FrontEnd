import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Modal from 'react-bootstrap/Modal'
import Cropper from 'react-easy-crop'
import { Area, Point } from 'react-easy-crop/types'
import { FieldValues, UseFormSetValue } from 'react-hook-form'
import styled from 'styled-components'

const ModalBody = styled(Modal.Body)`
  min-height: 400px;
`

const InputImage = styled.input`
  display: none;
`

const Button = styled.button`
  display: inline-block;
  font-weight: thin;
  text-align: center;
  border-radius: 3px;
  border: 1pt solid #24006f;
  color: #24006f;
  font-size: 1em;
  padding: 0.25em 1em;
  background: transparent;
  margin-top: 10px;
  &:hover {
    background-color: #24006f;
    color: #0af585;
  }
`

type Props = {
  show: boolean
  onHide: () => void
  setFormValue: UseFormSetValue<FieldValues>
}

const UploaderModal = (props: Props) => {
  const inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  const triggerFileSelectPopup = () => inputRef?.current?.click()

  const { setFormValue, ...modalProps } = props

  const [image, setImage] = useState<any>(undefined)

  const [croppedArea, setCroppedArea] = useState<Area>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback(
    (croppedAreaPorcentagem: Area, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels)
    },
    []
  )

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener('load', () => {
        setImage(reader.result)
      })
    }
  }

  const createImage = (url: any): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', error => reject(error))
      // image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url
    })
  }

  const getCroppedImg = async (
    imageSrc: any,
    pixelCrop: Area,
    rotation = 0
  ) => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    // set each dimensions to double largest dimension to allow for a safe area for the
    // image to rotate in without being clipped by canvas context
    canvas.width = safeArea
    canvas.height = safeArea

    if (ctx) {
      // translate canvas context to a central location on image to allow rotating around the center.
      ctx.translate(safeArea / 2, safeArea / 2)
      ctx.translate(-safeArea / 2, -safeArea / 2)

      // draw rotated image and store data.
      ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
      )

      const data = ctx.getImageData(0, 0, safeArea, safeArea)

      // set canvas width to final desired crop size - this will clear existing context
      canvas.width = pixelCrop.width!
      canvas.height = pixelCrop.height!

      // paste generated rotate image with correct offsets for x,y crop values.
      ctx.putImageData(
        data,
        0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
        0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
      )
    }

    // As Base64 string
    return canvas.toDataURL('image/jpeg')
    // return canvas;
  }

  const finishLoading = async () => {
    if (image) {
      const srcImage = await getCroppedImg(image, croppedArea)
      setFormValue('foto', srcImage)
    }
    props.onHide()
  }

  useEffect(() => {
    if (props.show) {
      setImage(undefined)
      triggerFileSelectPopup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show])

  return (
    <>
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Inserir foto
          </Modal.Title>
        </Modal.Header>
        <ModalBody className="h-50">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            minZoom={1}
            restrictPosition={true}
            zoomSpeed={0.1}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape="round"
            // cropSize={{width: 150, height: 150}}
          />
          <InputImage
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onSelectFile(e)
            }
          />
        </ModalBody>
        <Modal.Footer>
          <Button onClick={() => triggerFileSelectPopup()}>
            Escolher imagem
          </Button>
          <Button onClick={() => finishLoading()}>Pronto</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UploaderModal
