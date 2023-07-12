import getGoodDay from "./getGoodDay.js"
import postGoodDay from "./postGoodDay.js"
import hookDiscord from "./hookDiscord.js"

// postGoodDay("teste 10 api import com hook discord", "aa", 100)
// getGoodDay()
// hookDiscord()
// await hookDiscord("TESTE", "DESCRIPTION", "PRIORIDADE")

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