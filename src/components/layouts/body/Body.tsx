import About from "./about";
type Props = {
  children?: JSX.Element;
};

const Body:React.FC<Props> = () => {
  return (
    <>
      <About/>
    </>
  )
}

export default Body