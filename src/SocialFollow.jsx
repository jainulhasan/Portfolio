import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div className="social-app">
      {/* <a href="#" ><i class="fab fa-twitter fa-2x"></i></a> */}
      <a href="https://github.com/jainulhasan" target="_blank"><i class="fab fa-github fa-2x"></i></a>
      <a href="https://www.linkedin.com/in/jainul-hasan " target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
      <a href="https://www.instagram.com/jainul_hasan_" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
    </div>
  );
}