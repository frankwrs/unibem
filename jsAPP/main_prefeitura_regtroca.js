$(document).ready(function () {

    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a:not(".dropdown-toggle")')) {
            $(this).collapse('hide');
        }
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    var pessoaList = [
        {'pessoa': 'João Silva', 'saldo': 100},
        {'pessoa': 'Maria Santos', 'saldo': 50},
        {'pessoa': 'Pedro Costa', 'saldo': 48},
        {'pessoa': 'Ana Oliveira', 'saldo': 50},
        {'pessoa': 'Luiz Pereira', 'saldo': 70},
        {'pessoa': 'Sofia Rodrigues', 'saldo': 25},
        {'pessoa': 'Manuel Almeida', 'saldo': 45},
        {'pessoa': 'Catarina Ferreira', 'saldo': 33},
        {'pessoa': 'Inês Carvalho', 'saldo': 43}
    ]    

    $("#cbpessoa, #cbproduto").selectpicker({
        noneResultsText: "Nenhum resultado encontrado",
        iconBase: 'fa',
        tickIcon: 'fa-check',
        style: 'btn-default',
        size: 5,
        title: 'Selecione...'
    });

    var fragmentPessoa = document.createDocumentFragment();
    pessoaList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.pessoa;
        opt.value = d.saldo;
        fragmentPessoa.appendChild(opt);
    });
    $("#cbpessoa").append(fragmentPessoa);
    $("#cbpessoa").selectpicker('refresh');

    var saldo;

    $('#cbpessoa').on('hidden.bs.select', function() {
        saldo = $(this).val();
        updadeCredito();
    });

    var produtoList = [
        {'descricao': 'Leite Integral 1L', 'secao': 'Alimentício', 'valor': 2, 'qtde': 60},
        {'descricao': 'Leite Integral cx 12un', 'secao': 'Alimentício', 'valor': 24, 'qtde': 5},
        {'descricao': 'Arroz Tipo 1 5kg', 'secao': 'Alimentício', 'valor': 5, 'qtde': 10},
        {'descricao': 'Chinelo de dedo tamanho 42', 'secao': 'Vestuário', 'valor': 4, 'qtde': 1},
        {'descricao': 'Agasalho tamanho M', 'secao': 'Vestuário', 'valor': 4, 'qtde': 1},
        {'descricao': 'Kit 3 potes pequenos', 'secao': 'Utensílios Domésticos', 'valor': 1, 'qtde': 5},
        {'descricao': 'Kit talheres', 'secao': 'Utensílios Domésticos', 'valor': 3, 'qtde': 2},
        {'descricao': 'Fogão 4 bocas', 'secao': 'Mobiliário', 'valor': 40, 'qtde': 1},
        {'descricao': 'Armário cozinha', 'secao': 'Mobiliário', 'valor': 50, 'qtde': 1}
    ]    

    var fragmentProduto = document.createDocumentFragment();
    produtoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.descricao;
        opt.value = d.descricao;
        fragmentProduto.appendChild(opt);
    });
    $("#cbproduto").append(fragmentProduto);
    $("#cbproduto").selectpicker('refresh');

    var trocaList = [
    ]    

    $('#gridProdutos').bootstrapTable({
        columns: [
            {field: 'descricao', title: 'Descrição', width: '70%'},
            {field: 'qtde', title: 'Quantidade', align: 'center', halign: 'center', width: '30%'}
        ]
    });

    $('#gridProdutos').bootstrapTable('load', trocaList);

    function updadeCredito(){
        document.getElementById('txCredito').innerHTML = '<h3>Saldo Crédito do Bem: '+saldo+'</h3>';
    }

    $('#btnAddProduto').on('click', function () {
        trocaList.push(
            {
                'descricao': $("#cbproduto").val(),
                'qtde': $("#txqtde").val()
            }
        )
        let valor;
        produtoList.forEach(function(d, index) {
            if (d.descricao === $("#cbproduto").val()){
                valor = d.valor;
            }
        });
        saldo = saldo - (valor * parseInt($("#txqtde").val()));
        updadeCredito();
        $('#gridProdutos').bootstrapTable('load', trocaList);
    });

});
