import Story from "./Story";

const StorySlider = (props) => {
  if (props.stories?.length === 0) return null;

  return (
    <div className="stories" title="stories">
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
