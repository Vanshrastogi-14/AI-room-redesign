"use client"
import React, { useContext, useState } from 'react'
import ImageSelection from './_component/ImageSelection'
import RoomType from './_component/RoomType'
import DesignType from './_component/DesignType'
import AdditionalReq from './_component/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_component/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { db } from '@/config/db'
import { Users } from '@/config/schema'
import { eq } from 'drizzle-orm';
import { LowCreditsDialog } from './_component/LowCreditsDialog'





function CreateNew() {

  const {user} = useUser();
  const [formData,setFormData]=useState([]);
  const [rawImageUrl, setRawImageUrl] = useState('');
  const [loading,setLoading] = useState(false);
  const [aiOutputImage,setAiOutputImage] = useState();
  const {userDetail,setUserDetail} = useContext(UserDetailContext);
  // const [outputResult,setOutputResult] = useState();
  const [openLowCreditsDialog, setOpenLowCreditsDialog] = useState(false);
  const [openOutputDialog,setOpenOutputDialog] = useState(false);
  const onHandleInputChange = (value, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    console.log(formData);
  }

  const GenerateAiImage = async () => {
    const updated = await updateUserCredits();
  
    if (!updated) {
      // No credits, low credits dialog will open, and stop
      return;
    }
  
    setLoading(true);
  
    try {
      const result = await axios.post('/api/redesign-room', {
        imageURL: rawImageUrl,
        roomType: formData?.roomType,
        designType: formData?.designType,
        additionalReq: formData?.additionalReq,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });
  
      console.log(result.data);
      setAiOutputImage(result.data.result);
      setOpenOutputDialog(true);
  
    } catch (error) {
      console.error('Error generating AI image:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserCredits = async () => {
    if (!userDetail) return null;

    if (userDetail.credits <= 0) {
      setOpenLowCreditsDialog(true);
      return null;
    }

    const result = await db.update(Users)
      .set({ credits: userDetail.credits - 1 })
      .where(eq(Users.id, userDetail.id))
      .returning({ id: Users.id });

    if (result) {
      setUserDetail(prev => ({
        ...prev,
        credits: prev.credits - 1,
      }));

      return result[0].id;
    }
  };
  


   return (
    <div>
      <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
      <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} onUploadComplete={(url) => setRawImageUrl(url)} />
        <div>
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />
          <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />
          <LowCreditsDialog open={openLowCreditsDialog} setOpen={setOpenLowCreditsDialog} />
          <Button className="w-full mt-5" onClick={GenerateAiImage}>Generate</Button>
          <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will be used to redesign your room.</p>
        </div>
      </div>
      <CustomLoading loading={loading}/>
      <AiOutputDialog openDialog={openOutputDialog} 
      closeDialog={()=>setOpenOutputDialog(false)}
      orgImage={rawImageUrl}
      aiImage={aiOutputImage}/>
    </div>
  )
}

export default CreateNew

