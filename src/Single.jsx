import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Chart from './components/chart/Chart'
import List from './components/table/Table'
import './css/single.css'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://picsum.photos/200" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Name Surname</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">example@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">678 234 542</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Lorem St. 72 Ipsum</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Dolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title='User Spending In Last 6 Months'/>
          </div>
        </div>
        <div className="bottom">
            <List/>
        </div>
      </div>
    </div>
  )
}

export default Single