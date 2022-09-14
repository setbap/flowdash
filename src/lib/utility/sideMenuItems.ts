import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { DiGoogleAnalytics } from "react-icons/di";
import { AiFillPicture } from "react-icons/ai";

export default [
  { name: "Home", path: "/", icon: FiHome },
  { name: "NFTs Information", path: "/nfts_information", icon: AiFillPicture },
  { name: "Deep Dive", path: "/all_day_deep_dive", icon: DiGoogleAnalytics },
  { name: "NFT Analysis", path: "/nft_analysis", icon: DiGoogleAnalytics },
  {
    name: "Player Analysis",
    path: "/player_analysis",
    icon: DiGoogleAnalytics,
  },
  { name: "Team Analysis", path: "/team_analysis", icon: DiGoogleAnalytics },
  { name: "About", path: "/about", icon: AiOutlineInfoCircle },

  // { name: "TX History", path: "/transactions", icon: AiOutlineInfoCircle },
];
