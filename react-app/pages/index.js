import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send';

export default function Home(){
  const users  =["Ahmet","Mehmet","Ali","Veli","Ayşe"];

  //PROPS AKTARIMI 

  
  return (
    <div>
      <Header systemUsers={users}/>
     
      <h2>Hello World!</h2>
      <Button variant="contained" startIcon={<DeleteIcon/>} size="large" style={{
        background:"#5c4079",
        marginLeft:"10px"
        
        }}>Contained</Button>
        <Button variant="contained" size="large" endIcon={<SendIcon />}>Contained</Button>


      <p>Selammmmm</p>
      {JSON.stringify(users)}

      <Footer systemUsers={users}/>
    </div>
  )
}

