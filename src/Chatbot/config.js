import { createChatBotMessage } from "react-chatbot-kit";

//Gröna växters bot kan svara på när varan skickas vid beställning och vart
//man hittar skötselråd om plantan på vår hemsida.  

const config = {
    botName: "Gröna växters bot",

    initialMessages: [createChatBotMessage(`Hej! Jag kan svara på när din vara skickas vid en beställning och vart du hittar skötselråd på vår hemsida :)`)]
}

export default config