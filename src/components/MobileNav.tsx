import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  // State variable to control whether the Sheet is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle changes in the open state of the Sheet
  const handleOpenChange = (open: any) => {
    setIsOpen(open);
  };

  // Function to handle link clicks and close the Sheet
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    // Sheet component that opens and closes based on isOpen state
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      {/* Trigger to open the Sheet */}
      <SheetTrigger asChild>
        {/* Menu icon that opens the Sheet when clicked */}
        <Menu className="text-sky-500" onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      {/* Content of the Sheet */}
      <SheetContent className="space-y-3">
        {/* Title of the Sheet */}
        <SheetTitle>
          <span>Welcome to My Portfolio Page</span>
        </SheetTitle>
        {/* Separator line */}
        <Separator />
        {/* Description and navigation links */}
        <SheetDescription className="flex flex-col gap-4">
          {/* MobileNavLinks component with a function to close the Sheet when a link is clicked */}
          <MobileNavLinks onLinkClick={handleLinkClick} />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

