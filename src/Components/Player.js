
import Card from 'react-bootstrap/Card';
const Player = ({imageUrl , name , team , nationality, jerseyNumber , age}) =>{
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Team: {team}</Card.Title>
        <Card.Title>Nationality: {nationality}</Card.Title>
        <Card.Title>Number: {jerseyNumber}</Card.Title>
          <Card.Text>
            Age: {age}
          </Card.Text>
         
        </Card.Body>
      </Card>
      
    )
}

Player.defaultProps= {
   
    imageUrl:"https://cdn.create.vista.com/api/media/small/259415562/stock-photo-illustration-forbidden-icon",
    name : "Player",
    team : "None",
    nationality :"Unknown",
    jerseyNumber: 0,
    age:"Invalid"
    }



export default Player