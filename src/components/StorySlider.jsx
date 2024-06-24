import Story from "./Story";

const StorySlider = ( props ) => {
  return (
    <div className="stories">
      {
        props.stories.map((story) => (
          <Story
            thumbnail={story.thumbnailUrl}
            video={story.videoUrl}
            key={story.id}
            currentKey={story.id}
            // currentIndexHook={currentIndexHook}
            onClick={() => {
              props.updateActiveState(true);
              // console.log(currentIndexHook[0])
            }}
          />
        ))
      }
    </div>
  )
}

export default StorySlider;