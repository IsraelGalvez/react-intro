import './css/Title.css'

function Title({ completed, todos }) {
    return(
        <h1 className="h1">{`Has completado ${completed} de ${todos} Todos`}</h1>
    )
}

export default Title