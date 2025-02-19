function validEmail(email) {

    for (let i = 0; i < email.length; i++) {
        if (email[0] === '.' || email[0] === '-' || email[0] === '_' || email[0] === '+' || email[0] === '@' || email[0] === ' ') {
            return false;
        }

       else if (email.includes(' ')||email.includes('-')) {
            return false;
        }
       else if (typeof email !== "string" ) {
            return "Invalid";
        }
      else if ((email.slice(email.length - 4, email.length)) === '.com')
        {
            return true;
        }
       else if(email.indexOf('@')){
            return false;
        }

    } 

}
console.log(validEmail("ferdous@gmail.com"));
console.log(validEmail("1zihad@gmail.com"));
console.log(validEmail("-king@yahoo.com"));
console.log(validEmail(["jhankar@hero.com"]));
console.log(validEmail("Mewo@cat.com"));
console.log(validEmail("programming-hero.com"));
console.log(validEmail("chat420@gpt.net"));
console.log(validEmail("true"));
console.log(validEmail("he ro@alom.com"));
