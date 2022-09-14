import { useRouter } from "next/router";
import React from "react";

function ID() {
  const router = useRouter();
  return <div>ID {router.query.id}</div>;
}

export default ID;
