import { useParams } from "react-router-dom"

const PersonDetail = () => {
  const { name } = useParams()
  console.log(name);
  return (
    <div>PersonDetail</div>
  )
}

export default PersonDetail