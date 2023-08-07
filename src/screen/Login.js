// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees'; // Update the path
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find the user with matching credentials
    const user = Employees.find(
      (employee) => employee.user_name === email && employee.password === password
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
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src={"https://ars.gov.sa/assets/img/newlogo.png"}
                style={{ width: '490px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">مرحبا بك في امانه منطقه عسير</h4>
            </div>
            <p>الرجاء ادخال المعلومات لتسجيل الدخول</p>
            <MDBInput
              wrapperClass='mb-4'
              label='اسم المستخدم'
              id='form1'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='كلمه المرور'
              id='form2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleLogin}
              >
                تسجبل الدخول
              </MDBBtn>
              <a className="text-muted" href="#!">
                نسيت الباسورد؟
              </a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">ما عندك حساب ؟</p>
              <MDBBtn
                outline
                className='mx-2'
                color='green'
                onClick={() => navigate('/register')}
              >
                انشاء
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white position-relative">
              <img
                src={
                  "https://ars.gov.sa/Images/Posts/download-2_1647761677.jpg"
                }
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt="Background"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
