// get Element

import Alert from "./src/Alert.js";

                                
const devs_form = document.getElementById(`devs-form`);
const massage =document.querySelector(`.massage`);

devs_form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let { name, location, photo, phone, email} = data;

    if ( name =='' || location == '' || phone == '' || email == '') {
        massage.innerHTML = Alert.danger(`All feilds are requierd`);
    } else {
        massage.innerHTML = Alert.Success(`Data Submited`);
    }

    console.log(data);
})