
import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

// get Element                                
const devs_form = document.getElementById(`devs-form`);
const massage =document.querySelector(`.massage`);

// submit form and add data
devs_form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let { name, location, photo, phone, email} = data;

    if ( name =='' || location == '' || phone == '' || email == '') {
        massage.innerHTML = Alert.danger(`All feilds are requierd`);
    } else {
        massage.innerHTML = Alert.Success(`Data Submited`);
        
        Storage.set(`Devs`, data);
        devs_form.reset();
        getdata();
    }
})

// show data
getdata();
function getdata() {

    const dataget = document.querySelector(`#dataget`);
    
    let allData = Storage.get(`Devs`);
    let datalist;
    
    allData.map((data, index) =>{

        let { name, location, photo, phone, email} = data;

        datalist += `<tr>
        <td>${index+1}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${location}</td>
        <td><img style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;" src="${photo ? photo : `img/download.png`}" alt=""></td>
        <td>
            <button class="btn btn-primary btn-sm"><i class="fas fa-eye"></i></button>
            <button class="btn btn-info btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
        </td>
    </tr>`;
    })

    dataget.innerHTML= datalist;
    
}