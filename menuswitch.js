let items = [];
let option;

while(option != 3) {
  option = Number(prompt(
    `Olá usuário! Digite um número da opção desejada:
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`));

    switch(option) {
      case 1:
        let item = prompt ('Digite o nome do item: ');
        items.push(item);
        break
      
      case 2: 
      if(items.length == 0) {
        alert('Não existem itens cadastrados');
      }
      else {
        alert(items.join(', '));
      }

      case 3:
        alert('Bye bye');
        break

      default:
        alert('Opção inválida. Tente novamente');
    }

}