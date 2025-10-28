import Filters from "../components/Filters/Filters";
import PokemonGrid from "../components/PokemonContainer/Grid";
import styles from "./Home.module.css"
import { Home as HomeTemplate } from "../templates/Home"
import { useState } from "react";
import { Alert } from "@mui/material";
import Messageblock from "../components/Messageblock";

const Home = () => {

  const [messages, setMessages] = useState(null);
  
  return (
    <div className={styles.appContainer}>
      <HomeTemplate>
        <Filters setMessages={setMessages} />
        <PokemonGrid setMessages = {setMessages} />
      </HomeTemplate>

      <Messageblock messages = {messages} setMessages = {setMessages}/>

    </div>
  );
};

export default Home;