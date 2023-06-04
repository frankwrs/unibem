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
        {'produto': 'Leite Integral 1L', 'data': '23/05/2023', 'qtde': 60},
        {'produto': 'Leite Integral cx 12un', 'data': '23/05/2023', 'qtde': 5},
        {'produto': 'Arroz Tipo 1 5kg', 'data': '23/05/2023', 'qtde': 10},
        {'produto': 'Chinelo de dedo tamanho 42', 'data': '02/04/2023', 'qtde': 1},
        {'produto': 'Agasalho tamanho M', 'data': '02/04/2023', 'qtde': 1},
        {'produto': 'Kit 3 potes pequenos', 'data': '05/01/2023', 'qtde': 5},
        {'produto': 'Kit talheres', 'data': '05/01/2023', 'qtde': 2},
        {'produto': 'Fogão 4 bocas', 'data': '05/01/2023', 'qtde': 1},
        {'produto': 'Armário cozinha', 'data': '05/01/2023', 'qtde': 1}
    ]    

    $('#grid').bootstrapTable({
        columns: [
            {field: 'produto', title: 'Produto', width: '50%'},
            {field: 'data', title: 'Data', align: 'center', halign: 'center', width: '30%'},
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
