import UserApi from '../API/UserApi'
import validator from 'validator';
import { useContext, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContextProvider'
const LoginForm = () => {

    
    const navigate = useNavigate()
    console.log("render")
    const { dispatch, user } = useContext(UserContext);
    const [inputsData, SetInputsData] = useState({  email: "", password: "" });
    const [inputsDataValidation, SetInputsDataValidation] = useState({ isValidEmail:true , isValidPassword:true });

    async function fun() {
        let{isValidPassword,isValidEmail}=inputsDataValidation;

        
       if(isValidInputs()){
           console.log("log iv ")
            const CurentUser =  await  UserApi.login(inputsData)
           //sent user to context 
           //dispatch({user:CurentUser.data})
           // to local storge
           localStorage.setItem("user", JSON.stringify(CurentUser.data))
           navigate('/Home')
       }
       
        //validator.
    }
    function getData(e) {

        inputsData[e.target.name] = e.target.value;
      //  SetInputsData(inputsData)
       // isValidInputs()
    }

     async function  isValidInputs(name) {
        SetInputsDataValidation({
        
            isValidEmail:validator.isEmail(inputsData.email)&&!validator.isEmpty(inputsData.email),
            isValidPassword:!validator.isEmpty(inputsData.password)
            
        });
        
         let{isValidPassword,isValidEmail}=inputsDataValidation;
         console.log(inputsData)
         console.log(inputsDataValidation)
         return isValidEmail&&isValidPassword;
        
    }


    
    return (
     
        <div className="col-12 maxHeight bodyBg" >
            <div className="row col-10  Contentt  ">
               
                <div className="col-6 formbg p-0">
                <div className="fs-2 HeaderForm rounded-3">Logo </div>
                    <div style={{marginTop:'16%'}} className='col-8 offset-1'>
                        <div className='mt-4'>
                            <p className="SubText "  >start for free, and end broke </p>
                            <p className="Welcometext ">Welcome back...<span className="dot">.</span> </p>
                            <p className="SubText m-0">are you new ?<span><NavLink to="/Register"> Register</NavLink></span> </p>
                        </div>
                        <form className='needs-validation mt-5' noValidate={true}   >
                           
                            <div className="form-floating  d-d-inline mb-3 w-100" >
                                <input name='email' type="Email" onChange={getData} className="InputFild form-control" id="floatingInput" placeholder=" " />
                                <label htmlFor="floatingInput" className='InputLable'>Email address</label>
                                {inputsDataValidation.isValidEmail?null:<div className='InValidMessage'> invaled Email</div> }
                            </div>
                            <div className="form-floating  d-d-inline mb-3 " >
                                <input name='password' type="password" onChange={getData} className="InputFild form-control" id="floatingInput" placeholder=" " />
                                <label htmlFor="floatingInput" className='InputLable'>Password</label>
                                {inputsDataValidation.isValidPassword?null:<div className='InValidMessage'> invaled password</div> }
                                
                            </div>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <button type="button" className="m-auto rounded-pill btn btn-primary btn-lg NameInputFildwidth" onClick={fun}>LogIn</button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-6  myDiv p-0" >
                    <div className='bg'></div>
                </div>

            </div>

          

        </div>


    )

   
}
export default LoginForm