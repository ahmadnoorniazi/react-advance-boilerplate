import React, {lazy, Suspense} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

const LoginForm = lazy(() => import('./Login'))
const SignUp = lazy(() => import('./SignUp'))
const Chat = lazy(() => import('./Chat'))

export default function ChatContainer() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Route exac path="/login" component={LoginForm} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/chat" component={Chat} />
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}
