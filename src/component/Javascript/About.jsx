import React from "react";
import "../CSS/about.css";
import Image1 from "../../assets/gym.jpeg";
import Image2 from "../../assets/img1.jpeg";
import Imglogo1 from "../../assets/fitness1.png";


export default function About() {
  return (
    <div>
      <h2 className="content">Best Fitness Influencer Bio Ideas</h2>

      <p className="paragraph">
        If you’re stuck on what to write in your fitness bio then read this mega
        guide to the best fitness influencer bio ideas. Get fitness bio ideas
        for Instagram, TikTok, YouTube, and Facebook. Mix and match, slice and
        dice, you can write your fitness influencer bio in less time than it
        takes to finish a burpee and hanging leg raises superset.
      </p>
      <div className="text-center">
        <img className="" src={Image1} alt="" />
      </div>
      <h2 className="my-2">A Little Bit About Us…</h2>
      <p className="my-2">
        Looking for specialist health and fitness marketing advice? We have{" "}
        <strong>over 15 years of fitness marketing</strong> experience and have
        worked with global brands across the wellness industry. Our founder
        worked in international fitness marketing roles around the world where
        she developed an in-depth understanding of selling to American,
        European, and Asian markets.
      </p>
      <p className="my-2">
        She led hugely <strong>successful marketing teams</strong> spanning
        digital, web, SEO, social media, content creation, email automation, and
        events. But grew tired of the manipulative tactics used to promote
        health and fitness products, so created a new resource to shake thing
      </p>
      <div className="text-center">
        <img className="" src={Image2} alt="" />
      </div>
      <p className="my-2">
        High-pressure membership sales tactics and fat-shaming people into
        exercise just aren’t our bag. We’re inspired by the new generation of
        indie gym studios, fitness bloggers, and nutrition companies that enable
        EVERYONE to live their best life. If you feel the way we do about health
        and fitness, then check out our blog, templates, and other marketing
        resources.
      </p>
      <h2 className="my-2">Highly Qualified Fitness Marketers</h2>
      <p className="my-2">We develop high-quality content designed for health and fitness companies. Gym studios, equipment manufacturers, and supplement companies choose us because we’re experts in the field. Our content is produced by a fitness marketing specialist with strong industry credentials…</p>
      <div className="my-2 list">
      <div className="text-center ">
        <img className=" " src={Imglogo1} alt="" />
      </div>
        <ul>
          <li>15+ years of marketing experience in the health, fitness, and nutrition industries</li>
          <li>Chartered marketer with degree-level CIM Diploma in Marketing</li>
          <li>Qualified Nutritionist with a Master’s degree in Human Nutrition (MSc)</li>
          <li>Bachelor’s degree in English & Sports Science</li>
          <li>Diploma in Personal Training</li>
        </ul>
      </div>
    </div>
  );
}
