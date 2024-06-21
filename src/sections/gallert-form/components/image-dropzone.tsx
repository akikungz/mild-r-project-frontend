/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatBytes } from '@/utils/format-unit'
import { Box, Tooltip, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { FaFileExcel } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isFocused) {
    return '#2196f3'
  }
  return '#9ca3af'
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 0.375rem;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export interface IImageDropzone {
  importFile: File[]
  setImportFile: (files: File[]) => void
}

const ImageDropzone = ({ importFile, setImportFile }: IImageDropzone) => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>(importFile || [])
  const maxSize = 1048576

  const onDrop = (acceptedFiles: File[]) => {
    setAcceptedFiles(acceptedFiles)
    setImportFile(acceptedFiles)
  }

  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length) {
      let message = ''
      if (rejectedFiles[0].errors[0].code === 'file-invalid-type') {
        message = `ไม่รองรับสกุลไฟล์ของไฟล์ ${rejectedFiles[0].file.name}`
      } else {
        message = `ไฟล์ ${rejectedFiles[0].file.name} มีขนาดใหญ่เกินไป`
      }
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: 1,
    maxSize,
  })

  const fileItems = acceptedFiles.map((file) => (
    <StyledBox key={file.name}>
      <FaFileExcel size={64} className="mb-3" />
      <Tooltip title={file.name}>
        <Typography variant="subtitle1" sx={{ textWrap: 'noWrap' }}>
          ชื่อไฟล์: {file.name}
        </Typography>
      </Tooltip>
      <Typography variant="caption">
        ขนาดไฟล์: {formatBytes(file.size)}
      </Typography>
    </StyledBox>
  ))

  return (
    <section className="container">
      <Container {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {acceptedFiles.length === 0 ? (
          <>
            <Typography variant="subtitle1">
              ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเลือกไฟล์
            </Typography>
            <Typography variant="caption">
              (รับเฉพาะไฟล์รูปภาพ ที่มีขนาดไม่เกิน {formatBytes(maxSize)}{' '}
              เท่านั้น)
            </Typography>
          </>
        ) : (
          <div>{fileItems}</div>
        )}
      </Container>
    </section>
  )
}

export default ImageDropzone
