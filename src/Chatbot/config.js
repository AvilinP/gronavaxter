import { createChatBotMessage } from "react-chatbot-kit";

//Gröna växters bot kan svara på när varan skickas vid beställning och vart
//man hittar skötselråd om plantan på vår hemsida.  

const config = {
    botName: "Gröna växters bot",

    initialMessages: [createChatBotMessage(`Hej, hur kan jag hjälpa dig?`)]
}

export default config