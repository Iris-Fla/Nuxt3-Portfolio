
// server/api/blog/[slug].ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const slug = event.context.params?.slug

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing slug parameter',
    })
  }

  try {
    const response = await $fetch(`/blog/${slug}?fm=webp?width=200`, {
      baseURL: config.public.baseURL,
      headers: {
        "X-MICROCMS-API-KEY": config.apiKey,
      },
    })

    return response
  } catch (error) {
    console.error('Error fetching article:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching article',
    })
  }
})