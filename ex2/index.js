
const produto = {
  nome: 'caneta',
  preco: 1.50,
  desconto: 0.05
}

function clone(objeto) {
  return { ...objeto }
}

function cloneExt(objeto, nome, preco, desconto) {

  let newObjeto = { ...objeto }

  if(nome) {
    newObjeto.nome = nome
  }
  if(preco) {
    newObjeto.preco = preco
  }
  if(desconto) {
    newObjeto.desconto = desconto
  }

  return newObjeto
}

const novoProduto = cloneExt(produto, 'caderno', 2, 0.6)

console.log(produto)
console.log(novoProduto)
