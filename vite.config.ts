import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // Enable readable output when mode is 'readable' or READABLE_BUILD env var is set
  const isReadable =
    mode === "readable" || process.env.READABLE_BUILD === "true";

  return {
    plugins: [tailwindcss(), sveltekit()],
    build: {
      // Disable minification for readable builds
      minify: isReadable ? false : "esbuild",
      cssMinify: isReadable ? false : true,

      // Always generate source maps for debugging
      sourcemap: true,

      // Readable build configuration
      ...(isReadable && {
        rollupOptions: {
          output: {
            // Use readable file names instead of hashes
            entryFileNames: "entry/[name].js",
            chunkFileNames: "chunks/[name].js",
            assetFileNames: "assets/[name].[ext]",

            // Pretty formatting
            compact: false,

            // Preserve code structure
            generatedCode: {
              arrowFunctions: true,
              constBindings: true,
              objectShorthand: true,
              preset: "es2015",
            },

            // Add indentation
            indent: true,
          },
        },

        // Target modern browsers for cleaner output
        target: "esnext",
      }),
    },
  };
});
