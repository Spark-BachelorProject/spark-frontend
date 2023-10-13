import { useCallback } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import { StyledReactTags } from './TagAutocomplete.styles'

const defaultTags = ['Darmowe', 'Luźne granie', 'Tylko dorośli']

const TagAutocomplete = ({ tags, setTags }) => {
  const suggestions = defaultTags.map((name) => ({ value: name, label: name }))

  const onAdd = useCallback(
    (newTag) => {
      setTags([...tags, newTag])
    },
    [tags, setTags]
  )

  const onDelete = useCallback(
    (index) => {
      setTags(tags.filter((_, i) => i !== index))
    },
    [tags, setTags]
  )

  return (
    <StyledReactTags>
      <ReactTags
        labelText=""
        selected={tags}
        suggestions={suggestions}
        onAdd={onAdd}
        onDelete={onDelete}
        placeholderText="Dodaj tagi"
      />
    </StyledReactTags>
  )
}

export default TagAutocomplete
