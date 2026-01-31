import React, { useMemo } from "react";
import { Stack, Button, Text, Flex } from "@sanity/ui";
import { set, unset, useFormValue } from "sanity";
import type { StringInputProps } from "sanity";

const DEFAULT_MAX = 200;

function buildExcerptFromText(text: string | undefined, max: number) {
  const plain = (text || "").replace(/\s+/g, " ").trim();
  if (!plain) return "";

  if (plain.length <= max) return plain;

  const sliced = plain.slice(0, max);
  const lastSpace = sliced.lastIndexOf(" ");
  const cut = lastSpace > 60 ? sliced.slice(0, lastSpace) : sliced;

  return cut.trim() + "…";
}

export default function ExcerptInput(props: StringInputProps) {
  const { value, onChange, elementProps, schemaType } = props;

  const description = useFormValue(["bodyText"]) as string | undefined;

  const maxLength =
    ((schemaType.options as any)?.maxLength as number | undefined) ?? DEFAULT_MAX;

  const generated = useMemo(
    () => buildExcerptFromText(description, maxLength),
    [description, maxLength]
  );

  const charCount = (value || "").length;

  return (
    <Stack space={3}>
      <input
        {...elementProps}
        value={value || ""}
        onChange={(e) => onChange(set(e.currentTarget.value))}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 6,
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      />

      <Flex gap={2} align="center" wrap="wrap">
        <Button
          text={value ? "Regenerate from body text" : "Generate from description"}
          mode="ghost"
          onClick={() => {
            if (generated) onChange(set(generated));
          }}
          disabled={!generated}
        />
        <Button
          text="Clear"
          mode="ghost"
          tone="critical"
          onClick={() => onChange(unset())}
          disabled={!value}
        />

        <Text size={1} muted style={{ marginLeft: "auto" }}>
          {charCount}/{maxLength}
        </Text>
      </Flex>

      {!generated ? (
        <Text size={1} muted>
          Add some text in "Body Text" to enable the generate button.
        </Text>
      ) : (
        <Text size={1} muted>
          Generates from "Body Text" (collapsed whitespace, trimmed to{" "}
          {maxLength} chars).
        </Text>
      )}
    </Stack>
  );
}