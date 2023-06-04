// document.onreadystatechange = function (e) {
//     if (document.readyState === 'complete') {

//         if (window.sessionStorage.getItem("external")) {

//             var external = window.sessionStorage.getItem("external");
//             switch (external) {
//                 case "home":
//                     saveNavegation({page: 'index_home.html'});
//                     break;
//                 case "solicitacaoatendimentopscicologico":
// //                    saveNavegation({page: 'atendimentoPsicologico/solicitacaoAtendimentoPsicologico.html'});
//                     window.location.href = "https://atendimentopsicologico.unemat.br/";
//                     break;
//                 case "mapacampus":
//                     saveNavegation({page: 'campus/mapa_campus.html'});
//                     break;
// //                case "wifi":
// //                    saveNavegation({page: 'acesso_wifi_search.html'});
// //                    break;
//                 case "saadocumentos":
//                     saveNavegation({page: 'solicitacaoSAA/solicitacaoSAA.html'});
//                     break;
//                 case "saamdi":
//                     saveNavegation({page: 'solicitacaoSAA/saaSolicitacaoMDI.html'});
//                     break;
//                 case "calendarioacademico":
//                     saveNavegation({page: 'institucional/calendario_academico_view.html'});
//                     break;
//                 case "relatoinfraestrutura":
//                     saveNavegation({page: 'relatosInfraCampus/relatoInfraCampus.html'});
//                     break;
//                 case "ptes":
//                     saveNavegation({page: 'administrativo/servidores_lista.html'});
//                     break;
//                 case "docentes":
//                     saveNavegation({page: 'institucional/professores.html'});
//                     break;
//                 case "politicaprivacidade":
//                     saveNavegation({page: 'institucional/politica_privacidade.html'});
//                     break;
//                 case "canalatendimentosigaa":
//                     saveNavegation({page: 'canal_atendimento_sigaa.html'});
//                     break;
//                 case "projetos":
//                     if (window.sessionStorage.getItem("idProjeto")) {
//                         saveNavegation({page: 'institucional/projetos.html', params: [{key: 'idProjeto', value: window.sessionStorage.getItem("idProjeto")}]});
//                     } else {
//                         saveNavegation({page: 'institucional/projetos.html'});
//                     }
//                     break;
// //                case "mapareservas":
// //                    saveNavegation({page: 'reservas/reservas_mapa.html'});
// //                    break;
//                 case "albumfotos":
//                     saveNavegation({page: 'campus/album_fotos_view.html'});
//                     break;
//                 case "historicocampus":
//                     saveNavegation({page: 'campus/historico_campus.html'});
//                     break;
//                 case "cursos":
//                     if (window.sessionStorage.getItem("idCurso")) {
//                         saveNavegation({page: 'pedagogico/cursos_view.html', params: [{key: 'idCurso', value: window.sessionStorage.getItem("idCurso")}]});
//                     } else {
//                         saveNavegation({page: 'index_home.html', section: 'sectionGraduacao'});
//                     }
//                     break;
//                 case "faculdades":
//                     if (window.sessionStorage.getItem("idFaculdade")) {
//                         saveNavegation({page: 'pedagogico/faculdades_view.html', params: [{key: 'idFaculdade', value: window.sessionStorage.getItem("idFaculdade")}]});
//                     } else {
//                         saveNavegation({page: 'index_home.html'});
//                     }
//                     break;
//                 case "setores":
//                     if (window.sessionStorage.getItem("idSetor")) {
//                         saveNavegation({page: 'administrativo/setores_lista.html', params: [{key: 'idSetor', value: window.sessionStorage.getItem("idSetor")}]});
//                     } else {
//                         saveNavegation({page: 'index_home.html'});
//                     }
//                     break;
//                 case "noticias":
//                     if (window.sessionStorage.getItem("idNews")) {
//                         saveNavegation({page: 'noticias_view.html', params: [{key: 'idNews', value: window.sessionStorage.getItem("idNews")}]});
//                     } else {
//                         saveNavegation({page: 'noticias_view.html', params: [{key: 'tags', value: '*'}]});
//                     }
//                     break;
//                 case "eventos":
//                     if (window.sessionStorage.getItem("idEvent")) {
//                         saveNavegation({page: 'eventos_view.html', params: [{key: 'idEvent', value: window.sessionStorage.getItem("idEvent")}]});
//                     } else {
//                         saveNavegation({page: 'eventos_view.html', params: [{key: 'tags', value: '*'}]});
//                     }
//                     break;
// //                case "projetos":
// //                    if (window.sessionStorage.getItem("idProjeto")) {
// //                        saveNavegation({page: 'pedagogico/view/faculdadeProjects.html', params: [{key: 'idProjeto', value: window.sessionStorage.getItem("idProjeto")}]});
// //                    } else {
// //                        saveNavegation({page: 'pedagogico/view/faculdadeProjects.html'});
// //                    }
// //                    break;
//                 case "reservas":
// //                    if (window.sessionStorage.getItem("reservaDate")) {
// //                        saveNavegation({page: 'reservas/reservas_view.html', params: [{key: 'reservaDate', value: window.sessionStorage.getItem("reservaDate")}]});
// //                    } else {
// //                        saveNavegation({page: 'reservas/reservas_view.html'});
// //                    }
//                     window.location.href = "https://unemat.br/reservas/";
//                     break;
//                 default:
//                     saveNavegation({page: 'index_home.html'});
//             }
//         } else {

