const users = [{
    id: 'id',
    email: 'email',
    senha: 'senha',
    admin: 'admin'
}]

// console.table(users)

function create(email, senha, admin) {

    const e = typeof(email)
    const s = typeof(senha)


    if (email, senha, admin != null) {
        if (e == s) {

            var id = users.length
            users.push({
                id: id,
                email: email,
                senha: senha,
                admin: admin
            })
            return 'Usuário criado com sucesso!'
        }

    } else {
        return "Campo está vazio"
    }
}

function destroy(index) {
    if (!users[index]) {
        return 'Usuário não existe!!'
    } else {
        users.splice(index, 1)
        return index()
    }

}

function findByPk(...args) {

    const [id, email] = args

    if (id !== " ") {
        if (id !== null) {

            for (const index in users) {
                let key = users[index];
                if (key.id == id || key.email == email) {
                    return users[index];
                }
            }

            return "Usuário ou email incorreto.";
        }
    } else {
        return "O id está incorreto."
    }
}

function index() {
    return users;
}

function login(email, senha) {
    for (const index in users) {
        let key = users[index];
        if (key.email == email) {
            if (key.senha == senha) {
                return "usuario conectado";

            }

        }
    }
    return "usuário ou senha incorreto";


}

const init = create("1234", false);
const init2 = create("teste@gmail.com", "4321", true)

// console.table(init)
// console.table(init2)

// let del = delet(1)
// console.table(del)

console.log(login("teste@gmail.com", "4321"));
console.table(index());
console.table(findByPk(1, "teste@gmail.com"))

const s = typeof(" ")
console.log(s)