import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCombobox } from 'downshift'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { useGetGroupsQuery } from '@/store/api/groups'
import { useGetPostsQuery } from '@/store/api/posts'

import {
  SearchResultTypeLabel,
  SearchResults,
  SearchResultsItem,
  Wrapper,
} from './SearchBar.styles'

function getPostsAndGroupsFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function postAndGroupFilter(item) {
    const itemDescription = item.description?.toLowerCase() || ''
    const itemName = item.name?.toLowerCase() || ''
    return (
      !inputValue ||
      itemDescription.includes(lowerCasedInputValue) ||
      itemName.includes(lowerCasedInputValue)
    )
  }
}
// TODO: display only 3 results per category
const SearchBar = () => {
  const { data: posts, isLoading: isLoadingPosts } = useGetPostsQuery()
  const { data: groups, isLoading: isLoadingGroups } = useGetGroupsQuery()
  const [postsAndGroups, setPostsAndGroups] = useState([])
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoadingPosts && !isLoadingGroups) {
      setItems([...posts, ...groups])
      setPostsAndGroups([...posts, ...groups])
    }
  }, [posts, groups, isLoadingPosts, isLoadingGroups])

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(postsAndGroups.filter(getPostsAndGroupsFilter(inputValue || '')))
    },
    items,
    itemToString: (item) => {
      if (item?.dateCreated) {
        return item?.description
      } else if (item?.name) {
        return item?.name
      }
      return ''
    },
    initialHighlightedIndex: null,
    onSelectedItemChange({ selectedItem }) {
      if (!selectedItem) {
        return
      }
      // check if is group or post
      if (selectedItem?.dateCreated) {
        navigate(`/posts/${selectedItem.id}`)
      }
      if (selectedItem?.name) {
        navigate(`/groups/${selectedItem.id}`)
      }
    },
  })

  return (
    <Wrapper>
      <SearchInput Icon={<SearchIcon />} {...getInputProps()} placeholder="Szukaj" />
      <SearchResults isVisible={isOpen} {...getMenuProps()}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.dateCreated && item.dateCreated === posts[0]?.dateCreated && (
              <SearchResultTypeLabel>Posty</SearchResultTypeLabel>
            )}
            {item.dateCreated && (
              <SearchResultsItem
                key={index}
                ishighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item.description}
              </SearchResultsItem>
            )}
            {item.name && item.name === groups[0].name && (
              <SearchResultTypeLabel>Grupy</SearchResultTypeLabel>
            )}
            {item.name && (
              <SearchResultsItem
                key={index}
                ishighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item.name}
              </SearchResultsItem>
            )}
          </React.Fragment>
        ))}
        {isOpen && !items.length && (
          <SearchResultsItem hasCursor>Nie ma postów ani grup o takiej nazwie</SearchResultsItem>
        )}
      </SearchResults>
    </Wrapper>
  )
}

export default SearchBar
