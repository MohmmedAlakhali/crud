import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import Employees from '../Employees'; 
// import './style.css'

import asier from '../iamge/asier.png'

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


    const handleRegister = () => {
      // Create a new user object
      const newUser = {
        id: Date.now().toString(),
        user_name: userName,
        email: email,
        phone: phone,
        password: password,
      };
  
      // Add the new user to the Employees array
      Employees.push(newUser);
  
      // Navigate to login page after registration
      navigate('/');
    };
  
  

  return (
    
  <div style={{height:'100%'}}>
    <MDBRow style={{ fontFamily: 'Tajawal, sans-serif' }}>
        <MDBCol md='8' className="my-5  mb-5 " style={{height:'100%' }}>
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src={"https://ars.gov.sa/assets/img/newlogo.png"}
                style={{ width: '490px',opacity:'0.2' }}
                alt="logo"
              />
       
            </div>
       
            <h2 dir="rtl" style={{fontSize:40,fontWeight:'bold',marginLeft:'50px'}} className=" mt-5">الرجاء ادخال المعلومات لإنشاء حساب</h2>
        
            <div className="input-container" dir='rtl'>
    <input
        className="custom-input mb-2"
        type="text"
        placeholder="اسم المستخدم"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
    />
    <input
        className="custom-input mb-2"
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
   
    <input
        className="custom-input mb-2"
        type="tel"
        placeholder="رقم الجوال "
        dir="rtl" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
    />

    <input
        className="custom-input mb-2"
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <div  className="text-center pt-1 mb-5 pb-1">
            <button
  className="custom-button mb-4"
  onClick={handleRegister}
>
  تسجيل
</button>

            </div>
    
</div>

            
<div style={{marginLeft:'320px'}} className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">هل لديك حساب؟</p>
              <MDBBtn
                outline
                className='mx-2'
                color='green'
                onClick={() => navigate('/')}
              >
                تسجيل الدخول
              </MDBBtn>
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

  </div>
  );
}

export default Register;

   
