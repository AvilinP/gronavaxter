class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    //Skapar meddelandet som roboten ska ge
    greet = () => { 
        const message = this.createChatBotMessage("Hello! How can i help you?")
        this.addMessageToState(message); 


    }

    addMessageToState = (message) => { 
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]

        }))

    }
  }
  
  export default ActionProvider;