 fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resposta => resposta.json())
        .then(dados =>{
            console.log(dados)
        })