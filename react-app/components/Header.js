export default function Header(params){

    return(
        <div style={{
            background:"aqua",
            width:"100%",
        }}>
            <h1>Header</h1> <p>{params.systemUsers.length}</p>
        </div>
        
    )
}