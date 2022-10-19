import {FC, ReactNode} from 'react'
interface Props {
  text: string
  className?: string
  children?: ReactNode
}
const Typography: FC<Props> = ({children, ...props}) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
export default Typography
