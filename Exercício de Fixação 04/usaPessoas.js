const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');
const Professor = require('./Professor');

console.log('\nTESTE 1');
const p = new Pessoa();
p.setNome('João Silva');
p.setEmail('joao@email.com');
console.log(`Nome: ${p.getNome()}`);
console.log(`Email: ${p.getEmail()}`);

console.log('\nTESTE 2 ');
const p2 = new Pessoa();
if (!p2.setNome('')) console.log('Nome inválido');
if (!p2.setEmail('')) console.log('Email inválido');

console.log('\nTESTE 3');
const a = new Aluno();
a.setNome('Maria');
a.setEmail('maria@email.com');
a.setMatricula('2025001');
console.log(`Nome: ${a.getNome()}`);
console.log(`Email: ${a.getEmail()}`);
console.log(`Matrícula: ${a.getMatricula()}`);

console.log('\nTESTE 4');
const a2 = new Aluno();
a2.setNome('Pedro');
if (!a2.setEmail('')) console.log('Email inválido ou vazio');
if (!a2.setMatricula('')) console.log('Matrícula vazia');

console.log('\nTESTE 5');
const prof = new Professor();
prof.setNome('Carlos');
prof.setEmail('carlos@email.com');
prof.setDisciplina('Programação Web');
console.log(`Nome: ${prof.getNome()}`);
console.log(`Email: ${prof.getEmail()}`);
console.log(`Disciplina: ${prof.getDisciplina()}`);

console.log('\nTESTE 6 ');
const prof2 = new Professor();
prof2.setNome('Ana');
prof2.setEmail('ana@email.com');
if (!prof2.setDisciplina('')) console.log('Disciplina não pode ser vazia');



console.log('\nDESAFIO 1');

const testeEmail = new Pessoa();

console.log('Testando aluno@email.com:', testeEmail.setEmail('aluno@email.com') ? 'Válido' : 'Inválido');
console.log('Testando professor@escola.com:', testeEmail.setEmail('professor@escola.com') ? 'Válido' : 'Inválido');

console.log('Testando alunoemail.com:', testeEmail.setEmail('alunoemail.com') ? 'Válido' : 'Inválido');
console.log('Testando professor.com:', testeEmail.setEmail('professor.com') ? 'Válido' : 'Inválido');