import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import classnames from "classnames";

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    //   layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    //   backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof Button>;
  
  export default meta;

  type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

/** This is a  primary button */
export const Primary: Story = {
  args: {
    // primary: true,
    text: 'Button',
    classes: {root: classnames('button','button--primary')}
  },
};

/** This is a secondary button */

export const Secondary: Story = {
    args: {
      text: 'Button',
      classes: {root: classnames('button', 'button--secondary')}
    },
  };


/** This is a large button */
  
  export const Large: Story = {
    args: {
      size: 'large',
      text: 'large button',
      classes: {root: classnames('button', 'button--outline-primary')}

    },
  };


  /** This is a small button */

  export const Small: Story = {
    args: {
      size: 'small',
      text: 'Button',
      classes: {root: classnames('button', 'button--outline-secondary')}
    },
  };