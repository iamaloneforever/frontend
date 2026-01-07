"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";

export default function UserSetting() {
  const [settings, setSettings] = useState([
    { label: "Name", value: "Amir" },
    { label: "Email", value: "amir@example.com" },
    { label: "Phone", value: "+98 912 345 6789" },
    { label: "Password", value: "********", type: "password" },
  ]);

  const [editingField, setEditingField] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingField !== null) {
      const updated = [...settings];
      updated[editingField].value =
        updated[editingField].type === "password" ? "********" : tempValue;
      setSettings(updated);
      setEditingField(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {settings.map((setting, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
        >
          <Label className="font-bold">{setting.label} :</Label>
          <div className="flex items-center gap-2">
            <h1 className="text-gray-900 dark:text-white">{setting.value}</h1>

            {/* Dialog کنترل شده با state */}
            <Dialog
              open={editingField === idx}
              onOpenChange={(open) => {
                if (!open) setEditingField(null);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingField(idx);
                    setTempValue(setting.value);
                  }}
                >
                  <Edit />
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>Edit {setting.label}</DialogTitle>
                    <DialogDescription>
                      Update your {setting.label.toLowerCase()} here.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <Label htmlFor={`field-${idx}`}>{setting.label}</Label>
                    <Input
                      id={`field-${idx}`}
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      type={setting.type || "text"}
                      autoFocus
                    />
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => setEditingField(null)} // پاک کردن state روی Cancel
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Save</Button> {/* حتما type="submit" */}
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
}
