"use client";
import Button from "@/shared/ui/Button";
import { Send } from "lucide-react";
import { Children, cloneElement, isValidElement, useActionState } from "react";
import RGPDInputLabel from "@/shared/components/Form/RGPDInputLabel";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function Form({
  action,
  children,
  className,
}: {
  action: (prevState: any, formData: FormData) => Promise<any>;
  children: React.ReactNode;
  className?: string;
}) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  // Clonning children to pass state and isPending to them
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { state, isPending } as any);
    }
    return child;
  });

  return (
    <form action={formAction} className={`space-y-6 ${className}`}>
      {childrenWithProps}

      <RGPDInputLabel error={state?.errors?.rgpd?.[0]} />

      <Button type="submit" disabled={isPending}>
        <Send size={16} />
        Envoyer le message
      </Button>
    </form>
  );
}
