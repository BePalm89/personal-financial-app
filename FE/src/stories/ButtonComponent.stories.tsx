import { StoryFn, Meta } from '@storybook/react';
import { ButtonComponent } from "../components/ButtonComponent/ButtonComponent";

export default {
  title: "ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary", "destroy"],
    },
  },
} as Meta;

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "destroy";
}

const Template: StoryFn<ButtonComponentProps> = (args: ButtonComponentProps) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary Button",
  variant: "primary",
  disabled: false
}

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  label: "Primary Disabled Button",
  variant: "primary",
  disabled: true
}

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  disabled: false
}

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  label: "Secondary Disabled Button",
  variant: "secondary",
  disabled: true
}

export const Tertiary = Template.bind({});

Tertiary.args = {
  label: "Tertiary Button",
  variant: "tertiary",
  disabled: false
}

export const TertiaryDisabled = Template.bind({});

TertiaryDisabled.args = {
  label: "Tertiary Disabled Button",
  variant: "tertiary",
  disabled: true
}

export const Destroy = Template.bind({});

Destroy.args = {
  label: "Destroy Button",
  variant: "destroy",
  disabled: false
}

export const DestroyDisabled = Template.bind({});

DestroyDisabled.args = {
  label: "Destroy Disabled Button",
  variant: "destroy",
  disabled: true
}