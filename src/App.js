import logo from './logo.svg';
import './App.css';
import StudentItem from './components/StudentItem';
function App() {
  return (
    <div className="container mt-4">
      <div className='card'>
        <div className='cart-header'>
          <h1>
            Danh sách Sinh Viên
          </h1>
        </div>
        <div className='card-body'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Mã Sinh Viên</th>
                <th scope='col'>Họ </th>
                <th scope='col'>Tên</th>
              </tr>
            </thead>
            <tbody>
              <StudentItem />

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
