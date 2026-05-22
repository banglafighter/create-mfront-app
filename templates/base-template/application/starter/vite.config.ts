import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({mode}) => {
    const envFolder = path.resolve(__dirname, '../env')
    const env = loadEnv(mode, envFolder, '')

    const defineEnv = Object.fromEntries(
        Object.entries(env)
            .filter(([key]) => /^[A-Z0-9_]+$/.test(key))
            .map(([key, value]) => [key, JSON.stringify(value)])
    )

    return {
        base: '/',
        plugins: [
            react(),
            tailwindcss()
        ],

        server: {
            port: Number(env.PORT) || 1212,
            open: true
        },
        resolve: {
            preserveSymlinks: true,
            tsconfigPaths: true,
        },
        build: {
            sourcemap: false,
            cssCodeSplit: true,
            chunkSizeWarningLimit: 1000
        },
        define: defineEnv
    }
})