import React from "react"

function Signup (){

    const signUp = async (e) =>{
        e.preventDefault()
        console.log("We are in signup function")

        const data =  new FormData(e.target)
        let email = data.get("email")
        let password = data.get("password")
        console.log(email,password)

        let objBody ={
            "email": email,
            "password": password
        }

        let BACKEND_URL = process.env.BACKEND_URL
        console.log(BACKEND_URL)
        let response = await fetch(BACKEND_URL+"signup",{
            method: 'POST',
            body: JSON.stringify(objBody),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        
        if (response.ok){
            response = await response.json()
            alert(response)
        }else{
            alert("Error")
        }

    }



    return(

        <div className="signup-container">
            <form onSubmit={(e)=> signUp(e)} action="" method="post">
                <div className="mb-3">
                    <label  for="email" className="form-label">Email address</label>
                    <input name="email" type="email" class="form-control" id="email" placeholder="name@example.com"/>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input name="password" type="text" class="form-control" id="password"/>
                </div>

                <div className="button">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
            
        </div>

    )
}

export {Signup}