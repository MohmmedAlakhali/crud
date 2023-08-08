
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from '../Employees'; // Update the path
import {
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import './Login.css'
import asier from '../iamge/asier.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find the user with matching credentials
    const user = Employees.find(
      (employee) =>
        employee.user_name === email && employee.password === password
    );

    if (user) {
      // Simulate a successful login
      navigate('/dashboard');
    } else {
      // Handle incorrect credentials
      alert('Invalid username or password');
    }
  };

  return (
    <MDBRow style={{ fontFamily: 'Tajawal, sans-serif' }}>
      <MDBCol md='8' className='my-5  mb-5 ' style={{ height: '100%',fontFamily: 'Tajawal, sans-serif' }}>
        <div className='d-flex flex-column ms-5 '>
          <div className='text-center'>
            <img
              src={'https://ars.gov.sa/assets/img/newlogo.png'}
              style={{ width: '490px', opacity: '0.2' }}
              alt='logo'
            />
            <div className='mt-5 ml-1'>
              <h4 dir='rtl' style={{ fontSize: 40, fontWeight: 'bold', marginLeft: '800px' }}>
                تسجيل الدخول
              </h4>
            </div>
          </div>

          <div  dir='rtl'>
            <input
              className='custom-input mb-4 mt-4'
              type='email'
              placeholder='اسم المستخدم'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='custom-input mb-5'
              type='password'
              placeholder='كلمه المرور'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='custom-button mb-4' onClick={handleLogin}>
            تسجيل الدخول
          </button>

          <div  style={{marginLeft:'320px'}}  className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
          <MDBBtn outline className='mx-2' color='green' onClick={() => navigate('/register')}>
              انشاء
            </MDBBtn>
            <p className='mb-0'>ما عندك حساب ؟</p>
           
          </div>
        </div>
      </MDBCol>
      <MDBCol md='4' style={{height:'100vh'}}>
          <div className="d-flex justify-content-center gradient-custom-2 h-100  mb-4 mt-0" >
            <div className="text-white position-relative">
              <img
                src={
                  "https://ars.gov.sa/Images/Posts/download-2_1647761677.jpg"
                }
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Background"
              />
              <div className="image-overlay">
              <img
              src={asier}
              style={{ width: '20vh', height: '20vh', objectFit: 'cover',top:220,left:190,position:'relative' }}
              alt="Asier"
            />
                <div className="text-center">
             
              <h4 
              style={{ width: '10vh', height: '10vh', objectFit: 'cover',top:240,left:250,position:'relative',fontSize:90 }}
              className="mt-1 mb-2 pb-1 ">مرحبا </h4>
                <h4 
              style={{ width: '10vh', height: '10vh', objectFit: 'cover',top:145,left:150,position:'relative',fontSize:90 }}
              className="mt-1 mb-2 pb-1 "> بك</h4>
            </div>
              </div>
            </div>
          </div>
        </MDBCol>
    </MDBRow>
  );
}

export default Login;
