import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          {/* <div className="logo">
            Lehhril
          </div> */}
          <nav>
            <ul className='nav-list'>
              <li><a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#190b2a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
                Home</a></li>
              <li><a href="#">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#190b2a" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"/></svg>
                About</a></li>
              <li><a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#190b2a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5" /></svg>Projects</a></li>
              <li><a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#190b2a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9c.053-.83.053-1.69 0-2.52c-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9a20 20 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184c.467.845.159 1.9-.328 2.823c-.35.665-.526.997-.385 1.237c.14.24.455.248 1.084.263c1.245.03 2.084-.322 2.75-.813c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34c1.425.094 2.914.094 4.342 0M11.995 12h.01m3.986 0H16m-8 0h.009" color="#190b2a" /></svg>
                Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <main>
        <Outlet />
      </main>

      <footer >
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </>
  )
}

export default Layout
