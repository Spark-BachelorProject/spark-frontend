import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCombobox } from 'downshift'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { useGetPostsQuery } from '@/store/api/posts'

import { SearchResults, SearchResultsItem, Wrapper } from './SearchBar.styles'

function getPostsFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function postFilter(post) {
    return !inputValue || post.description.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const { data: posts, isLoading } = useGetPostsQuery()
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) {
      setItems(posts)
    }
  }, [posts])

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(posts.filter(getPostsFilter(inputValue || '')))
    },
    items,
    itemToString: (item) => (item ? item.description : ''),
    initialHighlightedIndex: null,
    onSelectedItemChange({ selectedItem }) {
      navigate(`/posts/${selectedItem.id}`)
    },
  })

  return (
    <Wrapper>
      <SearchInput Icon={<SearchIcon />} {...getInputProps()} placeholder="Szukaj" />
      <SearchResults isVisible={isOpen} {...getMenuProps()}>
        {items.map((item, index) => (
          <SearchResultsItem
            key={item.id}
            ishighlighted={highlightedIndex === index}
            {...getItemProps({ item, index })}
          >
            {item.description}
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
