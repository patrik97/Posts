import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostListPage from './pages/postListPage'
import PostDetailPage from './pages/postDetailPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<PostListPage />} />
        <Route path='/:articleId' element={<PostDetailPage />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
