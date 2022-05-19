function randomizer(){
let chars = "qwertzuiopüäölkjhgfdasyxcvbnm,.-#+<>;:_'*`?=)(/&%$§!1234567890ß</>"
let passworda = " ";
let passwordb = " ";
let passwordc = " ";
let passwordd = " ";
for (let i = 0; i < 13; i++){
    let generate = chars[Math.floor(Math.random() * chars.length)];
    passworda += generate;
}
    document.getElementById("jop").textContent = passworda;
    
    for (let i = 0; i < 13; i++){
        let generate = chars[Math.floor(Math.random() * chars.length)];
        passwordb += generate;
    }
        document.getElementById("jopp").textContent = passwordb;

        for (let i = 0; i < 13; i++){
            let generate = chars[Math.floor(Math.random() * chars.length)];
            passwordc += generate;
        }
            document.getElementById("joppp").textContent = passwordc;

            for (let i = 0; i < 13; i++){
                let generate = chars[Math.floor(Math.random() * chars.length)];
                passwordd += generate;
            }
                document.getElementById("jopppp").textContent = passwordd;
} 


