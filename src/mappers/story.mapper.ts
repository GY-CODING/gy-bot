import { Story } from "../domain/story";

export const storyFromDTO = (obj: any): Story => {
  const story: Story = {
    identifier: obj.identifier,
    title: obj.title,
    text: obj.text,

    toString: () => {
      return `# ${story.title}\n${story.text.slice(0, 800)}`;
    }
  };

  return story;
};
