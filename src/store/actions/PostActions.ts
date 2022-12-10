import { Dispatch } from 'redux'
import {
  getPostsService,
  deletePostService,
} from '../../services/posts.service'
import { PostSlice } from '../reducers/PostSlice'

export const getPostsActions = () => async (dispatch: Dispatch) => {
  const posts = await getPostsService()
  await dispatch(PostSlice.actions.getPosts(posts))
}

export const deletePostAction = (id: number) => async (dispatch: Dispatch) => {
  await deletePostService(id)
  dispatch(PostSlice.actions.deletePost(id))
}
