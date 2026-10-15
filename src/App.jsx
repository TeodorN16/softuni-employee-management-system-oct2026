import { useEffect, useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'
import SaveUserModal from './components/SaveUserModal'

const baseURL = 'https://ptinhmqtsdyypgonctpt.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_C-7XR-oZXrWmvBJKnsr4oQ_6LiUIkZM'

function App() {
    const [users,setUsers] = useState([]);
    const [showSaveUserModal,setShowUserModal]=useState(false)
  
    

    useEffect(()=>{
      fetchUsers()
        .then(data=>setUsers(data))
        .catch(error=>console.error(error))
    },[])

    
    

    const addUserClickHandler=()=>{
      setShowUserModal(true)
    }

    const addUserCloseHandler=()=>{
      setShowUserModal(false)
    }

    const submitUserHandler=async (user)=>{
        
    try{
      await fetch(baseURL,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'apikey':apiKey
        },
        body:JSON.stringify(user)

        })
        const updatedUsers = await fetchUsers();
        setUsers(updatedUsers)
      }catch(error){
        alert('Error adding user: '+error)
      }finally{
        setShowUserModal(false)
      }
    
        
          
        
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
        {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler}/>}
      
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
async function fetchUsers(){
      const response = await fetch('https://ptinhmqtsdyypgonctpt.supabase.co/rest/v1/users',{
        headers:{
          'apiKey': apiKey
        }
      })
        const data = await response.json();
        return data
    }

export default App
