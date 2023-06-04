$(document).ready(function () {

    $(document).on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a:not(".dropdown-toggle")')) {
            $(this).collapse('hide');
        }
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

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
        ]
    });

    $('#grid').bootstrapTable('load', agendaList);

});
