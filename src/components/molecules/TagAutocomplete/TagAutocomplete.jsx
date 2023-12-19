import { useCallback } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import { ReactComponent as AlertCircle } from '@/assets/icons/alert-circle.svg'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Label } from '@/components/atoms/Label/Label.styles'

import {
  InfoWrapper,
  StyledReactTags,
  StyledTextInfo,
  InputWrapper,
} from './TagAutocomplete.styles'

const TagAutocomplete = ({ data, tags, setTags, id, error = null }) => {
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
    <StyledReactTags error={!!error}>
      <InfoWrapper>
        <Label htmlFor={id}>Tagi</Label>
        <StyledTextInfo>Tagi pozwolą Ci na sprecyzowanie szczegółów spotkania</StyledTextInfo>
      </InfoWrapper>
      <InputWrapper>
        <ReactTags
          id={id}
          selected={tags}
          suggestions={suggestions}
          onAdd={onAdd}
          onDelete={onDelete}
          placeholderText="Dodaj tagi"
        />
        {!!error && <AlertCircle />}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </StyledReactTags>
  )
}

export default TagAutocomplete
