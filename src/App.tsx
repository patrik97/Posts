import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostList from './components/postList'
import PostDetailPage from './pages/PostDetailPage'

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
        <Route path='/' element={<PostList />} />
        <Route path='/:articleId' element={<PostDetailPage />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
