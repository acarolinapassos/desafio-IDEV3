const users = [{
    id: 'ID',
    email: 'EMAIL',
    senha: 'SENHA',
    admin: 'ADMIN'
}]

// console.table(users)

function create(email, senha, admin) {

    const e = typeof(email);
    const s = typeof(senha);
    const a = typeof(admin);

    if (email, senha, admin != null) {
        if (e == s) {

            // if (a == Boolean) {

            var id = users.length

            users.push({
                id,
                email: email.toLocaleUpperCase(),
                senha: senha.toLocaleUpperCase(),
                admin: admin
            })
            return 'Usuário criado com sucesso!'
                // }
        } else {
            return 'O email ou senha está incorreto.'
        }

    } else {
        return "Campo está vazio"
    }
}

function destroy(id) {
    if (!users[id]) {
        return 'Usuário não existe!!'
    } else {
        for (const index in users) {
            let key = users[index];
            if (key.id == id) {
                users.splice(index, 1)
                return users
            }
        }
    }

}

function findByPk(...args) {

    const [id, email] = args

    // if (id !== " ") {
    if (id !== null) {

        for (const index in users) {
            let key = users[index];
            if (key.id == id || key.email == email) {
                return users[index];
            }
        }

        return "Usuário ou email incorreto.";
        //   }
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

const init = create("ana@gmail.com", "1234", false);
const init2 = create("teste@gmail.com", '4321', true)
console.table(init2)
console.table(index())

console.table(destroy(2))


// console.table(init)
// console.table(init2)

// let del = destroy(1)
// console.table(del)

// console.log(login("teste@gmail.com", "4321"));
// console.table(index());
// console.table(findByPk(1, "teste@gmail.com"))