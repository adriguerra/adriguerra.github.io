"use client";

import {
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={`/blog/${post.slug}`}
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <div className={styles.imageWrapper}>
            {/* 👈 Ensures a square aspect ratio */}
            <SmartImage
              priority
              maxWidth={20}
              className={styles.image}
              sizes="640px"
              border="neutral-alpha-weak"
              cursor="interactive"
              radius="m"
              src={post.metadata.image}
              alt={"Thumbnail of " + post.metadata.title}
              objectFit="cover" // 👈 Crops the image to fit within the square
            />
          </div>
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
          {post.metadata.tag &&
            Array.isArray(post.metadata.tag) &&
            post.metadata.tag.length > 0 && (
              <Flex gap="8" wrap>
                {post.metadata.tag.map((tag) => (
                  <Tag
                    key={tag}
                    className="mt-8"
                    label={tag}
                    variant="neutral"
                  />
                ))}
              </Flex>
            )}
        </Column>
      </Flex>
    </SmartLink>
  );
}
