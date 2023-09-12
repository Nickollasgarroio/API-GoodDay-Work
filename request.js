import getGoodDay from "./getGoodDay.js"; // Get Tasklists from GoodDay.work Project
import postGoodDay from "./postGoodDay.js"; // Create GoodDay Task
import hookDiscord from "./hookDiscord.js"; // Send Webhook to Discord to alert
import fetchDataApiGoogleSheets from './fetchDataApiGoogleSheets.mjs';

async function alerts() {
    try {
        const { date, title, description, priority } = await fetchDataApiGoogleSheets();
        await Promise.all(
            [
                postGoodDay(title, description, priority),
                hookDiscord(title, description, priority)
            ]
        );
        console.log("Alerta completo");
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

(async () => {
    await alerts();
})();
