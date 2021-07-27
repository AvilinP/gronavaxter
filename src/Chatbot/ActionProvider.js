class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    //Skapar meddelanden baserat vad kunden frågar efter
    greet = () => { 
        const message = this.createChatBotMessage("Välkommen!")
        this.addMessageToState(message); 
    }
    delivery = () => { 
        const message = this.createChatBotMessage("Din vara skickas inom 1-3 vardagar efter beställning. Var det något mer jag kan hjälpa dig med?")
        this.addMessageToState(message)
    }
    careAdvice = () => { 
        const message = this.createChatBotMessage("Du kan läsa om hur du sköter din planta på vår produktsida under kanppen SKÖTSELRÅD")
        this.addMessageToState(message)
    }
    bye = () => { 
        const message = this.createChatBotMessage("Tack själv, ha en fortsatt fin dag!")
        this.addMessageToState(message)
    }





    addMessageToState = (message) => { 
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]

        }))

    }
  }
  
  export default ActionProvider;