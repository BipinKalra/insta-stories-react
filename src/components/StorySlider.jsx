import Story from "./Story";

const StorySlider = (props) => {
  return (
    <div className="stories">
      {props.stories.map((story) => (
        <Story
          thumbnail={story.profileUrl}
          key={story.id}
          onClick={() => {
            props.onSelect(story);
          }}
        />
      ))}
    </div>
  );
};

export default StorySlider;
