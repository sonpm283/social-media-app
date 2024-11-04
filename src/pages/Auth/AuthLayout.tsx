import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-dark-200 px-5 flex h-screen items-center justify-center">
      <div className="w-[450px] bg-white px-8 py-10 shadow-2xl rounded-lg" >
        <img src="" className="mx-auto mb-6" />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
