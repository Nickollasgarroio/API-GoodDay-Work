export default async function hookDiscord(titulo, description, priority) {
    await fetch("https://discord.com/api/webhooks/1128071666115805265/vVJVJ43uhl2vEZyiIF8t-RAe--ab94nGzdpQ-Hrd9ksrTkRklgQq7kVww5ZsB2j3W03G", {
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
            if (res.ok) console.log("Success: Webhook Sent");
            else console.log("Not Success: Webhook Not Sent");
        })
        .catch(err => console.log(err))
}