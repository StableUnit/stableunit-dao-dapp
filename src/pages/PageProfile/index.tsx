import React, { useContext } from "react";

import { ButtonGradient, GradientBorder, GradientHref, ProgressBar, Tooltip } from "ui-kit";
import { Input } from "components/Input";
import { GovernanceChart } from "components/GovernanceChart";
import { StateContext } from "reducer/constants";
import { LvlIcon } from "ui-kit/images/icons";
import { getShortAddress } from "utils/network";

import "./styles.scss";

export const PageProfile = () => {
    const { currentAddress } = useContext(StateContext);

    const currentXP = 77555;
    const lvlStartXP = 68637;
    const lvlEndXP = 81961;
    const percent = ((currentXP - lvlStartXP) / (lvlEndXP - lvlStartXP)) * 100;

    const nftUrl = "/images/NFT-test.png";

    const handleContribute = async () => {
        window.open("https://discord.gg/puMeUhUpJf", "_blank");
    };

    return (
        <div className="profile-page">
            <GradientBorder borderRadius={24} className="contribute-container">
                <div className="contribute">
                    <GradientBorder borderRadius={80} className="contribute__nft-image">
                        <img src={nftUrl} />
                    </GradientBorder>
                    <div className="contribute__title">DAO Profile</div>

                    {currentAddress && (
                        <GradientHref className="contribute__address">{getShortAddress(currentAddress)}</GradientHref>
                    )}

                    <Input text="Level in the DAO" value={19} Icon={LvlIcon} />

                    <div className="contribute__progress-bar__title">Experience points</div>
                    <ProgressBar className="contribute__progress-bar" percent={percent} />
                    <div className="contribute__progress-bar__description">
                        {lvlEndXP - currentXP} XP left for leveling up
                    </div>

                    <div className="contribute__mcap__title">
                        Marketcap requirement to transfer&nbsp;
                        <Tooltip id="contribute-transfer-tooltip">
                            <span>
                                To be able to transfer your NFT, the suDAO token's market capitalization should be
                                higher than the amount displayed.
                                <br />
                                The higher your level, the lower the requirement.
                            </span>
                        </Tooltip>
                    </div>

                    <div className="contribute__mcap__description">10 000 000</div>

                    <ButtonGradient className="contribute__button" onClick={handleContribute}>
                        Contribute
                    </ButtonGradient>
                </div>
            </GradientBorder>
            <GovernanceChart />
        </div>
    );
};
