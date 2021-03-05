import React from "react";
import YTLogo from "../static/images/channelLogo.webp";

const YTSection = () => (
  <section id="youtube-section">
    <div className="heading">
      <span className="secondary-heading">subscribe to my youtube channel</span>
    </div>
    <div className="content">
      <div className="row">
        <div className="col s12">
          <div className="yt-description">
            <div className="yt-logo">
              <a
                href="https://www.youtube.com/channel/UCml6W5F8GW1X5y33AG0DfUw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-responsive" src={YTLogo} alt="yt-logo" />
              </a>
            </div>
            <div className="yt-description">
              <p>
                I upload tech review videos, tech tutorials, and explain tech
                concepts on my Youtube channel, Gadgetopia. We're talking the
                bleeding edge of tech from 8K OLED TVs to self-lacing shoes and
                the simple gadgets we use on a daily basis that make our lives
                so much easier. Welcome aboard and let's explore!
              </p>
              <p>
                Join me for quality tech videos by smashing the subscribe button
                below. Don't forget to hit that bell icon for notifications
                whenever fresh content drops.
              </p>
            </div>
            <div className="yt-buttons">
              <a
                href="https://www.youtube.com/channel/UCml6W5F8GW1X5y33AG0DfUw/?sub_confirmation=1"
                className="landing-btn waves-effect waves-light btn-small"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="large material-icons right">plus_one</i>
                subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default YTSection;
