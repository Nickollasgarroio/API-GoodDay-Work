export default function getGoodDay() {
    fetch("https://api.goodday.work/2.0/project/9NjgOq/tasks?gd-api-token=4768dcf94bf04f69a7213f0b060173fe",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(res => {
            if (res.ok) console.log("Success");
            else console.log("Not Success");
            return res.json()
        })
        .then(data => console.log(data))
        .catch((error) => { console.log(error); })
}
