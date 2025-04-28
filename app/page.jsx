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
          <h1 className="font-bold  text-4xl md:text-5xl lg:text-5xl mb-2">AI Room and Home</h1>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl mb-3 text-primary">Interior Design</h1>
          <p className="text-slate-500 mb-8 hidden md:block lg:block">Transform Your Space with AI: Effortless Room & Home Interior Design at Your Fingertips!</p>
          <p className="text-slate-500 mb-8 md:hidden lg:hidden">Transform Your Space with AI: <br /> Effortless Room & Home Interior Design at Your Fingertips!</p>
          <Link href={'/dashboard'}>
            <Button className="p-5 mb-8">Get Started  &nbsp;&nbsp;&nbsp;&gt;</Button>
          </Link>
          <div className="flex justify-center items-center mt-8">
            <Image src={'/emptyroom.jpg'} alt='logo_img' width={450} height={450} className="mr-4 hidden md:block lg:block" />
            <Image src={'/arrowimg.png'} alt='logo_img' width={100} height={100} className="hidden md:block lg:block"/>
            <Image src={'/aiimage.png'} alt='logo_img' width={450} height={450} className="ml-4 hidden md:block lg:block" />
            <Image src={'/emptyroom.jpg'} alt='logo_img' width={180} height={180} className="mr-1  md:hidden lg:hidden" />
            <Image src={'/arrowimg.png'} alt='logo_img' width={30} height={30} className=" md:hidden lg:hidden"/>
            <Image src={'/aiimage.png'} alt='logo_img' width={180} height={180} className="ml-1  md:hidden lg:hidden" />
          </div>
          <div className="flex justify-around items-center mt-10 mb-24 flex-wrap">
            <div className=" p-16 text-left hover:scale-105 cursor-pointer hidden md:block lg:block">
              <FontAwesomeIcon icon={faCloudArrowUp} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Upload</h2>
              <p className="text-slate-500">Upload Your Room Picture</p>
            </div>
            <div className=" p-16 text-left hover:scale-105 cursor-pointer hidden md:block lg:block">
              <FontAwesomeIcon icon={faBars} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Select Design</h2>
              <p className="text-slate-500">Select Design and Room Type</p>
            </div>
            <div className=" p-16 text-left mt-2 hover:scale-105 cursor-pointer hidden md:block lg:block">
              <FontAwesomeIcon icon={faCloudArrowDown} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">Ready to Download</h2>
              <p className="text-slate-500">Your Room/Home Interior Design <br /> is Ready</p>
            </div>
            <div className=" p-16 text-left hover:scale-105 cursor-pointer hidden md:block lg:block">
              <FontAwesomeIcon icon={faEnvelope} className="h-8 mb-1"/>
              <h2 className="font-bold text-lg">24/7 Support</h2>
              <p className="text-slate-500">Contact Us</p>
            </div>

            <div className=" p-16 hover:scale-105 cursor-pointer  md:hidden lg:hidden w-full">
              <FontAwesomeIcon icon={faCloudArrowUp} className="h-8 "/>
              <h2 className="font-bold text-lg">Upload</h2>
              <p className="text-slate-500">Upload Your Room Picture</p>
            </div>
            <div className=" p-16  hover:scale-105 cursor-pointer  md:hidden lg:hidden w-full">
              <FontAwesomeIcon icon={faBars} className="h-8 "/>
              <h2 className="font-bold text-lg">Select Design</h2>
              <p className="text-slate-500">Select Design and Room Type</p>
            </div>
            <div className=" p-16  mt-2 hover:scale-105 cursor-pointer  md:hidden lg:hidden w-full">
              <FontAwesomeIcon icon={faCloudArrowDown} className="h-8 "/>
              <h2 className="font-bold text-lg">Ready to Download</h2>
              <p className="text-slate-500">Your Room/Home Interior Design <br /> is Ready</p>
            </div>
            <div className=" p-16  hover:scale-105 cursor-pointer  md:hidden lg:hidden w-full">
              <FontAwesomeIcon icon={faEnvelope} className="h-8 "/>
              <h2 className="font-bold text-lg">24/7 Support</h2>
              <p className="text-slate-500">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
