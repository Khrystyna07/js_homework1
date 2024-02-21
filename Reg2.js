var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var trustedEmails = [];

var re = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(?:gmail|yahoo)\.com$/;

for (var i = 0; i < arr.length; i++) {
    var emailParts = arr[i].email.split('@');
    if (emailParts.length === 2) {
        if (re.test(arr[i].email)) {
            trustedEmails.push(arr[i].email);
        }
    }
}

console.log(trustedEmails);
