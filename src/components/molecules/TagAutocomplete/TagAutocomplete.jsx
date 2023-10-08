import React, { useCallback, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete'

import styled from 'styled-components'

import './TagAutocomplete.styles.css'

export const Wrapper = styled.div`
  width: 100%;
  max-height: 50px;
  display: flex;
`

const countries = ['Afghanistan', 'Angola', 'Poland', 'England']

const suggestions = countries.map((name, index) => ({ value: index, label: name }))

const TagAutocomplete = () => {
  const [selected, setSelected] = useState([])

  const onAdd = useCallback(
    (newTag) => {
      setSelected([...selected, newTag])
    },
    [selected]
  )

  const onDelete = useCallback(
    (index) => {
      setSelected(selected.filter((_, i) => i !== index))
    },
    [selected]
  )

  return (
    <ReactTags
      labelText=""
      selected={selected}
      suggestions={suggestions}
      onAdd={onAdd}
      onDelete={onDelete}
    />
  )
}

export default TagAutocomplete
