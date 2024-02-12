
export default async function Test() {
    await fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/dk%20showmaker/001?api_key=${process.env.NEXT_RIOT}`).then((r) => r.json())
        .then((result) => {
            console.log(result)
        })
    return (
        <div>
            test page
        </div>
    )
} 