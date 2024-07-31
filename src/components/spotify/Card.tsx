'use client';
import { useEffect, useState } from "react";
import {
    Box,
    Stack,
    Image,
    Text,
    Link,
    Spinner,
} from "@chakra-ui/react";
import styled from "styled-components";
import getNowPlayingItem from "~/api/Spotify";
import SpotifyLogo from "./Logo";
import PlayingAnimation from "./Animation";
import { motion } from "framer-motion";

const SpotifyNowPlaying = (props: any) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<any>({});

    useEffect(() => {
        const fetchNowPlayingItem = async () => {
            try {
                const [nowPlayingResult] = await Promise.all([
                    getNowPlayingItem(
                        props.client_id,
                        props.client_secret,
                        props.refresh_token
                    ),
                ]);
                setResult(nowPlayingResult);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching now playing item:", error);
                setLoading(false);
            }
        };

        fetchNowPlayingItem();
    }, []);

    return (
        <div>
            {loading ? (
                <motion.div
                    initial={{ opacity: 0, translateY: -30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Spinner size="md" speed="0.6s" color="gray.500" />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, translateY: -30 }}
                    animate={{ opacity: 1, translateY: 0 }}

                    className="text-white[0.8] font-light text-sm">
                    <div className="flex items-center text-center justify-center ">
                        {result.isPlaying ? <PlayingAnimation /> : <SpotifyLogo/>}
                        <p className="mx-2 flex">
                            {result.isPlaying ? "Now Listening" : ` I'm currently offline`}
                        </p>
                    </div>
                    {result.isPlaying && (
                        <div>
                            <span className=""> {result.title}  </span> <span className="text-white/[0.7] italic"> by {result.artist} </span>
                            <div className="flex items-center text-center justify-center ">
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>

    );
};

export default SpotifyNowPlaying;