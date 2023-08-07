import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import './Register.css';

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (userName && email && phone && password) {
      // Assuming this is where you would perform API requests or database updates
      // You can customize this logic to fit your application's needs
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Please fill in all fields');
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
            <p>الرجاء ادخال المعلومات لإنشاء حساب</p>
            <MDBInput
              wrapperClass='mb-4'
              label='اسم المستخدم'
              id='form1'
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='البريد الإلكتروني'
              id='form2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='رقم الجوال'
              id='form3'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='كلمة المرور'
              id='form4'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleRegister}
              >
                تسجيل
              </MDBBtn>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">هل لديك حساب؟</p>
              <MDBBtn
                outline
                className='mx-2'
                color='green'
                onClick={() => navigate('/login')}
              >
                تسجيل الدخول
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div
            style={{ height: '100%' }}
            className="d-flex justify-content-center gradient-custom-2 h-100 mb-4"
          >
            <div className="text-white">
              <img
                src={"https://ars.gov.sa/Images/Posts/download-2_1647761677.jpg"}
                style={{ width: '100%', height: '100%' }}
                alt="image"
              />
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
