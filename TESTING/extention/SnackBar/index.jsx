import "./SnackBar.css"

const messageType={
	info: 'info',
	warning: 'warning',
	success: 'success',
	error: 'error'
}

const SnackBar = ({message, variant: variant})=>{
	return(
		<div className= {`${messageType[variant]} sanckbar-container`}>
			<p>{message}</p>
		</div>
		)
}

export default SnackBar