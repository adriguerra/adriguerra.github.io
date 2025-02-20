"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Fade,
  Flex,
  Text,
  Line,
  ToggleButton,
  Column,
} from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import Image from "next/image";

import TimeDisplay from "@/components/TimeDisplay";

import { routes, display } from "@/app/resources";
import {
  person,
  home,
  about,
  blog,
  work,
  gallery,
} from "@/app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        {/* Left: Logo */}
        <Flex
          style={{ flex: 1, minWidth: "200px" }}
          horizontal="start"
          vertical="center"
          hide="s"
        >
          <Image
            src="/images/adriguerra_white.svg"
            alt="Logo"
            width={240}
            height={60}
          />
        </Flex>

        {/* Center: Navigation */}
        <Flex flex={2} horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="2"
            horizontal="center"
          >
            <Flex gap="0" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="home"
                    href="/"
                    label="Home"
                    selected={pathname === "/"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="home"
                    href="/"
                    selected={pathname === "/"}
                  />
                </>
              )}
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* Right: Time above, Location below */}
        <Flex
          style={{ flex: 1, minWidth: "200px" }}
          paddingRight="12"
          vertical="center"
          horizontal="end"
          hide="s"
        >
          {display.time && (
            <Column horizontal="center" gap="4">
              {/* Time with Clock Emoji 🕒 (Ensures one line) */}
              <Flex horizontal="center" vertical="center" gap="4">
                <Text variant="body-default-m">
                  <TimeDisplay timeZone={person.location} />
                </Text>
              </Flex>

              {/* Location with Pin Emoji 📍 (Ensures one line) */}
              <Flex horizontal="center" vertical="center" gap="4">
                <Text variant="body-default-s">📍</Text>
                <Text variant="body-default-s">{person.location}</Text>
              </Flex>
            </Column>
          )}
        </Flex>
      </Flex>
    </>
  );
};
