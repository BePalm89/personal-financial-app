import { Meta, StoryFn } from "@storybook/react";
import { TextComponent } from "../components/TextComponent/TextComponent";

export default {
  title: "TextComponent",
  component: TextComponent,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "heading1",
        "heading2",
        "heading3",
        "heading4Reg",
        "heading4Bold",
        "heading5Reg",
        "heading5Bold",
      ],
    },
  },
} as Meta;

interface TextComponentProps {
    text: string;
    variant: "heading1" | "heading2" | "heading3" | "heading4Reg" | "heading4Bold" | "heading5Reg" | "heading5Bold";
    link?: string;
    color?: string;
};

const Template: StoryFn<TextComponentProps> = (args: TextComponentProps) => <TextComponent {...args}/>

export const Heading1 = Template.bind({});

Heading1.args = {
    text: "Heading 1",
    variant: "heading1"
}

export const Heading2 = Template.bind({});

Heading2.args = {
    text: "Heading 2",
    variant: "heading2"
}

export const Heading3 = Template.bind({});

Heading3.args = {
    text: "Heading 3",
    variant: "heading3"
}

export const Heading4Reg = Template.bind({});

Heading4Reg.args = {
    text: "Heading 4 Regular",
    variant: "heading4Reg"
}

export const Heading4Bold = Template.bind({});

Heading4Bold.args = {
    text: "Heading 4 Bold",
    variant: "heading4Bold"
}

export const Heading5Reg = Template.bind({});

Heading5Reg.args = {
    text: "Heading 5 Regular",
    variant: "heading5Reg"
}

export const Heading5Bold = Template.bind({});

Heading5Bold.args = {
    text: "Heading 5 Bold",
    variant: "heading5Bold"
}

export const Heading1CustomColor = Template.bind({});

Heading1CustomColor.args = {
    text: "Heading Custom Color",
    variant: "heading1",
    color: "deeppink"
}

export const Heading4WithLink = Template.bind({});

Heading4WithLink.args = {
    text: "Heading 4 with link",
    variant: 'heading4Reg',
    link: "Test link"
}