//             if (history.length < 2) {
//                 saveNavegation({page: 'index_home.html'});
//             } else {
//                 if (history.state !== null) {
//                     if (history.state.params && (history.state.params.length > 0)) {
//                         loadSessionStorageValues(history.state.params);
//                     }
//                     $("#conteudo").load(history.state.page);
//                 } else {
//                     saveNavegation({page: 'index_home.html'});
//                 }
//             }
//         }

//         $(document).on('click', '.navbar-collapse', function (e) {
//             if ($(e.target).is('a:not(".dropdown-toggle")')) {
//                 $(this).collapse('hide');
//             }
//         });

//         var url = window.location.pathname;
//         url = url.substring(0, url.lastIndexOf("/") + 1);
//         const path = window.location.protocol + '//' + window.location.host + url;
//     }
// };

function saveNavegation(frag) {
    history.pushState(frag, null, null);
    if (frag.params && (frag.params.length > 0)) {
        loadSessionStorageValues(frag.params);
    }
    if (frag.section) {
        if ($.contains(document.getElementById("conteudo"), document.getElementById(frag.section))) {
            $('html, body').animate({
                scrollTop: ($("#" + frag.section).offset().top - 40)
            }, 500, "easeInOutExpo");
        } else {
            $("#conteudo").load(frag.page);
            waitForElement(frag.section, function () {
                $('html, body').animate({
                    scrollTop: ($("#" + frag.section).offset().top - 40)
                }, 500, "easeInOutExpo");
            });
        }
    } else {
        $("#conteudo").load(frag.page);
        $('html, body').animate({
            scrollTop: (-40)
        }, 500, "easeInOutExpo");
    }
}

function loadSessionStorageValues(list) {
    jQuery.each(list, function (idx, obj) {
        window.sessionStorage.setItem(obj.key, obj.value);
    });
}

function showCourses(jsonList) {
    listGraduate = jsonList.filter(c => c.tipo === 'G');
    jQuery.each(listGraduate, function (index, obj) {

        divider = document.createElement("div");
        divider.setAttribute('class', 'dropdown-divider');
        a = document.createElement("a");
        a.setAttribute('class', 'dropdown-item');
        a.setAttribute('href', 'javascript:void(0);');
        a.addEventListener('click', function (e) {
            saveNavegation({page: 'pedagogico/cursos_view.html', params: [{key: 'idCurso', value: obj.id}]});
        });
        a.innerHTML = '<i class="fa fa-graduation-cap"></i> ' + obj.nome + ' - ' + obj.sigla;
        if (index > 0) {
            document.getElementById('DPNavGraduacao').appendChild(divider);
        }
        document.getElementById('DPNavGraduacao').appendChild(a);
    });
}

