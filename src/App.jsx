import { useEffect, useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'

function App() {
    const [users,setUsers] = useState([]);
  
    

    useEffect(()=>{
      fetch('https://ptinhmqtsdyypgonctpt.supabase.co/rest/v1/users',{
        headers:{
          apiKey: 'sb_publishable_C-7XR-oZXrWmvBJKnsr4oQ_6LiUIkZM'
        }
      })
        .then(res => res.json())
        .then(data=>setUsers(data))
        .catch(error=>console.error(error))
    },[])
  return (
    <>

    {/* <!-- Header component --> */}
      <Header/>

    {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          <UserSearch/>

        {/* <!-- Table component --> */}
          <UserList users={users}/>

          {/* <!-- New user button  --> */}      
         <button className="btn-add btn">Add new user</button>
   
      
          <Pagination/>
        </section>

    {/* <!-- User details component  --> */}
     


    {/* <!-- Create/Edit htmlForm component  --> */}
     


    {/* <!-- Delete user component  --> */}
     
    

    </main>
    {/* <!-- Footer component  --> */}
    <Footer/>

  </>
  )
}

export default App
