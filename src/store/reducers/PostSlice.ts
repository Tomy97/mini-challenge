import { IPosts } from './../../interfaces/IPosts'
import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPostsService } from '../../services/posts.service'
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer'

const initialState: IPosts[] = []

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state = action.payload
      return state
    },
    deletePost: (state, action) => {
      state = state.filter((post) => post.id !== action.payload)
      return state
    },
  },
})
export const { getPosts } = PostSlice.actions

export default PostSlice.reducer
