import { auth } from "@/auth";
import React from "react";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      <p></p>
      {JSON.stringify(session)}
    </div>
  );
}
