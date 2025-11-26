"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div
      className={`h-full flex flex-col items-center justify-center space-y-4`}
    >
      <Image
        src="/doodle.png"
        alt="empty"
        height="450"
        width="450"
        className="dark:hidden"
      />
      <Image
        src="/doodle-dark.png"
        alt="empty"
        height="450"
        width="450"
        className="hidden dark:block"
      />
      <h2 className={`text-lg font-medium`}>
        Welcome to {user?.firstName}&apos;s Kraiton
      </h2>
      <Button>
        <PlusCircle className={`h-4 w-4 mr-2`} />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
