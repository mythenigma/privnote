// Shared Mermaid initialization for blog posts
// Usage: include mermaid CDN script first, then include this file (defer).
(function () {
  function init() {
    if (!window.mermaid) return;

    // "base" lets us provide themeVariables.
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      themeVariables: {
        // Typography
        fontFamily:
          "system-ui, -apple-system, 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        fontSize: "14px",

        // Canvas
        background: "#ffffff",
        tertiaryColor: "#ffffff",

        // Node styling
        primaryColor: "#eef6ff",
        primaryBorderColor: "#3b82f6",
        primaryTextColor: "#0b1220",
        lineColor: "#334155",

        // Secondary nodes
        secondaryColor: "#ecfdf5",
        secondaryBorderColor: "#10b981",
        secondaryTextColor: "#06281a",

        // Tertiary nodes
        tertiaryBorderColor: "#a855f7",
        tertiaryTextColor: "#1f0b2e",

        // Misc
        noteBkgColor: "#fff7ed",
        noteTextColor: "#451a03",
        noteBorderColor: "#fb923c",
      },
      flowchart: {
        curve: "basis",
        padding: 12,
        nodeSpacing: 40,
        rankSpacing: 46,
      },
    });

    // Render all diagrams on the page.
    // Works for Mermaid v10+.
    window.mermaid.run({ querySelector: ".mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

