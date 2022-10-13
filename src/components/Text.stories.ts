import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Text/Default',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet.'
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: { size: 'sm' }
}

export const Large: StoryObj<TextProps> = {
  args: { size: 'lg' }
}
