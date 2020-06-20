function fn2()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var message=document.getElementById("message").value;
var url=`https://us-central1-mailer-64d8d.cloudfunctions.net/sendMail3?name=?${name}&email=${email}&mess=${message}`;
fetch(url)
.then((response) => {
alert('Mail Sent');
})
.catch((error) => {
alert('Error');
});
}