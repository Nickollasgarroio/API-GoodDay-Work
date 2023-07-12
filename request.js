import getGoodDay from "./getGoodDay.js" //Get Tasklists from GoodDay.work Project
import postGoodDay from "./postGoodDay.js" //create GoodDay Task
import hookDiscord from "./hookDiscord.js" //Send Webhook to Discord, to alert


async function alerts(titulo, description, priority) {
    try {
        await postGoodDay(titulo, description, priority);
        await hookDiscord(titulo, description, priority);
        console.log("Alerta completo");
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

alerts("Teste Integrado Discord e Webhook 5 (FINAL)", "Descrição teste integrado", 50);