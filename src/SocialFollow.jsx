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
      <a href="#"><i class="fab fa-github fa-2x"></i></a>
      <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
      <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
    </div>
  );
}