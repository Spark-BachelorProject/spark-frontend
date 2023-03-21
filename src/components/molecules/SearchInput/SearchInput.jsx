import React from 'react'
import { Input } from '@/components/atoms/Input/Input.styles'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { InputWrapper } from './SearchInput.styles'

const SearchInput = () => {
  return (
    <InputWrapper>
      <SearchIcon />
      <Input type="text" />
    </InputWrapper>
  )
}

export default SearchInput
