const Story = (props) => {
  return (
    <div>
      <img src={props.thumbnail} alt="thumbail" />
      <p>{props.link}</p>
    </div>
  )
}

export default Story;