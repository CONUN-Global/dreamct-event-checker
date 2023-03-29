import { useMutation } from 'react-query'
import axios from 'axios'

const sendToken = async (token) => {
  try {
    const response = await axios.post(
      'https://your-backend-server.com/api/endpoint',
      {
        token,
      }
    )

    return response.data
  } catch (error) {
    throw new Error('Failed to send token to the server')
  }
}

export const useSendToken = () => {
  return useMutation(sendToken)
}
