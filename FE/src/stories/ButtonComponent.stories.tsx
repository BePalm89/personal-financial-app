import { StoryFn, Meta } from '@storybook/react';
import { ButtonComponent } from "../components/ButtonComponent/ButtonComponent";

export default {
  title: "ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline", "ghost"],
    },
  },
} as Meta;

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "solid" | "outline" | "ghost";
}

const Template: StoryFn<ButtonComponentProps> = (args: ButtonComponentProps) => <ButtonComponent {...args} />;

export const Solid = Template.bind({});

Solid.args = {
    label: "Solid Button",
    variant:'solid'
}

export const Outline = Template.bind({});

Outline.args = {
    label: "Outline Button",
    variant:'outline'
}

export const Ghost = Template.bind({});

Ghost.args = {
    label: "Ghost Button",
    variant:'ghost'
}

export const Disabled = Template.bind({});

Disabled.args = {
  label: "Disabled Button",
  variant: 'solid',
  disabled: true
}