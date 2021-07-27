class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

        if (lowercase.includes("hej")) { 
            this.actionProvider.greet(); 
        }
        if (lowercase.includes("hejsan")) { 
            this.actionProvider.greet(); 
        }
        if (lowercase.includes("skickas")) { 
            this.actionProvider.delivery(); 
        }
        if (lowercase.includes("beställning")) { 
            this.actionProvider.delivery(); 
        }
        if (lowercase.includes("skötsel")) {
            this.actionProvider.careAdvice(); 
        }
        if (lowercase.includes("sköter")) {
            this.actionProvider.careAdvice(); 
        }
        if (lowercase.includes("tack")) {
            this.actionProvider.bye(); 
        }
        if (lowercase.includes("inget mer")) {
            this.actionProvider.bye(); 
        }
    }
  }
  
  export default MessageParser;