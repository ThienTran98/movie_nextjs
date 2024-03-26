import Loading from "@/Component/Loading/Loading";
import HomePage from "@/Layouts/HomePage/HomePage";
import { Fragment, Suspense } from "react";

export default function Page() {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </Fragment>
  );
}
