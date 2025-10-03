
const CafeList = ({cafes, onSelectCafe}) => {
  return (
    <div style={{ width: "25%", overflowY: "auto", borderRight: "1px solid #ccc", padding: "10px" }}>
    <h3>Cafes NearBy</h3>
    <ul style={{listStyle:"none", padding:0, margin:0}}>
        {cafes.map((cafe)=>{
            return(
                <li
                key={cafe.id}
                style={{
                padding:"8px",
                cursor:"pointer",
                borderBottom:"1px solid #eee",   
                }}
                 onClick={()=> onSelectCafe(cafe)}
                >
                    {cafe.name}
                </li>
            )
        })}

    </ul>
    </div>
  )
}

export default CafeList