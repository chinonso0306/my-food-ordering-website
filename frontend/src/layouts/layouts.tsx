

import Header from "@/components/Header";

 type props = {
     children: React.ReactNode;
 };


function Layout({ children}:props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
         <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  )
}

Layout.propTypes = {

}

export default Layout

