import { useMutation } from 'react-query'

const sendToken = async (token) => {
  const response = await fetch('https://your-backend-server.com/api/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })

  if (!response.ok) {
    throw new Error('Failed to send token to the server')
  }

  return response.json()
}

export const useSendToken = () => {
  return useMutation(sendToken)
}
