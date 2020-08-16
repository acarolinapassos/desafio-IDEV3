const students = [{

    id: "ID",
    nome: "nome",
    genero: "genero",
    dataDeNascimento: "dataDeNascimento",
    turma: "dataDeNascimento",
    curso: "dataDeNascimento"
}]

function create(nome, genero, dataDeNascimento, trume, curso) {

    const n = typeof(nome);
    const g = typeof(genero);
    const t = typeof(trume);
    const c = typeof(curso);
    const d = typeof(dataDeNascimento);

    if (nome, genero, dataDeNascimento, trume, curso != null) {

        if (n == g) {
            if (t == c) {
                if (d == Date()) {

                    var id = users.length;

                    users.push({
                        id,
                        nome: "nome",
                        genero: "genero",
                        dataDeNascimento: "dataDeNascimento",
                        turma: "turma",
                        curso: "curso"

                    })
                    return 'Usuário criado com sucesso!';
                }
            }
        }
    } else {
        return "Campo está vazio";
    }

}

function index() {
    return students;

}

function findOne(...args) {

    const [id, nome] = args;

    if (id !== " ") {
        if (id !== null) {

            for (const index in users) {
                let key = users[index];
                if (key.id == id || key.nome == nome) {
                    return users[index];
                }
            }

            return "Usuário ou nome incorreto.";
        }
    } else {
        return "O id está incorreto.";
    }

}

function update(id, ...args) {
    students[id] = args;
    return students[id];

}

function destroy(id) {
    if (!students[id]) {
        return 'Estudante não existe!!'
    } else {
        for (const index in students) {
            let key = students[index];
            if (key.id == id) {
                students.splice(index, 1)
                return students
            }
        }
    }

}