import {FC} from 'react'

interface Props {
  url: string
  alt: string
  className?: string
}
const Image: FC<Props> = ({...props}) => {
  return <img className={props.className} src={props.url} alt={props.alt} />
}

export default Image
