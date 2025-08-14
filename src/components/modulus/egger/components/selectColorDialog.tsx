import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SelectColorDialogProps {
  onColorSelect: (color: string) => void;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SelectColorDialog: React.FC<SelectColorDialogProps> = ({
  onColorSelect,
  trigger,
  open,
  onOpenChange,
}) => {
  const [customColor, setCustomColor] = useState("#000000");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const predefinedColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
  ];

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  const handleCustomColorSubmit = () => {
    if (customColor) {
      handleSelectColor(customColor);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Select Color</Button>}
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
              {predefinedColors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleSelectColor(color)}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Custom Color Input */}
          <div className="space-y-2">
            <Label htmlFor="custom-color" className="text-sm font-medium">
              Custom Color
            </Label>
            <div className="flex gap-2">
              <Input
                id="custom-color"
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-16 h-10 p-1"
              />
              <Input
                type="text"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                placeholder="#000000"
                className="flex-1"
              />
              <Button onClick={handleCustomColorSubmit} size="sm">
                Apply
              </Button>
            </div>
          </div>

          {/* Selected Color Display */}
          {selectedColor && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Selected Color</Label>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded border border-gray-300"
                  style={{ backgroundColor: selectedColor }}
                />
                <Badge variant="secondary" className="font-mono">
                  {selectedColor}
                </Badge>
              </div>
            </div>
          )}
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
