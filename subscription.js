
//Reference mails collection
var mailsRef = firebase.database().ref('mails');

//Listen for form submit
document.getElementById('subscription').addEventListener('submit', submitEmail);

//Submit Form
function submitEmail(e) {
    e.preventDefault();

    //Get values

    var email = getInputVal('email');

    //save mails
    saveMails(email);


    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    //Clear it
    document.getElementById('subscription').reset();
}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save mails to firebase
function saveMails(email) {
    var newMailsRef = mailsRef.push(email);
    newMailsRef.set({
        email: email
    });
}