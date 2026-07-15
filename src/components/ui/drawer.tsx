import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(88vw,360px)] border-l bg-background p-6 shadow-soft data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out">
          <div className="mb-8 flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold">LearnWithJayed</Dialog.Title>
            <Dialog.Close asChild>
              <Button aria-label="Close menu" variant="ghost" size="icon">
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
