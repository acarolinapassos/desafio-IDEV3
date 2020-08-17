const students = []

function create(nome, genero, dataDeNascimento, turma, curso) {

    const n = typeof(nome);
    const g = typeof(genero);
    const t = typeof(turma);
    const c = typeof(curso);
    const d = typeof(dataDeNascimento);

    if (nome, genero, dataDeNascimento, turma, curso != null) {

        if (n == g) {
            if (t == c) {

                var id = students.length;

                students.push({
                    id,
                    nome: nome.toLocaleUpperCase(),
                    genero: genero.toLocaleUpperCase(),
                    dataDeNascimento: dataDeNascimento,
                    turma: turma.toLocaleUpperCase(),
                    curso: curso.toLocaleUpperCase()

                });
                return 'Usuário criado com sucesso!';
            };
        };
    } else {
        return "Campo está vazio";
    };
    return "Cadastro criado com sucesso.";

}

function index() {
    return students;

}

function findOne(id) {



    // if (id !== " ") {
    // if (id !== null) {

    for (const index in students) {
        let key = students[index];
        if (key.id == id) {
            return students[index];
        }
    }

    // return "ID ou nome incorreto.";
    // } else {
    //     return "O id está incorreto.";
    // }

}

function update(id, ...args) {

    const [nome, genero, dataDeNascimento, turma, curso] = args

    students[id] = {
        id,
        nome,
        genero,
        dataDeNascimento,
        turma,
        curso
    };
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

let data = new Date("1991/1/18")

create("vinicius", "M", data, "Programação", "JS");
create("vinicius", "M", data, "Programação", "JS");

console.table(index());

console.table(destroy(1))
console.table(index());

console.table(findOne(0))

// update(1, "ana", "f", data, "Programação", "pyton");
// console.table(index());