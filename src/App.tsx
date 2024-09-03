import { QueryClient, QueryClientProvider } from 'react-query'
import PostList from './components/postList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  )
}

export default App
