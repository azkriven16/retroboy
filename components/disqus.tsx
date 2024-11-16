"use client";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus({ url, identifier, title }: any) {
    return (
        <DiscussionEmbed
            shortname="thenextgameplatformv2"
            config={{
                url: url,
                identifier: identifier,
                title: title,
                language: "EN",
            }}
        />
    );
}