import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Fragment>
      <Header />
      { children }
    </Fragment>
  )
}

const Approute: React.FC<any> = ({element: Component, ...rest}) => {
  return (
    <Route {...rest} element={(matchProps: any) =>   (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )} />
  )
}

export default Approute