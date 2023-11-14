"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "@/components/toolbar";
import Heading from "@tiptap/extension-heading";

export function TipTap({
  content,
  onChange,
}: {
  content: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "ml-5 list-disc",
          },
        },
        code: {
          HTMLAttributes: {
            class: "bg-gray-100 p-2 rounded-md",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "ml-5 list-decimal",
          },
        },
        heading: {
          HTMLAttributes: {
            class: "text-2xl font-semibold",
            levels: [1],
          },
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[200px] border-input bg-background p-2",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px] gap-2">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
