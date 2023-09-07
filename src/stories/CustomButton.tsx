import React from "react";
import { Button } from "antd";
import { FireFilled } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import "./CustomButton.css";

interface CustomButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
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

    theme: "default" | "outline" | "empty" | "faded";

    radius: "simple" | "round" | "circle";
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
    primary = false,
    size = "medium",
    label,
    theme,
    radius,
    ...props
}: CustomButtonProps) => {
    const borderType = theme === "outline" ? "solid 1px #E5EDFF" : "none";
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
                className={theme + " " + radius}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    border: borderType,
                }}
            >
                <FireFilled className={theme} />
                <div
                    id="custom-button-content"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div id="custom-button-text" className={theme}>
                        &nbsp;button
                    </div>
                    <div
                        id="custom-button-number"
                        className={theme}
                        style={{ opacity: "0.5" }}
                    >
                        &nbsp;/&nbsp;02&nbsp;
                    </div>
                </div>
                <FireFilled className={theme} />
            </Button>
            <Button
                className={theme + " " + radius}
                style={{
                    marginLeft: "5%",
                    border: borderType,
                }}
            >
                <PlusOutlined className={theme} />
            </Button>
        </div>
    );
};
