let user_firstname = document.getElementById('first-name');
let user_lastname = document.getElementById('last-name');
let user_email = document.getElementById('user-email');
let user_phone = document.getElementById('user-phone');
let user_address = document.getElementById('user-address');
let user_submit = document.getElementById('user-submit');
let user_information_table = document.getElementById('user_info_table');

async function adduser() {

    try {
        const { error } = await supabase
            .from('user')
            .insert({
                first_name: user_firstname.value,
                last_name: user_lastname.value,
                email_address: user_email.value,
                ph_number: user_phone.value,
                address: user_address.value,
            })
        if (error) throw error;
        user_firstname.value = "";
        user_lastname.value = "";
        user_email.value = "";
        user_phone.value = "";
        user_email.value = "";
        user_address.value = "";

        Swal.fire({
            title: "User Added",
            text: "User Sucesfully Added in the System",
            icon: "success",
        });
        user_information_table.innerHTML = "";
        getusers();

    } catch (error) {
        console.log(error);
    }
}

async function getusers(){

    try {
        const { data, error } = await supabase
  .from('user info')
  .select()

  if (error) throw error;
  if(data) {
    data.map((va,index)=>{
        return(user_information_table.innerHTML+=`
            
            <tr>
             <td>${val.first_name}</td>
             <td>${val.last_name}</td>
             <td>${val.email_address}</td>
             <td>${val.ph_number}</td>
             <td>${val.address}</td>
             </tr>
            `);
    });
  }

    } catch (error) {
        console.log(error);      
    }
}

if(user_submit){
    user_submit.addEventListener('click',adduser)

}
window.onload = getusers();