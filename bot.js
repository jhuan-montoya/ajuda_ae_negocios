{
  "alias": "AJUDA Negócios",
  "description": "Bot de Negocios",
  "steps": [
    {
      "id": "idEventoInicial",
      "type": "whatsappEvent",
      "label": "Evento inicial",
      "properties": {
        "startEvent": "true",
        "appId": "whatsapp_chatbot",
        "appType": "chatbot"
      },
      "variables": {
        "whatsappFrom": "'bubbly-cockatoo'"
      },
      "conditions": [
        {
          "type": "channelSourceCondition",
          "values": [
            "bubbly-cockatoo"
          ]
        }
      ]
    },
    {
      "id": "idEventoFinal",
      "type": "endEvent",
      "label": "label 3",
      "properties": {
        "endEvent": "true"
      }
    },
    {
      "id": "step0",
      "type": "sendWhatsAppActivity",
      "label": "r1",
      "properties": {
        "from": "#{session['whatsappFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Olá, tudo bem?\nEu sou Alfred, atendente virtual da AJUDA Negócios.\n\n"
          }
        }
      ]
    },
    {
      "id": "step02",
      "type": "callComponent",
      "label": "Pergunta nome",
      "properties": {
        "componentId": "04357d30-88b1-4c73-a403-5c9d7c154809"
      },
      "inputs": {
        "question_when_invalid_answer": "'Não entendi seu nome... Como devo te chamar?'",
        "question": "'Qual seu nome?'"
      }
    },
    {
      "id": "step03",
      "type": "sendWhatsAppActivity",
      "label": "D1",
      "properties": {
        "from": "#{session['whatsappFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "#{username}, me conte qual a sua dificuldade empresarial?\n01 - Recursos Humanos\n02 - Financeiro\n03 - Contabilidade\n04 - Prospecção de Clientes\n05 - Vendas\n06 - Planejamento\n07 - Marketing\n08 - Serviços\n09 - Emergências\n10 - Outros\n"
          }
        }
      ]
    },
    {
      "id": "step04",
      "type": "whatsappEvent",
      "variables": {
        "dd1": "payload"
      }
    },
    {
      "id": "step05",
      "type": "branch",
      "label": "resposta"
    },
    {
      "id": "step06",
      "type": "sendWhatsAppActivity",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Nessa aba iremos te ajudar com soluções para contratações e demissões de funcionários, resoluções de conflitos, como detectar perfis, remanejos e técnicas de desenvolvimento de equipe. Temos alguns profissionais disponíveis no momento, você pode escolher com quem deseja fazer a consultoria. São eles:\n1 - José Mauro,  100 atendimentos e uma média de avaliação de 5 estrelas:\n(★ ★ ★ ★ ★).\n2 - Matheus Felipe, 25 atendimentos e uma média de avaliação de 2 estrelas.\n(★ ★ ☆ ☆ ☆).\n3 - Karine Souza, 250 atendimentos e uma média de avaliação de 4 estrelas:\n(★ ★ ★ ★ ☆).\n\n"
          }
        }
      ]
    },
    {
      "id": "step07",
      "type": "sendWhatsAppActivity",
      "label": "i1",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Nâo registrado"
          }
        }
      ]
    },
    {
      "id": "step08",
      "type": "whatsappEvent",
      "label": "r3",
      "variables": {
        "r3": "payload"
      }
    },
    {
      "id": "step09",
      "type": "branch",
      "label": "d2"
    },
    {
      "id": "step010",
      "type": "sendWhatsAppActivity",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Aguarde que logo você será atendido"
          }
        }
      ]
    },
    {
      "id": "step011",
      "type": "sendWhatsAppActivity",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Aguarde que logo você será atendido"
          }
        }
      ]
    },
    {
      "id": "step012",
      "type": "sendWhatsAppActivity",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Aguarde que logo você será atendido"
          }
        }
      ]
    },
    {
      "id": "step013",
      "type": "sendWhatsAppActivity",
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Tente outra opção"
          }
        }
      ]
    },
    {
      "id": "step014",
      "type": "sendWhatsAppActivity",
      "label": "d5",
      "properties": {
        "from": "#{session['whatsappFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Boa noite #{username}, meu nome é Mauro e eu vou te ajudar a resolver o seu problema empresarial. Vamos lá? "
          }
        }
      ]
    },
    {
      "id": "step016",
      "type": "sendWhatsAppActivity",
      "label": "d5",
      "properties": {
        "from": "#{session['whatsappFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Boa noite #{username}, meu nome é Matheus e eu vou te ajudar a resolver o seu problema empresarial. Vamos lá? "
          }
        }
      ]
    },
    {
      "id": "step018",
      "type": "sendWhatsAppActivity",
      "label": "d5",
      "properties": {
        "from": "#{session['whatsappFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "Boa noite #{username}, meu nome é Karine e eu vou te ajudar a resolver o seu problema empresarial. Vamos lá? "
          }
        }
      ]
    }
  ],
  "connections": [
    {
      "from": "step0",
      "to": "step02"
    },
    {
      "from": "step02",
      "to": "step03"
    },
    {
      "from": "step03",
      "to": "step04"
    },
    {
      "from": "step04",
      "to": "step05"
    },
    {
      "from": "step05",
      "to": "step06",
      "label": "1 - Recursos Humanos",
      "conditions": [
        {
          "type": "keywordCondition",
          "values": [
            "1"
          ]
        }
      ]
    },
    {
      "from": "step05",
      "to": "step07",
      "label": "Inválido",
      "isDefault": true
    },
    {
      "from": "step07",
      "to": "step04"
    },
    {
      "from": "step06",
      "to": "step08"
    },
    {
      "from": "step08",
      "to": "step09"
    },
    {
      "from": "step09",
      "to": "step010",
      "label": "Jose",
      "conditions": [
        {
          "type": "keywordCondition",
          "values": [
            "Jose"
          ]
        }
      ]
    },
    {
      "from": "step09",
      "to": "step011",
      "label": "Matheus",
      "conditions": [
        {
          "type": "keywordCondition",
          "values": [
            "Matheus"
          ]
        }
      ]
    },
    {
      "from": "step09",
      "to": "step012",
      "label": "Karine",
      "conditions": [
        {
          "type": "keywordCondition",
          "values": [
            "Karine"
          ]
        }
      ]
    },
    {
      "from": "step09",
      "to": "step013",
      "label": "Inválido",
      "isDefault": true
    },
    {
      "from": "step013",
      "to": "step08"
    },
    {
      "from": "step010",
      "to": "step014"
    },
    {
      "from": "step011",
      "to": "step016"
    },
    {
      "from": "step012",
      "to": "step018"
    },
    {
      "from": "step016",
      "to": "idEventoFinal"
    },
    {
      "from": "step014",
      "to": "idEventoFinal"
    },
    {
      "from": "step018",
      "to": "idEventoFinal"
    },
    {
      "from": "idEventoInicial",
      "to": "step0"
    }
  ],
  "defaultConversationalChannel": "WHATSAPP"
}
