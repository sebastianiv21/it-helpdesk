import { useState } from 'react'

export const useForm = (initialForm = {}) => {
  const [formData, setFormData] = useState(initialForm)

  const onChange = ({ target }) => {
    const { name, value, type, checked } = target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const onReset = () => {
    setFormData(initialForm)
  }

  return {
    ...formData,
    formData,
    onChange,
    onReset,
    setFormData
  }
}
