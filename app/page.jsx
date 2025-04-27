import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import HomeHeader from "./dashboard/_components/HomeHeader";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp,faBars,faCloudArrowDown,faEnvelope } from '@fortawesome/free-solid-svg-icons'; 


export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex justify-center items-center mt-36">
        <div className="text-center">
          <h1 className="font-bold text-5xl mb-2">AI Room and Home</h1>
          <h1 className="font-bold text-5xl mb-3 text-primary">Interior Design</h1>
          <p className="text-slate-500 mb-8">Transform Your Space with AI: Effortless Room & Home Interior Design at Your Fingertips!</p>
          <Link href={'/dashboard'}>
            <Button className="p-5 mb-8">Get Started  &nbsp;&nbsp;&nbsp;&gt;</Button>
          </Link>
          <div className="flex justify-center items-center mt-8">
            <Image src={'/emptyroom.jpg'} alt='logo_img' width={450} height={450} className="mr-4" />
            <Image src={'/arrowimg.png'} alt='logo_img' width={100} height={100} />
            <Image src={'/aiimage.png'} alt='logo_img' width={450} height={450} className="ml-4" />
          </div>
          <div className="flex justify-around items-center mt-10 mb-24">
            <div className=" p-16 text-left hover:scale-105 cursor-pointer">
              <FontAwesomeIcon icon={faCloudArrowUp} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Upload</h2>
              <p className="text-slate-500">Upload Your Room Picture</p>
            </div>
            <div className=" p-16 text-left hover:scale-105 cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Select Design</h2>
              <p className="text-slate-500">Select Design and Room Type</p>
            </div>
            <div className=" p-16 text-left mt-2 hover:scale-105 cursor-pointer">
              <FontAwesomeIcon icon={faCloudArrowDown} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Ready to Download</h2>
              <p className="text-slate-500">Your Room/Home Interior Design <br /> is Ready</p>
            </div>
            <div className=" p-16 text-left hover:scale-105 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">24/7 Support</h2>
              <p className="text-slate-500">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
