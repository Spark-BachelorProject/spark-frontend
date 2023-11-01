import { useCallback } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import { StyledReactTags } from './TagAutocomplete.styles'

const TagAutocomplete = ({ data, tags, setTags }) => {
  const suggestions = data
    ? data.map((activity) => ({
        id: activity.id,
        value: activity.name,
        label: activity.name,
      }))
    : []

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
