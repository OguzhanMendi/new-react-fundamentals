export default function Footer({systemUsers}){
    return(
        <div style={{
            background:"darkgray",
            width:"100%"
        }}>

            <h1>Bu Kısım Footer</h1>
            <p>{systemUsers.length}</p>
        </div>
    )
}