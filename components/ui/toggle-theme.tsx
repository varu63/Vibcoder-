// "use client";

// import { useTheme } from "next-themes";
// import { useSyncExternalStore } from "react";
// import { PiSunDuotone } from "react-icons/pi";
// import { FaRegMoon } from "react-icons/fa";

// const subscribe = () => () => {};

// export function ThemeToggle() {
//   const { setTheme, theme } = useTheme();
//   const mounted = useSyncExternalStore(
//     subscribe,
//     () => true,
//     () => false
//   );

//   if (!mounted) return null;

//   return (
//     <div
//       className="cursor-pointer"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//     >
//       {theme === "light" ? (
//         <FaRegMoon size={20} className="  h-5 w-5 text-black" />
//       ) : (
//         <PiSunDuotone size={20} className="h-5 w-5 text-white" color="white" />
//       )}
//     </div>
//   );
// }
"use client";

import { useTheme } from "next-themes";
import { useEffect , useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";


export function ThemeToggle(){
    const {setTheme , theme} = useTheme();
    const [mounted , setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    } , []);

    if(!mounted){
        return null;
    }

    return (
        <div 
        className="cursor-pointer"
        onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light");
        }}
        >
            {
                theme === "light" ? (<Moon className="h-5 w-5 text-black"/>) : (<Sun className="h-5 w-5 text-white" color="white"/>)
            }
        </div>
    )
}