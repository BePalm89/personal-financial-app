import React from "react";
import { TextComponent } from "../TextComponent/TextComponent";
import { useTheme } from "@emotion/react";
import './HeroBoxDesktop.scss';
export const HeroBoxDesktop: React.FC = () => {

    const theme = useTheme();
    
    return (
        <div
        className="login-img-container"
        style={{
          padding: theme.space[500],
        }}
      >
        <div>
          <img src="/img/logo-large.svg" alt="logo img" />
        </div>
        <div className="text-container">
          <TextComponent
            text="Keep track of your money and save for your future"
            variant="heading1"
            color="white"
          />
          <TextComponent
            text="Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily."
            variant="heading4Reg"
            color="white"
          />
        </div>
      </div>
    )
}