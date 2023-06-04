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
        $("#cbsecao").selectpicker('val', '');
        $("#cbcondicao").selectpicker('val', '');
    });

    $('#btnSalvar').on('click', function () {
        creditoList.push(
            {
                'pessoa': $("#cbpessoa").val(),
                'condicao': $("#cbcondicao").val(),
                'secao': $("#cbsecao").val(),
            }
        )
        $('#grid').bootstrapTable('load', creditoList);
    });

    $("#cbpessoa, #cbsecao, #cbcondicao").selectpicker({
        noneResultsText: "Nenhum resultado encontrado",
        iconBase: 'fa',
        tickIcon: 'fa-check',
        style: 'btn-default',
        size: 5,
        title: 'Selecione...'
    });

    var pessoaList = [
        {'nome': 'João Silva','secao': 'Alimentício', 'condicao': 'Terreno Limpo'},
        {'nome': 'Maria Santos','secao': 'Alimentício', 'condicao': 'Casa organizada'},
        {'nome': 'Pedro Costa', 'secao': 'Vestuário', 'condicao': 'Terreno Limpo'},
        {'nome': 'Ana Oliveira', 'secao': 'Alimentício', 'condicao': 'Casa organizada'},
        {'nome': 'Luiz Pereira', 'secao': 'Vestuário', 'condicao': 'Terreno Limpo'},
        {'nome': 'Sofia Rodrigues', 'secao': 'Mobiliário', 'condicao': 'Filhos com frequência regular na escola'}
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

    var secaoList = [
        {'nome': 'Alimentício', 'id': 1},
        {'nome': 'Vestuário', 'id': 2},
        {'nome': 'Utensílios Domésticos', 'id': 3},
        {'nome': 'Mobiliário', 'id': 4}
    ]    

    var fragmentSecao = document.createDocumentFragment();
    secaoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.nome;
        opt.value = d.nome;
        fragmentSecao.appendChild(opt);
    });
    $("#cbsecao").append(fragmentSecao);
    $("#cbsecao").selectpicker('refresh');

    var secaoList = [
        {'descricao': 'Terreno Limpo'},
        {'descricao': 'Casa organizada'},
        {'descricao': 'Filhos vacinados'},
        {'descricao': 'Filhos com frequência regular na escola'}
    ]    

    var fragmentCondicao = document.createDocumentFragment();
    secaoList.forEach(function(d, index) {
        var opt = document.createElement('option');
        opt.innerHTML = d.descricao;
        opt.value = d.descricao;
        fragmentCondicao.appendChild(opt);
    });
    $("#cbcondicao").append(fragmentCondicao);
    $("#cbcondicao").selectpicker('refresh');

    var creditoList = [
        {'pessoa': 'João Silva','secao': 'Alimentício', 'condicao': 'Terreno Limpo'},
        {'pessoa': 'Maria Santos','secao': 'Alimentício', 'condicao': 'Casa organizada'},
        {'pessoa': 'Pedro Costa', 'secao': 'Vestuário', 'condicao': 'Terreno Limpo'},
        {'pessoa': 'Ana Oliveira', 'secao': 'Alimentício', 'condicao': 'Casa organizada'},
        {'pessoa': 'Luiz Pereira', 'secao': 'Vestuário', 'condicao': 'Terreno Limpo'},
        {'pessoa': 'Sofia Rodrigues', 'secao': 'Mobiliário', 'condicao': 'Filhos com frequência regular na escola'}
    ]    

    $('#grid').bootstrapTable({
        columns: [
            {field: 'pessoa', title: 'Pessoa Assistida', width: '40%'},
            {field: 'condicao', title: 'Condição Atendida', halign: 'center', width: '40%'},
            {field: 'secao', title: 'Seção', align: 'center', halign: 'center', width: '20%'}
        ],
        onClickRow: function (row) {
            $("#cbpessoa").selectpicker('val', row.pessoa);
            $("#cbsecao").selectpicker('val', row.secao);
            $("#cbcondicao").selectpicker('val', row.condicao);
        }
    });

    $('#grid').bootstrapTable('load', creditoList);

});