$(document).ready(function () {

    var usr = JSON.parse(window.sessionStorage.getItem('accessToken'));
    $("meta[name='description']").attr("content", "O campus de Barra do Bugres, oferece 06 cursos de graduação de oferta contínua, 02 cursos de graduação de oferta diferenciada e 3 programas de pós-graduação Stricto Sensu");

    $("#newPortalModal").modal("show");

    $.ajax({
        type: 'GET',
        contentType: "application/json",
        dataType: 'json',
        url: "ws-core-bbg/logo_index/index",
        cache: false,
        async: false,
        headers: {user: "client_web"},
        data: {
            user: 0, token: "0"
        }
    }).done(function (dado) {
        if (typeof dado !== 'undefined') {
            $("#logoIndex").attr("src", "ws-core-bbg/logo_index/img/" + dado.imagem);
            $("#logoIndex").attr("title", dado.descricao);
        }
    });

    $.ajax({
        type: 'GET',
        contentType: "application/json",
        dataType: 'json',
        url: "ws-core-bbg/cursos",
        cache: false,
        async: false,
        headers: {user: "client_web"},
        data: {
            user: 0, token: "0"
        }
    }).done(function (dado) {
        $("#DPNavGraduacao").empty();
        showCourses(dado);
    });

    if (usr !== null) {

        html = '<li class="nav-item dropdown">'
                + '<a href="javascript:void(0);" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarLoginDP" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
                + '<img id="imgUsr" class="rounded-circle"/> <b id="nameUsr"></b></a>'
                + '<div class="dropdown-menu" aria-labelledby="navbarLoginDP">'
                + '<a href="javascript:void(0);" id="btnBackAdmArea" class="dropdown-item"><i class="fa fa-home"></i> Área Administrativa</a>'
                + '<div class="dropdown-divider"></div>'
                + '<a href="javascript:void(0);" id="btnlogout" class="dropdown-item"><i class="fa fa-sign-out"></i> Sair</a>'
                + '</div>'
                + '</li>';

        $("#dropLogin").empty();
        $("#dropLogin").append(html);
        $("#imgUsr").attr("src", "ws-core-bbg/servidores/img/" + usr.foto);
        $("#nameUsr").text(usr.nome.split(' ').slice(0, 2).join(' '));

        $("#btnProfile").on('click', function (event) {
            saveNavegation({page: 'servidores_profile.html'});
//        $("#conteudo").load("servidores_profile.html");
        });

        $("#btnBackAdmArea").on('click', function (event) {
            window.location.replace(window.sessionStorage.getItem('path') + "main.html");
//        $("#conteudo").load("servidores_profile.html");
        });

        $("#btnlogout").on('click', function (event) {

            userlogOut = JSON.stringify({
                servidor: usr.user,
                token: usr.token
            });
            if (usr) {
                $.ajax({
                    crossDomain: true,
                    cache: false,
                    type: "POST",
                    dataType: "json",
                    contentType: 'application/json',
                    data: userlogOut,
                    url: "ws-core-bbg/login/signout",
//                headers: {'user': acess.user, 'token': acess.token, 'entidade': "", entidadeid: "0", 'action': ""},
                    success: function (dado, status, xhr) {
                        window.location.replace(window.sessionStorage.getItem('path'));
                        window.sessionStorage.removeItem('accessToken');
                    }
                });
            } else {
                window.location.replace(window.sessionStorage.getItem('path'));
            }
        });

    } else {

        html = '<li class="nav-item dropdown">'
                + '<a href="javascript:void(0);" class="nav-link dropdown-toggle" data-toggle="dropdown" id="btnDropLogin"><b>Entrar</b><span class="caret"></span></a>'
                + '<ul id="login-dp" class="dropdown-menu">'
                + '<li><div class="row">'
                + '<div class="col-md-12">'
                + '<form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">'
                + '<div class="form-group">'
                + '<input type="text" class="form-control" id="txusuario" placeholder="CPF" required></div>'
                + '<div class="form-group">'
                + '<input type="password" class="form-control" id="txsenha" placeholder="Senha" required></div>'
                + '<div class="form-group">'
                + '<button id="btnlogin" type="button" class="btn btn-block">Entrar</button></div>'
                + '</form></div></div></li></ul></li>';

        $("#dropLogin").empty();
        $("#dropLogin").append(html);

        $("#txusuario").mask("999.999.999-99");

        $('.dropdown').on('shown.bs.dropdown', function () {
            $("#txusuario").focus();
        });

        $("#txsenha").keyup(function (event) {
            if (event.keyCode === 13) {
                $("#btnlogin").click();
            }
        });

        $("#btnlogin").on('click', function (event) {
            event.preventDefault();
            $.ajax({
                crossDomain: true,
                cache: false,
                type: "POST",
                dataType: "json",
                contentType: 'application/json',
                data: toJSON(),
                url: "ws-core-bbg/login",
                success: function (dado, status, xhr) {
                    window.sessionStorage.setItem('accessToken', JSON.stringify(dado));
                    window.location.replace(window.sessionStorage.getItem('path') + "main.html");
                }
            });
        });
    }

    function toJSON() {
        return JSON.stringify({
            cpf: $("#txusuario").val().replace(/[^0-9]+/g, ''),
            senha: md5($("#txsenha").val())
        });
    }

    $("#btnNavDURA").on('click', function (event) {
        saveNavegation({page: 'administrativo/setores_lista.html', params: [{key: 'idSetor', value: 7}]});
    });

    $("#btnNavDPPF").on('click', function (event) {
        saveNavegation({page: 'administrativo/setores_lista.html', params: [{key: 'idSetor', value: 17}]});
    });

    $("#btnNavFACET").on('click', function (event) {
        saveNavegation({page: 'pedagogico/faculdades_view.html', params: [{key: 'idFaculdade', value: 5}]});
    });

    $("#btnNavFAE").on('click', function (event) {
        saveNavegation({page: 'pedagogico/faculdades_view.html', params: [{key: 'idFaculdade', value: 4}]});
    });

    $("#btnNavFAINDI").on('click', function (event) {
        saveNavegation({page: 'pedagogico/faculdades_view.html', params: [{key: 'idFaculdade', value: 8}]});
    });

    $("#btnNavColRegional").on('click', function (event) {
        saveNavegation({page: 'institucional/colegiado_regional_view.html'});
    });

    $("#btnNavPTES").on('click', function (event) {
        saveNavegation({page: 'administrativo/servidores_lista.html'});
    });

    $("#btnNavDocentes").on('click', function (event) {
        saveNavegation({page: 'institucional/professores.html'});
    });

    $("#btnNavProjetos").on('click', function (event) {
        saveNavegation({page: 'institucional/projetos.html'});
    });

    $("#btnNavSetores").on('click', function (event) {
        saveNavegation({page: 'administrativo/setores_lista.html'});
    });

    $("#btnNavNoticias").on('click', function (event) {
//        saveNavegation({page: 'index_home.html', section: 'sectionNoticias'});
        saveNavegation({page: 'noticias_view.html', params: [{key: 'tags', value: '*'}]});
    });

    $("#btnNavEventos").on('click', function (event) {
        saveNavegation({page: 'index_home.html', section: 'sectionEventos'});
    });

//    $("#btnQuickReservas").on('click', function (event) {
//        saveNavegation({page: 'reservas/reservas_view.html'});
//    });

//    $("#btnQuickWifi").on('click', function (event) {
//        saveNavegation({page: 'acesso_wifi_search.html'});
//    });

    $("#btnNavMapaCampus").on('click', function (event) {
        saveNavegation({page: 'campus/mapa_campus.html'});
    });

    $("#btnNavHistorioCampus").on('click', function (event) {
        saveNavegation({page: 'campus/historico_campus.html'});
    });

    $("#btnNavFotosCampus").on('click', function (event) {
        saveNavegation({page: 'campus/album_fotos_view.html'});
    });

    $("#btnNavComoChegarCampus").on('click', function (event) {
        saveNavegation({page: 'campus/como_chegar.html'});
    });

    $("#btnNavOndeMorarCampus").on('click', function (event) {
        saveNavegation({page: 'campus/pg_construcao.html'});
    });

    $("#btnNavCustoVidaCampus").on('click', function (event) {
        saveNavegation({page: 'campus/pg_construcao.html'});
    });

    $("#btnNavParceriasLocaisCampus").on('click', function (event) {
        saveNavegation({page: 'campus/pg_construcao.html'});
    });

    $("#btnNavInfraestruturaCampus").on('click', function (event) {
        saveNavegation({page: 'campus/infraestrutura.html'});
    });

    $("#btnQickDocSAA").on('click', function (event) {
        saveNavegation({page: 'solicitacaoSAA/solicitacaoSAA.html'});
    });

//    $("#btnNavSolicitacaoAtendPsic").on('click', function (event) {
//        saveNavegation({page: 'atendimentoPsicologico/solicitacaoAtendimentoPsicologico.html'});
//    });

    $("#btnNavSolicitacaoMDI").on('click', function (event) {
        saveNavegation({page: 'solicitacaoSAA/saaSolicitacaoMDI.html'});
    });

    $("#btnNavPedidManutencaoInfra").on('click', function (event) {
        saveNavegation({page: 'relatosInfraCampus/relatoInfraCampus.html'});
    });

    $("#btnQuickCalendar").on('click', function (event) {
        saveNavegation({page: 'institucional/calendario_academico_view.html'});
    });

    $("#btnPlacasTurma").on('click', function (event) {
        saveNavegation({page: 'pedagogico/placas_turma_view.html'});
    });

    $("#btnNavSistemas").on('click', function (event) {
        saveNavegation({page: 'index_home.html', section: 'sectionSistemas'});
    });

    $("#btnNavAgendaCampus").on('click', function (event) {
        saveNavegation({page: 'index_home.html', section: 'sectionAgenda'});
    });

    $("#btnNavPoliticaPrivacidade").on('click', function (event) {
        saveNavegation({page: 'institucional/politica_privacidade.html'});
    });

    $("#btnNavContato").on('click', function (event) {
        saveNavegation({page: 'index_home.html', section: 'sectionContact'});
    });

    $("#btnNavChannelSigaa").on('click', function (event) {
        saveNavegation({page: 'canal_atendimento_sigaa.html'});
    });

    $("#imgBrasaoNav, #logoIndex").on('click', function (event) {
        saveNavegation({page: 'index_home.html'});
    });

    $("#logoUNEMAT").on('click', function (event) {
        saveNavegation({page: 'index_home.html'});
    });
});

