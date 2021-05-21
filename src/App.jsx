import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './Components/NavigationBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home/Home'
import CreateForm from './Pages/Form/CreateForm'
const App = () => {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <CreateForm />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  )
}

export default App
