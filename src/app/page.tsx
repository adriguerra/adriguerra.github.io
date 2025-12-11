import React from "react";
import Image from "next/image";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
  IconButton,
} from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import {
  home,
  about,
  person,
  newsletter,
  social,
} from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="xl" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
          {/* Full-width container for text & image */}
          <Flex
            fillWidth
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between", // Pushes text left & image right
              gap: "2rem",
              width: "100%", // Ensures it takes the full screen width
              maxWidth: "1200px", // Keeps content centered and readable
              margin: "0 auto", // Centers content horizontally
              padding: "0 1rem", // Adds spacing on the sides
            }}
          >
            {/* Left Side: Text Section */}
            <Column fillWidth style={{ flex: "1" }}>
              <Image
                src="/images/adriguerra_white.svg"
                alt="Adri Guerra"
                width={480}
                height={120}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                variant="heading-default-xl"
                style={{ marginTop: "1rem" }}
              >
                {home.subline}
              </Text>
              {/* Social Icons Section */}
              {social.length > 0 && (
                <Flex
                  paddingTop="20"
                  paddingBottom="8"
                  gap="8"
                  wrap
                  horizontal="start"
                  fitWidth
                >
                  {social.map(
                    (item) =>
                      item.link && (
                        <>
                          {/* Button for Larger Screens */}
                          <Button
                            className="s-flex-hide"
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            variant="secondary"
                          />
                          {/* Icon Button for Smaller Screens */}
                          <IconButton
                            className="s-flex-show"
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </>
                      )
                  )}
                </Flex>
              )}
            </Column>

            {/* Right Side: Image */}
            <Column
              style={{
                flex: "0 0 35%", // Ensures image takes up 35% of space
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={person.avatar}
                alt="Adrian Guerra"
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "30%",
                  objectFit: "cover",
                }}
              />
            </Column>
          </Flex>
        </RevealFx>
      </Column>
      {routes["/blog"] && (
        <Column fillWidth paddingX="l" gap="m">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Latest from the blog
          </Heading>
          <Flex fillWidth paddingX="20">
            <Posts range={[1, 2]} columns="2" thumbnail={true} />
          </Flex>
        </Column>
      )}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
