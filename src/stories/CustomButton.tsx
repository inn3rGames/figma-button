import React from "react";
import { Button } from "antd";
import { FireFilled } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import "./CustomButton.css";

interface CustomButtonProps {
    primary?: boolean;

    label: string;

    onClick?: () => void;

    theme: "default" | "outline" | "empty" | "faded";

    radius: "simple" | "round" | "circle";

    size: "xs" | "sm" | "md" | "lg" | "xl";
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
    primary = false,
    label,
    theme,
    radius,
    size,
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
                className={theme + " " + radius + " " + "main-" + size}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    border: borderType,
                }}
            >
                <FireFilled className={theme + " " + "plus-" + size} />
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
                        className={theme + " " + "font-" + size}
                    >
                        &nbsp;button
                    </div>
                    <div
                        id="custom-button-number"
                        className={theme + " " + "font-" + size}
                        style={{ opacity: "0.5" }}
                    >
                        &nbsp;/&nbsp;02&nbsp;
                    </div>
                </div>
                <FireFilled className={theme + " " + "plus-" + size} />
            </Button>
            <Button
                className={theme + " " + radius + " " + "square-" + size}
                style={{
                    marginLeft: "5%",
                    border: borderType,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <PlusOutlined className={theme + " " + "plus-" + size} />
            </Button>
        </div>
    );
};
