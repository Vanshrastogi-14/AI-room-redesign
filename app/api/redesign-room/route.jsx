import { NextResponse } from "next/server";
import Replicate from "replicate";
import { writeFile } from "node:fs/promises";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { AiGeneratedImage } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/config/db";


const replicate = new Replicate({
    auth:process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req){
 
    const {imageURL,roomType,designType,additionalReq,userEmail} = await req.json();

    try{
        const input = {
            image: imageURL,
            prompt: "A "+roomType+" with a "+designType+" style interior "+additionalReq
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        console.log("Replicate Output:",output);
    
        // return NextResponse.json({result:output})

        // const output = "https://replicate.delivery/xezq/Qm8XUBjzAupKDdZjCkDj2iWRf8izc0DuR8yVNKJn1l4xxSTKA/out.png"
        
        const base64Image = await ConvertImageToBase64(output);

        const fileName = Date.now()+'.png';
        const storageRef = ref(storage,'room-redesign/'+fileName);
        await uploadString(storageRef,base64Image,'data_url');
        
        const downloadUrl = await getDownloadURL(storageRef);
        console.log('Downloaded url:',downloadUrl);
        
        const dbResult = await db.insert(AiGeneratedImage).values({
            roomType:roomType,
            designType:designType,
            orgImage:imageURL,
            aiImage:downloadUrl,
            userEmail:userEmail,
        }).returning({id:AiGeneratedImage.id});
        console.log(dbResult);
        return NextResponse.json({'result':downloadUrl});


    }catch(e){
        console.log(e);
        return NextResponse.json({error:e});
    }
}
 
async function ConvertImageToBase64(imageURL) {
    const resp =  await axios.get(imageURL,{responseType:'arraybuffer'});
    const base64ImageRaw = Buffer.from(resp.data,'binary').toString('base64');

    return `data:image/png;base64,${base64ImageRaw}`;
}

