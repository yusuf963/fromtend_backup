import {FC} from 'react'

interface Props {
  localData: []
}
const AddressBook: FC<Props> = ({localData}) => {
  return (
    <div data-testid="address-book" className="drawer-container">
      <p>sw11 4yu, 1 sample street, Wandsworth, London.</p>
      <p>sw11 4yu, 2 sample street, Wandsworth, London.</p>
      {localData.map((address: any, index: number) => {
        return <p key={index}>{address}</p>
      })}
    </div>
  )
}

export default AddressBook
