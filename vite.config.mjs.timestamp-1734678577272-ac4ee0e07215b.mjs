// vite.config.mjs
import { defineConfig, loadEnv, normalizePath } from "file:///Users/nangongpo/Desktop/%E5%BC%80%E6%BA%90%E5%AD%A6%E4%B9%A0/primevue2/node_modules/vite/dist/node/index.js";
import path from "node:path";
import fs from "node:fs";
import legacy from "file:///Users/nangongpo/Desktop/%E5%BC%80%E6%BA%90%E5%AD%A6%E4%B9%A0/primevue2/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue2 from "file:///Users/nangongpo/Desktop/%E5%BC%80%E6%BA%90%E5%AD%A6%E4%B9%A0/primevue2/node_modules/@vitejs/plugin-vue2/dist/index.mjs";
import vue2Jsx from "file:///Users/nangongpo/Desktop/%E5%BC%80%E6%BA%90%E5%AD%A6%E4%B9%A0/primevue2/node_modules/@vitejs/plugin-vue2-jsx/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/nangongpo/Desktop/\u5F00\u6E90\u5B66\u4E60/primevue2";
function resolve(dir) {
  return path.join(__vite_injected_original_dirname, dir);
}
var alias = {
  "@": resolve("src"),
  "lib": resolve("lib")
};
var componentDir = normalizePath("src/components");
fs.readdirSync(componentDir, { withFileTypes: true }).filter((dir) => dir.isDirectory()).forEach(({ name: folderName }) => {
  if (folderName === "icons") {
    fs.readdirSync(path.join(componentDir, folderName)).forEach((file) => {
      console.log(file);
      alias[path.join("primevue2", folderName, file)] = resolve(path.join(componentDir, folderName, file, "index.vue"));
    });
  } else {
    fs.readdirSync(path.join(componentDir, folderName)).forEach((file) => {
      let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
      if (name === "primevue" || name === folderName) {
        alias[path.join("primevue2", folderName)] = resolve(path.join(componentDir, folderName, file));
      }
    });
  }
});
console.log(alias);
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_URL,
    define: {
      "process.env": JSON.stringify(process.env)
    },
    resolve: {
      alias
    },
    plugins: [
      legacy({
        modernPolyfills: true
      }),
      vue2(),
      vue2Jsx()
    ],
    server: {
      // 监听所有地址
      host: "0.0.0.0",
      // 端口号
      port: Number(env.VITE_PORT),
      // 是否开启 https
      https: false,
      // 服务启动时是否自动打开浏览器
      open: true,
      cors: false,
      proxy: {
        "/primevue2/data/customers": "https://www.primefaces.org/data/customers"
      }
    },
    build: {
      outDir: env.VITE_OUTDIR,
      assetsDir: env.VITE_ASSETS_DIR,
      // 设置最终构建的浏览器兼容目标
      // target: 'es2015', // 以package.json中browserslist为准
      // 构建后是否生成 source map 文件
      sourcemap: true,
      //  chunk 大小警告的限制（以 kbs 为单位）
      // chunkSizeWarningLimit: 1024,
      // 启用/禁用 gzip 压缩大小报告
      // reportCompressedSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash:8].js",
          entryFileNames: "js/[name]-[hash:8].js",
          assetFileNames: "[ext]/[name]-[hash:8].[ext]",
          manualChunks: (id) => {
            if (id.includes("src/plugins/components")) {
              return "primevue.global";
            }
            if (id.includes("@fullcalendar")) {
              return "app.fullcalendar";
            }
            if (id.includes("node_modules")) {
              const pkgName = id.split("node_modules/")[1].split("/")[0].toString();
              if (["vue", "vue-router", "vuex", "axios", "crypto-js", "nprogress", "screenfull", "path-browserify", "vee-validate"].includes(pkgName)) {
                return "app.core";
              }
              return pkgName;
            }
            if (id.includes("src/components") || id.includes("src/utils")) {
              return "app.component";
            }
            if (id.includes("mock") || id.includes("vite-plugin-fake-server")) {
              return "app.mock.server";
            }
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL25hbmdvbmdwby9EZXNrdG9wL1x1NUYwMFx1NkU5MFx1NUI2Nlx1NEU2MC9wcmltZXZ1ZTJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uYW5nb25ncG8vRGVza3RvcC9cdTVGMDBcdTZFOTBcdTVCNjZcdTRFNjAvcHJpbWV2dWUyL3ZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmFuZ29uZ3BvL0Rlc2t0b3AvJUU1JUJDJTgwJUU2JUJBJTkwJUU1JUFEJUE2JUU0JUI5JUEwL3ByaW1ldnVlMi92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYsIG5vcm1hbGl6ZVBhdGggfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5cbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IHZ1ZTIgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlMidcbmltcG9ydCB2dWUySnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZTItanN4J1xuXG5mdW5jdGlvbiByZXNvbHZlKGRpcikge1xuICByZXR1cm4gcGF0aC5qb2luKF9fZGlybmFtZSwgZGlyKVxufVxuXG5jb25zdCBhbGlhcyA9IHtcbiAgJ0AnOiByZXNvbHZlKCdzcmMnKSxcbiAgJ2xpYic6IHJlc29sdmUoJ2xpYicpXG59XG5cbi8vIHNyYy9jb21wb25lbnRzXHU0RTJEXHU0RjdGXHU3NTI4XHU0RTg2ICdwcmltZXZ1ZTIveHgnXHVGRjBDXHU5NzAwXHU4OTgxXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXG5jb25zdCBjb21wb25lbnREaXIgPSBub3JtYWxpemVQYXRoKCdzcmMvY29tcG9uZW50cycpXG5mcy5yZWFkZGlyU3luYyhjb21wb25lbnREaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAuZmlsdGVyKChkaXIpID0+IGRpci5pc0RpcmVjdG9yeSgpKVxuICAuZm9yRWFjaCgoeyBuYW1lOiBmb2xkZXJOYW1lIH0pID0+IHtcbiAgICBpZiAoZm9sZGVyTmFtZSA9PT0gJ2ljb25zJykge1xuICAgICAgZnMucmVhZGRpclN5bmMocGF0aC5qb2luKGNvbXBvbmVudERpciwgZm9sZGVyTmFtZSkpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSlcbiAgICAgICAgLy8gcHJpbWV2dWUyL2ljb25zL3NwaW5uZXJcbiAgICAgICAgYWxpYXNbcGF0aC5qb2luKCdwcmltZXZ1ZTInLCBmb2xkZXJOYW1lLCBmaWxlKV0gPSByZXNvbHZlKHBhdGguam9pbihjb21wb25lbnREaXIsIGZvbGRlck5hbWUsIGZpbGUsICdpbmRleC52dWUnKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihjb21wb25lbnREaXIsIGZvbGRlck5hbWUpKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZmlsZS5zcGxpdCgvKC52dWUpJHwoLmpzKSQvKVswXS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdwcmltZXZ1ZScgfHwgbmFtZSA9PT0gZm9sZGVyTmFtZSkge1xuICAgICAgICAgIGFsaWFzW3BhdGguam9pbigncHJpbWV2dWUyJywgZm9sZGVyTmFtZSldID0gcmVzb2x2ZShwYXRoLmpvaW4oY29tcG9uZW50RGlyLCBmb2xkZXJOYW1lLCBmaWxlKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbmNvbnNvbGUubG9nKGFsaWFzKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIC8vIFx1NjgzOVx1NjM2RVx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVx1NEUyRFx1NzY4NCBgbW9kZWAgXHU1MkEwXHU4RjdEIC5lbnYgXHU2NTg3XHU0RUY2XG4gIC8vIFx1OEJCRVx1N0Y2RVx1N0IyQ1x1NEUwOVx1NEUyQVx1NTNDMlx1NjU3MFx1NEUzQSAnJyBcdTY3NjVcdTUyQTBcdThGN0RcdTYyNDBcdTY3MDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdUZGMENcdTgwMENcdTRFMERcdTdCQTFcdTY2MkZcdTU0MjZcdTY3MDkgYFZJVEVfYCBcdTUyNERcdTdGMDBcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxuICByZXR1cm4ge1xuICAgIGJhc2U6IGVudi5WSVRFX0JBU0VfVVJMLFxuICAgIGRlZmluZToge1xuICAgICAgJ3Byb2Nlc3MuZW52JzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYpLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IGFsaWFzXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBsZWdhY3koe1xuICAgICAgICBtb2Rlcm5Qb2x5ZmlsbHM6IHRydWVcbiAgICAgIH0pLFxuICAgICAgdnVlMigpLFxuICAgICAgdnVlMkpzeCgpXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjI0MFx1NjcwOVx1NTczMFx1NTc0MFxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgLy8gXHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgICBwb3J0OiBOdW1iZXIoZW52LlZJVEVfUE9SVCksXG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkYgaHR0cHNcbiAgICAgIGh0dHBzOiBmYWxzZSxcbiAgICAgIC8vIFx1NjcwRFx1NTJBMVx1NTQyRlx1NTJBOFx1NjVGNlx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGNvcnM6IGZhbHNlLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9wcmltZXZ1ZTIvZGF0YS9jdXN0b21lcnMnOiAnaHR0cHM6Ly93d3cucHJpbWVmYWNlcy5vcmcvZGF0YS9jdXN0b21lcnMnXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBlbnYuVklURV9PVVRESVIsXG4gICAgICBhc3NldHNEaXI6IGVudi5WSVRFX0FTU0VUU19ESVIsXG4gICAgICAvLyBcdThCQkVcdTdGNkVcdTY3MDBcdTdFQzhcdTY3ODRcdTVFRkFcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTUxN0NcdTVCQjlcdTc2RUVcdTY4MDdcbiAgICAgIC8vIHRhcmdldDogJ2VzMjAxNScsIC8vIFx1NEVFNXBhY2thZ2UuanNvblx1NEUyRGJyb3dzZXJzbGlzdFx1NEUzQVx1NTFDNlxuICAgICAgLy8gXHU2Nzg0XHU1RUZBXHU1NDBFXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwIHNvdXJjZSBtYXAgXHU2NTg3XHU0RUY2XG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAvLyAgY2h1bmsgXHU1OTI3XHU1QzBGXHU4QjY2XHU1NDRBXHU3Njg0XHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IGticyBcdTRFM0FcdTUzNTVcdTRGNERcdUZGMDlcbiAgICAgIC8vIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAyNCxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjggZ3ppcCBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICAgIC8vIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2g6OF0uanMnLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoOjhdLmpzJyxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS1baGFzaDo4XS5bZXh0XScsXG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL3BsdWdpbnMvY29tcG9uZW50cycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAncHJpbWV2dWUuZ2xvYmFsJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ0BmdWxsY2FsZW5kYXInKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ2FwcC5mdWxsY2FsZW5kYXInXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGtnTmFtZSA9IGlkLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpXG5cbiAgICAgICAgICAgICAgaWYgKFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAndnVleCcsICdheGlvcycsICdjcnlwdG8tanMnLCAnbnByb2dyZXNzJywgJ3NjcmVlbmZ1bGwnLCAncGF0aC1icm93c2VyaWZ5JywgJ3ZlZS12YWxpZGF0ZSddLmluY2x1ZGVzKHBrZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhcHAuY29yZSdcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBwa2dOYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2NvbXBvbmVudHMnKSB8fCBpZC5pbmNsdWRlcygnc3JjL3V0aWxzJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdhcHAuY29tcG9uZW50J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ21vY2snKSB8fCBpZC5pbmNsdWRlcygndml0ZS1wbHVnaW4tZmFrZS1zZXJ2ZXInKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ2FwcC5tb2NrLnNlcnZlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VSxTQUFTLGNBQWMsU0FBUyxxQkFBcUI7QUFDOVgsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUVmLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFDakIsT0FBTyxhQUFhO0FBTnBCLElBQU0sbUNBQW1DO0FBUXpDLFNBQVMsUUFBUSxLQUFLO0FBQ3BCLFNBQU8sS0FBSyxLQUFLLGtDQUFXLEdBQUc7QUFDakM7QUFFQSxJQUFNLFFBQVE7QUFBQSxFQUNaLEtBQUssUUFBUSxLQUFLO0FBQUEsRUFDbEIsT0FBTyxRQUFRLEtBQUs7QUFDdEI7QUFHQSxJQUFNLGVBQWUsY0FBYyxnQkFBZ0I7QUFDbkQsR0FBRyxZQUFZLGNBQWMsRUFBRSxlQUFlLEtBQUssQ0FBQyxFQUNqRCxPQUFPLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxFQUNqQyxRQUFRLENBQUMsRUFBRSxNQUFNLFdBQVcsTUFBTTtBQUNqQyxNQUFJLGVBQWUsU0FBUztBQUMxQixPQUFHLFlBQVksS0FBSyxLQUFLLGNBQWMsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDcEUsY0FBUSxJQUFJLElBQUk7QUFFaEIsWUFBTSxLQUFLLEtBQUssYUFBYSxZQUFZLElBQUksQ0FBQyxJQUFJLFFBQVEsS0FBSyxLQUFLLGNBQWMsWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUFBLElBQ2xILENBQUM7QUFBQSxFQUNILE9BQU87QUFDTCxPQUFHLFlBQVksS0FBSyxLQUFLLGNBQWMsVUFBVSxDQUFDLEVBQUUsUUFB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
