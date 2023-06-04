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
        $("#txnome").val('');
        $("#txendereco").val('');
        $("#txtel").val('');
        $("#txtexto").val('');
        $("#txcredito").val(0);
    });

    $('#btnSalvar').on('click', function () {
        familiaList.push(
            {
                'nome': $("#txnome").val(),
                'endereco': $("#txendereco").val(),
                'telefone': $("#txtel").val(),
                'texto': $("#txtexto").val(),
                'credito': $("#txcredito").val()
            }
        )
        $('#grid').bootstrapTable('load', familiaList);
    });

    var familiaList = [
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
    
    $('#grid').bootstrapTable({
        columns: [
            {field: 'nome', title: 'Responsável', width: '50%'},
            {field: 'telefone', title: 'Telefone', align: 'center', halign: 'center', width: '30%'},
            {field: 'credito', title: 'Crédito do Bem', align: 'center', halign: 'center', width: '20%'}
        ],
        onClickRow: function (row) {
            $("#txnome").val(row.nome);
            $("#txendereco").val(row.endereco);
            $("#txtel").val(row.telefone);
            $("#txtexto").val(row.texto);
            $("#txcredito").val(row.credito);
        }
    });

    $('#grid').bootstrapTable('load', familiaList);

});
