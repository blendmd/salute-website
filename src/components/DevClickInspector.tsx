"use client";

import { useCallback, useEffect, useState } from "react";

type PickResult = {
  source: string;
  label: string | null;
};

export function DevClickInspector() {
  const [active, setActive] = useState(false);
  const [picked, setPicked] = useState<PickResult | null>(null);

  const close = useCallback(() => setPicked(null), []);

  useEffect(() => {
    if (!active) return;

    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("[data-dev-inspector-root]")) return;

      e.preventDefault();
      e.stopPropagation();

      const el = t.closest("[data-dev-source]") as HTMLElement | null;
      if (!el) {
        setPicked({
          source: "(近くに data-dev-source がありません)",
          label: null,
        });
        return;
      }

      setPicked({
        source: el.getAttribute("data-dev-source") ?? "",
        label: el.getAttribute("data-dev-label"),
      });
      setActive(false);
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [active]);

  useEffect(() => {
    document.body.style.cursor = active ? "crosshair" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [active]);

  const instruction = picked
    ? `「${picked.label ?? "このブロック"}」を編集したいです。対象ファイル: ${picked.source}`
    : "";

  const copy = async () => {
    if (!instruction) return;
    try {
      await navigator.clipboard.writeText(instruction);
    } catch {
      /* ignore */
    }
  };

  return (
    <div data-dev-inspector-root className="pointer-events-none fixed inset-0 z-[9999]">
      <div className="pointer-events-auto fixed right-4 bottom-4 z-[10000] flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={() => {
            setActive((v) => !v);
            setPicked(null);
          }}
          className={`rounded-full px-4 py-2 text-xs font-semibold shadow-lg transition-opacity ${
            active
              ? "bg-amber-500 text-white ring-2 ring-amber-300"
              : "bg-slate-800/90 text-white hover:bg-slate-700"
          }`}
        >
          {active ? "選択モードを終了" : "クリックで編集箇所を指示"}
        </button>
        {active && (
          <p className="max-w-[240px] rounded-lg bg-slate-900/95 px-3 py-2 text-[11px] leading-snug text-white shadow-lg">
            ページ上のブロックをクリックすると、対応するソースファイル名が表示されます（開発時のみ）。
          </p>
        )}
      </div>

      {picked && (
        <div
          className="pointer-events-auto fixed inset-0 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-xl border border-border bg-white p-6 shadow-2xl">
            <p className="font-heading text-sm font-bold text-text-main">
              チャットに貼る用の指示文
            </p>
            {picked.label && (
              <p className="mt-2 text-xs text-text-sub">ブロック: {picked.label}</p>
            )}
            <p className="mt-3 rounded-lg bg-muted px-3 py-3 text-sm leading-relaxed text-text-main">
              {instruction}
            </p>
            <p className="mt-2 text-xs text-text-sub">
              ファイル: {picked.source}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copy}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
              >
                指示文をコピー
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-main hover:bg-muted"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
