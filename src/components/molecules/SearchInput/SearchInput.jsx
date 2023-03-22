import React, { useState } from 'react'
import { Input } from '@/components/atoms/Input/Input.styles'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { InputWrapper } from './SearchInput.styles'

const SearchInput = () => {
  const [iconIsVisible, setIconIsVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const inputHandle = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <InputWrapper>
      {iconIsVisible && !inputValue && <SearchIcon />}
      <Input
        type="text"
        onChange={inputHandle}
        value={inputValue}
        onFocus={() => setIconIsVisible(false)}
        onBlur={() => setIconIsVisible(true)}
      />
    </InputWrapper>
  )
}

export default SearchInput
