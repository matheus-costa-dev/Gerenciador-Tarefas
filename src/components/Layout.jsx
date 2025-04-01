import React from 'react'

function Layout({children}) {
  return (
    <div className="relative h-screen overflow-x-hidden">
  {/* <!-- Background Pattern --> */}
  <div className="absolute inset-0">
  <div className="relative min-h-screen w-full [&>div]:fixed [&>div]:top-0 [&>div]:left-0 [&>div]:z-[-2] [&>div]:h-screen [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-red-200 [&>div]:to-yellow-200">
  <div></div>
    
  </div>
  </div>
  
  {/* <!-- Hero Content --> */}
  <div className="container relative z-10 flex h-full flex-col p-4 lg:p-10 mx-auto">
    { children }
  </div>
</div>
  )
}

export default Layout
