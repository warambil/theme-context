import React, {useContext} from 'react'
import Header from './Header'
import {Helmet} from 'react-helmet'
import ThemeContext from '../contexts/ThemeContext'

const Layout = ({children}) => {
  const { theme } = useContext(ThemeContext)
  const bg = (theme == "dark") ? 'body {background-color: #404042; color: gray;}' : 'body {background-color: #fff; color: #000;}'
  return (
    <>
      <Helmet>
        <style>{bg}</style>
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
