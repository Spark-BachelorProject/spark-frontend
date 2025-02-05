import React, { forwardRef, useState } from 'react'

import { Input } from '@/components/atoms/Input/Input.styles'

import { InputWrapper } from './SearchInput.styles'

const SearchInput = forwardRef(({ placeholder, Icon, isAlwaysVisibleIcon, ...props }, ref) => {
  const [iconIsVisible, setIconIsVisible] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const inputHandle = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <InputWrapper>
      {!isAlwaysVisibleIcon && iconIsVisible && !inputValue && Icon}
      {isAlwaysVisibleIcon && Icon}
      <Input
        ref={ref}
        type="text"
        onChange={inputHandle}
        value={inputValue || ''}
        placeholder={placeholder}
        onFocus={() => setIconIsVisible(false)}
        onBlur={() => setIconIsVisible(true)}
        {...props}
      />
    </InputWrapper>
  )
})

export default SearchInput
