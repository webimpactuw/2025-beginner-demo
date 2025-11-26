import Link from "next/link";
import Image from "next/image";
import "./figma.css";

export default function Figma() {
  return (
    <div className="">
      <p className="title">Figma to Code!</p>
      <div className="cherry-blossoms">
        <Image src="/figma/cherry-blossoms.svg"
          alt="cherry blossoms"
          width={550}
          height={425}/>
        <p className="main-text-bold">Best practices for copying Figma wire frames over to code:</p>
        <p className="main-text">Export images as SVGs, get HEX codes, pay attention to the dimensions of images and objects, look at object grouping!</p>
      </div>

      <div className="about">
        <p className="title">About me:</p>
        {/* dubs picture */}
        <div className="about-item">
          <Image src="/figma/dubs.svg"
            alt="dubs"
            width={250}
            height={250}
            className="about-image"/>
          <p className="text">Dubs is the best mascot in the Big 10!</p>
        </div>

        {/* web impact picture */}
        <div className="about-item">
          <Image src="/figma/webimpact-logo.svg"
            alt="web impact"
            width={250}
            height={250}
            className="about-image"/>
          <p className="text">Project Applications opened November 24th, they close on December 7th!</p>
        </div>

        {/* snoopy picture */}
        <div className="about-item">
          <Image src="/figma/Snoopy.svg"
            alt="snoopy"
            width={250}
            height={250}
            className="about-image"/>
          <p className="text">Happy Thanksgiving!</p>
        </div>
      </div>
    </div>
  );
}