import React from 'react'
import Banner from '../components/Home/Banner'
import Blog from '../components/Home/Blog'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Projects from '../components/Home/Projects'
const Home = () => {
  useDocumentTitle("HEPİSTE - Ana Sayfa")

  return (
    <div>
        <Banner />
        <Projects title="Projeler"/>
        <Blog />
    </div>
  )
}

export default Home