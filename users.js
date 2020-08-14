const users = [ 
    {
    id: 1,
    email: 'acarolinapassos@yahoo.com.br',
    senha: 'senha1',
    admin: false
},
{
    id: 2,
    email: 'seuemail@gmail.com',
    senha: 'senha2',
    admin: true
}
]


// console.table(users)

function create (id,email,senha,admin) {
users.push({
    id:id,
    email:email,
    senha:senha,
    admin: admin
})
}

create(3,"ana@gmail.com","1234",false)

console.table(users)