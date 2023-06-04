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
        $("#txdescricao").val('');
        $("#cbsecao").selectpicker('val', '');
        $("#txvalor").val(0);
    });

    $('#btnSalvar').on('click', function () {
        produtoList.push(
            {
                'descricao': $("#txdescricao").val(),
                'secao': $("#cbsecao").val(),
                'valor': $("#txvalor").val(),
                'qtde': 0
            }
        )
        $('#grid').bootstrapTable('load', produtoList);
    });

    $("#cbsecao").selectpicker({
        noneResultsText: "Nenhum resultado encontrado",
        iconBase: 'fa',
        tickIcon: 'fa-check',
        style: 'btn-default',
        size: 5,
        title: 'Selecione...'
    });

    var secaoList = [
        {'nome': 'Alimentício', 'id': 1},
        {'nome': 'Vestuário', 'id': 2},
        {'nome': 'Utensílios Domésticos', 'id': 3},
        {'nome': 'Mobiliário', 'id': 4}
    ]    

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

    var fragment = document.createDocumentFragment();
    secaoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.nome;
        opt.value = d.nome;
        fragment.appendChild(opt);
    });
    $("#cbsecao").append(fragment);
    $("#cbsecao").selectpicker('refresh');

    $('#grid').bootstrapTable({
        columns: [
            {field: 'descricao', title: 'Descrição', width: '50%'},
            {field: 'secao', title: 'Seção', align: 'center', halign: 'center', width: '30%'},
            {field: 'qtde', title: 'Em Estoque', align: 'center', halign: 'center', width: '20%'}
        ],
        onClickRow: function (row) {
            $("#txdescricao").val(row.descricao);
            $("#cbsecao").selectpicker('val', row.secao);
            $("#txvalor").val(row.valor);
        }
    });

    $('#grid').bootstrapTable('load', produtoList);

});
