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
        $("#cbpessoa").selectpicker('val', '');
        $("#txdata").val(0);
    });

    $('#btnSalvar').on('click', function () {
        produtoList.push(
            {
                'pessoa': $("#cbpessoa").val(),
                'data': $("#txdata").val()
            }
        )
        $('#grid').bootstrapTable('load', produtoList);
    });

    $("#cbpessoa").selectpicker({
        noneResultsText: "Nenhum resultado encontrado",
        iconBase: 'fa',
        tickIcon: 'fa-check',
        style: 'btn-default',
        size: 5,
        title: 'Selecione...'
    });

    var pessoaList = [
        {'nome': 'João Silva','endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais', 'credito': 100},
        {'nome': 'Maria Santos','endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais', 'credito': 50},
        {'nome': 'Pedro Costa', 'endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais','credito': 48},
        {'nome': 'Ana Oliveira', 'endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais','credito': 50},
        {'nome': 'Luiz Pereira', 'endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais','credito': 70},
        {'nome': 'Sofia Rodrigues', 'endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais','credito': 25},
        {'nome': 'Manuel Almeida','endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais', 'credito': 45},
        {'nome': 'Catarina Ferreira', 'endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais','credito': 33},
        {'nome': 'Inês Carvalho','endereco': 'Endereço', 'telefone': '(65) 9 999999999', 'texto': 'Observações Gerais', 'credito': 43}
    ]    

    var fragment = document.createDocumentFragment();
    pessoaList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.nome;
        opt.value = d.nome;
        fragment.appendChild(opt);
    });
    $("#cbpessoa").append(fragment);
    $("#cbpessoa").selectpicker('refresh');

    var agendaList = [
        {'pessoa': 'João Silva', 'data': '05/06/2023 às 7h'},
        {'pessoa': 'Maria Santos', 'data': '05/06/2023 às 8h'},
        {'pessoa': 'Pedro Costa', 'data': '05/06/2023 às 9h'},
        {'pessoa': 'Ana Oliveira', 'data': '05/06/2023 às 10h'},
        {'pessoa': 'Luiz Pereira', 'data': '05/06/2023 às 11h'},
        {'pessoa': 'Sofia Rodrigues', 'data': '05/06/2023 às 13h'},
        {'pessoa': 'Manuel Almeida', 'data': '05/06/2023 às 14h'},
        {'pessoa': 'Catarina Ferreira', 'data': '05/06/2023 às 15h'},
        {'pessoa': 'Inês Carvalho', 'data': '05/06/2023 às 16h'}
    ]    

    $('#grid').bootstrapTable({
        columns: [
            {field: 'pessoa', title: 'Pessoa Assistida', width: '70%'},
            {field: 'data', title: 'Data', align: 'center', halign: 'center', width: '30%'}
        ],
        onClickRow: function (row) {
            $("#txdata").val(row.data);
            $("#cbpessoa").selectpicker('val', row.pessoa);
        }
    });

    $('#grid').bootstrapTable('load', agendaList);

});
