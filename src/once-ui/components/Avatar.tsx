"use client";

import React, { forwardRef } from "react";

import { Skeleton, Icon, Text, StatusIndicator, Flex, SmartImage } from ".";
import styles from "./Avatar.module.scss";

interface AvatarProps extends React.ComponentProps<typeof Flex> {
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  value?: string;
  src?: string;
  loading?: boolean;
  empty?: boolean;
  statusIndicator?: {
    color: "green" | "yellow" | "red" | "gray";
  };
  style?: React.CSSProperties;
  className?: string;
}

const sizeMapping: Record<"xs" | "s" | "m" | "l" | "xl" | "xxl", number> = {
  xs: 20,
  s: 24,
  m: 32,
  l: 48,
  xl: 160,
  xxl: 320,
};

const statusIndicatorSizeMapping: Record<
  "xs" | "s" | "m" | "l" | "xl",
  "s" | "m" | "l"
> = {
  xs: "s",
  s: "s",
  m: "m",
  l: "m",
  xl: "l",
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = "m",
      value,
      src,
      loading,
      empty,
      statusIndicator,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isEmpty = empty || (!src && !value);

    if (value && src) {
      throw new Error("Avatar cannot have both 'value' and 'src' props.");
    }

    if (loading) {
      return (
        <Skeleton
          {...rest}
          border="neutral-medium"
          shape="circle"
          width={size}
          height={size}
          className={`${styles.avatar} ${className}`}
          aria-busy="true"
          aria-label="Loading avatar"
        />
      );
    }

    const renderContent = () => {
      if (isEmpty) {
        return (
          <Icon
            onBackground="neutral-medium"
            name="person"
            size={size as "xs" | "s" | "m" | "l" | "xl" | "xxl"}
            className={styles.icon}
            aria-label="Empty avatar"
          />
        );
      }

      if (src) {
        return (
          <SmartImage
            src={src}
            fill
            alt="Avatar"
            sizes={`${sizeMapping[size]}px`}
            className={styles.image}
            style={{
              width: `${sizeMapping[size]}px`,
              height: `${sizeMapping[size]}px`,
              borderRadius: "30%", // ✅ Rounded corners instead of a full circle
            }}
          />
        );
      }

      if (value) {
        return (
          <Text
            as="span"
            onBackground="neutral-weak"
            variant={`body-default-${size}`}
            className={styles.value}
            aria-label={`Avatar with initials ${value}`}
          >
            {value}
          </Text>
        );
      }

      return null;
    };

    return (
      <Flex
        ref={ref}
        role="img"
        position="relative"
        horizontal="center"
        vertical="center"
        radius="full"
        border="neutral-strong"
        background="surface"
        style={style}
        className={`${styles.avatar} ${styles[size]} ${className || ""}`}
        {...rest}
      >
        {renderContent()}
        {statusIndicator && (
          <StatusIndicator
            size={statusIndicatorSizeMapping[size]}
            color={statusIndicator.color}
            className={`${styles.className || ""} ${styles.indicator} ${
              size === "xl" ? styles.position : ""
            }`}
            aria-label={`Status: ${statusIndicator.color}`}
          />
        )}
      </Flex>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarProps };
