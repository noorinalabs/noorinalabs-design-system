# Design System Project Memory

- [DS color utilities are no-ops](project_ds_theme_color_utilities_noop.md) — consumer Tailwind never learns DS `--color-*` (dist=@theme+[data-theme], not :root) → bg-card/text-foreground emit 0 rules; resolve at runtime via [data-theme]. DS#111.
- [DS component utilities are no-ops](project_ds_component_utilities_noop.md) — DS component Tailwind classes live only in dist JS → consumers get 0 CSS; Dialog blew out width until @source inline force-gen. ds#115.
- [DS tokens need data-theme attr](project_ds_tokens_need_data_theme_attr.md) — dist colors live in @theme{} (browser-ignored) + [data-theme] (honored); every var(--color-*) empty unless <html> sets data-theme. ds#104.
