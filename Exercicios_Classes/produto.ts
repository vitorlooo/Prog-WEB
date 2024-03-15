class Produtos {
    private _nome: string;
    private _preco: number;
    private _quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this._nome = nome;
        this._preco = preco;
        this._quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    get quantidadeEmEstoque(): number {
        return this._quantidadeEmEstoque;
    }

    set quantidadeEmEstoque(quantidade: number) {
        this._quantidadeEmEstoque = quantidade;
    }

    calcularValorTotalEmEstoque(): number {
        return this._preco * this._quantidadeEmEstoque;
    }

    reporEstoque(quantidade: number): void {
        this._quantidadeEmEstoque += quantidade;
    }

    vender(quantidade: number): void {
        if (quantidade > this._quantidadeEmEstoque) {
            throw new Error("Erro: não há estoque suficiente.");
        }
        this._quantidadeEmEstoque -= quantidade;
    }
}

const produtos = new Produto("Celular", 1000, 10);
console.log("Valor total em estoque:", produto.calcularValorTotalEmEstoque());

produto.reporEstoque(5);
console.log("Valor total em estoque após repor:", produto.calcularValorTotalEmEstoque());

produto.vender(3);
console.log("Valor total em estoque após venda:", produto.calcularValorTotalEmEstoque());
console.log("Quantidade em estoque após venda:", produto.quantidadeEmEstoque);

produto.vender(10);
