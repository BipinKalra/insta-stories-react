import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import StorySlider from '../../components/StorySlider';

describe('Story Slider', () => {
  it('should render no stories when stories list is empty', () => {
    const { container } =render(<StorySlider stories={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should render a list of stories when stories list is not empty', () => {
    const profiles = [
      {
        "id": "1",
        "name": "ABC",
        "profileUrl": "https://img.freepik.com/free-photo/man-having-video-call-with-his-family_23-2149120895.jpg"
      },
      {
        "id": "2",
        "name": "XYZ",
        "profileUrl": "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp"
      }
    ]

    render(<StorySlider stories={profiles} />);

    const stories = screen.getAllByRole("img");

    expect(stories).toHaveLength(2);
    stories.forEach((story, index) => {
      expect(stories[index]).toHaveAttribute("src", profiles[index].profileUrl)
    })
  });
})