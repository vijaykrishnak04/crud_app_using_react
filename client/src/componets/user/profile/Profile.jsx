import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from '../../../axios/axios'
import './profile.css'

function Profile() {
  const [image,setImage]=useState('')
  function handleImage(e){
    setImage(e.target.files[0])
  }
  function handleApi(){
    const formData = new FormData()
    formData.append('image',image)
    axios.post('/addProfile',formData).then((res)=>{
      console.log(res);
    }) 
  }



  return (
    
       <section className="vh-100">

  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">profile</h3>

            <div className="form-outline mb-4">
            <img src='' alt="net work error" />
                
            </div>

            <div className="form-outline mb-4">
           <input type="file" name='file' onChange={handleImage}/>
         
            </div>

            <button className="btn btn-primary btn-lg btn-block mb-3" type="submit" onClick={handleApi}>upload</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}

export default Profile