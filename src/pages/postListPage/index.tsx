import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useQuery } from 'react-query'

import { IPost } from '../../interfaces/post'
import { fetchPosts } from '../../utils/apiCalls'
import Post, { PostSkeleton } from './post'

import * as S from './styled'

const PostListPage = () => {
  const [showError, setShowError] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([])
  const [page, setPage] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const observerRef = useRef<HTMLDivElement | null>(null)

  const { data, isLoading, error } = useQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    onSuccess: (data) => {
      // Load the initial 24 posts
      setPosts(data.slice(0, 24))
      setPage(1) // Set page to 1 as first 24 posts are loaded
    },
  })

  const loadMorePosts = useCallback(() => {
    if (!data) return

    setIsFetching(true)
    /* For "normal" screen size there should be from 1 to 4 posts 
       in each row of the grid. 12 is divisible by 1, 2, 3 and 4,
       so there always will be whole row and not just a part of it.
       Without any complicated calculation. 
       This loading is created with help of AI. */
    const nextPage = page * 12
    const newPosts = data.slice(posts.length, nextPage + 12)

    setPosts((prevPosts) => [...prevPosts, ...newPosts])
    setPage((prevPage) => prevPage + 1)
    setIsFetching(false)
  }, [data, page, posts.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      { threshold: 1.0 }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [loadMorePosts])

  if (isLoading) {
    return (
      <S.PostList>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </S.PostList>
    )
  }

  if (error || showError) {
    return <S.ErrorBanner severity='error'>Error when loading posts</S.ErrorBanner>
  }

  return (
    <>
      <S.TitleWrapper>
        <S.Title>Posts</S.Title>
      </S.TitleWrapper>
      <S.PostList>
        {posts.map((post) => (
          <Post post={post} key={post.id} errorHandler={() => setShowError(true)} />
        ))}
      </S.PostList>
      {isFetching && <PostSkeleton />}
      <S.Observer ref={observerRef} />
    </>
  )
}

export default PostListPage
