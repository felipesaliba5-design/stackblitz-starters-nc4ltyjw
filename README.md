

# Questionário de Programação Orientada a Objetos

**1) O que é encapsulamento?**
O encapsulamento é a capacidade de ocultar detalhes internos de implementação de uma classe ou objeto, expondo apenas uma interface controlada para interação externa.

**2) Qual a vantagem de utilizar atributos privados?**
A principal vantagem é a segurança e a integridade dos dados. Ao tornar um atributo privado, você impede que partes externas do código alterem esse valor de forma acidental ou de maneiras que quebrem as regras. O controle sobre o dado passa a ser exclusivo da própria classe.

**3) Qual a diferença entre: `getNome()` e `setNome()`?**
Eles são métodos usados para acessar e modificar atributos privados:
* **`getNome()`**: É um método de leitura. Ele apenas retorna o valor atual do atributo privado que armazena o nome.
* **`setNome(novoNome)`**: É um método de escrita. Ele recebe um valor como parâmetro, frequentemente o valida, e então altera o valor do atributo privado que armazena o nome.

**4) O que faz a palavra-chave: `extends`?**
A palavra `extends` é utilizada para aplicar o conceito de herança. Ela indica que uma nova classe, chamada de classe filha ou subclasse, está sendo criada a partir de uma classe existente, classe pai ou superclasse, herdando suas características e comportamentos.

**5) Uma classe filha pode utilizar métodos da classe pai? Explique.**
Sim. Quando uma classe filha herda de uma classe pai, utilizando `extends`, ela recebe acesso automático a todos os métodos e atributos públicos (e protegidos) definidos na classe pai. Isso significa que a classe filha pode invocar os métodos da classe pai como se fossem seus, e também pode usar a palavra-chave `super` para chamar métodos da classe pai mesmo se a classe filha os tiver sobrescrito.

**6) Por que utilizar validações dentro dos métodos de uma classe?**
O uso de validações garante que o estado do objeto se mantenha sempre válido e consistente. Por exemplo, se uma classe `ContaBancaria` possui um método para saque, a validação dentro do método garante que o valor não seja negativo ou maior que o saldo antes de alterar o atributo que armazena o dinheiro.

**7) Qual a diferença entre herança e reutilização de código por cópia?**
* **Herança:** Centraliza a lógica criando um vínculo automático. Se você corrigir um erro na classe principal, todas as subclasses são atualizadas instantaneamente.
* **Cópia:** Apenas duplica o texto sem criar vínculo. Se houver um erro, você terá o trabalho de encontrar e corrigir manualmente cada cópia espalhada pelo sistema.
