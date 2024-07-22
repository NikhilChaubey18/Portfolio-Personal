// import { Menu } from "lucide-react";
// import {
//   Sheet,

//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
 
// } from "./ui/sheet";
// import { Separator } from "./ui/separator";


// import MobileNavLinks from "./MobileNavLinks";


// const MobileNav = () => {


//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Menu className="text-sky-500" />
//       </SheetTrigger>
//       <SheetContent className="space-y-3">
//         <SheetTitle>
         
//       <span> Welcome to My Portfolio Page</span>
          
//         </SheetTitle>
//         <Separator />
//         <SheetDescription className="flex flex-col gap-4">
          
//         <MobileNavLinks />
       
       
         
//         </SheetDescription>
//       </SheetContent>
//     </Sheet>



//   );
// };

// export default MobileNav;

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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open:any) => {
    setIsOpen(open);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Menu className="text-sky-500" onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to My Portfolio Page</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <MobileNavLinks onLinkClick={handleLinkClick} />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
