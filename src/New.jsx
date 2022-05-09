import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './css/new.css'

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
       <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://picsum.photos/200" alt="" />
            <div className="chooseImg"><FileUploadIcon className='icon'/><input type="file" name="" id="" style={{display: 'none'}} /></div>
          </div>
          <div className="right">
            <form action="">
              <div className="inputContainer">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='username' />
              </div>
              <div className="inputContainer">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder='name surname' />
              </div>
              <div className="inputContainer">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='example@example.com' />
              </div>
              <div className="inputContainer">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='000 000 000' />
              </div>
              <div className="inputContainer">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="inputContainer">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Address'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New