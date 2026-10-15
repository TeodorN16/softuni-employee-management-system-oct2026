import { useEffect, useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'
import SaveUserModal from './components/SaveUserModal'

function App() {
    const [users,setUsers] = useState([]);
    const [showSaveUserModal,setShowUserModal]=useState(false)
  
    

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

    const addUserClickHandler=()=>{
      setShowUserModal(true)
    }

    const addUserCloseHandler=()=>{
      setShowUserModal(false)
    }
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
         <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
        {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler}/>}
      
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
