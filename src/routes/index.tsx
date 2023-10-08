import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom'
import Layout from '../layouts/Layout'
import CreatePost from '../views/CreatePost'
import Home from '../views/Home'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreatePost />} />
    </Route>,
  ),
)
