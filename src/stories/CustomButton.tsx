import React from 'react';
import { Button } from 'antd';
import { FireFilled } from '@ant-design/icons';
import { PlusSquareOutlined } from '@ant-design/icons';

interface CustomButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CustomButtonProps) => {
  return (

    <Button {...props}><FireFilled />button / 02<FireFilled /></Button>

  );
};
