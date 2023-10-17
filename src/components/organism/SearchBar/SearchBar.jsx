import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useCombobox } from 'downshift'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import Post from '@/components/organism/Post/Post'
import useModal from '@/hooks/useModal'

import { SearchResults, SearchResultsItem, Wrapper } from './SearchBar.styles'

function getPostsFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function postFilter(post) {
    return !inputValue || post.content.toLowerCase().includes(lowerCasedInputValue)
  }
}

const SearchBar = () => {
  const {
    Modal,
    isOpen: modalIsOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
    handleSimpleOpenModal,
  } = useModal()
  const posts = useSelector((state) => state.posts)
  const [items, setItems] = useState(posts)
  const [selectedItem, setSelectedItem] = useState(null)
  const positioning = 'right'

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
      setSelectedItem(selectedItem)
      handleOpenModal()
    },
  })

  const handleOpenModal = () => {
    const isSearch = true
    handleOpenAndPositionModal(modalOpenElementRef, positioning, isSearch)
  }

  return (
    <Wrapper>
      <SearchInput Icon={<SearchIcon />} {...getInputProps()} />
      <SearchResults isVisible={isOpen} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <SearchResultsItem
              key={index}
              isHighlighted={highlightedIndex === index}
              {...getItemProps({ item, index })}
              ref={modalOpenElementRef}
            >
              {item.content} - {item.author}
            </SearchResultsItem>
          ))}
        {isOpen && !items.length && (
          <SearchResultsItem hasCursor>There are nothing with this title</SearchResultsItem>
        )}
      </SearchResults>
      {modalIsOpen && selectedItem ? (
        <Modal handleClose={handleCloseModal} isModal isFixed>
          <Post
            content={selectedItem?.content}
            author={selectedItem?.author}
            date={selectedItem?.date}
            tags={selectedItem?.tags}
            time={selectedItem?.time}
            place={selectedItem?.place}
            activity={selectedItem?.activity}
          />
        </Modal>
      ) : null}
    </Wrapper>
  )
}

export default SearchBar
