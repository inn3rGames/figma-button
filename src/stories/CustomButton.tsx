import React from "react";
import { Button } from "antd";
import { FireFilled } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";

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
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    contentColor: string;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    contentColor,
    ...props
}: CustomButtonProps) => {
    return (
        <div
            id="custom-button"
            {...props}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: backgroundColor,
                }}
            >
                <FireFilled style={{ color: contentColor }} />
                <div
                    id="custom-button-content"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        id="custom-button-text"
                        style={{ color: contentColor }}
                    >
                        &nbsp;button
                    </div>
                    <div
                        id="custom-button-number"
                        style={{ color: contentColor, opacity: "0.5" }}
                    >
                        &nbsp;/&nbsp;02&nbsp;
                    </div>
                </div>
                <FireFilled style={{ color: contentColor }} />
            </Button>
            <Button
                style={{
                    marginLeft: "5%",
                    backgroundColor: backgroundColor,
                    color: contentColor,
                }}
            >
                <PlusOutlined style={{ color: contentColor }} />
            </Button>
        </div>
    );
};
