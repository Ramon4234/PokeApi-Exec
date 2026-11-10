      
      let pokemonid = 25; // Exemplo: Charmander

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
            .then(resposta => resposta.json())
            .then(dados => {
                document.getElementById ("pokemon-nome").textContent = dados.name;
                document.getElementById ("pokemon-id").textContent = dados.id;
                document.getElementById ("pokemon-altura").textContent = dados.height;
                document.getElementById ("pokemon-peso").textContent = dados.weight;
                document.getElementById ("pokemon-imagem").src = dados.sprites.front_default;

                // O ALUNO DEVERÁ IMPLEMENTAR:

                // 1. Inserir o nome do Pokémon
                // 2. Inserir o ID
                // 3. Inserir a altura
                // 4. Inserir o peso
                // 5. Inserir a imagem do Pokémon
            })
            .catch(erro => {
                console.log("Erro ao consultar Pokémon:", erro);
            });