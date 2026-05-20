#!/usr/bin/env node

import fs from "fs-extra";
import path from "node:path";
import prompts from "prompts";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const projectName =
        process.argv[2] ||
        (
            await prompts({
                type: "text",
                name: "name",
                message: "Project name:"
            })
        ).name;

    if (!projectName) process.exit(1);

    const targetDir = path.resolve(projectName);
    const templateDir = path.resolve(
        __dirname,
        "../../templates/base-template"
    );

    if (await fs.pathExists(targetDir)) {
        console.log("Folder already exists");
        process.exit(1);
    }

    await fs.copy(templateDir, targetDir);

    // replace package name
    const pkgPath = path.join(targetDir, "package.json");
    const pkg = await fs.readJson(pkgPath);

    pkg.name = projectName;

    await fs.writeJson(pkgPath, pkg, {spaces: 2});

    console.log(`Created ${projectName}`);
    console.log(`cd ${projectName}`);
    console.log(`pnpm install`);
    console.log(`pnpm start`);
}

main();