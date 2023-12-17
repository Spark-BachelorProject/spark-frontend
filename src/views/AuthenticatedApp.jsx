import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router'

import { Alert } from '@/components/atoms/Alert/Alert'
import { CitySelect } from '@/components/molecules/CitySelect/CitySelect'
import HeaderSearchBar from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import Group from '@/components/pages/Group/Group'
import Groups from '@/components/pages/Groups/Groups'
import Home from '@/components/pages/Home/Home'
import Map from '@/components/pages/Map/Map'
import Profile from '@/components/pages/Profile/Profile'
import SinglePost from '@/components/pages/SinglePost/SinglePost'
import Users from '@/components/pages/Users/Users'
import useModal from '@/hooks/useModal'
import { selectCity } from '@/store/city/citySlice'

const AuthenticatedApp = () => {
  const [showAlert, setShowAlert] = useState(false)
  const selectedCity = useSelector(selectCity)

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

  const handleCitySelected = () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  const handleOpenSelectCityModal = useCallback(() => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }, [positioning, modalOpenElementRef])

  useEffect(() => {
    if (!selectedCity) {
      handleOpenSelectCityModal()
    }
  }, [selectedCity, handleOpenSelectCityModal])

  return (
    <>
      <HeaderSearchBar ref={modalOpenElementRef} />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:id" element={<Group />} />
        <Route path="/map" element={<Map />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <NavigationBar />
      {isOpen ? (
        // handleCloseModal is null because we don't want to close modal on click on background
        <Modal
          isOpen={isOpen}
          handleClose={null}
          position={position}
          isModal
          hasBackgroundColor
          isFixed
        >
          <CitySelect
            handleClose={handleCloseModal}
            handleSubmit={handleCitySelected}
            shouldBeSelected
          />
        </Modal>
      ) : null}
      <Alert message={`Twoje miasto zostało wybrane: ${selectedCity}`} show={showAlert} />
    </>
  )
}

export default AuthenticatedApp
