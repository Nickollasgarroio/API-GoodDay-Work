/**
 * 
 * @param nomeTarefa Titulo da Tarefa
 * @param priority Priority da Tarefa
 * 
 */
export default function postGoodDay(nomeTarefa, priority) {
    fetch("https://api.goodday.work/2.0/tasks?gd-api-token=4768dcf94bf04f69a7213f0b060173fe",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    projectId: '9NjgOq',
                    title: nomeTarefa,
                    fromUserId: 'i1Ml2c',
                    priority: priority,
                }
            )
        })

        .then(res => {
            if (res.ok) console.log("Success");
            else console.log("Not Success");
            return res.json()
        })
        .then(data => console.log(data))
        .catch((error) => { console.log(error); })
}
