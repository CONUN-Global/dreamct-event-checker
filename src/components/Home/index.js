import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../src/store/tokenSlice'
import { useSendToken } from '../src/hooks/useSendToken'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const mutation = useSendToken()

  useEffect(() => {
    const urlToken = router.query.token
    if (urlToken) {
      dispatch(setToken(urlToken))
    }
  }, [router, dispatch])

  const handleClick = async () => {
    if (!token) return
    try {
      await mutation.mutateAsync(token)
      // Handle successful token submission, e.g., show a success message
    } catch (error) {
      // Handle token submission error, e.g., show an error message
    }
  }

  // Your component JSX here, including a button that calls handleClick when clicked
}
