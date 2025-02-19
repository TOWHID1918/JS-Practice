function validEmail(email) {
    // Check if input is a string
    if (typeof email !== 'string') {
        return "Invalid";
    }
    let character = ['.', '-', '_', '+', '@'];
     if (character.includes(email.charAt(0))) {
        return false;
    }


    const atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex >= email.length - 5) { 
        return false;
    }
   

    if (email.includes(' ')) {
        return false;
    }
   
    if ((email.slice(email.length - 4, email.length)) === '.com')
        {
            return true;
        }

    return true;
    
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

