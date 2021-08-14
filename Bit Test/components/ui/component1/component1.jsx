import React from "react";
import { Button } from "@discite-components/components.ui.button";

export function Component1({ text }) {
  return (
    <div>
      {text}
      <Button text={"click me!"} />
    </div>
  );
}
