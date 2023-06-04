$(document).ready(function () {

    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a:not(".dropdown-toggle")')) {
            $(this).collapse('hide');
        }
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#btnCancelar, #btnNovo').on('click', function () {
        $("#cbproduto").selectpicker('val', '');
        $("#cbpadrinho").selectpicker('val', '');
        $("#txqtde").val(0);
    });

    var doacoesList = [
        {'produto': 'Leite Integral 1L', 'padrinho': 'Supermercado Bom e Barato', 'qtde': 60},
        {'produto': 'Leite Integral cx 12un', 'padrinho': 'Supermercado Bom e Barato', 'qtde': 5},
        {'produto': 'Arroz Tipo 1 5kg', 'padrinho': 'Supermercado Bom e Barato', 'qtde': 10},
        {'produto': 'Chinelo de dedo tamanho 42', 'padrinho': 'Atacadão Textil', 'qtde': 1},
        {'produto': 'Agasalho tamanho M', 'padrinho': 'Atacadão Textil', 'qtde': 1},
        {'produto': 'Kit 3 potes pequenos', 'padrinho': 'Auto Elétrica Faísca', 'qtde': 5},
        {'produto': 'Kit talheres', 'padrinho': 'Auto Elétrica Faísca', 'qtde': 2},
        {'produto': 'Fogão 4 bocas', 'padrinho': 'Vereador Jão Silva', 'qtde': 1},
        {'produto': 'Armário cozinha', 'padrinho': 'Vereador Jão Silva', 'qtde': 1}
    ]    

    $('#btnSalvar').on('click', function () {
        doacoesList.push(
            {
                'padrinho': $("#cbpadrinho").val(),
                'produto': $("#cbproduto").val(),
                'qtde': $("#txqtde").val()
            }
        )
        $('#grid').bootstrapTable('load', doacoesList);
    });

    $("#cbproduto, #cbpadrinho").selectpicker({
        noneResultsText: "Nenhum resultado encontrado",
        iconBase: 'fa',
        tickIcon: 'fa-check',
        style: 'btn-default',
        size: 5,
        title: 'Selecione...'
    });

    var padrinhoList = [
        {'nome': 'Supermercado Bom e Barato'},
        {'nome': 'Vereador Jão Silva'},
        {'nome': 'Auto Elétrica Faísca'},
        {'nome': 'Atacadão Textil'}
    ]    

    var fragment = document.createDocumentFragment();
    padrinhoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.nome;
        opt.value = d.nome;
        fragment.appendChild(opt);
    });
    $("#cbpadrinho").append(fragment);
    $("#cbpadrinho").selectpicker('refresh');

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

    var fragment1 = document.createDocumentFragment();
    produtoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.descricao;
        opt.value = d.descricao;
        fragment1.appendChild(opt);
    });
    $("#cbproduto").append(fragment1);
    $("#cbproduto").selectpicker('refresh');

    $('#grid').bootstrapTable({
        columns: [
            {field: 'padrinho', title: 'Padrinho', width: '50%'},
            {field: 'produto', title: 'Produto', align: 'center', halign: 'center', width: '30%'},
            {field: 'qtde', title: 'Quantidade', align: 'center', halign: 'center', width: '20%'}
        ],
        onClickRow: function (row) {
            $("#cbproduto").selectpicker('val', row.produto);
            $("#cbpadrinho").selectpicker('val', row.padrinho);
            $("#txqtde").val(row.qtde);
        }
    });

    $('#grid').bootstrapTable('load', doacoesList);

});
