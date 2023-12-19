import { useCallback } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import { Label } from '@/components/atoms/Label/Label.styles'

import { InfoWrapper, StyledReactTags, StyledTextInfo } from './TagAutocomplete.styles'

const TagAutocomplete = ({ data, tags, setTags }) => {
  const suggestions = data
    ? data.map((tag) => ({
        id: tag.id,
        value: tag.name,
        label: tag.name,
        name: tag.name,
        type: tag.type,
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
      <InfoWrapper>
        <Label> Tagi</Label>
        <StyledTextInfo>Tagi pozwolą Ci na sprecyzowanie szczegółów spotkania</StyledTextInfo>
      </InfoWrapper>
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
