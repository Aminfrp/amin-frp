import { Card, CardContent } from "@mui/material"
type Props = {
  children?: JSX.Element;
};

const Body:React.FC<Props> = () => {
  return (
    <Card>
      <CardContent>
        Body
      </CardContent>
    </Card>
  )
}

export default Body