import React from 'react'
import SssHead from '../components/SSS/SssHead'
import SssBody from '../components/SSS/SssBody'
import useDocumentTitle from '../hooks/useDocumentTitle'
const Sss = () => {
  useDocumentTitle("HEPİSTE - SSS")
  return (
    <div className='container mx-auto mt-10 mb-40 h-full p-3 md:p-0'>
      <SssHead />
      <SssBody />
    </div>
  )
}

export default Sss