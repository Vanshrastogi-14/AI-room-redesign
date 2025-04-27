"use client";

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function LowCreditsDialog({ open, setOpen }) {
  const router = useRouter();

  const handleRedirect = useCallback(() => {
    setOpen(false);
    router.push("/dashboard/buy-credits");
  }, [router, setOpen]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Out of Credits</AlertDialogTitle>
          <AlertDialogDescription>
            You don't have any credits left. Please buy more credits to continue generating images.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleRedirect}>
            Buy More Credits
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
