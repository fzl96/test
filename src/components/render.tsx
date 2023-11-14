"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Renderer({ content }: { content: string }) {
  const editor = useEditor({
    editable: false,
    content,
    extensions: [StarterKit],
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor">
      <EditorContent editor={editor} />
    </div>
  );
}
