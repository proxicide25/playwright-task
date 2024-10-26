import { test, expect } from "@playwright/test"

test("API GET Request", async ({ request }) => {

    const response = await request.get('https://api.todoist.com/rest/v2/projects', {
        headers: {
            'Authorization': `Bearer b87fe3ca9f92a4464817705f5228bb7d0e204c62`
        }
    })

    expect(response.status()).toBe(200)
    expect(response).not.toEqual([])


})