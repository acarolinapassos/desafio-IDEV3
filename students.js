const students = [{

    id,
    nome,
    genero,
    dataDeNascimento,
    turma,
    curso
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

function destroy(index) {
    if (!users[index]) {
        return 'Aluno não existe!!';
    } else {
        users.splice(index, 1);
        return index();
    }

}