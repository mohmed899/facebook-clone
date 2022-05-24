import { Button, Dialog, DialogContent, Snackbar, DialogActions, DialogTitle } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import React, { useContext, useEffect, useState } from 'react';

import PostApi from '../../API/postApi'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function CreatePost(params) {
    const CurentUser = JSON.parse(localStorage.getItem("user"));
    let [openedDialog, setOpen] = useState(false);
    let [openedSnakbar, setOpenSnakebar] = useState(false);
    let [PostText, setPostText] = useState("");

    //ask if u need to use set state when call api for once 


    function handleCloseSanckBar(params) {
        setOpenSnakebar(false)
    }
    function handleClose(params) {
        setOpen(false)

        setOpenSnakebar(true)

    }
    function OpenCreatPostModle(params) {
        setOpen(true)
    }
    function savePost() {
        if (PostText) // if the post body was't empety 
        {

            const postData = { body: PostText, likes: 0, coments: 0, userId: CurentUser._id, postDate: new Date().toLocaleDateString() }
            const data = new FormData();
            let photo = document.getElementById('postImg').files[0];
            for (let key in postData) {
                data.append(key, postData[key]);
                //  console.log(key,postData[key]);
            }
            data.append('photo', photo)
            PostApi.AddPost(data);
            handleClose()
        }

    }
    function PostTextChangeHandler(e) {
        setPostText(e.target.value)
    }

    return (



        <div className="postWrapper w-100 mt-3 ">
            <div className='d-flex flex-wrap p-2'>
                <div style={{ width: 50, height: 50, marginLeft: 8, marginRight: 12 }}>
                    <img src={CurentUser.img} className='rounded-circle UserAvaterImg'></img>
                </div>
                <input type='text' className='PostInput' readOnly="readOnly" placeholder={`whats in your mind ${CurentUser.fName}`} onClick={OpenCreatPostModle} />
            </div>

            <div>

            </div>

            <div>
                <Dialog open={openedDialog} onClose={handleClose} style={{ height: "fit-content" , margin:"auto" }}>
                    <DialogTitle>Creat Post</DialogTitle>
                    <DialogContent>

                        <textarea id="w3review" name="w3review" rows="7" cols="50" className='w-100 ' placeholder='  Tell us what do you think about ?' onChange={PostTextChangeHandler}>
                        </textarea>

                        <hr className="solid" />

                        <input type="file" name='photo' id='postImg' />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" style={{ width: '100%' }} onClick={savePost} >
                            post
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>

            <Snackbar open={openedSnakbar} autoHideDuration={6000} onClose={handleCloseSanckBar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >
                {
                    PostText ? <Alert onClose={handleCloseSanckBar} severity="success" sx={{ width: '100%' }}>
                        Posted Successfully!
                    </Alert>:
                    <Alert onClose={handleCloseSanckBar} severity="error" sx={{ width: '100%' }}>
                       Posting Canceld...!
                </Alert>
              }

            </Snackbar>
        </div>
    )
}