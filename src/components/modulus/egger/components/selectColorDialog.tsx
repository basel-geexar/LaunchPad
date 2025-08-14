import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SelectColorDialogProps {
  onColorSelect: (color: { code: string; image: string }) => void;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  colors: { code: string; image: string }[];
}

const SelectColorDialog: React.FC<SelectColorDialogProps> = ({
  onColorSelect,
  colors,
  open,
  onOpenChange,
}) => {
  const handleSelectColor = (color: { code: string; image: string }) => {
    onColorSelect(color);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger
        asChild
        className="!hidden group-hover:!flex transition-all duration-100 absolute top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <Button className=" border border-white !w-8 !h-8 bg-transparent !min-w-8 !min-h-8 hover:bg-transparent hover:border-2 transition-all duration-100 hover:border-white hover:text-black rounded-full  flex items-center justify-center !p-0 *:hover:border-2">
          <div className="border border-white !w-4 !h-4 rounded-full block !size-4 bg-transparent " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select a Color</DialogTitle>
          <DialogDescription>
            Choose from predefined colors or enter a custom hex color value.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Predefined Colors */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Predefined Colors</Label>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <button
                  key={color.code}
                  onClick={() => handleSelectColor(color)}
                  className="size-12 rounded-md  cursor-pointer"
                  style={{ backgroundColor: color.code }}
                  title={color.code}
                />
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange?.(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SelectColorDialog;
