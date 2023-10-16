import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useCombobox } from 'downshift'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'

function getPostsFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function postFilter(post) {
    return (
      !inputValue || post.content.toLowerCase().includes(lowerCasedInputValue)
      // ||      book.author.toLowerCase().includes(lowerCasedInputValue)
    )
  }
}

export const Wrapper = styled.div`
  position: relative;
`

export const SearchResult = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  /* overflow-y: scroll; */
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 45px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBg};
`

const SearchBar = () => {
  const posts = useSelector((state) => state.posts)
  const [items, setItems] = useState(posts)

  useEffect(() => {
    setItems(posts)
  }, [posts])

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(posts.filter(getPostsFilter(inputValue)))
    },
    items: posts,
    itemToString: (item) => (item ? item.content : ''),
  })

  console.log('items', items)
  // console.log('posts', posts)

  return (
    <Wrapper>
      <SearchInput Icon={<SearchIcon />} {...getInputProps()} />
      <SearchResult isVisible={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li key={item.id} {...getItemProps({ item, index })}>
              <span>{item.content}</span>
              {/* <span>{item.author}</span> */}
            </li>
          ))}
      </SearchResult>
    </Wrapper>
  )
}

export default SearchBar
