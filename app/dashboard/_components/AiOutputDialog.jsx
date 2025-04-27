import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { Button } from '@/components/ui/button';



function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = aiImage; // your base64 string
        link.download = 'ai-generated-image.png'; // filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <AlertDialog open={openDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Result:</AlertDialogTitle>
                    <ReactBeforeSliderComponent
                        firstImage={{ imageUrl: aiImage }}
                        secondImage={{ imageUrl: orgImage }}
                    />
                    <div className="flex justify-center gap-4 mt-4">
                        <Button onClick={handleDownload}>Download</Button>
                        <Button onClick={() => closeDialog(false)}>Close</Button>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
)
}

export default AiOutputDialog