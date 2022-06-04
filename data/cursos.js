/*let cursos = [
{
    {
        "ch": 10

                "codigo": "32",
                "periodo": "1"
        }
    },

    "Medicina":{
        "infos": {
            "ch": 10
        },
    }
}]

let cienciadacomputacao = [
    'DMAT/CCN032;OB;C�LCULO DIFERENCIAL E INTEGRAL I;1;-;60;-;1',
    'DFIL/CCHL009;OB;INTRODU��O � METODOLOGIA CIENT�FICA;1;-;60;-;1',
    'DC/CCN026;OB;PROGRAMA��O ESTRUTURADA;1;-;60;-;1',
    'DC/CCN021;OB;INFORM�TICA E SOCIEDADE;1;-;60;-;1',
    'DC/CCN019;OB;INTRODU��O � L�GICA;1;-;60;-;1',
    'DC/CCN020;OB;SEMIN�RIOS DE INTRODU��O AO CURSO;1;-;30;-;1',
    'CLE/CCHL002;OB;INGL�S T�CNICO E CIENT�FICO;1;-;60;-;1',
    'DC/CCN022;OB;ESTRUTURAS DE DADOS;2;-;60;35M34;2',
    'DC/CCN023;OB;PROGRAMA��O ORIENTADA A OBJETO;2;-;60;24M34;2',
    'DC/CCN024;OB;LABORAT�RIO DE PROGRAMA��O;2;-;60;35M56;2',
    'DC/CCN029;OB;CIRCUITOS DIGITAIS;2;-;60;35T34;2',
    'DMAT/CCN035;OB;MATEM�TICA DISCRETA;2;-;60;24T34;2',
    'DC/CCN028;OB;TEORIA E APLICA��ES EM GRAFOS;-;-;60;35M56;-',
    'CGBEST/CCN013;OB;PROBABILIDADE E ESTAT�STICA;-;-;60;-;0',
    'DC/CCN027;OB;INTERFACE HUMANO COMPUTADOR;-;-;60;-;-',
    'DC/CCN025;OB;BANCO DE DADOS;-;-;60;-;-',
    'DC/CCN031;OB;ARQUITETURA DE COMPUTADORES;-;-;60;-;-',
    'DC/CCN034;OB;PROGRAMA��O LINEAR;-;-;60;-;-',
    'DC/CCN035;OB;REDES DE COMPUTADORES;-;-;60;-;-',
    'DC/CCN036;OB;PROJETO E AN�LISE DE ALGORITMOS;-;-;60;-;-',
    'DC/CCN037;OB;PROCESSAMENTO DIGITAL DE IMAGENS;-;-;60;-;-',
    'DC/CCN032;OB;COMPUTA��O GR�FICA;-;-;60;-;-',
    'DC/CCN033;OB;SISTEMAS OPERACIONAIS;-;-;60;-;-',
    'DC/CCN039;OB;ENGENHARIA DE SOFTWARE I;-;-;60;-;-',
    'DC/CCN040;OB;SEGURAN�A EM SISTEMAS;-;-;60;-;-',
    'DC/CCN041;OB;INTELIG�NCIA ARTIFICIAL;-;-;60;-;-',
    'DC/CCN030;OB;TEORIA DA COMPUTA��O;-;-;60;-;-',
    'DC/CCN038;OB;SISTEMAS DISTRIBU�DOS;-;-;60;-;-',
    'DC/CCN044;OB;ENGENHARIA DE SOFTWARE II;-;-;60;-;-',
    'DC/CCN045;OB;BANCOS DE DADOS RELACIONAIS;-;-;60;-;-',
    'DC/CCN042;OB;COMPILADORES;-;-;60;-;-',
    'DC/CCN043;OB;LINGUAGENS DE PROGRAMA��O;-;-;60;-;-',
    'DC/CCN047;OB;EST�GIO SUPERVISIONADO;-;-;330;-;-',
    'DC/CCN046;OB;TRABALHO DE CONCLUS�O DE CURSO I - TCC I;-;-;60;-;-',
    'DBI0057;OB;EDUCA��O AMBIENTAL, TECNOLOGIA E SOCIEDADE;-;-;30;4T56;2',
    'DC/CCN048;OB;PROGRAMA��O FUNCIONAL;-;-;60;-;-',
    'DC/CCN049;OB;TRABALHO DE CONCLUS�O DE CURSO II - TCC I;-;-;60;-;-',
    ]*/

