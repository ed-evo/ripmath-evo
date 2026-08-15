import { getAllHtmlPaths } from "../config.ts";

const systemPrompt = `
`

async function main() {
    for await (const entry of getAllHtmlPaths()) {
        console.log(entry)
    }
}

main().catch(err => console.error(err))