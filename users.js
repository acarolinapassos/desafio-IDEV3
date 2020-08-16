const users = [{
    id: 'id',
    email: 'email',
    senha: 'senha',
    admin: 'admin'
}]

// console.table(users)

function create(email, senha, admin) {
    if (email, senha, admin != null) {

        var id = users.length
        users.push({
            id: id,
            email: email,
            senha: senha,
            admin: admin
        })
        return 'Usuário criado com sucesso!'
    } else {
        return "Campo está vazio"
    }



}

function delet(index) {
    if (!users[index]) {
        return 'Usuário não existe!!'
    } else {
        users.splice(index, 1)
        return users
    }


}

function list() {
    return users;
}

function login(email, senha) {
    for (const index in users) {
        let x = users[index];
        if (x.email == email) {
            if (x.senha == senha) {
                return "usuario conectado"
                break;
            }

        }
    }
    return "usuário ou senha incorreto";


}

const init = create("1234", false)
const init2 = create("teste@gmail.com", "4321", true)

// console.table(init)
// console.table(init2)

// let del = delet(1)
// console.table(del)

console.log(login("teste@gmail.co", "4321"))
console.table(list())