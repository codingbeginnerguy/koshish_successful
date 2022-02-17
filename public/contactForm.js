
//Reference details collection
var detailsRef = firebase.database().ref('details');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var shopName = getInputVal('shopName');
    var mail = getInputVal('mail');
    var phone = getInputVal('phone');
    var address = getInputVal('address');

    console.log(name);

    //save details
    saveDetails(name, shopName, mail, phone, address);


    //Show alert
    document.querySelector('.alertBox').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alertBox').style.display = 'none';
    }, 3000);

    //Clear form
    document.getElementById('contactForm').reset();
}

 //function to get form values
 function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveDetails(name, shopName, mail, phone, address) {
    var newDetailsRef = detailsRef.push();
    newDetailsRef.set({
        name: name,
        shopName: shopName,
        mail: mail,
        phone: phone,
        address: address
    });
}



