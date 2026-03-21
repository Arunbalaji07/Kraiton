'use client'

import {useEffect, useMemo} from "react";
import { debounce } from "lodash";
import {useTheme} from "next-themes";
import {BlockNoteEditor} from "@blocknote/core"
import {useCreateBlockNote} from "@blocknote/react"
import {BlockNoteView} from "@blocknote/mantine"
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void
    initialContent?: string
    editable?: boolean
}

const Editor = ({onChange, initialContent, editable}: EditorProps) => {
    const { resolvedTheme } = useTheme()
    const { edgestore } = useEdgeStore()

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        })

        return response.url
    }

    const editor: BlockNoteEditor = useCreateBlockNote({
        editable,
        initialContent: initialContent
            ? JSON.parse(initialContent)
            : undefined,
        uploadFile: handleUpload
    });

    const debouncedOnChange = useMemo(() => {
        return debounce((doc) => {
            onChange(JSON.stringify(doc, null, 2));
        }, 1000);
    }, [onChange]);

    useEffect(() => {
        return () => {
            debouncedOnChange.cancel();
        };
    }, [debouncedOnChange]);

    return (
        <div>
            <BlockNoteView
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onChange={() => {
                    debouncedOnChange(editor.document);
                }}
            />
        </div>
    );
};

export default Editor;