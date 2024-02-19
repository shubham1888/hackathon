import Category from "@/components/Category";
import Colleges from "@/components/Colleges";
import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-2">
      <div>
        <Colleges />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
}
