import { Spinner } from 'reactstrap'

export const CustomSpinner = ({ className }) => {
  return (
    <div className={`d-flex justify-content-center gap-2 ${className}`}>
      <Spinner type='grow' color='primary' size='sm' />
      <Spinner type='grow' color='primary' size='sm' />
      <Spinner type='grow' color='primary' size='sm' />
    </div>
  )
}
