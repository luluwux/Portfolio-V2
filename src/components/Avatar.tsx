import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Contents } from '~/contents/Sentences';

function Avatar() {
  const [status, setStatus] = useState("");
  const [avatarURL, setAvatarURL] = useState<string | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);


  useEffect(() => {
    async function fetchAvatarURL() {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${Contents.DiscordID ? Contents.DiscordID : '852103749228036136'}`);
        const data = await response.json();
        const avatar = data?.data?.discord_user?.avatar;
        if (avatar) {
          const fileExtension = avatar.startsWith("a_") ? "gif" : "webp";
          const url = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${avatar}.${fileExtension}?size=128`;
          setAvatarURL(url);
          setStatus(data?.data?.discord_status);

        }
      } catch (error) {
        console.error("Error fetching avatar URL:", error);
      }
    }

    fetchAvatarURL();
  }, []);

  if (!avatarURL) {
    return null;
  }


  return (
    <motion.div
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{
        position: "relative",
        width: "50px",
        height: "50px",
        borderRadius: "50%"
      }}
    >
      {avatarURL ? (
        <>
          <img
            src={avatarURL}
            alt="Discord Avatar"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
}




export default Avatar;