let computacao = {
    nome: "Ciência da computação",
    departamento: "DCC",
    disciplinas: [
        {
            codigo: "CLE/CCHL002", 
            tipo: "OBRIGATÓRIA",
            nome: "INGLÊS TÉCNICO E CIENTÍFICO",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "35T34",
            periodoConclusao: 1
        },
        {
            codigo: "DC/CCN019", 
            tipo: "OBRIGATÓRIA",
            nome: "INTRODUÇÃO À LÓGICA",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: 1
        },
        {
            codigo: "DC/CCN020", 
            tipo: "OBRIGATÓRIA",
            nome: "SEMINÁRIOS DE INTRODUÇÃO AO CURSO",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 30,
            schedule: "6M34",
            periodoConclusao: 1
        },
        {
            codigo: "DC/CCN021", 
            tipo: "OBRIGATÓRIA",
            nome: "INFORMÁTICA E SOCIEDADE",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "35T56",
            periodoConclusao: 1
        },
        {
            codigo: "DC/CCN026", 
            tipo: "OBRIGATÓRIA",
            nome: "PROGRAMAÇÃO ESTRUTURADA",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: 1
        },
        {
            codigo: "DFIL/CCHL009", 
            tipo: "OBRIGATÓRIA",
            nome: "INTRODUÇÃO À METODOLOGIA CIENTÍFICA",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "24M56",
            periodoConclusao: 1
        },
        {
            codigo: "DMAT/CCN032", 
            tipo: "OBRIGATÓRIA",
            nome: "CÁLCULO DIFERENCIAL E INTEGRAL I",
            periodo: 1,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: 1
        },
        // 2 -------------------------------------------------
        {
            codigo: "DC/CCN022", 
            tipo: "OBRIGATÓRIA",
            nome: "ESTRUTURAS DE DADOS",
            periodo: 2,
            preRequisitos: ["DC/CCN026"],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: 2
        },
        {
            codigo: "DC/CCN023", 
            tipo: "OBRIGATÓRIA",
            nome: "PROGRAMAÇÃO ORIENTADA A OBJETO",
            periodo: 2,
            preRequisitos: ["DC/CCN026"],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: 2
        },
        {
            codigo: "DC/CCN024", 
            tipo: "OBRIGATÓRIA",
            nome: "LABORATÓRIO DE PROGRAMAÇÃO",
            periodo: 2,
            preRequisitos: ["DC/CCN026"],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: 2
        },
        {
            codigo: "DC/CCN029", 
            tipo: "OBRIGATÓRIA",
            nome: "CIRCUITOS DIGITAIS",
            periodo: 2,
            preRequisitos: [],
            cargaHoraria: 60,
            schedule: "35T34",
            periodoConclusao: 2
        },
        {
            codigo: "DMAT/CCN033", 
            tipo: "OBRIGATÓRIA",
            nome: "CÁLCULO DIFERENCIAL E INTEGRAL II",
            periodo: 2,
            preRequisitos: ["DMAT/CCN032"],
            cargaHoraria: 60,
            schedule: "24M56",
            periodoConclusao: 1
        },
        {
            codigo: "DMAT/CCN035", 
            tipo: "OBRIGATÓRIA",
            nome: "MATEMÁTICA DISCRETA",
            periodo: 2,
            preRequisitos: ["DC/CCN019"],
            cargaHoraria: 60,
            schedule: "24T34",
            periodoConclusao: 2
        },
        //3 ---------------------------------
        {
            codigo: "CGBEST/CCN013", 
            tipo: "OBRIGATÓRIA",
            nome: "PROBABILIDADE E ESTATÍSTICA",
            periodo: 3,
            preRequisitos: ["DMAT/CCN032"],
            cargaHoraria: 60,
            schedule: "24T34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN025", 
            tipo: "OBRIGATÓRIA",
            nome: "BANCO DE DADOS",
            periodo: 3,
            preRequisitos: ["DC/CCN022", "DC/CCN023"],
            cargaHoraria: 60,
            schedule: "24M56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN027", 
            tipo: "OBRIGATÓRIA",
            nome: "INTERFACE HUMANO COMPUTADOR",
            periodo: 3,
            preRequisitos: ["DC/CCN026"],
            cargaHoraria: 60,
            schedule: "35T34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN028", 
            tipo: "OBRIGATÓRIA",
            nome: "TEORIA E APLICAÇÕES EM GRAFOS",
            periodo: 3,
            preRequisitos: ["DC/CCN022"],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN031", 
            tipo: "OBRIGATÓRIA",
            nome: "ARQUITETURA DE COMPUTADORES",
            periodo: 3,
            preRequisitos: ["DC/CCN029"],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: null
        },
        {
            codigo: "DMAT/CCN034", 
            tipo: "OBRIGATÓRIA",
            nome: "ÁLGEBRA LINEAR",
            periodo: 3,
            preRequisitos: ["DMAT/CCN033"],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: null
        },
        //4 --------------------------------
        {
            codigo: "DC/CCN032", 
            tipo: "OBRIGATÓRIA",
            nome: "COMPUTAÇÃO GRÁFICA",
            periodo: 4,
            preRequisitos: ["DC/CCN023", "DMAT/CCN034"],
            cargaHoraria: 60,
            schedule: "24T34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN033", 
            tipo: "OBRIGATÓRIA",
            nome: "SISTEMAS OPERACIONAIS",
            periodo: 4,
            preRequisitos: ["DC/CCN023", "DC/CCN031"],
            cargaHoraria: 60,
            schedule: "35T34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN034", 
            tipo: "OBRIGATÓRIA",
            nome: "PROGRAMAÇÃO LINEAR",
            periodo: 4,
            preRequisitos: ["DC/CCN026", "DMAT/CCN034"],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN035", 
            tipo: "OBRIGATÓRIA",
            nome: "REDES DE COMPUTADORES",
            periodo: 4,
            preRequisitos: ["DC/CCN031"],
            cargaHoraria: 60,
            schedule: "24M56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN037", 
            tipo: "OBRIGATÓRIA",
            nome: "PROCESSAMENTO DIGITAL DE IMAGENS",
            periodo: 4,
            preRequisitos: ["DC/CCN023", "DMAT/CCN034"],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN036", 
            tipo: "OBRIGATÓRIA",
            nome: "PROJETO E ANÁLISE DE ALGORITMOS",
            periodo: 4,
            preRequisitos: ["DC/CCN028"],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: null
        },
        // 5 --------------------------------
        {
            codigo: "DC/CCN030", 
            tipo: "OBRIGATÓRIA",
            nome: "TEORIA DA COMPUTAÇÃO",
            periodo: 5,
            preRequisitos: ["DMAT/CCN035", "DC/CCN022"],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN038", 
            tipo: "OBRIGATÓRIA",
            nome: "SISTEMAS DISTRIBUÍDOS",
            periodo: 5,
            preRequisitos: ["DC/CCN033", "DC/CCN035"],
            cargaHoraria: 60,
            schedule: "35T56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN039", 
            tipo: "OBRIGATÓRIA",
            nome: "ENGENHARIA DE SOFTWARE I",
            periodo: 5,
            preRequisitos: ["DC/CCN025"],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN040", 
            tipo: "OBRIGATÓRIA",
            nome: "SEGURANÇA EM SISTEMAS",
            periodo: 5,
            preRequisitos: ["DC/CCN033", "DC/CCN035"],
            cargaHoraria: 60,
            schedule: "24M56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN041", 
            tipo: "OBRIGATÓRIA",
            nome: "INTELIGÊNCIA ARTIFICIAL",
            periodo: 5,
            preRequisitos: ["DC/CCN023", "CGBEST/CCN013", "DC/CCN036"],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: null
        },
        // 6 --------------------------------
        {
            codigo: "DC/CCN042", 
            tipo: "OBRIGATÓRIA",
            nome: "COMPILADORES",
            periodo: 6,
            preRequisitos: ["DC/CCN023", "DC/CCN030"],
            cargaHoraria: 60,
            schedule: "35M56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN043", 
            tipo: "OBRIGATÓRIA",
            nome: "LINGUAGENS DE PROGRAMAÇÃO",
            periodo: 6,
            preRequisitos: ["DC/CCN023"],
            cargaHoraria: 60,
            schedule: "24M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN044", 
            tipo: "OBRIGATÓRIA",
            nome: "ENGENHARIA DE SOFTWARE II",
            periodo: 6,
            preRequisitos: ["DC/CCN039"],
            cargaHoraria: 60,
            schedule: "35M34",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN045", 
            tipo: "OBRIGATÓRIA",
            nome: "BANCOS DE DADOS RELACIONAIS",
            periodo: 6,
            preRequisitos: ["DC/CCN025"],
            cargaHoraria: 60,
            schedule: "35T34",
            periodoConclusao: null
        },
        // 7-------------------
        {
            codigo: "DBI0057", 
            tipo: "OBRIGATÓRIA",
            nome: "EDUCAÇÃO AMBIENTAL, TECNOLOGIA E SOCIEDADE",
            periodo: 7,
            preRequisitos: [],
            cargaHoraria: 30,
            schedule: "4T56",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN046", 
            tipo: "OBRIGATÓRIA",
            nome: "TRABALHO DE CONCLUSÃO DE CURSO I - TCC I",
            periodo: 7,
            preRequisitos: ["DC/CCN038", "DC/CCN041", "DC/CCN044"],
            cargaHoraria: 60,
            schedule: "6M3456",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN047", 
            tipo: "OBRIGATÓRIA",
            nome: "ESTÁGIO SUPERVISIONADO",
            periodo: 7,
            preRequisitos: ["DC/CCN038", "DC/CCN041", "DC/CCN044"],
            cargaHoraria: 330,
            schedule: "",
            periodoConclusao: null
        },
        {
            codigo: "DC/CCN048", 
            tipo: "OBRIGATÓRIA",
            nome: "PROGRAMAÇÃO FUNCIONAL",
            periodo: 7,
            preRequisitos: ["DC/CCN043"],
            cargaHoraria: 60,
            schedule: "24T34",
            periodoConclusao: null
        },
        // 8 ----------------------------------------
        {
            codigo: "DC/CCN049", 
            tipo: "OBRIGATÓRIA",
            nome: "TRABALHO DE CONCLUSÃO DE CURSO II - TCC II",
            periodo: 8,
            preRequisitos: ["DC/CCN046"],
            cargaHoraria: 60,
            schedule: "",
            periodoConclusao: null
        },
    ],
};
let medicina = {
    firstName: "Vini",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let cursos = [
    computacao, medicina
]
