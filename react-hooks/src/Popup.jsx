import useClickOutside from './hooks/useClickOutside'

export const Popup = ({ setShow }) => {
  const popupRef = useClickOutside(() => {
    console.log('outside!')
    setShow(false)
  })

  return (
    <div className="popup" ref={popupRef}></div>
  )
}