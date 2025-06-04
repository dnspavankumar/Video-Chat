"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import { X } from "lucide-react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="flex w-full max-w-[520px] flex-col gap-6 px-6 py-9 text-white shadow-2xl [&>button]:hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #374151 50%, #000000 100%)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.2)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
        >
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="checked" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px] bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={cn(
              "bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 hover:from-red-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-0 border-0",
              buttonClassName
            )}
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
