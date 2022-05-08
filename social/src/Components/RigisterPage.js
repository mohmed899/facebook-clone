
import UserApi from '../API/UserApi'
import validator from 'validator';
import { useContext, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContextProvider'
const RigsterForm = () => {

    
    const navigate = useNavigate()
    console.log("render")
    const { dispatch, user } = useContext(UserContext);
    const [inputsData, SetInputsData] = useState({ fName: "", lName: "", email: "", password: "" });
    const [inputsDataValidation, SetInputsDataValidation] = useState({ isValidfName:true, isValidlName:true,isValidEmail:true , isValidPassword:true });

    async function fun() {
       
        
       if(isValidInputs()){
           console.log("rig")
            const CurentUser =  await  UserApi.register(inputsData)
           //sent user to context 
           dispatch({user:CurentUser.data})
           navigate('/Home')
       }
       
        //validator.
    }
    function getData(e) {

        inputsData[e.target.name] = e.target.value;
      //  SetInputsData(inputsData)
       // isValidInputs()
    }

    function isValidInputs(name) {
        SetInputsDataValidation({
            isValidfName:validator.isAlpha(inputsData.fName)&&!validator.isEmpty(inputsData.fName),
            isValidlName:validator.isAlpha(inputsData.lName)&&!validator.isEmpty(inputsData.lName),
            isValidEmail:validator.isEmail(inputsData.email)&&!validator.isEmpty(inputsData.email),
            isValidPassword:!validator.isEmpty(inputsData.email)
            
        })
        
         let{isValidfName,isValidlName,isValidEmail}=inputsDataValidation;
         return isValidEmail&&isValidfName&&isValidlName;
        
    }


    
    return (
     
        <div className="col-12 maxHeight bodyBg" >
            <div className="row col-10  Contentt  ">
               
                <div className="col-6 formbg p-0">
                <div className="fs-2 HeaderForm rounded-3">Logo </div>
                    <div style={{marginTop:'7%'}} className='col-8 offset-1'>
                        <div className='mt-4'>
                            <p className="SubText "  >start for free, and end broke </p>
                            <p className="Welcometext ">Welcome back...<span className="dot">.</span> </p>
                            <p className="SubText m-0">are you new ?<span><NavLink to="/login"> loginn</NavLink></span> </p>
                        </div>
                        <form className='needs-validation mt-5' noValidate={true}   >
                        <div className='d-flex flex-wrap justify-content-between'>

                                 <div className="form-floating  d-d-inline mb-3  NameInputFildwidth " >
                                     <input name='fName' type="text" onChange={getData} className="InputFild form-control " id="floatingInput" placeholder=" " required noValidate={true} />
                                     <label htmlFor="floatingInput" className='InputLable'>First Name</label>
                                     {inputsDataValidation.isValidfName?null:<div className='InValidMessage'> invaled last name</div> }
                                 </div>
                                 <div className="form-floating  d-d-inline mb-3 NameInputFildwidth" >
                                     <input name='lName' type="text" onChange={getData} className="InputFild form-control" id="floatingInput" placeholder=" " required  />
                                     <label htmlFor="floatingInput" className='InputLable'>Last Name</label>
                                     {inputsDataValidation.isValidlName?null:<div className='InValidMessage'> invaled last Name</div> }
                                 </div>

                             </div>

                             <div className="form-floating  d-d-inline mb-3 w-100" >
                                 <input name='email' type="Email" onChange={getData} className="InputFild form-control" id="floatingInput" placeholder=" " />
                                 <label htmlFor="floatingInput" className='InputLable'>Email address</label>
                                 {inputsDataValidation.isValidEmail?null:<div className='InValidMessage'> invaled Email</div> }
                             </div>                             <div className="form-floating  d-d-inline mb-3 " >
                                 <input name='password' type="password" onChange={getData} className="InputFild form-control" id="floatingInput" placeholder=" " />
                                 <label htmlFor="floatingInput" className='InputLable'>Password</label>
                                 {inputsDataValidation.isValidPassword?null:<div className='InValidMessage'> invaled password</div> }
                                
                             </div>
                             <div className='d-flex flex-wrap justify-content-between'>                                  <button type="button" className=" rounded-pill btn btn-secondary btn-lg NameInputFildwidth">Another way </button>
                                 <button type="button" className="rounded-pill btn btn-primary btn-lg NameInputFildwidth" onClick={fun}>Rigister</button>
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
export default RigsterForm