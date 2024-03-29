import { CdnData } from "../interfaces/CdnData";

export const ptBrTranslation: CdnData = {
    "header": {
        "title": "Portfólio",
        "linkedin": "https://www.linkedin.com/in/juniorsergio/",
        "localization": "Belo Horizonte, MG, Brasil"
    },

    "main": {
        "tabs": {
            "aboutMe": "Sobre Mim",
            "frontend": "Front-End",
            "dataScience": "Ciência de Dados"
        },
        "about": {
            "title": "Sobre Mim",
            "text": "<p>Graduado em Engenharia de Computação pelo CEFET-MG, iniciei minha carreira em tecnologia como desenvolvedor de chatbots. Trabalhei com isso por pouco mais de 2 anos até migrar para o desenvolvimento front-end, principalmente focado em aplicações web responsivas. Atuo nessa área há 1 ano e nesse tempo já trabalhei com diversas tecnologias como React, Typescript, Next.js, Chakra-UI, Cloudflare, MongoDB e Git.</p><p>Em todos esses anos como desenvolvedor, tive a oportunidade de trabalhar com times, empresas e produtos que me permitiram explorar áreas tangentes à programação, como UX/UI, análise de dados, gestão de produto e metodologias ágeis. Isso foi fundamental no desenvolvimento e aperfeiçoamento das minhas habilidades de autogestão, trabalho em equipe e resiliência que me permitem ter a confiança de encarar quaisquer desafios.</p>"
        },

        "frontend" : {
            "soon": "Em breve",
            "opening": "Para aprimorar e divulgar meus conhecimentos em frontend, criei as páginas web a seguir a partir de cursos e testes técnicos realizados ao longo do tempo. Para acessar cada página, basta clicar em qualquer ponto do carrossel. O link para o respectivo <strong>repositório do GitHub</strong> se encontra no <strong>cabeçalho</strong> das páginas.",
            "projects": [
                {
                    "id": "social-media-feed",
                    "stacks": ["react", "typescript", "styled-components", "graphql"],
                    "title": "Feed de Rede Social",
                    "description": "Página web desenvolvida em ReactJS simulando o comportamento de uma rede social. É possível criar publicações, escrever comentários e reagir a eles. Para garantir a persistência dos dados, foi feita uma integração com o <a href='https://hygraph.com/'>Hygraph (antigo GraphCMS)</a> para registrar e ler as informações criadas pelos usuários no frontend da aplicação. O perfil criado pelo usuário para interagir com a aplicação tem duração de um dia, e é possível alterar as informações dele dentro desse período.",
                    "type": "active"
                },
                {
                    "id": "number-guessing-game",
                    "stacks": ["html", "css", "javascript"],
                    "title": "Adivinhe o número!",
                    "description": "Utilizando apenas o básico do desenvolvimento frontend, essa página web implementa um jogo de adivinhação, no qual uma API externa gera um número aleatório entre 1 e 300, e o jogador deve adivinhar que número é esse. Apesar de simples, essa página demonstra que embora as tecnologias mais modernas como Angular e React facilitem a criação de websites, a base disso (HTML e Javascript) segue sendo uma ferramenta poderosa de desenvolvimento.",
                    "type": "active"
                },
                {
                    "id": "universo-palavras",
                    "stacks": ["react", "python", "typescript", "styled-components"],
                    "title": "Universo de Palavras",
                    "description": "Projeto Fullstack com o desenvolvimento do backend em Python e o frontend em React com Typescript. A ideia é extrair informações de dois sites com definições de palavras (<a href='https://dicionariocriativo.com.br/'>Dicionário Critivo</a> e <a href='https://www.dicio.com.br/'>Dicio</a>) para exibí-las de uma forma mais amigável e de fácil associação para o usuário. Há também a possibilidade de exportar as informações em formato .pptx para usar em apresentações.",
                    "type": "active"
                },
                {
                    "id": "simulador-prev",
                    "stacks": ["react", "nextjs", "typescript", "chakra-ui", "mongodb"],
                    "title": "Simulador de Previdência",
                    "description": "Aplicação web construída com React, Typescript, Next.js e Chakra-UI, visando a captação de leads a partir de um formulário conversacional e a simulação de aposentadoria do usuário. Há também uma integração com o chat do Salesforce, oferecendo um canal de comunicação direto com um assessor de investimentos.",
                    "url": "https://simuladordeprev.com.br",
                    "type": "active"
                }
            ]
        },

        "dataScience": [    
            {
                "id": "tesouro-direto",
                "title": "Modelos de Previsão de Séries Temporais das Taxas de Juros do Tesouro Direto",
                "projectLink": "https://github.com/juniorsergio/Prediction-Projects/tree/master/Tesouro%20Direto",
                "subtitle": "Artigo Publicado",
                "subtitleLink": "http://dx.doi.org/10.21528/CBIC2021-11",
                "text": "Lançada pelo Governo Federal brasileiro no final de 2002, a plataforma Tesouro Direto possibilita a compra de títulos públicos por pessoas físicas, caracterizando-o como um investimento de renda fixa seguro e mais rentável que a poupança. Este trabalho propôs a utilização de modelos de aprendizado de máquina, mais precisamente das redes neurais MLP, CNN e LSTM, para criar modelos de previsão das taxas de juros de quatro títulos pós-fixados do Tesouro Direto atrelados ao IPCA. Para isso, foram analisadas e definidas algumas features (características) da economia brasileira que poderiam impactar mais diretamente nas taxas do Tesouro Direto. Ao final, concluiu-se que a CNN apresenta um melhor resultado geral, mesmo se mostrando mais sensível à remoção de features. Em contrapartida, a MLP apresentou erros quase constantes, independentemente da variável que estava sendo removida.",
                "figcaption": "Previsão do Tesouro IPCA 2024 pela rede CNN"
            },
            {
                "id": "credit-risk",
                "title": "Modelos de Classificação para Análise de Crédito",
                "projectLink": "https://github.com/juniorsergio/Classification-Projects/tree/master/Credit%20Risk",
                "text": "Um dos mais importantes cenários reais para Ciência de Dados é a análise de crédito, isto é, prever se um cliente se tornará inadimplente. Esse projeto foi desenvolvido como parte do processo seletivo de uma empresa, o que significa que os dados são reais, provindo de uma empresa do setor de crédito. Meu propósito foi criar um modelo de machine learning que fosse capaz de prever os inadimplentes de forma segura para a empresa-cliente, ao invés de tentar chegar no modelo perfeito. Durante o desenvolvimento, dois problemas foram encontrados nos dados: o desbalanceamento de classes e uma grande quantidade de valores nulos em uma das variáveis independentes. Com isso em mente, foram escolhidos cinco algoritmos baseados em árvores de decisão. O melhor dentre eles para esse problema em particular foi o XGBoost, que possui um parâmetro específico para compensar o desbalanceamento de classes. O resultado obtido foi uma precisão de 98% para a classe não-inadimplentes, e um recall de 70% para a classe de inadimplentes.",
                "figcaption": "Matrix de confusão do modelo obtido pelo XGBoost"
            },
            {
                "id": "breaking-bad",
                "title": "Exploração de Dados das Notas dos Episódios de Breaking Bad",
                "projectLink": "https://github.com/juniorsergio/DataExploration/tree/master/Breaking%20Bad%20-%20Rating%20analysis",
                "text": "Breaking Bad é considerada uma das melhores séries já feitas, o que levanta questões sobre como esse nível de qualidade foi atingido. Uma dessas questões, e o objetivo desse projeto, é se há alguma relação entre a nota de um episódio no IMDB e o roteirista dele. Mais especificamente, a hipótese levantada foi de que, por ser o criador da série, os episódios escritos por Vince Gilligan teriam as maiores notas. Para investigar isso, esse <a href=\"https://www.kaggle.com/varpit94/breaking-bad-tv-show-all-seasons-episodes-data\">dataset</a> foi utilizado por conter as duas informações necessárias: a nota do episódio e seu roteirista. O resultado da análise foi de que as notas não aparentam ter uma forte relação com o roteirista do episódio.",
                "figcaption": "Boxplot da nota dos episódios por escritor"
            }
        ]
    }
}