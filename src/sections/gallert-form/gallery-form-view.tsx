import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Theme,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'

import ImageDropzone from './components/image-dropzone'

// import { MdDelete } from 'react-icons/md'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export default function GalleryFormPageView() {
  const theme = useTheme()
  const [personName, setPersonName] = useState<string[]>([])
  const [importFile, setImportFile] = useState<File[]>([])

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

  const handleDelete = (tagToDelete: string) => () => {
    setPersonName((tags) => tags.filter((tag) => tag !== tagToDelete))
  }

  return (
    <Box className="pt-[20px]">
      <Container maxWidth="lg" className="mb-5 min-h-[100vh]">
        <form noValidate autoComplete="off">
          <Stack spacing={2}>
            <Card className="p-4">
              <CardHeader
                title="Details"
                subheader="Title, short description, image..."
                classes={{
                  root: 'p-[24px] pb-0 mb-[24px]',
                  content: 'flex-auto',
                  title: 'text-lg',
                  subheader: 'text-sm',
                }}
              />
              <Divider />
              <Stack spacing={2} className="p-[24px]">
                <TextField
                  id="post-title"
                  name="title"
                  label="Post title"
                  variant="outlined"
                  fullWidth
                />
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id="fanart-tag-label">Tag</InputLabel>
                  <Select
                    labelId="fanart-tag-label"
                    id="fanart-tag-multiple"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-tag" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            deleteIcon={
                              <MdCancel
                                onMouseDown={(event) => event.stopPropagation()}
                              />
                            }
                            onDelete={handleDelete(value)}
                          />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                />
                <Box className="flex flex-col items-center justify-center">
                  <ImageDropzone
                    importFile={importFile}
                    setImportFile={setImportFile}
                  />
                </Box>
              </Stack>
            </Card>
            <div className="flex items-center justify-end">
              <div>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  id="create-post-button"
                >
                  อัพผลงาน
                </Button>
              </div>
            </div>
          </Stack>
        </form>
      </Container>
    </Box>
  )
}
