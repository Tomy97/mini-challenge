import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom'
import Layout from '../layouts/Layout'
import CreatePost from '../views/createPost'
import Home from '../views/home'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreatePost />} />
    </Route>,
  ),
)
