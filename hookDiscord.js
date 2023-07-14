export default async function hookDiscord(titulo, description, priority) {
    await fetch("https://discord.com/api/webhooks/1128810109871599696/pDtul6qt_FRzlZuDMn86fxumk5FF9imwsPYa0eLNH_7TDzEsPHD3agLahnPSbq2qdK3u", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": "NOVO SUPORTE!!",
            "embeds": [
                {
                    "title": titulo,
                    "description": `Suporte com descrição:${description} com prioridade de ${priority}`,
                    "color": 5814783
                }
            ],
            "attachments": []
        })
    })
        .then(res => {
            if (res.ok) console.log("(Discord) Success: Webhook Sent");
            else console.log("(Discord) Not Success: Webhook Not Sent");
        })
        .catch(err => console.log(err))
}
