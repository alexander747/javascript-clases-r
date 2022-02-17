function haceAlgo(a, b, c) {
    return (a + b + c)
}

function login(user, password) {
    let bdUser = "eder";
    let bdPassword = "1234";
    if (user == bdUser && password == bdPassword) {
        return true
    } else {
        return false
    }

}


let logueado = login("eder", "1234")
console.log("esta logueado? ", logueado)

let logueado2 = login("eder", "12234334")
console.log("esta logueado2? ", logueado2)

