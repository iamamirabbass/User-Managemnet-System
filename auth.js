let signup_email=document.getElementById('signup-email');
let signup_pass=document.getElementById('signup-password');
let signup_button=document.getElementById('signup-btn');
let signup_name=document.getElementById('signup-name');
let login_email= document.getElementById('login-email');
let login_pass= document.getElementById('login-pass');
let login_btn= document.getElementById('loginbtn');
let signup_with_google= document.getElementById('google-signup-btn');
let current_session= document.getElementById('current-session');
let logout= document.getElementById('logout-btn');
let signupBtnLoader = document.getElementById('loading_btn_spinner')

// Signup Function
async function signup (){
    try {
           signupBtnLoader.style.display = 'block'
        const { data, error } = await supabase.auth.signUp({
            email: signup_email.value,
            password: signup_pass.value,

          })
          
          if (error) throw error;
          if(data){
            Swal.fire({
                title: "Signup Sucessfully! Please Check Your Email ",
                icon: "success",
                draggable: true
              });
          } 
          return data;

    } 
    catch (error) {
        console.log(error)    
    }
    // finally{
    //     signupBtnLoader.style.display = 'none'
    // }
}

// Signup with Google 
async function signupwithgoogle() {
    try {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
          
        if (error) throw error;
        if(user){
            alert("Signup Sucessfully With Google!")
            console.log(user);
        }
        if(session){
            console.log(session);
        }
    }
        
    
    catch (error) {
        alert('Error During Signup',error.message);
    }
    finally {
        signupBtnLoader.style.display = 'none'
      }
    
}


// Login Function
async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: login_email.value,
            password: login_pass.value,
          })
        if(error) throw error;
        if (data){
            // alert('Sign In Sucessfully');
            Swal.fire({
                title: "Signin Sucessfully!",
                icon: "success",
                draggable: true
              });
            window.location.href='/dashboard.html'
        }  
        return(data);

    } catch (error) {
        console.log(error);
        alert(error.message)
    }    
}


async function checksession() {
    try {
        const { data, error } = await supabase.auth.getSession()
        if (data){
            console.log(data)
        }
        if (error) throw error;
        
    } catch (error) {
        console.log(error)
    }    
}


async function signout() {
    try {
        const { error } = await supabase.auth.signOut()

        if (error) throw error;
        window.location.href='/login.html';
    } catch (error) {
        console.log(error)
    }
    
}
// Signup Call
if(signup_button){
    signup_button.addEventListener('click',signup)
}
// Login Call
if(login_btn){
    login_btn.addEventListener('click',login)
}

// Signup with Google Call
if(signup_with_google){
    signup_with_google.addEventListener('click',signupwithgoogle);
}  


// session call
if(current_session){
    current_session.addEventListener('click',checksession)
}
 if(logout){
    logout.addEventListener('click',signout)
 }