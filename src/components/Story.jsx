const Story = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="story" onClick={() => {
      props.onClick();
      // props.currentIndexHook[1](props.currentKey);
    }}>
      <div className="story-ring"></div>
      <div className="story-img">
        <img src={props.thumbnail} alt="Thumbnail" />
      </div>
    </div>
  );
};

export default Story;
