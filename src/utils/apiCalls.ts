import { Endpoints } from '../endpoints'
import { IComment } from '../interfaces/comment'
import { IPost } from '../interfaces/post'
import { IUser } from '../interfaces/user'

export const fetchPosts = async (): Promise<IPost[]> => {
  const response = await fetch(Endpoints.posts)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}

export const fetchUserById = async (userId: number): Promise<IUser> => {
  const response = await fetch(`${Endpoints.users}/${userId}`)

  if (!response.ok) {
    throw new Error()
  }

  return response.json()
}

export const fetchCommentsByPostId = async (postId: number): Promise<IComment[]> => {
  const response = await fetch(`${Endpoints.comments}?postId=${postId}`)
  if (!response.ok) {
    throw new Error()
  }
  return response.json()
}
