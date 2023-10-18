import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCombobox } from 'downshift'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'

import { SearchResults, SearchResultsItem, Wrapper } from './SearchBar.styles'

function getPostsFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function postFilter(post) {
    return !inputValue || post.content.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const posts = useSelector((state) => state.posts)
  const [items, setItems] = useState(posts)
  const navigate = useNavigate()
  // const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    setItems(posts)
  }, [posts])

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(posts.filter(getPostsFilter(inputValue)))
    },
    items: posts,
    itemToString: (item) => (item ? item.content : ''),
    initialHighlightedIndex: null,
    onSelectedItemChange({ selectedItem }) {
      // setSelectedItem(selectedItem)
      navigate(`/posts/${selectedItem.id}`)
    },
  })

  return (
    <Wrapper>
      <SearchInput Icon={<SearchIcon />} {...getInputProps()} />
      <SearchResults isVisible={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <SearchResultsItem
              key={index}
              ishighlighted={highlightedIndex === index ? 1 : 0}
              {...getItemProps({ item, index })}
            >
              {item.content} - {item.author}
            </SearchResultsItem>
          ))}
        {isOpen && !items.length && (
          <SearchResultsItem hasCursor>There are nothing with this title</SearchResultsItem>
        )}
      </SearchResults>
    </Wrapper>
  )
}

export default SearchBar
